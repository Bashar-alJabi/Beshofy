"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const WelcomeComp = () => {
	const [name, setName] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [isLeaving, setIsLeaving] = useState(false);

	const router = useRouter();

	const handleSubmit = () => {
		if (name.trim() !== "") {
			localStorage.setItem("BeshofyUserName", name);
			setSubmitted(true);
			setTimeout(() => {
				setIsLeaving(true);
			}, 2300);
			setTimeout(() => {
				router.push("/home");
			}, 2500);
		}
	};
	return (
		<motion.div
			key="welcome-screen"
			initial={{ opacity: 0, scale: 0.95 }}
			animate={
				isLeaving
					? { opacity: 0, scale: 0.95 }
					: { opacity: 1, scale: 1 }
			}
			// exit={{ opacity: 0, scale: 0.95 }}
			transition={{
				duration: 0.4,
				ease: [0.4, 0, 0.2, 1],
			}}
			className="flex items-center justify-center min-h-screen flex-col px-4 relative z-10"
		>
			{!submitted ? (
				<motion.div
					key="welcome-form"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					// exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					className="flex flex-col justify-center items-center gap-4"
				>
					<motion.h1
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.3,
							ease: "easeOut",
						}}
						className="text-4xl lg:text-5xl font-bold text-foreground  text-center"
					>
						Welcome to{" "}
						<span className="text-primary-foreground">Beshofy</span>
					</motion.h1>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.3,
							delay: 0.2,
							ease: "easeOut",
						}}
					>
						<Input
							placeholder="How should we call you?"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="max-w-md lg:w-sm text-background placeholder:text-background/80"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.3,
							delay: 0.4,
							ease: "easeOut",
						}}
					>
						<motion.button
							onClick={handleSubmit}
							className="bg-primary text-primary-foreground font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/70"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.6 }}
							// transition={{
							// 	type: "spring",
							// 	stiffness: 400,
							// 	damping: 17,
							// }}
						>
							I’m Ready!
						</motion.button>
					</motion.div>
				</motion.div>
			) : (
				<motion.div
					key="welcome-message"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					// exit={{ opacity: 0, scale: 0.9 }}
					transition={{
						type: "spring",
						stiffness: 200,
						damping: 20,
						mass: 1,
					}}
					className="text-3xl md:text-4xl font-extrabold flex flex-col items-center text-center"
				>
					{/* <p className="text-foreground">
								it&apos;s shopping o&apos;clock
							</p> */}
					<p className="text-foreground">
						Hey{" "}
						<span className="text-primary-foreground">{name}</span>{" "}
						Hope your bag can handle this
					</p>
				</motion.div>
			)}
			{/* <GlassShoppingBag /> */}
			{/* Skip */}
			<Button variant={"link"}>
				<Link
					href={"/home"}
					className="absolute bottom-8 text-lg text-foreground underline cursor-pointer hover:-rotate-10 transition"
				>
					Skip
				</Link>
			</Button>
		</motion.div>
	);
};

export default WelcomeComp;
