// "use client";

// import { motion } from "framer-motion";

// export default function Background() {
// 	return (
// 		<div className="fixed inset-0 -z-10 overflow-hidden">
// 			{/* Base gradient background */}
// 			<div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA] via-[#F0F9FF] to-[#E6F7FF]" />

// 			{/* Animated gradient overlay */}
// 			<motion.div
// 				className="absolute inset-0 opacity-30"
// 				animate={{
// 					background: [
// 						"radial-gradient(circle at 0% 0%, #aeefff 0%, transparent 50%)",
// 						"radial-gradient(circle at 100% 0%, #aeefff 0%, transparent 50%)",
// 						"radial-gradient(circle at 100% 100%, #aeefff 0%, transparent 50%)",
// 						"radial-gradient(circle at 0% 100%, #aeefff 0%, transparent 50%)",
// 						"radial-gradient(circle at 0% 0%, #aeefff 0%, transparent 50%)",
// 					],
// 				}}
// 				transition={{
// 					duration: 20,
// 					repeat: Infinity,
// 					ease: "linear",
// 				}}
// 			/>

// 			{/* Subtle grid pattern */}
// 			<div
// 				className="absolute inset-0 opacity-[0.03]"
// 				style={{
// 					backgroundImage: `
//             linear-gradient(to right, #000 1px, transparent 1px),
//             linear-gradient(to bottom, #000 1px, transparent 1px)
//           `,
// 					backgroundSize: "40px 40px",
// 				}}
// 			/>

// 			{/* Animated circles */}
// 			<motion.div
// 				className="absolute w-[300px] h-[300px] rounded-full bg-[#aeefff] opacity-10 blur-3xl"
// 				animate={{
// 					x: [0, 100, 0],
// 					y: [0, 50, 0],
// 				}}
// 				transition={{
// 					duration: 10,
// 					repeat: Infinity,
// 					ease: "easeInOut",
// 				}}
// 			/>
// 			<motion.div
// 				className="absolute w-[200px] h-[200px] rounded-full bg-[#aeefff] opacity-10 blur-3xl"
// 				animate={{
// 					x: [0, -100, 0],
// 					y: [0, -50, 0],
// 				}}
// 				transition={{
// 					duration: 8,
// 					repeat: Infinity,
// 					ease: "easeInOut",
// 				}}
// 			/>
// 		</div>
// 	);
// }
