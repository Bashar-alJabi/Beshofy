"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FilterChangeEvent extends CustomEvent {
    detail: {
        filter: keyof typeof backgroundColors;
    };
}

const backgroundColors: Record<string, string> = {
	All: "#e0eafc",
	Excel: "#1d6f42",
	Word: "#2b579a",
	PDF: "#b30b00",
	PowerPoint: "#b7472a",
};

export default function SmartFilesBackground() {
	const [active, setActive] = useState("All");

	useEffect(() => {
		const handler = (e: FilterChangeEvent) => {
			if (e.detail?.filter) {
				setActive(e.detail.filter);
			}
		};
		window.addEventListener("filterChange", handler as EventListener);
		return () => window.removeEventListener("filterChange", handler as EventListener);
	}, []);

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={active}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				className="absolute inset-0 z-0"
				style={{
					background: backgroundColors[active],
					transition: "background 0.5s ease",
				}}
			/>
		</AnimatePresence>
	);
}
