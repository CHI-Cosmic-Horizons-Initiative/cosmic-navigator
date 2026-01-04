import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars({ count = 6000, scrollY = 0 }) {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 80 + 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        colors[i3] = 0.8 + Math.random() * 0.2;
        colors[i3 + 1] = 0.9 + Math.random() * 0.1;
        colors[i3 + 2] = 1;
      } else if (colorChoice < 0.7) {
        colors[i3] = 1;
        colors[i3 + 1] = 1;
        colors[i3 + 2] = 1;
      } else if (colorChoice < 0.85) {
        colors[i3] = 0.9 + Math.random() * 0.1;
        colors[i3 + 1] = 0.7 + Math.random() * 0.2;
        colors[i3 + 2] = 1;
      } else {
        colors[i3] = 1;
        colors[i3 + 1] = 0.9 + Math.random() * 0.1;
        colors[i3 + 2] = 0.6 + Math.random() * 0.2;
      }
    }
    
    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.008 + scrollY * 0.0002;
      ref.current.rotation.y = state.clock.elapsedTime * 0.012;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.85}
      />
    </Points>
  );
}

function GalaxyCore({ scrollY = 0 }) {
  const ref = useRef<THREE.Points>(null);
  const count = 12000;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const arm = Math.floor(Math.random() * 2);
      const armAngle = (arm * Math.PI);
      const distance = Math.random() ** 0.5 * 10;
      const angle = armAngle + (distance * 0.6) + (Math.random() - 0.5) * 0.4;
      
      positions[i3] = Math.cos(angle) * distance + (Math.random() - 0.5) * 0.4;
      positions[i3 + 1] = (Math.random() - 0.5) * 0.25 * (1 - distance / 10);
      positions[i3 + 2] = Math.sin(angle) * distance + (Math.random() - 0.5) * 0.4;
      
      const coreFactor = 1 - (distance / 10);
      colors[i3] = 0.5 + coreFactor * 0.5;
      colors[i3 + 1] = 0.3 + coreFactor * 0.5;
      colors[i3 + 2] = 0.7 + coreFactor * 0.3;
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
      ref.current.position.z = -20 + scrollY * 0.003;
    }
  });

  return (
    <group position={[5, -2, -20]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.025}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.7}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function NebulaCloud({ scrollY = 0 }) {
  const ref = useRef<THREE.Points>(null);
  const count = 2000;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 15 - 25;
      
      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;
      
      colors[i3] = 0.3 + Math.random() * 0.2;
      colors[i3 + 1] = 0.15 + Math.random() * 0.2;
      colors[i3 + 2] = 0.5 + Math.random() * 0.4;
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.003;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.5;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.18}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.12}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function DustParticles({ scrollY = 0 }) {
  const ref = useRef<THREE.Points>(null);
  const count = 500;
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 60;
      positions[i3 + 1] = (Math.random() - 0.5) * 40;
      positions[i3 + 2] = (Math.random() - 0.5) * 30 - 10;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.005;
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.001;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b9dc3"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

function Scene({ scrollY }: { scrollY: number }) {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.z = 10 - scrollY * 0.001;
  }, [scrollY, camera]);

  return (
    <>
      <ambientLight intensity={0.08} />
      <Stars scrollY={scrollY} />
      <GalaxyCore scrollY={scrollY} />
      <NebulaCloud scrollY={scrollY} />
      <DustParticles scrollY={scrollY} />
    </>
  );
}

interface StarFieldProps {
  className?: string;
}

export default function StarField({ className }: StarFieldProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed inset-0 ${className || ''}`} style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <Scene scrollY={scrollY} />
      </Canvas>
    </div>
  );
}