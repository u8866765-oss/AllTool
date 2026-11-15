import SiteShell from "@/components/SiteShell";

export default function Page() {
  return (
    <SiteShell>
      <main className="wrap">
        <div className="pagehead">
          <h1>About ToolNova</h1>
          <p>Helpful online utilities for everyday digital tasks</p>
        </div>
        <article className="contentcard">
          <h2>What is ToolNova?</h2>
          <p>ToolNova is a collection of practical online tools designed to make common digital tasks easier. Whether you need to work with images, manage PDF documents, clean up text, generate useful values or calculate everyday figures, ToolNova brings these utilities together in one place.</p>

          <h2>Our approach</h2>
          <p>We aim to make our tools straightforward to use, accessible on different screen sizes and clear about what each tool does. We focus on useful features rather than unnecessary steps.</p>

          <h2>Using our tools</h2>
          <p>Choose a tool, follow the instructions shown on its page, review the result and download or copy the output when available. Always check important files and results before using or sharing them.</p>

          <h2>Privacy and transparency</h2>
          <p>Many ToolNova tools process the selected content directly in your browser. The exact behavior can vary by tool. Advertising and other third-party services may use their own technologies. Please read our Privacy Policy for more information.</p>

          <h2>Contact</h2>
          <p>If you find a problem or have a suggestion, visit our Contact page.</p>
        </article>
      </main>
    </SiteShell>
  );
}
