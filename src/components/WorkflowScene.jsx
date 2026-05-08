import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sparkles, Text } from '@react-three/drei';
import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

function WorkflowScene() {
  const [scenario, setScenario] = useState(0);

  return (
    <div className="relative h-[680px] w-full overflow-hidden rounded-[36px] border border-white/10 bg-[#07101f]/95 shadow-soft backdrop-blur-xl md:h-[750px]">
      <Canvas camera={{ position: [0, 1.2, 8], fov: 45 }}>
        <color attach="background" args={['#02030a']} />
        <fog attach="fog" args={['#02030a', 6, 16]} />
        <directionalLight position={[3, 4, 3]} intensity={1.3} color="#84d5ff" />
        <ambientLight intensity={0.2} />
        <pointLight position={[-3, 1.5, 2]} intensity={0.75} color="#38bdf8" />
        <pointLight position={[3, -1, 2]} intensity={0.7} color="#c084fc" />
        <OrbitControls enableZoom={false} autoRotate={false} enablePan={false} rotateSpeed={0} />
        <Sparkles count={80} scale={8} size={1.2} speed={0.3} color="#7dd3fc" />
        <WorkflowGraph scenario={scenario} />
      </Canvas>
      <ScenarioIndicator scenario={scenario} setScenario={setScenario} />
    </div>
  );
}

