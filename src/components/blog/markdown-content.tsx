import type { Components } from "react-markdown";
import { isValidElement, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CodeBlock } from "@/components/blog/code-block";

const components: Components = {
  pre: ({ children }) => {
    if (isValidElement<{ className?: string; children?: ReactNode }>(children)) {
      const className = children.props.className ?? "";
      const language = /language-([\w-]+)/.exec(className)?.[1];
      const code = String(children.props.children ?? "").replace(/\n$/, "");
      return <CodeBlock code={code} language={language} />;
    }
    return <pre>{children}</pre>;
  },
  a: ({ href, children }) => {
    const external = href?.startsWith("http");
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
        {children}
      </a>
    );
  },
};

export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
