import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import ToolClient from "@/components/ToolClient";
import { tools } from "@/data/tools";
import { toolSEO } from "@/data/seo";

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const t = tools.find((x) => x.slug === params.slug);
  if (!t) return {};

  const seo = toolSEO[t.slug];

  const title = seo?.title || `${t.name} | Free Online Tool - ToolNova`;
  const description = seo?.description || t.description;

  return {
    title,
    description,
    keywords: [
      t.name,
      ...t.keywords.split(" "),
      "free online tool",
      "ToolNova",
    ],
    alternates: {
      canonical: `/tools/${t.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://toolnova-global.pages.dev/tools/${t.slug}/`,
      siteName: "ToolNova",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  const t = tools.find((x) => x.slug === params.slug);
  if (!t) notFound();

  const seo = toolSEO[t.slug];

  const intro = seo?.intro || t.description;

  const steps = seo?.steps || [
    "Open the tool and enter the required information.",
    "Choose the available settings.",
    "Start processing and review the result.",
    "Download or copy the result.",
  ];

  const faqs = seo?.faqs || [
    {
      question: "Is this tool free?",
      answer: "Yes, ToolNova provides this tool free to use.",
    },
  ];

  const related = tools
    .filter((x) => x.category === t.category && x.slug !== t.slug)
    .slice(0, 4);

  const appLD = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: t.name,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    description: seo?.description || t.description,
    url: `https://toolnova-global.pages.dev/tools/${t.slug}/`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const faqLD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <SiteShell>
      <main className="wrap">
        <div className="pagehead">
          <p>
            <a href="/">Home</a> / Tools / {t.name}
          </p>
          <h1>
            {t.icon} {t.name}
          </h1>
          <p>{seo?.description || t.description}</p>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(appLD).replace(/</g, "\\u003c"),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqLD).replace(/</g, "\\u003c"),
          }}
        />

        <div className="adslot">
          ADVERTISEMENT · RESPONSIVE DISPLAY SLOT
        </div>

        <div className="tool-layout">
          <section>
            <ToolClient tool={t} />

            <article className="contentcard">
              <h2>About {t.name}</h2>
              <p>{intro}</p>
            </article>

            <article className="contentcard">
              <h2>How to use {t.name}</h2>
              <ol>
                {steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </article>

            <article className="contentcard">
              <h2>Frequently Asked Questions</h2>

              {faqs.map((faq, index) => (
                <div key={index}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </article>
          </section>

          <aside className="panel">
            <h2>Related tools</h2>

            {related.map((r) => (
              <p key={r.slug}>
                <a href={`/tools/${r.slug}/`}>
                  {r.icon} {r.name} ↗
                </a>
              </p>
            ))}

            <div className="adslot">ADVERTISEMENT</div>
          </aside>
        </div>
      </main>
    </SiteShell>
  );
}
