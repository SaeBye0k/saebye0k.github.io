---
title: "Unity 2D 전투 시스템 구현 기록"
description: "근접 공격, 쿨타임, HP 바를 구현하며 정리한 개발 기록입니다."
date: "2026-04-20"
category: "Devlog"
tags: ["Unity", "C#", "Game"]
featured: true
---

## 구현한 기능

Unity 2D 프로젝트에서 플레이어의 근접 공격, 공격 쿨타임, 적 데미지 처리, HP UI를 구현했습니다.

## 핵심 구조

- `Physics2D.OverlapCircleAll`로 공격 범위 내 적 탐색
- 쿨타임 변수로 연속 공격 제한
- 이벤트를 통해 HP UI 업데이트

## 느낀 점

기능 하나를 만들 때도 입력, 판정, 상태 변화, UI 반영이 함께 연결되어야 한다는 점을 확인했습니다.
