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
    title: 'React Timer',
    description: 'React Hooks의 특성을 깊이 있게 활용하여 개발한 웹 기반 타이머 애플리케이션으로, 초 단위 시간 데이터를 안정적으로 다룬 프로젝트 입니다.',
    tags: ['React Hooks', 'useState', 'useRef'],
    type: 'web',
    demoLink: 'https://react-timer-rosy.vercel.app/',
    codeLink: 'https://github.com/seokhyeon09/react-timer',
    imageSrc: '/assets/images/react-timer.png',
    fallbackIcon: 'clock',
    deviceType: 'desktop'
  },
  {
    id: 2,
    title: 'Router Exam',
    description: 'React Router DOM의 동적 라우팅을 활용하여 커뮤니티 게시판과 전역 상태 기반의 Todo 앱 등 여러 독립적인 기능을 하나의 SPA(Single Page Application)로 성공적으로 통합한 프로젝트입니다.',
    tags: ['React Router DOM', 'Context API', 'Swiper.js', 'SPA'],
    type: 'web',
    demoLink: 'https://router-exam.vercel.app/',
    codeLink: 'https://github.com/seokhyeon09/router-exam',
    imageSrc: '/assets/images/router-exam.png',
    fallbackIcon: 'laptop',
    deviceType: 'desktop'
  },
  {
    id: 3,
    title: 'Weather OpenAPI',
    description: 'Axios를 통한 OpenWeather API 비동기 통신으로 실시간 기상 데이터를 연동하고, 환경 변수(.env)를 활용한 API Key 보안과 날씨에 따른 동적 UI 렌더링을 구현한 프로젝트입니다.',
    tags: ['React', 'Axios', 'OpenWeather API', '.env'],
    type: 'web',
    demoLink: 'https://react-weather-openapi.vercel.app/',
    codeLink: 'https://github.com/seokhyeon09/react-weather-openapi',
    imageSrc: '/assets/images/react-weather-openapi.png',
    fallbackIcon: 'cloudSun',
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
    description: 'Context API와 useReducer를 결합하여 전역 상태 관리를 구현하고, LocalStorage를 활용한 비휘발성 데이터 보존 및 동적 라우팅 방어 로직을 적용한 다이어리 웹 애플리케이션입니다.',
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
    title: 'Cooling Spot',
    description: 'Kakao Maps API를 비동기적으로 로드하여 다중 마커를 렌더링하고, Context API 및 LocalStorage를 활용해 즐겨찾기 상태를 전역으로 관리하는 지도 기반 웹 애플리케이션입니다.',
    tags: ['React', 'Kakao Maps API'],
    type: 'web',
    demoLink: 'https://miniproject-coolingcenter.vercel.app/map',
    codeLink: 'https://github.com/seokhyeon09/miniproject-coolingcenter',
    imageSrc: '/assets/images/miniproject-coolingcenter.png',
    fallbackIcon: 'mapPin',
    deviceType: 'desktop'
  },
  {
    id: 7,
    title: 'Kia selling',
    description: '데이터 모듈화를 통해 컴포넌트 재사용성을 높이고, SCSS와 Swiper.js를 활용하여 다이내믹한 슬라이드 애니메이션과 기기별 해상도 대응(반응형)을 구현한 웹사이트 리디자인 프로젝트입니다.',
    tags: ['React', 'SCSS', 'Swiper'],
    type: 'web',
    demoLink: 'https://react-tocobo-kia-ver.vercel.app/',
    codeLink: 'https://github.com/seokhyeon09/react-tocobo-kia-ver',
    imageSrc: '/assets/images/react-tocobo-kia-ver.png',
    fallbackIcon: 'car',
    deviceType: 'desktop'
  },
  {
    id: 8,
    title: 'Save Point',
    description: 'Spring Boot와 AWS S3를 활용하여 RESTful API 및 이미지 저장을 구현하고, Kakao OAuth 2.0 기반 인증과 Docker 컨테이너 및 커스텀 도메인 연동 배포까지 구축한 풀스택 프로젝트입니다.',
    tags: ['React', 'Spring Boot', 'AWS S3', 'Kakao Login api'],
    type: 'backend',
    demoLink: 'http://savepoint.kro.kr/',
    codeLink: 'https://github.com/seokhyeon09/project-savepoint',
    imageSrc: '/assets/images/project-savepoint.png',
    fallbackIcon: 'gamepad',
    deviceType: 'desktop'
  },
  {
    id: 9,
    title: 'Portfolio V1',
    description: '지금 보고 계신 이 포트폴리오 웹사이트입니다. 반응형 디자인과 재사용 가능한 컴포넌트 구조로 설계한 웹 어플리케이션 입니다.',
    tags: ['React 19', 'SCSS', 'Three.js'],
    type: 'web',
    demoLink: 'https://app.notion.com/p/Portfolio-3565b18cdc30809b8819de9c16a481d5',
    codeLink: 'https://github.com/seokhyeon09/portfolio',
    imageSrc: '/assets/images/portfolio.png',
    fallbackIcon: 'layout',
    deviceType: 'desktop'
  },
  {
    id: 10,
    title: '쇼핑 위시리스트 콜렉터',
    description: '파이썬 백엔드(FastAPI)와 네이버 쇼핑 API를 연동하여, 관심 상품을 실시간으로 검색하고 클라우드 DB(MongoDB)에 즐겨찾기로 관리할 수 있는 풀스택 웹 애플리케이션입니다.',
    tags: ['Python', 'FastAPI', 'MongoDB', 'Naver API'],
    type: 'backend',
    demoLink: 'https://miniproject-python-scraping.vercel.app/',
    codeLink: 'https://github.com/seokhyeon09/miniproject-python-scraping',
    imageSrc: '/assets/images/miniproject-python-scraping.png',
    fallbackIcon: 'server',
    deviceType: 'desktop'
  },
  {
    id: 11,
    title: 'ForexMonitor',
    description: '실시간 환율 API 연동 및 LocalStorage 기반 상태 관리를 활용하여 외화 자산 매수/매도 시 기초자금 차감 로직을 구현한 외환 자산 모니터링 애플리케이션입니다.',
    tags: ['React', 'API 연동', 'LocalStorage', '프롬프트 엔지니어링'],
    type: 'web',
    demoLink: 'https://forexmonitor-beryl.vercel.app/',
    codeLink: 'https://github.com/seokhyeon09/ForexMonitor',
    imageSrc: '/assets/images/ForexMonitor.png',
    fallbackIcon: 'dollarSign',
    deviceType: 'desktop'
  },
  {
    id: 12,
    title: 'Unity Survivor',
    description: 'Unity 6 엔진과 C#을 기반으로 2D 탑다운 서바이벌 게임을 개발하고, Vercel을 통한 WebGL 자동 배포 파이프라인(CI/CD)을 구축한 프로젝트입니다.',
    tags: ['Unity 6', 'C#', 'WebGL', 'CI/CD'],
    type: 'web',
    demoLink: 'https://webgl-unity-survivor.vercel.app/',
    codeLink: 'https://github.com/seokhyeon09/unity-survivor',
    imageSrc: '/assets/images/Unity Survivor.png',
    fallbackIcon: 'gamepad',
    deviceType: 'desktop'
  }
];

export const projectsHeader = {
    label: 'MY PROJECTS',
    title: '직접 부딪히며 만든 결과물',
    desc: '문제를 정의하고 해결하기 위해 치열하게 고민했던 과정을 담은 프로젝트들입니다.',
    stats: [
        { value: allProjects.length.toString(), label: '전체 프로젝트' },
        { value: '5', label: '기술 스택' },
        { value: '2026', label: '최근 작업 연도' },
    ]
};

// 메인 홈 화면에 띄울 3개의 대표 프로젝트 ID를 여기에 입력하세요.
export const FEATURED_PROJECT_IDS = [7, 8, 10]; 

export const featuredProjects = FEATURED_PROJECT_IDS
  .map(id => allProjects.find(p => p.id === id))
  .filter(Boolean);

export const projectsBanner = {
    badge: '어떤가요?',
    title: '저의 성장은 현재 진행형입니다.',
    desc: '좋은 팀에서 훌륭한 시너지를 내며 함께 성장하고 싶습니다.',
};
