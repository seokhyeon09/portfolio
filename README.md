# Personal Portfolio (개인 포트폴리오 웹사이트)

프론트엔드 개발자로서의 역량과 그동안 진행한 프로젝트들을 효과적으로 보여주기 위해 제작한 개인 포트폴리오 웹사이트입니다.

## Links
- 배포 주소: [배포된 Vercel 링크를 입력하세요]
- GitHub 저장소: [GitHub 저장소 링크를 입력하세요]

## Tech Stack (사용 기술)
- Frontend: React 19, JavaScript, Vite
- Styling: SCSS (CSS Modules)
- 3D / Animation: Three.js, React Three Fiber, Framer Motion
- Routing: React Router DOM
- Deployment: Vercel, GitHub
- API / External: Formspree (이메일 폼 전송 API)

## Key Features (주요 기능)
- 3D 인터랙티브 히어로 섹션: Three.js를 활용해 React, JS, CSS 등의 기술 스택 기호가 무중력 상태처럼 떠다니도록 구현했으며, 사용자의 마우스 움직임(Parallax)에 따라 3D 공간이 실시간으로 반응하여 동적인 UX를 제공합니다.
- 다크/라이트 모드 지원: CSS 변수(Variables)와 Context API를 활용하여 시스템 테마에 맞는 색상 전환 기능을 구현했습니다.
- 디바이스 목업 UI 적용: 단순한 이미지 나열이 아닌, 노트북(MacBook), 태블릿, 모바일 기기 형태의 CSS 목업을 직접 구현하여 실제 서비스가 구동되는 듯한 느낌을 줍니다.
- 이메일 전송 API 연동 (Contact): Formspree API를 활용하여, 별도의 백엔드 서버 없이도 방문자가 직접 이메일을 보낼 수 있는 연락처(Contact) 폼을 구현했습니다.

## Troubleshooting (트러블슈팅 및 문제 해결 과정)

### 1. 다크/라이트 모드 테마 전환 시 3D 오브젝트 가독성 저하 문제
- 문제점: 홈 화면의 3D 기술 기호들이 일반 재질(roughness, metalness 등)로 렌더링되었을 때, 다크 모드로 전환하면 빛 반사가 부족해 글씨(React, JS 등)가 어두컴컴하게 묻혀서 보이지 않는 가독성 이슈가 발생했습니다.
- 해결 방안: 조명(Light)의 세기를 무작정 올리기보다, Three.js의 meshStandardMaterial에 emissive(발광) 속성을 추가하여 모델 자체가 스스로 은은한 빛(Neon Glow)을 내도록 구현했습니다. 이를 통해 다크 모드에서는 형광등처럼 빛나고 라이트 모드에서는 선명한 색상을 유지하도록 최적화했습니다.

### 2. 3D 배경 캔버스의 마우스 클릭 이벤트 차단 문제
- 문제점: 화면 전체에 깔린 3D 캔버스(Hero3D)가 가장 상단에서 마우스 이벤트를 가로채어, 하단의 '프로젝트 보기' 버튼이나 메뉴가 클릭되지 않는 문제가 발생했습니다.
- 해결 방안: 3D 캔버스 래퍼에 pointer-events: none;을 부여하여 모든 클릭 이벤트가 하단 DOM으로 통과하도록 처리했습니다. 대신, 3D 화면의 마우스 반응(Parallax) 효과를 유지하기 위해 전역 객체인 window.addEventListener('mousemove')를 통해 마우스 좌표를 추적하여 3D 씬을 회전시키는 방식으로 로직을 우회하여 문제를 해결했습니다.

## 느낀점 / 개선할 점
- 느낀점: WebGL(Three.js)과 일반적인 React DOM을 결합하는 과정에서 이벤트 버블링과 렌더링 계층(z-index)을 다루는 방법에 대해 깊이 이해할 수 있었습니다.
- 개선할 점: 현재는 프로젝트가 추가될 때마다 배열 데이터를 수동으로 관리하고 있는데, 추후에는 Notion API나 외부 CMS를 연동하여 코드 수정 없이 프로젝트를 추가할 수 있도록 자동화해보고 싶습니다.

## Getting Started (로컬 실행 방법)

1. 저장소 클론 (Clone the repository)
git clone [GitHub 저장소 링크를 입력하세요]

2. 패키지 설치 (Install dependencies)
npm install

3. 개발 서버 실행 (Run the dev server)
npm run dev
