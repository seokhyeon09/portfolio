import {icons} from './icons.jsx'

export const aboutHeader = {
    label: 'ABOUT ME',
    title: '나는 누구인가요?',
    descriptions: [
        '사용자 경험과 데이터의 흐름을 함께 고민하는 개발자 정석현입니다.',
        'React와 SCSS를 활용해 직관적이고 세련된 UI를 구현하는 것에 흥미가 있으며,',
        'Java를 기반으로 안정적인 로직을 설계하는 과정을 학습하고 있습니다.',
        '배운 것을 단순히 머리에 남기지 않고, 실제 서비스로 구현하며 부딪히고 성장하는 것을 즐깁니다.'
    ]
}

export const aboutMeInfo = {
    title: '나에 대해',
    subText: '개발자 이야기',
    icon: icons.user,
    desc: '경북대학교 소프트웨어 융합과를 졸업해 대우능력개발원에서 국비 교육을 들으며 부족한 부분을 채워 나가고 있습니다.'
}

export const coreValues = {
    title: '핵심 가치',
    icon: icons.heart, // assuming heart icon exists, if not we will use an appropriate one from icons.jsx
    items: [
        {
            title: '빠른 실행력',
            desc: '아이디어에서 배포까지 신속하게 전달합니다.',
            Icon: icons.bolt,
        },
        {
            title: '품질 우선',
            desc: '테스트와 코드 리뷰로 신뢰할 수 있는 코드를 작성합니다.',
            Icon: icons.shield,
        },
        {
            title: '팀 중심',
            desc: '협업과 소통을 통해 최고의 결과를 만듭니다.',
            Icon: icons.users,
        },
        {
            title: '지속 성장',
            desc: '매일 새로운 기술을 배우고 적용합니다.',
            Icon: icons.trend,
        },
    ]
}

export const timelineInfo = {
    title: '경력 타임라인',
    icon: icons.briefcase, // using briefcase
    items: [
        {
            range: '2026 - 현재',
            title: '프론트엔드 개발자',
            company: '웹에이전시 픽셀',
            companyColor: 'var(--color-warning)', // using standard warning color for orange
            dot: 'var(--color-warning)',
            desc: '다양한 기업 웹사이트 및 웹앱 제작, UI/UX 구현 전문',
        }
    ]
}

export const educationInfo = {
    title: '학력',
    icon: icons.graduation, // assuming graduation cap
    school: '경북대학교',
    major: '소프트웨어 융합과',
    range: '2022 — 2026'
}

export const aboutBanner = {
    badge: '🚀 함께 만들어요',
    title: '제가 어떤 기술을 갖고있는지 궁금하신가요?',
    desc: '제 기술들을 확인해보세요',
}