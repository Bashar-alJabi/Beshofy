"use client";

import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Group } from "three";

// 👜 حقيبة ثلاثية الأبعاد
function BagModel() {
	const groupRef = useRef<Group>(null);

	useFrame((state, delta) => {
		if (groupRef.current) {
			groupRef.current.rotation.y += delta * 0.3;
			groupRef.current.rotation.x = 0.2;
		}
	});

	return (
		<group ref={groupRef} scale={0.6}>
			<mesh>
				<boxGeometry args={[3, 4, 1.5]} />
				<meshPhysicalMaterial
					color="#aeefff"
					roughness={0.05}
					metalness={0.6}
					transmission={0.9}
					thickness={1.5}
					clearcoat={1}
					clearcoatRoughness={0.1}
					ior={1.5}
					reflectivity={1}
					attenuationDistance={0.5}
					attenuationColor="#aeefff"
				/>
			</mesh>

			<mesh position={[0, 1.5, 0]}>
				<torusGeometry args={[1.3, 0.1, 16, 100, Math.PI]} />
				<meshPhysicalMaterial
					color="#aeefff"
					roughness={0.05}
					metalness={0.6}
					transmission={0.9}
					thickness={1}
					clearcoat={1}
					clearcoatRoughness={0.1}
					ior={1.5}
					reflectivity={1}
				/>
			</mesh>
		</group>
	);
}

export default function GlassShoppingBag() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1, ease: "easeOut" }}
			className="fixed top-16 sm:top-12 md:top-4 lg:top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] z-50"
			>
			<Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
				<ambientLight intensity={0.5} />
				<directionalLight position={[5, 5, 5]} intensity={0.7} />
				<spotLight position={[-5, 5, 5]} intensity={0.6} angle={0.3} penumbra={1} />
				<BagModel />
				<ContactShadows position={[0, -2.5, 0]} opacity={0.25} scale={10} blur={2.5} />
				<Environment preset="sunset" />
				<OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
			</Canvas>
		</motion.div>
	);
}
