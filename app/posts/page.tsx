import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Posts | Saebyeok Archive",
  description: "전체 게시글 목록",
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <main className="page">
      <div className="container">
        <div className="eyebrow">Posts</div>
        <h1>전체 기록</h1>
        <p className="page-intro">
          프로젝트, 개발 일지, 공부 기록, 회고, 아이디어를 게시글 형태로 정리합니다.
        </p>
        <div className="grid" style={{ marginTop: 34 }}>
          {posts.map((post) => <PostCard key={post.slug} post={post} />)}
        </div>
      </div>
    </main>
  );
}
