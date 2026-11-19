"use client";

import { useEffect } from "react";

export default function MonetagGlobal() {
  useEffect(() => {
    const addScript = (
      id: string,
      src: string,
      zone?: string,
      extra?: Record<string, string>
    ) => {
      if (document.getElementById(id)) return;

      const script = document.createElement("script");
      script.id = id;
      script.async = true;
      script.src = src;

      if (zone) script.dataset.zone = zone;

      if (extra) {
        Object.entries(extra).forEach(([key, value]) => {
          script.setAttribute(key, value);
        });
      }

      document.body.appendChild(script);
    };

    // Popunder
    addScript(
      "monetag-popunder",
      "https://al5sm.com/tag.min.js",
      "12297709"
    );

    // Push Notifications
    addScript(
      "monetag-push",
      "https://5gvci.com/act/files/tag.min.js?z=12297711",
      undefined,
      { "data-cfasync": "false" }
    );

    // In-Page Push
    addScript(
      "monetag-inpage",
      "https://nap5k.com/tag.min.js",
      "12297712"
    );

    // Vignette Banner
    addScript(
      "monetag-vignette",
      "https://n6wxm.com/vignette.min.js",
      "12297713"
    );
  }, []);

  return null;
}
