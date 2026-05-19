import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link className="post-card" href={`/posts/${post.slug}`}>
      <div className="post-top">
        <span className="badge">{post.category}</span>
        {post.featured && <span className="badge">Featured</span>}
      </div>

      <h3>{post.title}</h3>
      <p>{post.description}</p>

      <div className="post-meta">
        <span>{post.date}</span>
        {post.showReadingTime && <span>{post.readingTime}</span>}
        {post.tags.slice(0, 3).map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
    </Link>
  );
}
