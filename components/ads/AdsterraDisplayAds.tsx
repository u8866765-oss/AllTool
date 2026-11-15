"use client";

import { useEffect, useRef } from "react";

export default function AdsterraDisplayAds() {
  const nativeRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nativeSlot = nativeRef.current;
    const bannerSlot = bannerRef.current;

    if (!nativeSlot || !bannerSlot) return;

    const nativeScript = document.createElement("script");
    nativeScript.src =
      "https://bellnewyork.org/21/6a9040fe62c0a52659fbe20a81049463";
    nativeScript.async = true;
    nativeScript.setAttribute("data-cfasync", "false");

    const nativeContainer = document.createElement("div");
    nativeContainer.id = "container-6a9040fe62c0a52659fbe20a81049463";

    nativeSlot.append(nativeScript, nativeContainer);

    const bannerConfig = document.createElement("script");
    bannerConfig.text = `
      window.atOptions = {
        key: "170dd2ef9aa5cde76ccf0715b3997d8a",
        format: "iframe",
        height: 50,
        width: 320,
        params: {}
      };
    `;

    const bannerScript = document.createElement("script");
    bannerScript.src =
      "https://bellnewyork.org/22/170dd2ef9aa5cde76ccf0715b3997d8a";
    bannerScript.async = true;
    bannerScript.setAttribute("data-cfasync", "false");

    bannerSlot.append(bannerConfig, bannerScript);

    return () => {
      nativeSlot.replaceChildren();
      bannerSlot.replaceChildren();
    };
  }, []);

  return (
    <div className="adsterra-display-ads">
      <div ref={nativeRef} className="adsterra-native-slot" />
      <div ref={bannerRef} className="adsterra-banner-slot" />
    </div>
  );
}
