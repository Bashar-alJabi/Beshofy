// "use client";

// import { Button } from "@/components/ui/button";
// import { motion, useAnimation } from "framer-motion";
// import { ShoppingBag } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { useEffect, useRef, useState } from "react";
// // import ThreeBackground from "./ThreeBackground";

// export default function IntroPage() {
// 	const [currentLetter, setCurrentLetter] = useState(0);
// 	const [completed, setCompleted] = useState(false);

// 	const router = useRouter();
// 	const controls = useAnimation();

// 	const logoText = "Beshofy";

// 	const bagRef = useRef<HTMLDivElement>(null);
// 	const letterRef = useRef<HTMLSpanElement>(null);
// 	const [fallDistance, setFallDistance] = useState({ x: 0, y: 180 }); // default fallback

// 	useEffect(() => {
// 		if (letterRef.current && bagRef.current) {
// 			const letterRect = letterRef.current.getBoundingClientRect();
// 			const bagRect = bagRef.current.getBoundingClientRect();
// 			// Calculate vertical and horizontal distance from letter to bag center
// 			const y =
// 				bagRect.top + bagRect.height / 2 - (letterRect.top + letterRect.height / 2);
// 			const x =
// 				bagRect.left + bagRect.width / 2 - (letterRect.left + letterRect.width / 2);
// 			setFallDistance({ x, y });
// 		}
// 	}, [currentLetter, completed]);

// 	useEffect(() => {
// 		if (currentLetter >= 0 && currentLetter < logoText.length) {
// 			controls.start({
// 				scale: [1, 1.15, 1],
// 				boxShadow: [
// 					"0px 0px 0px rgba(255, 255, 255, 0)",
// 					"0px 0px 20px rgba(255, 255, 255, 0.8)",
// 					"0px 0px 0px rgba(255, 255, 255, 0)",
// 				],
// 				transition: { duration: 0.5, ease: "easeInOut" },
// 			});
// 		}
// 	}, [currentLetter, controls]);

// 	// Auto redirect when done
// 	// useEffect(() => {
// 	// 	if (completed) {
// 	// 		const timeout = setTimeout(() => {
// 	// 			router.push("/welcome");
// 	// 		}, 2000)
// 	// 		return () => clearTimeout(timeout);
// 	// 	}
// 	// }, [completed, router]);

// 	return (
// 		<div className="flex flex-col items-center justify-center min-h-screen bg-background relative overflow-hidden">
// 			{/* <ThreeBackground /> */}
// 			<div className="flex flex-col items-center gap-6">
// 				{/* Letters */}
// 				<div className="flex mb-8 relative" style={{ height: 48 }}>
// 					{logoText.split("").map((char, index) => (
// 						<div key={index} className="relative w-10 h-12">
// 							{index > currentLetter && (
// 								<span className="absolute inset-0 flex justify-center items-center text-5xl font-bold text-primary">
// 									{char}
// 								</span>
// 							)}
// 							{index === currentLetter && (
// 								<motion.span
// 									ref={letterRef}
// 									initial={{ y: 0, x: 0, opacity: 1 }}
// 									animate={{ y: fallDistance.y, x: fallDistance.x, opacity: 0 }}
// 									transition={{ duration: 0.5 }}
// 									onAnimationComplete={() => {
// 										if (index === logoText.length - 1) {
// 											setCompleted(true);
// 										} else {
// 											setCurrentLetter((prev) => prev + 1);
// 										}
// 									}}
// 									className="absolute inset-0 flex justify-center items-center text-5xl font-bold text-primary"
// 								>
// 									{char}
// 								</motion.span>
// 							)}
// 						</div>
// 					))}
// 				</div>

// 				{/* ShoppingBag */}
// 				<motion.div ref={bagRef} animate={controls} className="relative z-10">
// 					<ShoppingBag
// 						size={80}
// 						className={`text-primary ${
// 							completed
// 								? "drop-shadow-[0_0_10px_var(--tw-shadow-color)] shadow-primary"
// 								: ""
// 						}`}
// 					/>
// 				</motion.div>

// 				{/* Phrase */}
// 				{completed && (
// 					<motion.p
// 						initial={{ opacity: 0 }}
// 						animate={{ opacity: 1 }}
// 						transition={{ delay: 0.5 }}
// 						className="text-center text-muted-foreground font-semibold text-lg"
// 					>
// 						Welcome to your shopping journey...
// 					</motion.p>
// 				)}
// 			</div>

// 			{/* Skip */}
// 			{!completed && (
// 				<Button
// 					variant={"link"}
// 					onClick={() => router.push("/home")}
// 					className="absolute bottom-8 text-lg text-muted-foreground underline cursor-pointer"
// 				>
// 					Skip
// 				</Button>
// 			)}
// 		</div>
// 	);
// }
