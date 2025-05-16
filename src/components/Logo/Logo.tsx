"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Logo() {
	const [userName, setUserName] = useState("");

	useEffect(() => {
        const storedName = localStorage.getItem("BeshofyUserName");
        // if (storedName && storedName !== "You") {
        if (storedName) {
            setUserName(storedName+'fy');
        } else {
			setUserName('You')
		}
	}, [])

	return (
		<motion.div
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
		>
			{/* <div className="backdrop-blur-md bg-white/20 rounded-full px-4 py-2 shadow-lg border border-white/30"> */}
				<Image
					src="/Logo/Beshofy-Logo.png"
					alt="Beshofy Logo"
					width={130}
					height={130}
					className="object-contain pointer-events-none w-auto h-auto"
					priority
				/>
				<p className="text-center font-semibold text-foreground">
					with{" "}
					<span className="text-primary-foreground">{userName}</span>
					{/* {userName !== 'You' && <span>fy</span>} */}
				</p>
			{/* </div> */}
		</motion.div>
	);
}
