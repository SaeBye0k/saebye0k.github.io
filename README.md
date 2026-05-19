# SaeBye0k Portfolio

Next.js + Markdown 기반 게시글형 포트폴리오입니다.  
`SaeBye0k.github.io` 저장소에 올려서 `https://saebye0k.github.io/` 주소로 배포하는 설정입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 아래 주소로 접속합니다.

```txt
http://localhost:3000
```

## 글 추가 방법

`content/posts` 폴더 안에 `.md` 파일을 추가합니다.

```md
---
title: "글 제목"
description: "글 설명"
date: "2026-05-12"
category: "Devlog"
tags: ["React", "Next.js"]
featured: false
showReadingTime: true
---

## 본문 제목

본문을 작성합니다.
```

## 특정 글에서 읽기 시간 숨기기

frontmatter에 아래 줄을 추가합니다.

```md
showReadingTime: false
```

이 값이 `false`이면 글 목록과 상세 페이지에서 `1분 읽기` 태그가 숨겨집니다.

## GitHub Pages 배포

1. GitHub에서 `SaeBye0k.github.io` 저장소 생성
2. 이 프로젝트 파일 전체 업로드
3. `main` 브랜치에 push
4. Repository `Settings` → `Pages` → `Build and deployment` → `Source`를 `GitHub Actions`로 설정
5. Actions가 자동으로 빌드 후 배포

배포 주소는 아래와 같습니다.

```txt
https://saebye0k.github.io/
```

## 중요

이 버전은 `SaeBye0k.github.io` 같은 사용자 페이지용입니다.  
따라서 `next.config.mjs`에 `basePath`를 넣지 않았습니다.

만약 나중에 `yoake` 같은 일반 저장소에 올려서 `https://saebye0k.github.io/yoake/`로 쓰고 싶다면 `basePath` 설정이 필요합니다.

## 빌드 확인

```bash
npm run build
```

정상적으로 빌드되면 `out` 폴더가 생성됩니다.
