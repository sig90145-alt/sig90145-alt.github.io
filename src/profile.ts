// 페이지에 들어가는 모든 내용은 이 파일에서만 수정합니다.
// 컴포넌트는 여기 값을 읽어서 그리기만 합니다.

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Profile {
  name: string
  tagline: string
  about: string[] // 문단 하나당 항목 하나
  skills: SkillGroup[]
}

export const profile: Profile = {
  name: '장성연',

  tagline: '천천히, 그러나 꾸준히 배우며 성장하는 학생',

  // TODO: 전공·학교·학년이 확정되면 첫 문단의 '대학생'을 구체적인 표현으로 바꾸기
  about: [
    '안녕하세요, 장성연입니다. 저는 무언가를 빠르게 해내기보다 차근차근 이해하며 쌓아 가는 것을 중요하게 생각합니다. 모르는 것이 생기면 그냥 넘어가지 않고, 직접 손으로 해 보면서 제 것으로 만들려고 노력하는 편입니다.',
    '좋아하는 운동은 축구입니다. 축구를 하면서 혼자 잘하는 것보다 동료와 호흡을 맞추는 일이 더 중요하다는 것을 배웠습니다. 눈에 띄지 않더라도 제 자리에서 맡은 역할을 성실히 해내는 것, 그리고 매번 조금씩 나아지기 위해 꾸준히 연습하는 것이 결국 팀을 움직인다고 믿습니다.',
    '공부와 일을 대하는 태도도 크게 다르지 않습니다. 함께하는 사람들의 이야기에 귀 기울이고, 부족한 점은 솔직하게 인정하며 배우려고 합니다. 아직 배울 것이 많지만, 그만큼 하루하루 성장하는 과정을 즐기고 있습니다.',
  ],

  // TODO: 실제로 다룰 수 있는 기술인지 확인 후 확정하기 (분류와 항목 모두 자유롭게 추가/삭제)
  skills: [
    { category: 'Language', items: ['C', 'Java', 'Python', 'JavaScript'] },
    { category: 'Web', items: ['HTML', 'CSS', 'React'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
  ],
}
