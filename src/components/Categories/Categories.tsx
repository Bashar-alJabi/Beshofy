"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Categories = () => {

	const router = useRouter();

	const categories = [
		{
			title: "Digital Products",
			description: "Courses, Apps, Designs, Templates",
			link: "/shop/digital-products",
		},
		{
			title: "Smart Files",
			description: "Educational Sheets, Templates & Tools",
			link: "/shop/smart-files",
		},
	];

	return (
		<div className="relative z-10 flex items-center justify-center min-h-screen px-4">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
				{categories.map((cat, i) => (
					<motion.div
						key={i}
						onClick={() => router.push(cat.link)}
						whileHover={{ scale: 1.05, rotate: -1 }}
						whileTap={{ scale: 0.95 }}
						className="cursor-pointer backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-6 shadow-xl hover:shadow-2xl text-white relative overflow-hidden"
					>
						<h2 className="text-2xl font-bold mb-2">{cat.title}</h2>
						<p className="text-sm opacity-80">{cat.description}</p>

						{/* Decoration */}
						<div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl rotate-12"></div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Categories;
