"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const filters = ["All", "Excel", "Word", "PDF", "PowerPoint"];

export default function SmartFilesContent() {
	const [activeFilter, setActiveFilter] = useState("All");

	return (
		<div className="relative z-10 p-6 flex flex-col items-center">
			<h1 className="text-3xl font-bold mb-4">Smart Files</h1>

			<div className="flex gap-3 mb-6">
				{filters.map((filter) => (
					<button
						key={filter}
						onClick={() => {setActiveFilter(filter); window.dispatchEvent(new CustomEvent('filterChange', { detail: { filter } }));
                    }}
						className={`px-4 py-2 rounded-full transition-colors duration-300 ${
							activeFilter === filter
								? "bg-black text-white dark:bg-white dark:text-black"
								: "bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
						}`}
					>
						{filter}
					</button>
				))}
			</div>

			<AnimatePresence mode="wait">
				<motion.div
					key={activeFilter}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.4 }}
					className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl"
				>
					{/* استبدل هذا ببيانات حقيقية لاحقًا */}
					{Array(6)
						.fill(null)
						.map((_, i) => (
							<div
								key={i}
								className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md transition-transform hover:scale-105"
							>
								<h2 className="font-semibold">File {i + 1}</h2>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									{activeFilter} Document
								</p>
							</div>
						))}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
