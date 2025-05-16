// "use client";

// import clsx from "clsx";
// import { motion } from "framer-motion";
// import { Minus, Newspaper } from "lucide-react";
// import { useState } from "react";
// import Marquee from "react-fast-marquee";

// export default function TickerBar() {
// 	const [visible, setVisible] = useState(true);

// 	const items = [
// 		"🛒 Latest Sale: Zucchini Cooking Course 🎉",
// 		"🤯 Someone just bought a digital UFO tracker!",
// 		"🎨 Don't miss: AI-generated art for cats!",
// 		"📚 New drop: 300-page guide on sneezing etiquette",
// 		"💾 Vintage floppy disks now available!",
// 	];

// 	if (!visible) {
// 		return (
// 			<button
// 				onClick={() => setVisible(true)}
// 				className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-white/30 dark:bg-black/30 backdrop-blur p-2 rounded-full shadow-lg hover:scale-110 transition"
// 			>
// 				<Newspaper className="w-4 h-4 text-primary" />
// 			</button>
// 		);
// 	}

// 	return (
// 		<motion.div
// 			initial={{ y: -50, opacity: 0 }}
// 			animate={{ y: 0, opacity: 1 }}
// 			transition={{ type: "spring", stiffness: 120 }}
// 			className={clsx(
// 				"fixed top-20 left-1/2 -translate-x-1/2 z-50",
// 				"w-[90%] max-w-2xl px-4 py-2",
// 				"rounded-xl shadow-xl border border-white/20",
// 				"bg-white/20 dark:bg-black/20 backdrop-blur-md",
// 				"relative overflow-hidden"
// 			)}
// 		>
// 			{/* Close Button */}
// 			<button
// 				onClick={() => setVisible(false)}
// 				className="absolute -top-0.5 right-1 text-xs text-muted-foreground hover:text-destructive cursor-pointer"
// 			>
// 				<Minus className="w-4 h-4" />
// 			</button>

// 			<Marquee gradient={false} speed={40}>
// 				{items.map((text, idx) => (
// 					<motion.span
// 						key={idx}
// 						className="mx-4 whitespace-nowrap font-medium text-sm text-foreground"
// 						whileHover={{ scale: 1.1 }}
// 						transition={{ type: "spring", stiffness: 300 }}
// 					>
// 						{text}
// 					</motion.span>
// 				))}
// 			</Marquee>
// 		</motion.div>
// 	);
// }
