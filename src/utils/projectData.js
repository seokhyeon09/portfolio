export const projectsHeader = {
    label: 'MY PROJECTS',
    title: '직접 부딪히며 만든 결과물',
    desc: '문제를 정의하고 해결하기 위해 치열하게 고민했던 과정을 담은 프로젝트들입니다.',
    stats: [
        { value: '8', label: '전체 프로젝트' },
        { value: '5', label: '기술 스택' },
        { value: '2026', label: '최근 작업 연도' },
    ]
};

export const projectFilters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web App' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'backend', label: 'API / Backend' },
    { id: 'opensource', label: 'Open Source' },
];

export const allProjects = [
  {
    id: 1,
    title: 'Kia selling',
    description: '기아(Kia)의 차량 판매 및 브랜드 홍보를 위한 웹사이트를 프론트엔드 관점에서 새롭게 리디자인한 프로젝트입니다.',
    tags: ['React', 'SCSS', 'Swiper'],
    type: 'web',
    demoLink: 'https://react-tocobo-kia-ver.vercel.app/',
    codeLink: 'https://github.com/seokhyeon09/react-tocobo-kia-ver',
    imageSrc: '', 
    fallbackIcon: 'car',
    deviceType: 'desktop'
  },
  {
    id: 2,
    title: 'Cooling Spot',
    description: '서울시 내 무더위 쉼터 위치를 시각적으로 제공하고, 원하는 장소를 검색 및 즐겨찾기 할 수 있는 지도 기반 웹 애플리케이션입니다.',
    tags: ['React', 'Kakao Maps API'],
    type: 'web',
    demoLink: 'https://miniproject-coolingcenter.vercel.app/map',
    codeLink: 'https://github.com/seokhyeon09/miniproject-coolingcenter',
    imageSrc: '', 
    fallbackIcon: 'mapPin',
    deviceType: 'desktop'
  },
  {
    id: 3,
    title: 'Save Point',
    description: '잊지 못할 게임의 순간들, 당신의 여정을 저장할 SavePoint 프로젝트입니다.',
    tags: ['React', 'Spring Boot', 'AWS S3', 'Kakao Login api'],
    type: 'backend',
    demoLink: 'http://savepoint.kro.kr/',
    codeLink: 'https://github.com/seokhyeon09/project-savepoint',
    imageSrc: '', 
    fallbackIcon: 'gamepad',
    deviceType: 'desktop'
  },
  {
    id: 4,
    title: 'Todo list',
    description: 'Analytics dashboard with real-time data visualization and dark mode support.',
    tags: ['React', 'Chart.js'],
    type: 'web',
    demoLink: '#',
    codeLink: '#',
    imageSrc: '', 
    fallbackIcon: 'checkSquare',
    deviceType: 'desktop'
  },
  {
    id: 5,
    title: 'Emotion Diary',
    description: 'Full-stack shopping app with payment integration and inventory management.',
    tags: ['Next.js', 'Prisma'],
    type: 'web',
    demoLink: '#',
    codeLink: '#',
    imageSrc: '', 
    fallbackIcon: 'smile',
    deviceType: 'desktop'
  },
  {
    id: 6,
    title: 'Weather API',
    description: 'Comprehensive component library with Storybook docs and accessibility support.',
    tags: ['Figma', 'Storybook'],
    type: 'opensource',
    demoLink: '#',
    codeLink: '#',
    imageSrc: '', 
    fallbackIcon: 'cloudSun',
    deviceType: 'desktop'
  },
  {
    id: 7,
    title: 'Movie DB explorer',
    description: 'TMDB API를 활용해 최신 영화 트렌드를 확인하고 검색할 수 있는 서비스입니다.',
    tags: ['React', 'REST API'],
    type: 'web',
    demoLink: '#',
    codeLink: '#',
    imageSrc: '',
    fallbackIcon: 'laptop',
    deviceType: 'desktop'
  },
  {
    id: 8,
    title: 'Portfolio V1',
    description: '지금 보고 계신 이 포트폴리오 웹사이트입니다. 반응형 디자인과 재사용 가능한 컴포넌트 구조로 설계했습니다.',
    tags: ['React', 'SCSS'],
    type: 'web',
    demoLink: '#',
    codeLink: '#',
    imageSrc: '',
    fallbackIcon: 'layout',
    deviceType: 'desktop'
  }
];

// For the Home page (featured section)
export const featuredProjects = allProjects.slice(0, 3);

export const projectsBanner = {
    badge: '어떤가요?',
    title: '저의 성장은 현재 진행형입니다.',
    desc: '좋은 팀에서 훌륭한 시너지를 내며 함께 성장하고 싶습니다.',
};
