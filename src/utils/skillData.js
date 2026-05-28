export const skillsHeader = {
    label: 'TECH STACK',
    title: '기술 스택',
    desc: '배우고, 만들고, 성장합니다. 지금까지 쌓아온 기술들을 소개합니다.',
    stats: [
        { value: '4', label: '카테고리' },
        { value: '15+', label: '기술 스택' },
        { value: '2+', label: 'Years Exp' },
        { value: '20+', label: '프로젝트' },
    ]
}

export const skillData = [
    {
        key: 'language',
        icon: 'bolt',
        title: 'Language',
        color: '#6366f1', // indigo
        badge: 'Core',
        skills: [
            { name: 'JavaScript / ES6+', proficiency: 'Expert' },
            { name: 'TypeScript', proficiency: 'Advanced' },
            { name: 'HTML / CSS', proficiency: 'Expert' },
            { name: 'Java', proficiency: 'Intermediate' }
        ]
    },
    {
        key: 'frontend',
        icon: 'monitor',
        title: 'Front-end',
        color: '#eab308', // yellow
        badge: 'Main',
        skills: [
            { name: 'React', proficiency: 'Expert' },
            { name: 'SCSS / Styled Components', proficiency: 'Advanced' },
            { name: 'Tailwind CSS', proficiency: 'Advanced' },
            { name: 'Next.js', proficiency: 'Intermediate' }
        ]
    },
    {
        key: 'backend',
        icon: 'server',
        title: 'Back-end',
        color: '#10b981', // green
        badge: 'Growing',
        skills: [
            { name: 'Spring Boot', proficiency: 'Intermediate' },
            { name: 'Node.js / Express', proficiency: 'Intermediate' },
            { name: 'MySQL', proficiency: 'Intermediate' },
            { name: 'Oracle DB', proficiency: 'Learning' }
        ]
    },
    {
        key: 'tool',
        icon: 'pin',
        title: 'Tool',
        color: '#ef4444', // red
        badge: 'Daily',
        skills: [
            { name: 'Git / GitHub', proficiency: 'Expert' },
            { name: 'Figma', proficiency: 'Advanced' },
            { name: 'Notion', proficiency: 'Expert' },
            { name: 'Docker', proficiency: 'Learning' }
        ]
    }
];

export const proficiencyLegend = [
    {
        level: 'Expert',
        color: '#10b981',
        desc: '실무 수준의 깊은 이해. 아키텍처를 주도적으로 설계하고 복잡한 문제를 해결할 수 있음.'
    },
    {
        level: 'Advanced',
        color: '#6366f1',
        desc: '복잡한 기능 구현 가능. 코드 리뷰와 팀 협업에서 주도적 역할을 수행하며 능숙하게 다룸.'
    },
    {
        level: 'Intermediate',
        color: '#eab308',
        desc: '주요 기능 구현 가능. 공식 문서를 참고하며 실무 적용 및 트러블 슈팅을 할 수 있음.'
    },
    {
        level: 'Learning',
        color: '#64748b',
        desc: '기초 개념 이해. 개인 프로젝트에 도입하여 적극적으로 학습하며 사용해 보는 단계.'
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
            desc: 'App Router와 Server Components를 공부하며 SSR, SSG의 차이와 성능 최적화 전략을 익히고 있습니다.'
        },
        {
            name: 'Redux Toolkit',
            badge: '전역 상태 관리',
            color: '#a855f7', // purple
            desc: 'Context API의 한계를 경험한 후 Redux Toolkit으로 넘어와 slice, thunk 패턴을 익히고 있습니다.'
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
    badge: '함께 만들어요',
    title: '이 기술들로 만든 프로젝트가 궁금하신가요?',
    desc: '직접 구현한 프로젝트들을 확인해보세요.',
}
