import path from "path";
import { mkdir } from "fs/promises";
import { compile } from "node-latex-compiler";

const texPath = path.resolve("resume", "resume.tex");
const outputPath = path.resolve("public", "resume.pdf");

const generate = async () => {
  await mkdir(path.dirname(outputPath), { recursive: true });
  const result = await compile({ texFile: texPath, outputFile: outputPath });

  if (result.status !== "success") {
    throw new Error(result.error ?? result.stderr ?? "LaTeX compilation failed.");
  }

  console.log(`Resume PDF generated at ${outputPath}`);
};

generate().catch((error) => {
  console.error("Failed to generate resume PDF", error);
  process.exit(1);
});
