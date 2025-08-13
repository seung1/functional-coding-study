import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Functional Coding",
  description: "『함수형 코딩』 을 공부하고 정리한 학습 기록 (2025년 8월~)",
  lastUpdated: true,
  sitemap: {
    hostname: "https://functional-coding-study.wonhub.dev",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "홈", link: "/" },
      { text: "공부 기록", link: "/0" },
    ],
    logo: {
      src: "/images/logo.webp",
      alt: "Functional Coding Logo",
    },
    editLink: {
      pattern:
        "https://github.com/seung1/functional-coding-study/edit/main/docs/:path",
      text: "GitHub에서 수정하기",
    },
    search: {
      provider: "local",
    },
    outline: {
      label: "페이지 내용",
    },
    docFooter: {
      prev: "이전 페이지",
      next: "다음 페이지",
    },
    lastUpdated: {
      text: "마지막 업데이트",
    },

    sidebar: [
      {
        text: "함수형 프로그래밍",
        link: "/0",
        items: [
          {
            text: "1장 - 쏙쏙 들어오는 함수형 코딩에 오신 것을 환영합니다",
            link: "/1",
          },
          { text: "2장 - 현실에서의 함수형 사고", link: "/2" },
        ],
      },
      {
        text: "Part 1: 액션과 계산, 데이터",
        collapsed: false,
        items: [
          { text: "3장 - 액션과 계산, 데이터의 차이를 알기" },
          { text: "4장 - 액션에서 계산 빼내기" },
          { text: "5장 - 더 좋은 액션 만들기" },
          {
            text: "6장 - 변경 가능한 데이터 구조를 가진 언어에서 불변성 유지하기",
          },
          { text: "7장 - 신뢰할 수 없는 코드를 쓰면서 불변성 지키기" },
          { text: "8장 - 계층형 설계 I" },
          { text: "9장 - 계층형 설계 II" },
        ],
      },
      {
        text: "Part 2: 일급 추상",
        collapsed: false,
        items: [
          { text: "10장 - 일급 함수 I" },
          { text: "11장 - 일급 함수 II" },
          { text: "12장 - 함수형 반복" },
          { text: "13장 - 함수형 도구 체이닝" },
          { text: "14장 - 중첩된 데이터에 함수형 도구 사용하기" },
          { text: "15장 - 타임라인 격리하기" },
          { text: "16장 - 타임라인 사이에 자원 공유하기" },
          { text: "17장 - 타임라인 조율하기" },
          { text: "18장 - 반응형 아키텍처와 어니언 아키텍처" },
          { text: "19장 - 함수형 프로그래밍 여행에 앞서" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/seung1/functional-coding-study",
      },
    ],
  },

  head: [
    [
      "link",
      { rel: "icon", type: "image/x-icon", href: "/images/favicon.ico" },
    ],
  ],
});
