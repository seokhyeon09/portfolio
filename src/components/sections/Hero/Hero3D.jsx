import React, { useRef, useEffect, useContext } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Text, Icosahedron } from '@react-three/drei';
import { ThemeContext } from '../../../context/themeContext';

const FloatingSymbol = ({ text, position, color, rotation, speed, floatIntensity, isDark }) => {
  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={floatIntensity} position={position}>
      <Text
        color={color}
        fontSize={1.2}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
        rotation={rotation}
      >
        {text}
        <meshStandardMaterial 
          color={color} 
          roughness={0.2} 
          metalness={0.8} 
          emissive={color}
          emissiveIntensity={isDark ? 0.3 : 0.6} // 💡 다크 모드일 때 빛 발산 줄임
        />
      </Text>
    </Float>
  );
};

const FloatingShape = ({ position, color, scale, isDark }) => {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2} position={position}>
      <Icosahedron args={[1, 0]} scale={scale}>
        <meshStandardMaterial 
          color={color} 
          wireframe={true} 
          emissive={color}
          emissiveIntensity={isDark ? 0.2 : 0.5}
        />
      </Icosahedron>
    </Float>
  );
};

// 마우스 움직임에 따라 카메라가 아닌 그룹(전체 씬)을 회전시키는 컴포넌트
const MouseParallaxGroup = ({ children }) => {
  const groupRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const { size } = useThree();
  const isMobile = size.width <= 600;

  useEffect(() => {
    const handleMouseMove = (e) => {
      // 화면 중앙을 0, 끝을 1/-1로 정규화
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // 마우스 위치에 따른 목표 회전값
    const targetX = mouse.current.y * 0.3; 
    const targetY = mouse.current.x * 0.5;

    // 부드럽게 목표 회전값으로 이동 (lerp)
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * delta * 2;
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * delta * 2;
    
    // 마우스를 가만히 두어도 서서히 회전하도록 추가
    groupRef.current.rotation.y += delta * 0.1;
  });

  return <group ref={groupRef} scale={isMobile ? 0.6 : 1}>{children}</group>;
};

const Scene = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <MouseParallaxGroup>
      <ambientLight intensity={isDark ? 0.2 : 0.5} />
      <directionalLight position={[10, 10, 5]} intensity={isDark ? 0.5 : 1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#6366f1" />
      
      {/* Symbols - 더 바깥쪽으로 위치 이동 */}
      {/* React: 밝은 시안색 */}
      <FloatingSymbol text="React" position={[-6, 3.5, -2]} color="#00e1ff" rotation={[0.2, 0.4, 0]} speed={1.5} floatIntensity={2} isDark={isDark} />
      {/* JS: 밝은 노란색 */}
      <FloatingSymbol text="JS" position={[6, 2.5, -1]} color="#ffea00" rotation={[-0.2, -0.3, 0]} speed={2} floatIntensity={2.5} isDark={isDark} />
      {/* CSS: 밝은 파란색 */}
      <FloatingSymbol text="CSS" position={[-5, -3.5, 0]} color="#4d7cff" rotation={[0.1, 0.1, 0.1]} speed={1.8} floatIntensity={1.5} isDark={isDark} />
      {/* Braces: 보라색 */}
      <FloatingSymbol text="{ }" position={[5, -3, -3]} color="#c084fc" rotation={[0, -0.5, 0]} speed={1.2} floatIntensity={3} isDark={isDark} />
      {/* HTML tags: 민트/그린 */}
      <FloatingSymbol text="< />" position={[0, 4.5, -4]} color="#34d399" rotation={[0.3, 0, 0]} speed={2.2} floatIntensity={2} isDark={isDark} />

      {/* Shapes */}
      <FloatingShape position={[6, -4, -5]} color="#818cf8" scale={0.8} isDark={isDark} />
      <FloatingShape position={[-6, -1, -6]} color="#facc15" scale={1.2} isDark={isDark} />
      <FloatingShape position={[0, -5.5, -2]} color="#fb7185" scale={0.6} isDark={isDark} />
    </MouseParallaxGroup>
  );
};

const Hero3D = () => {
  return (
    // height를 늘리고, 마스크를 적용하여 아래쪽 경계를 부드럽게 페이드 아웃 처리
    <div style={{ 
      width: '100vw', 
      height: '150vh', 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      zIndex: 0, 
      pointerEvents: 'none',
      maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
    }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default Hero3D;
