"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import SiteShell from "@/components/SiteShell";
import AdsterraDisplayAds from "@/components/ads/AdsterraDisplayAds";
import { tools, categories } from "@/data/tools";

const featuredSlugs = [
  "image-compressor",
  "qr-code-generator",
  "password-generator",
  "word-counter",
  "image-resizer",
  "jpg-to-pdf",
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesQuery = (
        tool.name +
        " " +
        tool.description +
        " " +
        tool.category +
        " " +
        tool.keywords
      ).toLowerCase().includes(query.toLowerCase());

      const matchesCategory =
        activeCategory === "All" ||
        tool.category === activeCategory;

      return matchesQuery && matchesCategory;
    });
  }, [query, activeCategory]);

  const featuredTools = tools.filter((tool) =>
    featuredSlugs.includes(tool.slug)
  );

  return (
    <SiteShell>
      <main className="v2-home">
        <section className="v2-hero">
          <div className="wrap v2-hero-inner">
            <div className="v2-eyebrow">
              <span className="v2-pulse" />
              YOUR EVERYDAY DIGITAL TOOLKIT
            </div>

            <h1>
              Everything you need.
              <br />
              <span>One powerful place.</span>
            </h1>

            <p className="v2-lead">
              Discover powerful free online tools to compress images,
              convert files, generate QR codes and get everyday tasks
              done faster.
            </p>

            <div className="v2-search">
              <span className="v2-search-icon">⌕</span>

              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  document.getElementById("v2-tools")?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                  });
                }}
                placeholder="Search 20+ free online tools..."
                aria-label="Search all tools"
              />

              {query && (
                <button
                  className="v2-clear"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}

              <button
                className="v2-search-btn"
                onClick={() =>
                  document.getElementById("v2-tools")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Search Tools
              </button>
            </div>

            <div className="v2-trust">
              <span>✓ Free to use</span>
              <span>✓ No account required</span>
              <span>✓ Mobile friendly</span>
              <span>✓ Easy to use</span>
            </div>

            <div className="v2-hero-stats">
              <div>
                <strong>{tools.length}+</strong>
                <span>Useful Tools</span>
              </div>
              <div>
                <strong>{categories.length}</strong>
                <span>Categories</span>
              </div>
              <div>
                <strong>Free</strong>
                <span>To Get Started</span>
              </div>
            </div>
          </div>
        </section>

        <div className="wrap">
          <AdsterraDisplayAds />

          <section className="v2-section">
            <div className="v2-heading">
              <div>
                <span className="v2-kicker">HANDPICKED FOR YOU</span>
                <h2>Popular tools</h2>
                <p>Get started with some of our most useful tools.</p>
              </div>
              <Link href="/#v2-tools" className="v2-text-link">
                Explore all tools ↗
              </Link>
            </div>

            <div className="v2-featured-grid">
              {featuredTools.map((tool, index) => (
                <Link
                  href={`/tools/${tool.slug}/`}
                  className="v2-featured-card"
                  key={tool.slug}
                >
                  <div className="v2-featured-top">
                    <div className="v2-tool-icon">{tool.icon}</div>
                    <span className="v2-card-number">
                      0{index + 1}
                    </span>
                  </div>
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                  <span className="v2-open">Open tool <span>↗</span></span>
                </Link>
              ))}
            </div>
          </section>

          <section className="v2-section" id="categories">
            <div className="v2-heading">
              <div>
                <span className="v2-kicker">BROWSE BY CATEGORY</span>
                <h2>Explore categories</h2>
                <p>Find the right tool for your next task.</p>
              </div>
            </div>

            <div className="v2-category-grid">
              {categories.map((category) => {
                const count = tools.filter(
                  (tool) => tool.category === category.name
                ).length;

                return (
                  <button
                    key={category.name}
                    className={`v2-category-card ${
                      activeCategory === category.name ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveCategory(category.name);
                      document.getElementById("v2-tools")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    <span className="v2-category-icon">{category.icon}</span>
                    <span className="v2-category-info">
                      <strong>{category.name}</strong>
                      <small>{category.desc}</small>
                      <small className="v2-count">{count} tools ↗</small>
                    </span>
                    <span className="v2-category-arrow">→</span>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="v2-section" id="v2-tools">
            <div className="v2-heading">
              <div>
                <span className="v2-kicker">THE TOOL COLLECTION</span>
                <h2>
                  {activeCategory === "All"
                    ? "All online tools"
                    : activeCategory}
                </h2>
                <p>
                  {filteredTools.length} tools available. Choose one and
                  get things done.
                </p>
              </div>
            </div>

            <div className="v2-filter-row">
              {["All", ...categories.map((category) => category.name)].map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`v2-filter ${
                      activeCategory === category ? "selected" : ""
                    }`}
                  >
                    {category === "All" ? "✦ All tools" : category}
                  </button>
                )
              )}
            </div>

            <div className="v2-tools-grid">
              {filteredTools.map((tool) => (
                <Link
                  href={`/tools/${tool.slug}/`}
                  className="v2-tool-card"
                  key={tool.slug}
                >
                  <div className="v2-tool-card-top">
                    <span className="v2-tool-icon">{tool.icon}</span>
                    <span className="v2-tool-arrow">↗</span>
                  </div>
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                  <span className="v2-tool-category">{tool.category}</span>
                </Link>
              ))}
            </div>

            {filteredTools.length === 0 && (
              <div className="v2-empty">
                <span>🔎</span>
                <h3>No tools found</h3>
                <p>Try another search or select a different category.</p>
                <button
                  onClick={() => {
                    setQuery("");
                    setActiveCategory("All");
                  }}
                >
                  Show all tools
                </button>
              </div>
            )}
          </section>

          <section className="v2-bottom-banner">
            <div>
              <span className="v2-kicker">SIMPLE. FAST. USEFUL.</span>
              <h2>Make your everyday work easier.</h2>
              <p>
                Useful digital tools, gathered in one simple place.
                No complicated setup.
              </p>
            </div>
            <Link href="/#v2-tools" className="v2-banner-btn">
              Explore tools ↗
            </Link>
          </section>


        </div>
      </main>
    </SiteShell>
  );
}
