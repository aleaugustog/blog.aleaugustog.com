import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import fs from "fs";
import path from "path";
import remarkGfm from "remark-gfm";

export const postsPath = path.join(process.cwd(), "public/posts");

export function markdownToHtml(markdown) {
  return remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .processSync(markdown)
    .toString();
}

export function getAllPosts() {
  return fs
    .readdirSync(postsPath)
    .sort((a, b) => (a > b ? -1 : 1))
    .map((slug) => {
      const { data, content, excerpt } = matter(
        fs.readFileSync(path.join(postsPath, slug)),
        { excerpt: true }
      );
      return {
        slug: slug.replace(/\.md$/, ""),
        data,
        excerpt,
        content: markdownToHtml(content),
      };
    });
}

export function getPost(slug) {
  const { data, content } = matter(fs.readFileSync(path.join(postsPath, slug)));
  return {
    slug: slug.replace(/\.md$/, ""),
    data,
    content: markdownToHtml(content),
  };
}
