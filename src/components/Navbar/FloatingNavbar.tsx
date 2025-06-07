"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function FloatingShopButton() {
	return (
		<>
			<Link href={"/shop"}>
				<motion.div
					initial={{ x: 20, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ type: "spring", stiffness: 200 }}
					whileHover={{ scale: 1.15 }}
					whileTap={{ scale: 0.95 }}
					className={cn(
						"fixed top-1/2 -translate-y-1/2 right-8 md:right-12 z-50",
						"bg-gradient-to-br from-primary to-primary/30 text-[#f9f7fd] backdrop-blur-lg shadow-xl hover:shadow-2xl",
						"w-14 h-14 rounded-full flex items-center justify-center gap-2"
					)}
				>
					<ShoppingBag size={24} />
					<motion.div
						animate={{ rotate: 360 }}
						transition={{
							duration: 32,
							repeat: Infinity,
							ease: "linear",
						}}
						// whileHover={{
						// 	rotate: 360,
						// 	transition: {
						// 		duration: 8,
						// 		repeat: Infinity,
						// 		ease: "linear"
						// 	}
						// }}
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
				</motion.div>
			</Link>
		</>
	);
}
