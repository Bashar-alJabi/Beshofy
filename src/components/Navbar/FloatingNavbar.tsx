// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { AlignLeft, EyeClosed, Home, ShoppingBag } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function FloatingNavbar() {
// 	const [open, setOpen] = useState(false);
// 	const router = useRouter();

// 	return (
// 		<motion.div
// 			initial={{ x: 20, opacity: 0 }}
// 			animate={{ x: 0, opacity: 1 }}
// 			transition={{ duration: 0.8, ease: "easeOut" }}
// 			className="fixed top-1/2 -translate-y-1/2 right-6 z-50">
// 			<AnimatePresence>
// 				{open && (
// 					<>
// 						{/* Home - Up */}
// 						<motion.button
// 							initial={{ y: 0, opacity: 0 }}
// 							animate={{ y: -50, opacity: 1 }}
// 							exit={{ y: 0, opacity: 0 }}
//                             whileTap={{ scale: 0.95 }}
// 							transition={{ type: "spring", stiffness: 300 }}
// 							onClick={() => router.push("/home")}
// 							className="absolute right-0 bg-white/90 text-black px-4 py-2 rounded-full shadow border backdrop-blur-sm flex items-center gap-2"
// 						>
// 							<Home className="w-5 h-5" />
// 							<span className="text-sm">Home</span>
// 						</motion.button>

// 						{/* Products - Down */}
// 						<motion.button
// 							initial={{ y: 0, opacity: 0 }}
// 							animate={{ y: 70, opacity: 1 }}
// 							exit={{ y: 0, opacity: 0 }}
//                             whileTap={{ scale: 0.95 }}
// 							transition={{ type: "spring", stiffness: 300 }}
// 							onClick={() => router.push("/products")}
// 							className="absolute right-0 bg-white/90 text-black px-4 py-2 rounded-full shadow border backdrop-blur-sm flex items-center gap-2"
// 						>
// 							<ShoppingBag className="w-5 h-5" />
// 							<span className="text-sm">Products</span>
// 						</motion.button>
// 					</>
// 				)}
// 			</AnimatePresence>

// 			{/* Toggle Button */}
// 			<button
// 				onClick={() => setOpen(!open)}
// 				className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
// 			>
//                 {open ? <EyeClosed size={24} /> : <AlignLeft size={24} />}
// 			</button>
// 		</motion.div>
// 	);
// }

"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FloatingShopButton() {
	const router = useRouter();

	return (
		<>
			<motion.button
				initial={{ x: 20, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 200 }}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				onClick={() => router.push("/shop")}
				className={cn(
					"fixed top-1/2 -translate-y-1/2 right-8 z-50",
					"bg-gradient-to-br from-primary to-primary/30 text-white backdrop-blur-lg shadow-xl hover:shadow-2xl",
					"w-14 h-14 rounded-full flex items-center justify-center gap-2"
				)}
			>
				<ShoppingBag size={24} />
				<motion.div 
					animate={{ rotate: 360 }}
					transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
					className="absolute inset-0 -top-3.5 -left-3.5 w-21 h-21"
				>
					<svg viewBox="0 0 100 100" className="w-full h-full">
						<defs>
							<path
								id="circlePath"
								d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
							/>
						</defs>
						<text fill="white" fontSize="10" fontWeight="500">
							<textPath
								href="#circlePath"
								startOffset="0"
								className="uppercase tracking-widest"
							>
								SHOP NOW • BESHOFY IT • Fill the Bag •
							</textPath>
						</text>
					</svg>
				</motion.div>
			</motion.button>
		</>
	);
}
