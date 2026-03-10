import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "blog/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    excerpt: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" }, required: false },
  },
  computedFields: {
    url: { type: "string", resolve: (post) => `/blog/${post._raw.flattenedPath.replace("blog/", "")}` },
  },
}));

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    industry: { type: "string", required: true },
    impact: { type: "string", required: true },
    stack: { type: "list", of: { type: "string" }, required: true },
    summary: { type: "string", required: true },
  },
  computedFields: {
    url: { type: "string", resolve: (project) => `/projects/${project._raw.flattenedPath.replace("projects/", "")}` },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Project],
  disableImportAliasWarning: true,
});
