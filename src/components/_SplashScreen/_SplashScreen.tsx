// // "use client";

// // import { AnimatePresence, motion } from "framer-motion";
// // import { useEffect, useState } from "react";

// // export default function SplashScreen({
// // 	children,
// // }: {
// // 	children: React.ReactNode;
// // }) {
// // 	const [isVisible, setIsVisible] = useState(true);

// // 	useEffect(() => {
// // 		const timer = setTimeout(() => {
// // 			setIsVisible(false);
// // 		}, 1500);

// // 		return () => clearTimeout(timer);
// // 	}, []);

// // 	return (
// // 		<>
// // 		{/* <div className="absolute top-24 flex gap-2">
// // 				{logoText.split("").map((char, index) => (
// // 					<motion.span
// // 						key={index}
// // 						initial={{ x: (index - 3) * 50, y: -200, opacity: 0 }}
// // 						animate={{
// // 							x: 0,
// // 							y: 60,
// // 							opacity: 1,
// // 							scale: [1, 1.2, 1],
// // 						}}
// // 						transition={{
// // 							delay: index * 0.3,
// // 							duration: 1,
// // 							ease: "easeOut",
// // 						}}
// // 						onAnimationComplete={() => {
// // 							if (index === logoText.length - 1) {
// // 								setCompleted(true);
// // 							}
// // 						}}
// // 						className="text-5xl font-bold text-primary"
// // 					>
// // 						{char}
// // 					</motion.span>
// // 				))}
// // 		</div> */}
// // 			<AnimatePresence>
// // 				{isVisible && (
// // 					<motion.div
// // 						className="fixed inset-0 flex items-center justify-center bg-primary text-primary-foreground z-50"
// // 						initial={{ opacity: 1 }}
// // 						exit={{ opacity: 0 }}
// // 						transition={{ duration: 0.8 }}
// // 					>
// // 						<motion.h1
// // 							initial={{ scale: 0.8, opacity: 0 }}
// // 							animate={{ scale: 1, opacity: 1 }}
// // 							exit={{ scale: 1.2, opacity: 0 }}
// // 							transition={{ duration: 0.8 }}
// // 							className="text-4xl font-bold"
// // 						>
// // 							Beshofy
// // 						</motion.h1>
// // 					</motion.div>
// // 				)}
// // 			</AnimatePresence>

// // 			<div className={`${isVisible ? "hidden" : "block"}`}>
// // 				{children}
// // 			</div>
// // 		</>
// // 	);
// // }

// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function RouteTransition() {
// 	const [showSplash, setShowSplash] = useState(true);
// 	const pathname = usePathname();

// 	useEffect(() => {
// 		setShowSplash(true);
// 		const timeout = setTimeout(() => setShowSplash(false), 1200); // وقت الظهور
// 		return () => clearTimeout(timeout);
// 	}, [pathname]);

// 	const showOnRoutes = ["/", "/contact", "/shop"];

// 	if (!showOnRoutes.includes(pathname)) return null;

// 	return (
// 		<AnimatePresence mode="wait">
// 			{showSplash && (
// 				<motion.div
// 				initial={{ scale: 0.8, opacity: 0 }}
// 				animate={{ scale: 1, opacity: 1 }}
// 				exit={{ scale: 1.2, opacity: 0 }}
// 				transition={{ duration: 0.6 }}
// 			>
// 				<img
// 					src="/logo.svg"
// 					alt="Beshofy Logo"
// 					className="w-32 h-32 object-contain"
// 				/>
// 			</motion.div>			
// 			)}
// 		</AnimatePresence>
// 	);
// }
