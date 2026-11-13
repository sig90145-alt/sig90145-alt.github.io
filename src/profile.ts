// 페이지에 들어가는 모든 내용은 이 파일에서만 수정합니다.
// 컴포넌트는 여기 값을 읽어서 그리기만 합니다.

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Project {
  title: string
  description: string
  tags: string[]
  link?: string // 없으면 생략
}

export interface ContactLink {
  label: string // 화면에 보이는 이름 (예: 'GitHub')
  url: string // 'https://...' 또는 'mailto:...'
}

// 히어로 아래 한 줄 정보 (라벨은 컴포넌트에 고정)
export interface HeroFacts {
  role: string // 희망 직무
  location: string // 근무 가능 지역
  availability: string // 입사 가능 시기
}

// 학습·경력 타임라인 항목 (위에서부터 최신순, 첫 항목만 강조 점으로 표시)
export interface TimelineItem {
  period: string
  title: string
  description: string
}

export interface Profile {
  name: string
  subtitle: string // 상단 바 가운데 부제
  tagline: string
  facts: HeroFacts
  about: string[] // 문단 하나당 항목 하나
  quote: string // 소개 아래 인용구 (따옴표는 화면에서 자동으로 붙음)
  skills: SkillGroup[]
  projects: Project[]
  timeline: TimelineItem[]
  contactMessage: string // 연락처 카드 안내 문장
  links: ContactLink[] // 첫 항목이 강조(채움) 버튼
}

export const profile: Profile = {
  name: '장성연',

  // TODO: 상단 바 부제 확정하기 (예: 연도 · 분야)
  subtitle: '2026 · 웹 개발',

  tagline: '천천히, 그러나 꾸준히 배우며 성장하는 학생',

  // TODO: 희망 직무 / 근무 가능 지역 / 입사 가능 시기 채우기
  facts: {
    role: '[희망 직무]',
    location: '[근무 가능 지역]',
    availability: '[입사 가능 시기]',
  },

  // TODO: 전공·학교·학년이 확정되면 첫 문단의 '대학생'을 구체적인 표현으로 바꾸기
  about: [
    '안녕하세요, 장성연입니다. 저는 무언가를 빠르게 해내기보다 차근차근 이해하며 쌓아 가는 것을 중요하게 생각합니다. 모르는 것이 생기면 그냥 넘어가지 않고, 직접 손으로 해 보면서 제 것으로 만들려고 노력하는 편입니다.',
    '좋아하는 운동은 축구입니다. 축구를 하면서 혼자 잘하는 것보다 동료와 호흡을 맞추는 일이 더 중요하다는 것을 배웠습니다. 눈에 띄지 않더라도 제 자리에서 맡은 역할을 성실히 해내는 것, 그리고 매번 조금씩 나아지기 위해 꾸준히 연습하는 것이 결국 팀을 움직인다고 믿습니다.',
    '공부와 일을 대하는 태도도 크게 다르지 않습니다. 함께하는 사람들의 이야기에 귀 기울이고, 부족한 점은 솔직하게 인정하며 배우려고 합니다. 아직 배울 것이 많지만, 그만큼 하루하루 성장하는 과정을 즐기고 있습니다.',
  ],

  // TODO: 일하는 태도를 보여 주는 한 문장으로 다듬기 (임시: 소개 문단에서 발췌)
  quote: '눈에 띄지 않더라도, 제 자리에서 맡은 역할을 성실히 해냅니다.',

  // TODO: 실제로 다룰 수 있는 기술인지 확인 후 확정하기 (분류와 항목 모두 자유롭게 추가/삭제)
  skills: [
    { category: 'Language', items: ['C', 'Java', 'Python', 'JavaScript'] },
    { category: 'Web', items: ['HTML', 'CSS', 'React'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
  ],

  // TODO: 실제 프로젝트·활동으로 바꾸기 (1~3개 권장)
  projects: [
    {
      title: '자기소개 페이지',
      description: 'React와 TypeScript로 만든 한 페이지 자기소개 사이트입니다. 내용은 한 파일에 모으고, 화면은 구역별 컴포넌트로 나눠 구성했습니다.',
      tags: ['React', 'TypeScript', 'Vite', 'CSS'],
    },
    {
      title: '프로젝트 이름',
      description: '어떤 문제를 풀었는지, 내가 맡은 역할은 무엇이었는지 한두 문장으로 적어 주세요.',
      tags: ['Java'],
    },
  ],

  // TODO: 실제 학습·경력·학력으로 바꾸기 (최신 항목을 맨 위에)
  timeline: [
    { period: '[기간]', title: '[교육 과정명]', description: '[배운 내용과 결과물]' },
    { period: '[기간]', title: '[경력 또는 활동]', description: '[맡은 역할과 성과]' },
    { period: '[기간]', title: '[학력]', description: '[학교 · 전공]' },
  ],

  // TODO: 연락처 안내 문장 확정하기
  contactMessage: '함께 일할 기회가 있다면 편하게 연락 주세요.',

  // TODO: 실제 GitHub 주소와 이메일로 바꾸기
  links: [
    { label: 'GitHub', url: 'https://github.com/' },
    { label: 'Email', url: 'mailto:example@example.com' },
    // TODO: 실제 블로그 주소로 바꾸거나, 블로그가 없으면 이 항목 삭제
    { label: '블로그', url: 'https://example.com/' },
  ],
}
