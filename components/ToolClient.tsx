"use client";

import { useMemo, useState } from "react";
import type { Tool } from "@/data/tools";
import { PDFDocument } from "pdf-lib";
import QRCode from "qrcode";

function download(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not read image."));
    };
    img.src = url;
  });
}

function parsePages(value: string, total: number): number[] {
  const pages = new Set<number>();
  for (const part of value.split(",")) {
    const range = part.trim().split("-");
    const start = Number(range[0]);
    const end = range.length > 1 ? Number(range[1]) : start;
    if (!Number.isInteger(start) || !Number.isInteger(end) ||
        start < 1 || end < start || end > total) {
      throw new Error(`Invalid page range. PDF has ${total} pages.`);
    }
    for (let n = start; n <= end; n++) pages.add(n - 1);
  }
  return [...pages].sort((a, b) => a - b);
}

export default function ToolClient({ tool }: { tool: Tool }) {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [width, setWidth] = useState(1280);
  const [height, setHeight] = useState(720);
  const [quality, setQuality] = useState(0.8);
  const [amount, setAmount] = useState("250");
  const [percent, setPercent] = useState("15");
  const [dob, setDob] = useState("2000-01-01");
  const [length, setLength] = useState(18);
  const [symbols, setSymbols] = useState(true);
  const [pageRange, setPageRange] = useState("1-2");
  const [qr, setQr] = useState("");
  const [busy, setBusy] = useState(false);

  const stats = useMemo(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    return {
      words,
      chars: text.length,
      noSpace: text.replace(/\s/g, "").length,
      sentences: text.split(/[.!?]+/).filter(x => x.trim()).length
    };
  }, [text]);

  function reset() {
    setText("");
    setResult("");
    setFile(null);
    setFiles([]);
    setQr("");
  }

  async function imageTool() {
    if (!file) throw new Error("Please select an image first.");

    const img = await loadImage(file);
    const isThumbnail = tool.slug === "youtube-thumbnail-resizer";
    const w = Math.max(1, Math.min(5000, isThumbnail ? 1280 : width));
    const h = Math.max(1, Math.min(5000, isThumbnail ? 720 : height));
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas is not supported.");

    const isCrop = tool.slug === "image-cropper";
    if (tool.slug === "png-to-jpg" || tool.slug === "image-compressor") {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, w, h);
    }

    if (isCrop) {
      const scale = Math.max(w / img.width, h / img.height);
      const sw = w / scale;
      const sh = h / scale;
      ctx.drawImage(img, (img.width - sw) / 2, (img.height - sh) / 2,
        sw, sh, 0, 0, w, h);
    } else {
      ctx.drawImage(img, 0, 0, w, h);
    }

    const mime = tool.slug === "jpg-to-png"
      ? "image/png"
      : tool.slug === "png-to-jpg" || tool.slug === "image-compressor"
        ? "image/jpeg"
        : file.type === "image/png" ? "image/png" : "image/jpeg";

    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        b => b ? resolve(b) : reject(new Error("Image export failed.")),
        mime,
        quality
      );
    });

    const ext = mime === "image/png" ? "png" : "jpg";
    download(blob, `toolnova-${tool.slug}.${ext}`);
    setResult(
      `Success! ${w} × ${h}px · ${(blob.size / 1024).toFixed(1)} KB · ${ext.toUpperCase()}`
    );
  }

  async function pdfTool() {
    if (!files.length) throw new Error("Please select PDF or image files.");

    if (tool.slug === "pdf-merger") {
      if (files.length < 2) throw new Error("Select at least two PDF files.");
      const output = await PDFDocument.create();
      for (const file of files) {
        const source = await PDFDocument.load(await file.arrayBuffer());
        const pages = await output.copyPages(source, source.getPageIndices());
        pages.forEach(page => output.addPage(page));
      }
      download(
        new Blob([await output.save() as BlobPart], { type: "application/pdf" }),
        "toolnova-merged.pdf"
      );
      setResult(`Successfully merged ${files.length} PDF files.`);
      return;
    }

    if (tool.slug === "pdf-splitter") {
      const source = await PDFDocument.load(await files[0].arrayBuffer());
      const selected = parsePages(pageRange, source.getPageCount());
      const output = await PDFDocument.create();
      const pages = await output.copyPages(source, selected);
      pages.forEach(page => output.addPage(page));
      download(
        new Blob([await output.save() as BlobPart], { type: "application/pdf" }),
        "toolnova-split.pdf"
      );
      setResult(`Downloaded ${selected.length} selected pages.`);
      return;
    }

    if (tool.slug === "jpg-to-pdf") {
      const output = await PDFDocument.create();
      for (const image of files) {
        let embedded;
        if (image.type === "image/jpeg" || image.type === "image/jpg") {
          embedded = await output.embedJpg(await image.arrayBuffer());
        } else if (image.type === "image/png") {
          embedded = await output.embedPng(await image.arrayBuffer());
        } else {
          throw new Error("Only JPG and PNG images are supported.");
        }
        const page = output.addPage([embedded.width, embedded.height]);
        page.drawImage(embedded, {
          x: 0, y: 0, width: embedded.width, height: embedded.height
        });
      }
      download(
        new Blob([await output.save() as BlobPart], { type: "application/pdf" }),
        "toolnova-images.pdf"
      );
      setResult(`Successfully converted ${files.length} images to PDF.`);
    }
  }

  async function run() {
    setBusy(true);
    setResult("");
    setQr("");
    try {
      if (tool.kind === "image") {
        await imageTool();
        return;
      }

      if (tool.kind === "pdf") {
        await pdfTool();
        return;
      }

      if (tool.slug === "qr-code-generator") {
        if (!text.trim()) throw new Error("Enter text or a URL first.");
        const data = await QRCode.toDataURL(text, {
          width: 700,
          margin: 2,
          errorCorrectionLevel: "H",
          color: { dark: "#111827", light: "#ffffff" }
        });
        setQr(data);
        setResult("QR code generated successfully.");
        return;
      }

      if (tool.slug === "word-counter" || tool.slug === "character-counter") {
        setResult(
          `${stats.words} words · ${stats.chars} characters · ${stats.noSpace} without spaces · ${stats.sentences} sentences · ${Math.ceil(stats.words / 200)} min read`
        );
        return;
      }

      if (tool.slug === "case-converter") {
        setResult("Use the conversion buttons below.");
        return;
      }

      if (tool.slug === "remove-duplicate-lines") {
        setResult(Array.from(new Set(text.split(/\r?\n/))).join("\n"));
        return;
      }

      if (tool.slug === "password-generator") {
        const chars =
          "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789" +
          (symbols ? "!@#$%^&*()-_=+" : "");
        const random = new Uint32Array(length);
        crypto.getRandomValues(random);
        setResult([...random].map(n => chars[n % chars.length]).join(""));
        return;
      }

      if (tool.slug === "uuid-generator") {
        setResult(crypto.randomUUID());
        return;
      }

      if (tool.slug === "age-calculator") {
        const d = new Date(dob + "T00:00:00");
        const now = new Date();
        if (Number.isNaN(d.getTime()) || d > now) {
          throw new Error("Enter a valid date in the past.");
        }
        let age = now.getFullYear() - d.getFullYear();
        if (
          now.getMonth() < d.getMonth() ||
          (now.getMonth() === d.getMonth() && now.getDate() < d.getDate())
        ) age--;
        setResult(`Your age is ${age} years.`);
        return;
      }

      const a = Number(amount);
      const b = Number(percent);
      if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new Error("Enter valid numbers.");
      }

      if (tool.slug === "percentage-calculator") {
        setResult(`${b}% of ${a} = ${(a * b / 100).toLocaleString()}`);
        return;
      }

      if (tool.slug === "discount-calculator") {
        if (b < 0 || b > 100) throw new Error("Discount must be 0–100%.");
        setResult(
          `Sale price: ${(a * (1 - b / 100)).toFixed(2)} · You save: ${(a * b / 100).toFixed(2)}`
        );
        return;
      }

      if (tool.slug === "bmi-calculator") {
        const m = b / 100;
        if (a <= 0 || m <= 0) throw new Error("Enter valid weight and height.");
        const bmi = a / (m * m);
        const category =
          bmi < 18.5 ? "Underweight" :
          bmi < 25 ? "Normal range" :
          bmi < 30 ? "Overweight" : "Obesity range";
        setResult(`BMI: ${bmi.toFixed(1)} · ${category}. Adult screening estimate only.`);
      }
    } catch (error) {
      setResult(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  const isText = [
    "word-counter", "character-counter", "case-converter",
    "remove-duplicate-lines"
  ].includes(tool.slug);

  const isPdf = tool.kind === "pdf";
  const isImage = tool.kind === "image";

  return (
    <div className="panel">
      <h2>Use the {tool.name}</h2>
      <p className="muted">Free online utility · Private browser-based processing</p>

      {isImage && (
        <>
          <div className="field">
            <label>Select an image</label>
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={e => setFile(e.target.files?.[0] || null)}
            />
          </div>
          {tool.slug !== "youtube-thumbnail-resizer" && (
            <div className="row">
              <div className="field">
                <label>Width (px)</label>
                <input type="number" min="1" max="5000"
                  value={width} onChange={e => setWidth(+e.target.value)} />
              </div>
              <div className="field">
                <label>Height (px)</label>
                <input type="number" min="1" max="5000"
                  value={height} onChange={e => setHeight(+e.target.value)} />
              </div>
            </div>
          )}
          <div className="field">
            <label>Quality: {Math.round(quality * 100)}%</label>
            <input type="range" min="0.2" max="1" step="0.05"
              value={quality} onChange={e => setQuality(+e.target.value)} />
          </div>
          <p className="notice">
            Image Cropper uses a centered crop. Image Compressor exports JPEG
            with adjustable quality. Maximum dimensions: 5000 × 5000.
          </p>
        </>
      )}

      {isPdf && (
        <>
          <div className="field">
            <label>{tool.slug === "pdf-merger" ? "Select PDF files (2 or more)" :
              tool.slug === "pdf-splitter" ? "Select one PDF file" :
              "Select JPG or PNG images"}</label>
            <input
              type="file"
              accept={tool.slug === "jpg-to-pdf" ? "image/jpeg,image/png" : "application/pdf"}
              multiple={tool.slug !== "pdf-splitter"}
              onChange={e => setFiles(Array.from(e.target.files || []))}
            />
          </div>
          {tool.slug === "pdf-splitter" && (
            <div className="field">
              <label>Pages to extract (example: 1-3,5)</label>
              <input value={pageRange} onChange={e => setPageRange(e.target.value)} />
            </div>
          )}
          <p className="notice">
            Files are processed locally in your browser. Large PDFs may require
            more device memory.
          </p>
        </>
      )}

      {tool.kind === "qr" && (
        <div className="field">
          <label>Text or URL</label>
          <input value={text} onChange={e => setText(e.target.value)}
            placeholder="https://example.com" />
        </div>
      )}

      {isText && (
        <>
          <div className="field">
            <label>Enter or paste text</label>
            <textarea value={text} onChange={e => setText(e.target.value)}
              placeholder="Type or paste text here..." />
          </div>
          <p className="notice">
            {stats.words} words · {stats.chars} characters · {stats.noSpace} without spaces
          </p>
          {tool.slug === "case-converter" && (
            <div className="row">
              <button className="btn" onClick={() => setText(text.toUpperCase())}>UPPERCASE</button>
              <button className="btn" onClick={() => setText(text.toLowerCase())}>lowercase</button>
              <button className="btn" onClick={() =>
                setText(text.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()))
              }>Title Case</button>
            </div>
          )}
        </>
      )}

      {tool.slug === "password-generator" && (
        <>
          <div className="field">
            <label>Password length: {length}</label>
            <input type="range" min="8" max="64" value={length}
              onChange={e => setLength(+e.target.value)} />
          </div>
          <label>
            <input type="checkbox" checked={symbols}
              onChange={e => setSymbols(e.target.checked)} />
            Include symbols
          </label>
        </>
      )}

      {tool.slug === "age-calculator" && (
        <div className="field">
          <label>Date of birth</label>
          <input type="date" value={dob} max={new Date().toISOString().slice(0, 10)}
            onChange={e => setDob(e.target.value)} />
        </div>
      )}

      {["percentage-calculator", "discount-calculator", "bmi-calculator"].includes(tool.slug) && (
        <div className="row">
          <div className="field">
            <label>{tool.slug === "discount-calculator" ? "Original price" :
              tool.slug === "bmi-calculator" ? "Weight (kg)" : "Number"}</label>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
          </div>
          <div className="field">
            <label>{tool.slug === "discount-calculator" ? "Discount (%)" :
              tool.slug === "bmi-calculator" ? "Height (cm)" : "Percentage (%)"}</label>
            <input type="number" value={percent} onChange={e => setPercent(e.target.value)} />
          </div>
        </div>
      )}

      {tool.slug === "uuid-generator" && (
        <p className="muted">Generate a random version 4 UUID.</p>
      )}

      <div className="row" style={{ marginTop: 18 }}>
        <button className="btn primary" disabled={busy} onClick={run}>
          {busy ? "Processing..." : isImage ? "Process & Download" :
            isPdf ? "Process & Download PDF" : "Generate Result"}
        </button>
        <button className="btn" onClick={reset}>Reset</button>
      </div>

      {qr && (
        <div className="result" style={{ textAlign: "center" }}>
          <img src={qr} alt="Generated QR code"
            style={{ width: 240, maxWidth: "100%", margin: "auto" }} />
          <button className="btn primary" onClick={() => {
            const a = document.createElement("a");
            a.href = qr;
            a.download = "toolnova-qr.png";
            a.click();
          }}>Download QR PNG</button>
        </div>
      )}

      {result && (
        <div className="result">
          <strong>Result</strong>
          <p style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}>{result}</p>
          <button className="btn" onClick={() =>
            navigator.clipboard?.writeText(result)
          }>Copy result</button>
        </div>
      )}
    </div>
  );
}
