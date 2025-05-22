import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	const isLight = theme === "light";

	return (
		<button
			onClick={() => setTheme(isLight ? "dark" : "light")}
			className="z-50 w-10 h-10 flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-md transition-all"
		>
			<AnimatePresence mode="wait" initial={false}>
				<motion.div
					key={isLight ? "moon" : "sun"}
					initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
					animate={{ opacity: 1, scale: 1, rotate: 0 }}
					exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
					transition={{ duration: 0.3 }}
				>
					{isLight ? <Moon size={20} /> : <Sun size={20} />}
				</motion.div>
			</AnimatePresence>
		</button>
	);
}
