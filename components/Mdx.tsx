"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import "@/styles/mdx.css";
import { useRef } from "react";

export function Mdx({ code }: { code: string }) {
  const h2CountRef = useRef(0);
  
  // Reset counter for each render
  h2CountRef.current = 0;

  const components = {
    h2: ({ children }: { children: React.ReactNode }) => {
      h2CountRef.current++;
      return (
        <h2 className="mdx-h2">
          <span className="mdx-h2-num">0{h2CountRef.current}</span>
          {children}
        </h2>
      );
    },
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="mdx-h3">{children}</h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mdx-p">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="mdx-ul">{children}</ul>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="mdx-li">
      <span className="mdx-li-dot" />
      {children}
    </li>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="mdx-ol">{children}</ol>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="mdx-bq">
      <span className="mdx-bq-icon">"</span>
      {children}
    </blockquote>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a href={href} className="mdx-a">
      {children}
    </a>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="mdx-pre">{children}</pre>
  ),
  code: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    if (className?.includes("language-")) {
      const lang = className.replace("language-", "");
      return (
        <div className="mdx-pre">
          <div className="mdx-pre-header">
            <div className="mdx-pre-dots">
              <span className="mdx-pre-dot mdx-pre-dot-r" />
              <span className="mdx-pre-dot mdx-pre-dot-y" />
              <span className="mdx-pre-dot mdx-pre-dot-g" />
            </div>
            <span className="mdx-pre-lang">{lang}</span>
            <button
              className="mdx-pre-copy"
              onClick={() => navigator.clipboard?.writeText(String(children))}
            >
              Copier
            </button>
          </div>
          <code className="mdx-code-block">{children}</code>
        </div>
      );
    }
    return <code className="mdx-code-inline">{children}</code>;
  },
  hr: () => <hr className="mdx-hr" />,
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="mdx-strong">{children}</strong>
  ),
  em: ({ children }: { children: React.ReactNode }) => (
    <em className="mdx-em">{children}</em>
  ),
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="mdx-table-wrap">
      <table className="mdx-table">{children}</table>
    </div>
  ),
  thead: ({ children }: { children: React.ReactNode }) => (
    <thead>{children}</thead>
  ),
  tbody: ({ children }: { children: React.ReactNode }) => (
    <tbody>{children}</tbody>
  ),
  tr: ({ children }: { children: React.ReactNode }) => (
    <tr className="mdx-tr">{children}</tr>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="mdx-th">{children}</th>
  ),
    td: ({ children }: { children: React.ReactNode }) => (
      <td className="mdx-td">{children}</td>
    ),
  };

  const Component = useMDXComponent(code);
  return (
    <div className="mdx-root">
      <Component components={components} />
    </div>
  );
}
