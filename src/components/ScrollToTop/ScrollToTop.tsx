"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			setVisible(window.scrollY > 300);
		};
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<AnimatePresence mode="wait">
			{visible && (
				<motion.button
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1, rotate: 0 }}
					exit={{ opacity: 0, scale: 0.6 }}
					transition={{ duration: 0.3, ease: "easeOut" }}
					onClick={scrollToTop}
					className="group fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full border-2 border-primary bg-primary/10 backdrop-blur-xs shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden text-primary flex items-center justify-center"
				>
                    <ArrowUp size={30} className="group-hover:-translate-y-1 transition-transform duration-300"/>
				</motion.button>
			)}
		</AnimatePresence>
	);
}
