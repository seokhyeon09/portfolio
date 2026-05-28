export const skillsHeader = {
    label: 'TECH STACK',
    title: '기술 스택',
    desc: '배우고, 만들고, 성장합니다. 지금까지 쌓아온 기술들을 소개합니다.',
    stats: [
        { value: '4', label: '카테고리' },
        { value: '15+', label: '기술 스택' },
        { value: '∞', label: 'Potential' },
        { value: '8', label: '프로젝트' },
    ]
}

export const skillData = [
    {
        key: 'language',
        icon: 'bolt',
        title: 'Language',
        badge: 'Core',
        skills: [
            { name: 'JavaScript / ES6+', proficiency: 'Advanced' },
            { name: 'TypeScript', proficiency: 'Learning' },
            { name: 'HTML / CSS', proficiency: 'Advanced' },
            { name: 'Java', proficiency: 'Basic' }
        ]
    },
    {
        key: 'frontend',
        icon: 'monitor',
        title: 'Front-end',
        badge: 'Main',
        skills: [
            { name: 'React', proficiency: 'Advanced' },
            { name: 'SCSS / Styled Components', proficiency: 'Advanced' },
            { name: 'Tailwind CSS', proficiency: 'Intermediate' },
            { name: 'Next.js', proficiency: 'Basic' },
            { name: 'Open API & Crawling', proficiency: 'Learning' }
        ]
    },
    {
        key: 'backend',
        icon: 'server',
        title: 'Back-end',
        badge: 'Growing',
        skills: [
            { name: 'Spring Boot', proficiency: 'Basic' },
            { name: 'Node.js / Express', proficiency: 'Learning' },
            { name: 'MySQL / Oracle', proficiency: 'Basic' },
            { name: 'Python', proficiency: 'Learning' }
        ]
    },
    {
        key: 'tool',
        icon: 'pin',
        title: 'Tool',
        badge: 'Daily',
        skills: [
            { name: 'Git / GitHub', proficiency: 'Intermediate' },
            { name: 'Figma', proficiency: 'Intermediate' },
            { name: 'Notion', proficiency: 'Advanced' },
            { name: 'Docker', proficiency: 'Learning' },
            { name: 'AWS Cloud', proficiency: 'Learning' }
        ]
    }
];

export const proficiencyLegend = [
    {
        level: 'Advanced',
        color: '#10b981',
        desc: '주요 기능을 주도적으로 구현할 수 있으며, 발생한 문제를 스스로 해결할 수 있습니다.'
    },
    {
        level: 'Intermediate',
        color: '#6366f1',
        desc: '공식 문서나 레퍼런스를 참고하여 필요한 기능을 구현하고 프로젝트에 적용할 수 있습니다.'
    },
    {
        level: 'Basic',
        color: '#eab308',
        desc: '기본적인 문법과 동작 원리를 이해하고 있으며, 간단한 예제를 활용할 수 있습니다.'
    },
    {
        level: 'Learning',
        color: '#64748b',
        desc: '최근 관심을 가지고 학습을 시작했으며, 개인 프로젝트에 도입해보는 단계입니다.'
    }
];

export const learningSkills = {
    label: 'CURRENTLY LEARNING',
    title: '지금 배우는 것들',
    desc: '계속 성장하는 개발자로, 새로운 기술을 꾸준히 학습합니다.',
    items: [
        {
            name: 'TypeScript',
            badge: '정적 타입 시스템',
            color: '#3b82f6', // blue
            desc: 'React 프로젝트에 점진적으로 TypeScript를 도입하며 타입 안전성의 중요성을 체감하고 있습니다.'
        },
        {
            name: 'Next.js 14',
            badge: 'React 풀스택 프레임워크',
            color: '#ffffff', // white
            desc: 'App Router와 Server Components를 기반으로 SSR, SSG의 차이를 이해하고 성능 최적화 전략을 실무에 적용하는 방법을 익히고 있습니다.'
        },
        {
            name: 'Open API & Crawling',
            badge: '외부 데이터 연동',
            color: '#a855f7', // purple
            desc: '카카오맵, 카카오 로그인 등 다양한 Open API를 프로젝트에 적용해 보았으며, 네이버 데이터 크롤링을 통해 필요한 정보를 수집하고 활용하는 방법을 익히고 있습니다.'
        },
        {
            name: 'AWS Cloud',
            badge: '클라우드 인프라',
            color: '#f59e0b', // orange
            desc: 'EC2, S3, RDS 기초를 공부하며 배포 파이프라인과 클라우드 서비스의 구조를 이해하는 중입니다.'
        }
    ]
};

export const skillsBanner = {
    badge: '준비된 신입',
    title: '이 기술들로 직접 만든 프로젝트들입니다',
    desc: '학습에 그치지 않고 결과물로 증명합니다.',
}
