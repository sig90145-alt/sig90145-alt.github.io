// 본문 구역의 앵커 id·제목·목차 번호 (고정 라벨)
// 목차와 각 구역 제목이 같은 값을 쓰도록 한곳에 모아 둠
export const SECTIONS = {
  about: { id: 'about', title: '소개', numeral: '一' },
  stack: { id: 'stack', title: '기술 스택', numeral: '二' },
  projects: { id: 'projects', title: '프로젝트', numeral: '三' },
  timeline: { id: 'timeline', title: '학습 · 경력', numeral: '四' },
  contact: { id: 'contact', title: '연락처', numeral: '五' },
} as const

export const SECTION_ORDER = [
  SECTIONS.about,
  SECTIONS.stack,
  SECTIONS.projects,
  SECTIONS.timeline,
  SECTIONS.contact,
]

// http(s) 링크만 새 탭으로 연다. mailto 등은 같은 탭.
export const isExternal = (url: string) => /^https?:\/\//i.test(url)
