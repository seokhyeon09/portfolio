export const projectsHeader = {
    label: 'MY PROJECTS',
    title: '직접 만든 것들',
    desc: '아이디어를 코드로, 코드를 서비스로. 개발 과정에서 배운 것들을 녹여낸 프로젝트들입니다.',
    stats: [
        { value: '6', label: 'Total Projects' },
        { value: '5', label: 'Tech Stacks' },
        { value: '2024', label: 'Latest Work' },
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
    deviceType: 'mobile'
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
    deviceType: 'tablet'
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
    deviceType: 'mobile'
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
    deviceType: 'mobile'
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
  }
];

// For the Home page (featured section)
export const featuredProjects = allProjects.slice(0, 3);

export const projectsBanner = {
    badge: '새로운 협업을 기다리고 있어요',
    title: '아직 망설이고 있나요?',
    desc: '부담 없이 간단한 인사 메시지만 보내도 괜찮습니다. 좋은 인연은 작은 대화에서 시작됩니다.',
};
