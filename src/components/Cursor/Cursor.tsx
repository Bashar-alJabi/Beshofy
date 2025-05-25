"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);

	useEffect(() => {
		const move = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		const handleMouseEnter = () => setIsHovering(true);
		const handleMouseLeave = () => setIsHovering(false);

		window.addEventListener("mousemove", move);
		document.addEventListener("mouseenter", handleMouseEnter);
		document.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			window.removeEventListener("mousemove", move);
			document.removeEventListener("mouseenter", handleMouseEnter);
			document.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return (
		<motion.div
			className="pointer-events-none fixed -top-2.5 -left-2.5 z-[9999] hidden sm:block"
			style={{
				transform: `translate(${position.x}px, ${position.y}px)`,
			}}
		>
			<motion.div
				initial={{ scale: 1 }}
				animate={{ scale: [1, 1.4, 1] }}
				transition={{
					duration: 1.5,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className={`w-6 h-6 rounded-full backdrop-blur border border-background/30 transition-all duration-300 ${
					isHovering ? "bg-background/20 mix-blend-difference" : "bg-background/10"
				}`}
			/>
		</motion.div>
	);
}
