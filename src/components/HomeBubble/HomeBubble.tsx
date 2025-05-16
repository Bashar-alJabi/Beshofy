"use client"
import { motion } from "framer-motion";
import { House } from "lucide-react";
import { useRouter } from "next/navigation";

const HomeBubble = () => {
	const router = useRouter();

	return (
		<motion.button
			onClick={() => router.push("/home")}
			initial={{ x: 100, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ type: "spring", stiffness: 200 }}
			whileHover={{ scale: 1.1, rotate: -10 }}
			whileTap={{ scale: 0.95 }}
			className="fixed bottom-6 right-6 bg-primary text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-50"
		>
			<House />
		</motion.button>
	);
};

export default HomeBubble;
