"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
	{
		title: "Digital Products",
		description: "Designs, Templates, Logos, ...",
		link: "/shop/digital-products",
	},
	{
		title: "Smart Files",
		description: "Educational Sheets, Tools, ... ",
		link: "/shop/smart-files",
	},
];

const Categories = () => {
	return (
		<div className="flex items-center justify-center min-h-screen px-4">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl text-center">
				{categories.map((cat, i) => (
					<Link href={cat.link} key={i}>
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{
								opacity: 1,
								scale: 1,
								transition: { duration: 0.5, delay: i * 0.2 },
							}}
							whileHover={{ scale: 1.05, rotate: -1 }}
							whileTap={{ scale: 0.95 }}
							className="cursor-pointer backdrop-blur-sm bg-background/10 border border-background/20 rounded-xl rounded-ee-full rounded-ss-full p-6 shadow-xl hover:shadow-2xl text-background relative overflow-hidden"
						>
							<h2 className="text-3xl font-bold mb-2 text-foreground">
								{cat.title}
							</h2>
							<p className="text-lg font-semibold text-foreground/80">
								{cat.description}
							</p>
							{/* Decoration */}
							<div className="absolute -top-10 -right-10 w-60 h-60 bg-primary/20 rounded-full blur-2xl rotate-12"></div>
						</motion.div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Categories;
