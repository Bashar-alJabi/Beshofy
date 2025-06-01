"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface FallingItem {
	id: string;
	emoji: string;
	left: number;
	delay: number;
	duration: number;
}

const emojis = ["🛒", "🎨", "🧑‍💻", "📦", "💻", "✏️", "🛍️"];

const getRandom = (min: number, max: number) =>
	Math.random() * (max - min) + min;

const FallingDecorations = () => {
	const [items, setItems] = useState<FallingItem[]>([]);

	useEffect(() => {
		// Items first time 
		const initialItems = Array.from({ length: 5 }, () => ({
			id: crypto.randomUUID(),
			emoji: emojis[Math.floor(Math.random() * emojis.length)],
			left: getRandom(10, 90),
			delay: 0,
			duration: getRandom(15, 30),
		}));
		setItems(initialItems);
		// Items each 5sec
		const interval = setInterval(() => {
			setItems((prev) => [
				...prev,
				{
					id: crypto.randomUUID(),
					emoji: emojis[Math.floor(Math.random() * emojis.length)],
					left: getRandom(10, 90),
					delay: 0,
					duration: getRandom(15, 30),
				},
			]);
			// number of items each time
			setItems((prev) => prev.slice(-5));
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	// Fog
	const { scrollY } = useScroll();
	const fogX = useTransform(scrollY, [0, 500, 1000], [-50, 1100, -100]);
	const fogY = useTransform(scrollY, [0, 500, 1000], [0, 100, 400]);
	const fogOpacity = useTransform(scrollY, [0, 200], [0.4, 0.6]);
	const fogScale = useTransform(scrollY, [0, 800], [1, 1.4]);

	return (
		<>
			{/* <div className="pointer-events-none fixed top-0 left-0 w-full h-full overflow-hidden z-0"> */}
			<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
				<motion.div
					style={{
						x: fogX,
						y: fogY,
						opacity: fogOpacity,
						scale: fogScale,
					}}
					className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full z-0 pointer-events-none bg-foreground/10 blur-3xl"
				/>
				{/* Items */}
				{items.map((item) => (
					<motion.div
						key={item.id}
						initial={{ y: -50, opacity: 0 }}
						animate={{ y: "100vh", opacity: 0.5 }}
						transition={{
							delay: item.delay,
							duration: item.duration,
							ease: "easeInOut",
							// ease: "linear",
						}}
						style={{
							position: "absolute",
							left: `${item.left}vw`,
							fontSize: "1.5rem",
						}}
					>
						{item.emoji}
					</motion.div>
				))}
			</div>
		</>
	);
};

export default FallingDecorations;
