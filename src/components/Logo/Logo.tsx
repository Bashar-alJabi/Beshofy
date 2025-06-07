"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Logo() {
	const [userName, setUserName] = useState("");

	useEffect(() => {
		const storedName = localStorage.getItem("BeshofyUserName");
		// if (storedName && storedName !== "You") {
		if (storedName) setUserName(storedName);
	}, []);

	return (
		<motion.div
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
		>
			<Image
				src="/Logo/BeshoFY-Logo.png"
				alt="Beshofy Logo"
				width={130}
				height={130}
				className="object-contain pointer-events-none w-auto h-auto"
				priority
			/>
			{userName !== "" && (
				<p className="text-center font-semibold text-[#1e1b2e]">
					with{" "}
					<span className="text-[#f9f7fd]">{userName}fy</span>
					{/* {userName !== 'You' && <span>fy</span>} */}
				</p>
			)}
		</motion.div>
	);
}
