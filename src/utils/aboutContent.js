import {icons} from './icons.jsx'

export const aboutHeader = {
    label: 'ABOUT ME',
    title: '나는 누구인가요?',
    descriptions: [
        '새로운 기술을 배우고 적용하는 것을 즐기는 신입 프론트엔드 개발자 정석현입니다.',
        'React와 SCSS를 활용하여 사용자 친화적이고 직관적인 UI를 구현하는 데 관심이 많으며,',
        '기본기를 탄탄히 다지기 위해 꾸준히 고민하고 학습하고 있습니다.',
        '단순히 코드를 작성하는 것을 넘어, 팀과 함께 성장하며 가치를 만들어내는 개발자가 되고 싶습니다.'
    ]
}

export const aboutMeInfo = {
    title: '나에 대해',
    subText: '개발자 이야기',
    icon: icons.user,
    desc: '경복대학교 소프트웨어 융합과를 졸업해 대우능력개발원에서 국비 교육을 들으며 부족한 부분을 채워 나가고 있습니다.'
}

export const coreValues = {
    title: '핵심 가치',
    icon: icons.heart, // assuming heart icon exists, if not we will use an appropriate one from icons.jsx
    items: [
        {
            title: '빠른 학습력',
            desc: '모르는 것을 두려워하지 않고 스스로 찾아내어 빠르게 내 것으로 만듭니다.',
            Icon: icons.bolt,
        },
        {
            title: '탄탄한 기본기',
            desc: '당장 동작하는 코드보다 왜 동작하는지 원리를 먼저 이해하려고 노력합니다.',
            Icon: icons.shield,
        },
        {
            title: '팀워크와 소통',
            desc: '함께 고민하고 피드백을 주고받으며 더 나은 결과를 만들어가는 과정을 사랑합니다.',
            Icon: icons.users,
        },
        {
            title: '성장 마인드셋',
            desc: '어제보다 오늘 더 나은 개발자가 되기 위해 매일 꾸준히 코드를 작성합니다.',
            Icon: icons.trend,
        },
    ]
}

export const timelineInfo = {
    title: '성장 타임라인',
    icon: icons.trend,
    items: [
        {
            range: '2026',
            title: '프론트엔드 실무 프로젝트 과정',
            company: '대우능력개발원',
            companyColor: 'var(--color-purple)',
            dot: 'var(--color-purple)',
            desc: '실무 기반의 웹 개발 과정을 수료하며 React 및 팀 협업 프로젝트를 진행했습니다.',
        },
        {
            range: '2022 - 2026',
            title: '소프트웨어 융합과',
            company: '경복대학교',
            companyColor: 'var(--color-indigo)',
            dot: 'var(--color-indigo)',
            desc: '컴퓨터 공학 기초와 프로그래밍, 데이터 구조 등을 학습하며 개발자의 기본기를 다졌습니다.',
        }
    ]
}

export const educationInfo = {
    title: '학력',
    icon: icons.graduation, // assuming graduation cap
    school: '경복대학교',
    major: '소프트웨어 융합과',
    range: '2022 — 2026'
}

export const aboutBanner = {
    badge: '저의 첫 번째 팀이 되어주시겠어요?',
    title: '성장할 준비가 되어있는 신입 개발자입니다',
    desc: '저의 기술 스택을 확인해보세요',
}