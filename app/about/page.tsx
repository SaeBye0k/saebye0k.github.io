export const metadata = {
  title: "About | SaeByeok Archive",
  description: "윤찬호 소개 페이지",
};

export default function AboutPage() {
  return (
    <main className="page">
      <div className="container">
        <div className="eyebrow">About</div>
        <h1>안녕하세요, 윤찬호입니다.</h1>
        <p className="page-intro">
          웹과 게임 개발을 공부하며, 아이디어를 실제로 작동하는 결과물로 만드는 과정에 관심이 있습니다.
          이 사이트는 프로젝트 결과뿐 아니라 고민, 시행착오, 배운 점까지 함께 기록하는 공간입니다.
        </p>

        <section className="section">
          <div className="profile-card">
            <h2>관심 분야</h2>
            <p>React, Next.js, Unity, 게임 시스템, AI 서비스 기획, 포트폴리오형 개발 기록</p>
            <div className="stack">
              <span className="tag">Web</span>
              <span className="tag">Game</span>
              <span className="tag">AI</span>
              <span className="tag">Archive</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
