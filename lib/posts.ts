import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: "Project" | "Devlog" | "Study" | "Review" | "Idea";
  tags: string[];
  readingTime: string;
  featured?: boolean;
  showReadingTime?: boolean;
};

export type Post = PostMeta & {
  contentHtml: string;
};

function readPostFile(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return matter(fileContents);
}

function shouldShowReadingTime(value: unknown) {
  return value !== false && value !== "false";
}

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const { data, content } = readPostFile(slug);

      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        date: data.date ?? "",
        category: data.category ?? "Devlog",
        tags: data.tags ?? [],
        featured: data.featured ?? false,
        readingTime: readingTime(content).text.replace("min read", "분 읽기"),
        showReadingTime: shouldShowReadingTime(data.showReadingTime),
      };
    })
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export function getFeaturedPosts(limit = 3) {
  const posts = getAllPosts();
  const featured = posts.filter((post) => post.featured);
  return (featured.length ? featured : posts).slice(0, limit);
}

export function getProjectPosts() {
  return getAllPosts().filter((post) => post.category === "Project");
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const { data, content } = readPostFile(slug);
  const processedContent = await remark().use(html).process(content);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    category: data.category ?? "Devlog",
    tags: data.tags ?? [],
    featured: data.featured ?? false,
    readingTime: readingTime(content).text.replace("min read", "분 읽기"),
    showReadingTime: shouldShowReadingTime(data.showReadingTime),
    contentHtml: processedContent.toString(),
  };
}
