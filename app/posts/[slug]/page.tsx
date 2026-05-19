import { getPostBySlug, getPostSlugs } from "@/lib/posts";

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: `${post.title} | Chanho Archive`,
    description: post.description,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <main className="article">
      <div className="eyebrow">{post.category}</div>
      <h1>{post.title}</h1>
      <p className="article-desc">{post.description}</p>
      <div className="article-meta">
        <span>{post.date}</span>
        {post.showReadingTime && <span>{post.readingTime}</span>}
        {post.tags.map((tag) => <span key={tag}>#{tag}</span>)}
      </div>
      <article className="article-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </main>
  );
}
