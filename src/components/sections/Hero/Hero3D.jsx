import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Text, Icosahedron } from '@react-three/drei';

const FloatingSymbol = ({ text, position, color, rotation, speed, floatIntensity }) => {
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
          emissiveIntensity={0.6} // 💡 밝게 빛나도록 설정 (다크/라이트 모두 잘 보임)
        />
      </Text>
    </Float>
  );
};

const FloatingShape = ({ position, color, scale }) => {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2} position={position}>
      <Icosahedron args={[1, 0]} scale={scale}>
        <meshStandardMaterial 
          color={color} 
          wireframe={true} 
          emissive={color}
          emissiveIntensity={0.5}
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
  return (
    <MouseParallaxGroup>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#6366f1" />
      
      {/* Symbols */}
      {/* React: 밝은 시안색 */}
      <FloatingSymbol text="React" position={[-4, 2, -2]} color="#00e1ff" rotation={[0.2, 0.4, 0]} speed={1.5} floatIntensity={2} />
      {/* JS: 밝은 노란색 */}
      <FloatingSymbol text="JS" position={[4, 1.5, -1]} color="#ffea00" rotation={[-0.2, -0.3, 0]} speed={2} floatIntensity={2.5} />
      {/* CSS: 밝은 파란색 */}
      <FloatingSymbol text="CSS" position={[-3, -2, 0]} color="#4d7cff" rotation={[0.1, 0.1, 0.1]} speed={1.8} floatIntensity={1.5} />
      {/* Braces: 보라색 */}
      <FloatingSymbol text="{ }" position={[3, -2, -3]} color="#c084fc" rotation={[0, -0.5, 0]} speed={1.2} floatIntensity={3} />
      {/* HTML tags: 민트/그린 */}
      <FloatingSymbol text="< />" position={[0, 3, -4]} color="#34d399" rotation={[0.3, 0, 0]} speed={2.2} floatIntensity={2} />

      {/* Shapes */}
      <FloatingShape position={[5, -3, -5]} color="#818cf8" scale={0.8} />
      <FloatingShape position={[-5, -1, -6]} color="#facc15" scale={1.2} />
      <FloatingShape position={[0, -4, -2]} color="#fb7185" scale={0.6} />
    </MouseParallaxGroup>
  );
};

const Hero3D = () => {
  return (
    // pointerEvents: 'none'으로 설정하여 드래그/클릭을 가로막지 않고, 전역 마우스 이벤트를 통해 패럴랙스 효과를 줌
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default Hero3D;
