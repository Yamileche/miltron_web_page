import hljs from "highlight.js";
import { CopyButton } from "@/components/blog/copy-button";

type CodeBlockProps = {
  code: string;
  language?: string;
};

export function CodeBlock({ code, language }: CodeBlockProps) {
  const highlighted = language && hljs.getLanguage(language)
    ? hljs.highlight(code, { language }).value
    : hljs.highlightAuto(code).value;

  return (
    <div className="code-block">
      <div className="code-block-header">
        <span>{language ?? "code"}</span>
        <CopyButton code={code} />
      </div>
      <pre>
        <code className={language ? `language-${language}` : undefined} dangerouslySetInnerHTML={{ __html: highlighted }} />
      </pre>
    </div>
  );
}
