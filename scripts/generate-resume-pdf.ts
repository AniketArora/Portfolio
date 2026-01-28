import path from "path";
import { mkdir, writeFile } from "fs/promises";
import { compile } from "node-latex-compiler";
import { cvData } from "../app/data/cv";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const escapeLatex = (value: string) =>
  value
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/&/g, "\\&")
    .replace(/%/g, "\\%")
    .replace(/\$/g, "\\$")
    .replace(/#/g, "\\#")
    .replace(/_/g, "\\_")
    .replace(/{/g, "\\{")
    .replace(/}/g, "\\}")
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}");

const formatDate = (value?: string) => {
  if (!value) {
    return "";
  }
  if (value === "Present") {
    return value;
  }
  if (/^\d{4}-\d{2}$/.test(value)) {
    const [year, month] = value.split("-");
    const monthIndex = Number(month) - 1;
    return `${monthNames[monthIndex]} ${year}`;
  }
  return value;
};

const formatRange = (start?: string, end?: string) => {
  const startLabel = formatDate(start);
  const endLabel = end ? formatDate(end) : "Present";
  if (!startLabel && !endLabel) {
    return "";
  }
  if (startLabel && endLabel && startLabel === endLabel) {
    return startLabel;
  }
  if (startLabel && endLabel) {
    return `${startLabel} -- ${endLabel}`;
  }
  return startLabel || endLabel;
};

const renderItemize = (items: string[]) => {
  if (items.length === 0) {
    return "";
  }
  const lines = items.map((item) => `\\item ${escapeLatex(item)}`).join("\n");
  return `\\begin{itemize}[leftmargin=*]\n${lines}\n\\end{itemize}`;
};

const renderContact = () => {
  const lines = cvData.contact.map((item) => {
    const label = escapeLatex(item.label);
    const value = escapeLatex(item.value);
    if (item.href) {
      const href = escapeLatex(item.href);
      return `\\textbf{${label}}\\\\\\href{${href}}{${value}}\\\\[6pt]`;
    }
    return `\\textbf{${label}}\\\\${value}\\\\[6pt]`;
  });
  return `\\section*{Contact}\n${lines.join("\n")}`;
};

const renderHighlights = () => {
  if (cvData.highlights.length === 0) {
    return "";
  }
  return `\\section*{Highlights}\n${renderItemize(cvData.highlights)}`;
};

const renderExperience = () => {
  if (cvData.experience.length === 0) {
    return "";
  }
  const entries = cvData.experience
    .map((company) => {
      const roles = company.roles
        .map((role) => {
          const title = escapeLatex(role.title);
          const location = role.location ? `\\\\${escapeLatex(role.location)}` : "";
          const range = formatRange(role.start, role.end);
          const summary = role.summary ? `\\\\${escapeLatex(role.summary)}` : "";
          const highlights = role.highlights?.length ? `\n${renderItemize(role.highlights)}` : "";
          return `\\textbf{${title}}\\hfill ${escapeLatex(range)}${location}${summary}${highlights}`;
        })
        .join("\\\\[6pt]\n");
      return `\\textbf{${escapeLatex(company.company)}}\\\\[6pt]\n${roles}`;
    })
    .join("\\\\[12pt]\n");

  return `\\section*{Experience}\n${entries}`;
};

const renderProjects = () => {
  if (cvData.projects.length === 0) {
    return "";
  }
  const items = cvData.projects
    .map((project) => {
      const name = escapeLatex(project.name);
      const description = escapeLatex(project.description);
      const tech = project.tech?.length ? `\\\\${escapeLatex(project.tech.join(", "))}` : "";
      const link = project.link
        ? `\\\\\\href{${escapeLatex(project.link)}}{${escapeLatex(
            project.linkLabel ?? project.link
          )}}`
        : "";
      return `\\textbf{${name}}${link}\\\\${description}${tech}`;
    })
    .join("\\\\[8pt]\n");

  return `\\section*{Projects}\n${items}`;
};

const renderEducation = () => {
  if (cvData.education.length === 0) {
    return "";
  }
  const items = cvData.education
    .map((item) => {
      const institution = escapeLatex(item.institution);
      const degree = escapeLatex(item.degree);
      const focus = item.focus ? `, ${escapeLatex(item.focus)}` : "";
      const range = escapeLatex(formatRange(item.start, item.end));
      return `\\textbf{${institution}}\\hfill ${range}\\\\${degree}${focus}`;
    })
    .join("\\\\[8pt]\n");
  return `\\section*{Education}\n${items}`;
};

