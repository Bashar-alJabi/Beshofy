"use client"
import { motion } from "framer-motion";
import { House } from "lucide-react";
import Link from "next/link";

const HomeBubble = () => {
	return (
		<Link href={"/home"} className="fixed bottom-6 right-6">
			<motion.button
				initial={{ x: 100, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 200 }}
				whileHover={{ scale: 1.1, rotate: -10 }}
				whileTap={{ scale: 0.95 }}
				className="bg-primary text-[#f9f7fd] w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-50"
			>
				<House />
			</motion.button>
		</Link>
	);
};

export default HomeBubble;