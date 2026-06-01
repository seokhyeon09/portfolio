export const projectsHeader = {
    label: 'MY PROJECTS',
    title: '직접 부딪히며 만든 결과물',
    desc: '문제를 정의하고 해결하기 위해 치열하게 고민했던 과정을 담은 프로젝트들입니다.',
    stats: [
        { value: '9', label: '전체 프로젝트' },
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
    imageSrc: '/assets/images/react-tocobo-kia-ver.png',
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
    imageSrc: '/assets/images/miniproject-coolingcenter.png',
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
    imageSrc: '/assets/images/project-savepoint.png',
    fallbackIcon: 'gamepad',
    deviceType: 'desktop'
  },
  {
    id: 4,
    title: 'TodoList ver.2',
    description: '사용자의 일정을 관리할 수 있는 웹 애플리케이션으로, 상태 관리의 효율성과 코드의 유지보수성을 높이는 데 집중한 리팩토링 프로젝트입니다.',
    tags: ['React 19', 'Context API', 'useReducer', 'LocalStorage'],
    type: 'web',
    demoLink: 'https://todolist-ver2-drab.vercel.app/',
    codeLink: 'https://github.com/seokhyeon09/todolist-ver2',
    imageSrc: '/assets/images/todolist-ver2.png',
    fallbackIcon: 'checkSquare',
    deviceType: 'desktop'
  },
  {
    id: 5,
    title: 'Emotion Diary',
    description: '사용자의 감정 상태와 일상을 기록할 수 있는 웹 기반 다이어리 애플리케이션입니다.',
    tags: ['React 19', 'Context API', 'useReducer', 'LocalStorage'],
    type: 'web',
    demoLink: 'https://react-emotion-diary-rho.vercel.app/',
    codeLink: 'https://github.com/seokhyeon09/react-emotion-diary',
    imageSrc: '/assets/images/react-emotion-diary.png',
    fallbackIcon: 'smile',
    deviceType: 'desktop'
  },
  {
    id: 6,
    title: 'Weather OpenAPI',
    description: 'OpenWeather API를 활용하여 실시간 기상 정보를 제공하는 동적 웹 애플리케이션입니다.',
    tags: ['React', 'Axios', 'OpenWeather API', '.env'],
    type: 'web',
    demoLink: 'https://react-weather-openapi.vercel.app/',
    codeLink: 'https://github.com/seokhyeon09/react-weather-openapi',
    imageSrc: '/assets/images/react-weather-openapi.png',
    fallbackIcon: 'cloudSun',
    deviceType: 'desktop'
  },
  {
    id: 7,
    title: 'Router Exam',
    description: 'React Router를 핵심으로 활용하여 홈, 커뮤니티 게시판, 할 일 관리 등 여러 기능을 하나의 단일 페이지 애플리케이션(SPA)으로 통합한 프로젝트입니다.',
    tags: ['React Router DOM', 'Context API', 'Swiper.js', 'SPA'],
    type: 'web',
    demoLink: 'https://router-exam.vercel.app/',
    codeLink: 'https://github.com/seokhyeon09/router-exam',
    imageSrc: '/assets/images/router-exam.png',
    fallbackIcon: 'laptop',
    deviceType: 'desktop'
  },
  {
    id: 8,
    title: 'React Timer',
    description: 'React Hooks의 특성을 깊이 있게 활용하여 개발한 웹 기반 타이머 애플리케이션으로, 초 단위 시간 데이터를 안정적으로 다룹니다.',
    tags: ['React Hooks', 'useState', 'useRef'],
    type: 'web',
    demoLink: 'https://react-timer-rosy.vercel.app/',
    codeLink: 'https://github.com/seokhyeon09/react-timer',
    imageSrc: '/assets/images/react-timer.png',
    fallbackIcon: 'clock',
    deviceType: 'desktop'
  },
  {
    id: 9,
    title: 'Portfolio V1',
    description: '지금 보고 계신 이 포트폴리오 웹사이트입니다. 반응형 디자인과 재사용 가능한 컴포넌트 구조로 설계했습니다.',
    tags: ['React 19', 'SCSS', 'Three.js'],
    type: 'web',
    demoLink: 'https://app.notion.com/p/Portfolio-3565b18cdc30809b8819de9c16a481d5',
    codeLink: 'https://github.com/seokhyeon09/portfolio',
    imageSrc: '/assets/images/portfolio.png',
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