const renderSkills = () => {
  if (cvData.skills.length === 0) {
    return "";
  }
  const groups = cvData.skills
    .map((group) => {
      const items = escapeLatex(group.items.join(", "));
      return `\\textbf{${escapeLatex(group.group)}}\\\\${items}\\\\[6pt]`;
    })
    .join("\n");
  return `\\section*{Skills}\n${groups}`;
};

const renderSimpleSection = (title: string, items: string[]) => {
  if (items.length === 0) {
    return "";
  }
  return `\\section*{${escapeLatex(title)}}\n${renderItemize(items)}`;
};

const renderCertifications = () =>
  renderSimpleSection(
    "Certifications",
    cvData.certifications.map((item) => {
      const date = formatDate(item.date);
      return `${item.name} -- ${item.issuer} (${date})`;
    })
  );

const renderAwards = () =>
  renderSimpleSection(
    "Awards",
    cvData.awards.map((item) => {
      const date = formatDate(item.date);
      const description = item.description ? `: ${item.description}` : "";
      return `${item.name} -- ${item.issuer} (${date})${description}`;
    })
  );

const renderPublications = () =>
  renderSimpleSection(
    "Publications",
    cvData.publications.map((item) => {
      const date = formatDate(item.date);
      return `${item.title} -- ${item.publisher} (${date})`;
    })
  );

const renderTalks = () =>
  renderSimpleSection(
    "Talks",
    cvData.talks.map((item) => {
      const date = formatDate(item.date);
      return `${item.title} -- ${item.event} (${date})`;
    })
  );

const renderVolunteering = () =>
  renderSimpleSection(
    "Volunteering",
    cvData.volunteering.map((item) => {
      const range = formatRange(item.start, item.end);
      return `${item.organization} -- ${item.role} (${range})`;
    })
  );

const renderOpenSource = () =>
  renderSimpleSection(
    "Open Source",
    cvData.openSource.map((item) => {
      const description = item.description ? `: ${item.description}` : "";
      return `${item.name}${description}`;
    })
  );

const renderLanguages = () =>
  renderSimpleSection(
    "Languages",
    cvData.languages.map((item) => `${item.name} -- ${item.level}`)
  );

const renderInterests = () =>
  renderSimpleSection("Interests", cvData.interests);

const buildResumeLatex = () => {
  const { profile } = cvData;
  return `\\documentclass[11pt,a4paper]{article}
\\usepackage[margin=1.8cm]{geometry}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{xcolor}
\\usepackage{titlesec}
\\usepackage{parskip}
\\setlength{\\parindent}{0pt}
\\definecolor{resumeBlue}{HTML}{1D3F4E}
\\titleformat{\\section}{\\large\\bfseries\\color{resumeBlue}}{}{0em}{}
\\setlist[itemize]{noitemsep, topsep=2pt, leftmargin=*}
\\begin{document}
{\\Huge\\textbf{${escapeLatex(profile.name)}}}\\\\
\\textbf{${escapeLatex(profile.title)}}\\\\
${escapeLatex(profile.location)}\\\\
\\vspace{6pt}
${escapeLatex(profile.summary)}
\\vspace{12pt}
${renderHighlights()}
\\begin{minipage}[t]{0.62\\textwidth}
${renderExperience()}
\\vspace{10pt}
${renderProjects()}
\\vspace{10pt}
${renderEducation()}
\\end{minipage}
\\hfill
\\begin{minipage}[t]{0.34\\textwidth}
${renderContact()}
${renderSkills()}
${renderCertifications()}
${renderAwards()}
${renderPublications()}
${renderTalks()}
${renderVolunteering()}
${renderOpenSource()}
${renderLanguages()}
${renderInterests()}
\\end{minipage}
\\end{document}`;
};

const outputPath = path.resolve("public", "resume.pdf");

const generate = async () => {
  await mkdir(path.dirname(outputPath), { recursive: true });
  const tex = buildResumeLatex();
  const result = await compile({ tex, returnBuffer: true });

  if (result.status !== "success" || !result.pdfBuffer) {
    throw new Error(result.error ?? result.stderr ?? "LaTeX compilation failed.");
  }

  await writeFile(outputPath, result.pdfBuffer);
  console.log(`Resume PDF generated at ${outputPath}`);
};

generate().catch((error) => {
  console.error("Failed to generate resume PDF", error);
  process.exit(1);
});
