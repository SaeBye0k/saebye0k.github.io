import PostCard from "@/components/PostCard";
import { getProjectPosts } from "@/lib/posts";

export const metadata = {
  title: "Projects | Saebyeok Archive",
  description: "프로젝트 게시글 목록",
};

export default function ProjectsPage() {
  const posts = getProjectPosts();

  return (
    <main className="page">
      <div className="container">
        <div className="eyebrow">Projects</div>
        <h1>프로젝트</h1>
        <p className="page-intro">
          결과물 중심의 프로젝트 글만 따로 모았습니다. 카테고리가 Project인 글이 이곳에 표시됩니다.
        </p>
        <div className="grid" style={{ marginTop: 34 }}>
          {posts.map((post) => <PostCard key={post.slug} post={post} />)}
        </div>
      </div>
    </main>
  );
}
