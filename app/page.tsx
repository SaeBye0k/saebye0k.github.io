import Link from "next/link";
import PostCard from "@/components/PostCard";
import { getFeaturedPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getFeaturedPosts(3);

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="kicker">Portfolio · Devlog · Archive</div>
            <h1>기록으로 보여주는 개발 포트폴리오</h1>
            <p>
              프로젝트의 결과뿐 아니라 왜 만들었는지, 어떤 문제를 고민했는지,
              구현 과정에서 무엇을 배웠는지까지 게시글처럼 쌓아두는 개인 아카이브입니다.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" href="/posts">전체 글 보기</Link>
              <Link className="btn ghost" href="/projects">프로젝트 보기</Link>
            </div>
          </div>

          <aside className="profile-card">
            <h2>윤찬호</h2>
            <p>
              웹과 게임을 통해 아이디어를 실제로 작동하는 결과물로 만드는 개발자 지망생입니다.
              React, Next.js, Unity를 중심으로 프로젝트를 기록합니다.
            </p>
            <div className="stack">
              <span className="tag">React</span>
              <span className="tag">Next.js</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Unity</span>
              <span className="tag">C#</span>
              <span className="tag">C</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Featured Posts</h2>
              <p className="section-desc">대표 프로젝트와 최근 개발 기록을 모아둔 공간입니다.</p>
            </div>
            <Link className="btn ghost" href="/posts">More</Link>
          </div>
          <div className="grid">
            {posts.map((post) => <PostCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
