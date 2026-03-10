import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className="mt-6 text-2xl font-semibold text-white" />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="mt-3 text-base leading-7 text-slate-200" />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className="mt-3 list-disc space-y-2 pl-6 text-slate-200" />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li {...props} />,
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return (
    <div className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-amber-200">
      <Component components={components} />
    </div>
  );
}
