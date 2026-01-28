import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Aniket Arora",
  description:
    "Resume of Aniket Arora, Senior Data Scientist focused on Generative AI, machine learning, and LLMs.",
  alternates: {
    canonical: "/resume"
  },
  openGraph: {
    title: "Resume | Aniket Arora",
    description:
      "Senior Data Scientist at IBM Consulting focused on Generative AI, machine learning, and LLMs.",
    url: "/resume",
    type: "profile"
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Aniket Arora",
    description:
      "Senior Data Scientist at IBM Consulting focused on Generative AI, machine learning, and LLMs."
  }
};

export default function ResumePage() {
  return (
    <section className="c-resume">
      <div className="o-container">
        <div className="c-resume__toolbar">
          <div className="c-resume__title">
            <p className="c-resume__eyebrow">Resume</p>
            <h1 className="c-resume__heading">LaTeX Generated</h1>
            <p className="c-resume__subtitle">View the PDF rendered from the LaTeX source.</p>
          </div>
          <div className="c-resume__actions">
            <a className="c-resume__download" href="/resume.pdf" download>
              Download PDF
            </a>
          </div>
        </div>
        <div className="c-resume__viewer">
          <object data="/resume.pdf" type="application/pdf" className="c-resume__frame">
            <div className="c-resume__fallback">
              <p>PDF preview is not available in this browser.</p>
              <a className="c-resume__download" href="/resume.pdf" download>
                Download PDF
              </a>
            </div>
          </object>
        </div>
      </div>
    </section>
  );
}
