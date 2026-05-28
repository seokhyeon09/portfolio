export const contactHeader = {
  badge: 'CONTACT ME',
  title: '함께 만들어봐요',
  desc: '새로운 프로젝트, 협업, 혹은 간단한 인사도 환영합니다. 언제든지 연락주세요.',
  stats: [
    { icon: 'clock', value: '24h', label: '평균 응답시간' },
    { icon: 'globe', value: '100%', label: '원격 협업 가능' },
    { icon: 'checkCircle', value: '오픈', label: '현재 협업 가능' }
  ]
};

export const marqueeText = "현재 새로운 프로젝트 협업을 적극적으로 받고 있습니다 — 빠른 회신을 보장드려요 ⚡";

export const socialLinks = [
  {
    id: 'github',
    icon: 'github',
    title: 'GitHub',
    desc: 'github.com/minjundev',
    url: 'https://github.com/minjundev',
    stats: [
      { icon: 'star', value: 'Repos 12+' },
      { icon: 'users', value: 'Followers 48' }
    ]
  },
  {
    id: 'notion',
    icon: 'notion',
    title: 'Notion',
    desc: 'notion.so/minjundev',
    url: 'https://notion.so/minjundev'
  },
  {
    id: 'email',
    icon: 'mail',
    title: 'Email',
    desc: 'minjun@minjundev.io',
    url: 'mailto:minjun@minjundev.io',
    badge: 'Frontend Developer',
    location: 'Seoul, Korea'
  }
];

export const currentStatus = {
  isAvailable: true,
  items: [
    { icon: 'code', title: '프리랜서 프로젝트', desc: '단기/장기 모두 가능', active: true },
    { icon: 'users', title: '팀 합류 / 채용', desc: '포지션 오픈 시 검토 가능', active: true },
    { icon: 'lightbulb', title: '기술 자문 / 코드 리뷰', desc: '제한적으로 가능', active: true }
  ]
};
