"use client"

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	const isLight = theme === "light";

	return (
		<Button
			variant={"ghost"}
			onClick={() => setTheme(isLight ? "dark" : "light")}
			className="w-10 h-10 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-md shadow-lg hover:bg-background/80 transition-all"
		>
			<AnimatePresence mode="wait" initial={false}>
				<motion.div
					key={isLight ? "moon" : "sun"}
					initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
					animate={{ opacity: 1, scale: 1, rotate: 0 }}
					exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
					whileHover={{ rotate: 360 }}
					transition={{ duration: 0.3 }}
				>
					{isLight ? <Moon size={20} /> : <Sun size={20} />}
				</motion.div>
			</AnimatePresence>
		</Button>
	);
}