function ScenarioIndicator({ scenario, setScenario }) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      {['Direct Answer', 'Tool Call', 'Gap Detected', 'Self Improve'].map((label, idx) => (
        <button
          key={idx}
          onClick={() => setScenario(idx)}
          className={`px-3 py-1 text-xs font-semibold rounded-full transition ${scenario === idx ? 'bg-cyan-400 text-slate-950' : 'bg-white/10 text-cyan-300 hover:bg-white/20'}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function WorkflowGraph({ scenario }) {
  const root = useRef();

  const workflows = {
    0: {
      name: 'Direct Answer',
      beams: [
        { from: [-3, 0.8, 0], to: [0, 0.8, 0], color: '#38bdf8', delay: 0 },
        { from: [0, 0.8, 0], to: [3, 0.8, 0], color: '#22c55e', delay: 0.8 },
      ],
      nodes: [
        { position: [-3, 0.8, 0], label: 'USER QUERY', detail: 'Ask a question', color: '#38bdf8' },
        { position: [0, 0.8, 0], label: 'AI AGENT', detail: 'Has direct answer', color: '#a78bfa' },
        { position: [3, 0.8, 0], label: 'RESPONSE', detail: 'Instant reply', color: '#22c55e' },
      ],
    },
    1: {
      name: 'Tool Call',
      beams: [
        { from: [-3, 0.8, 0], to: [0, 0.8, 0], color: '#38bdf8', delay: 0 },
        { from: [0, 0.8, 0], to: [3, 0.8, 0], color: '#0ea5e9', delay: 0.8 },
        { from: [3, 0.8, 0], to: [3, -0.8, 0], color: '#0ea5e9', delay: 1.6 },
      ],
      nodes: [
        { position: [-3, 0.8, 0], label: 'USER QUERY', detail: 'Ask a question', color: '#38bdf8' },
        { position: [0, 0.8, 0], label: 'AI AGENT', detail: 'Needs tools', color: '#a78bfa' },
        { position: [3, 0.8, 0], label: 'TOOL CALL', detail: 'Execute APIs', color: '#0ea5e9' },
        { position: [3, -0.8, 0], label: 'RESPONSE', detail: 'Tool output', color: '#22c55e' },
      ],
    },
    2: {
      name: 'Gap Detected',
      beams: [
        { from: [-3, 0.8, 0], to: [0, 0.8, 0], color: '#38bdf8', delay: 0 },
        { from: [0, 0.8, 0], to: [1.5, -0.8, 0], color: '#f472b6', delay: 0.8 },
        { from: [1.5, -0.8, 0], to: [3, 0.8, 0], color: '#f472b6', delay: 1.6 },
      ],
      nodes: [
        { position: [-3, 0.8, 0], label: 'USER QUERY', detail: 'Ask a question', color: '#38bdf8' },
        { position: [0, 0.8, 0], label: 'AI AGENT', detail: 'Analyzes request', color: '#a78bfa' },
        { position: [1.5, -0.8, 0], label: 'GAP DETECTION', detail: 'Missing skill found', color: '#f472b6' },
        { position: [3, 0.8, 0], label: 'USER NOTIFIED', detail: 'Improving now...', color: '#ff9500' },
      ],
    },
    3: {
      name: 'Self Improve & Respond',
      beams: [
        { from: [-3, 0.8, 0], to: [0, 0.8, 0], color: '#38bdf8', delay: 0 },
        { from: [0, 0.8, 0], to: [1.5, -0.8, 0], color: '#f472b6', delay: 0.8 },
        { from: [1.5, -0.8, 0], to: [-1.5, -0.8, 0], color: '#22c55e', delay: 1.6 },
        { from: [-1.5, -0.8, 0], to: [0, -0.1, 0], color: '#22c55e', delay: 2.4 },
      ],
      nodes: [
        { position: [-3, 0.8, 0], label: 'USER QUERY', detail: 'Ask a question', color: '#38bdf8' },
        { position: [0, 0.8, 0], label: 'AI AGENT', detail: 'Analyzes request', color: '#a78bfa' },
        { position: [1.5, -0.8, 0], label: 'GAP DETECTION', detail: 'Missing skill', color: '#f472b6' },
        { position: [-1.5, -0.8, 0], label: 'SELF IMPROVE', detail: 'Upgrade capability', color: '#22c55e' },
        { position: [0, -0.1, 0], label: 'ENHANCED RESPONSE', detail: 'Smart answer', color: '#c084fc' },
      ],
    },
  };

  const currentWorkflow = workflows[scenario];

  return (
    <group ref={root} position={[0, 0, 0]}>
      {currentWorkflow.nodes.map((node, idx) => (
        <NodeSphere key={idx} position={new THREE.Vector3(...node.position)} label={node.label} detail={node.detail} color={node.color} />
      ))}
      {currentWorkflow.beams.map((beam, idx) => (
        <FlowBeam
          key={idx}
          from={new THREE.Vector3(...beam.from)}
          to={new THREE.Vector3(...beam.to)}
          color={beam.color}
          delay={beam.delay}
        />
      ))}
    </group>
  );
}

function NodeSphere({ position, label, detail, color }) {
  const pulse = useRef();
  useFrame(({ clock }) => {
    if (pulse.current) {
      pulse.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 2.5) * 0.05);
    }
  });

  return (
    <group position={position}>
      <mesh ref={pulse}>
        <icosahedronGeometry args={[0.45, 2]} />
        <meshStandardMaterial emissive={color} color="#0b1220" roughness={0.1} metalness={0.88} />
      </mesh>
      <Text position={[0, -0.75, 0]} fontSize={0.18} fontWeight="bold" color={color} anchorX="center" anchorY="middle" maxWidth={2}>
        {label}
      </Text>
      <Text position={[0, -0.95, 0]} fontSize={0.11} color="#cbd5e1" anchorX="center" anchorY="middle" maxWidth={1.8}>
        {detail}
      </Text>
    </group>
  );
}

function FlowBeam({ from, to, color, delay }) {
  const pulse = useRef();
  const dir = useMemo(() => {
    return new THREE.Vector3().subVectors(to, from).normalize();
  }, [from, to]);
  const distance = from.distanceTo(to);
  const mid = new THREE.Vector3().addVectors(from, to).multiplyScalar(0.5);
  const quaternion = useMemo(() => new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir), [dir]);

  useFrame(({ clock }) => {
    if (pulse.current) {
      const t = ((clock.getElapsedTime() + delay) * 0.4) % 1;
      pulse.current.position.copy(new THREE.Vector3().lerpVectors(from, to, t));
    }
  });

  return (
    <group>
      <mesh position={mid} quaternion={quaternion}>
        <cylinderGeometry args={[0.03, 0.03, distance, 10]} />
        <meshStandardMaterial emissive={color} color={color} transparent opacity={0.32} />
      </mesh>
      <mesh ref={pulse}>
        <sphereGeometry args={[0.1, 14, 14]} />
        <meshStandardMaterial emissive={color} color={color} roughness={0.1} metalness={0.94} />
      </mesh>
    </group>
  );
}

export default WorkflowScene;
