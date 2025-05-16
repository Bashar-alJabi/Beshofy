"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import Background from "./Background";
import Background from "@/components/Background/Background";
import GlassShoppingBag from "../../components/GlassShoppingBag/GlassShoppingBag";

export default function Welcome() {
	const [name, setName] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [isLeaving, setIsLeaving] = useState(false);

	const router = useRouter();

	const MotionButton = motion.create(Button);

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
	// const [userName, setUserName] = useState("");
	// useEffect(() => {
	//  const storedName = localStorage.getItem("userName");
	//  if (storedName) {
	//      setUserName(storedName);
	//  }
	// }, [])

	return (
		<>
			{/* <Background /> */}
			<Background url="/Videos/enter.mp4" />
			<GlassShoppingBag />
			<motion.div
				initial={{ opacity: 1, scale: 1 }}
				animate={
					isLeaving
						? { opacity: 0, scale: 0.95 }
						: { opacity: 1, scale: 1 }
				}
				transition={{ duration: 0.6 }}
				className="flex items-center justify-center min-h-screen flex-col gap-6 px-4 relative z-10"
			>
				{!submitted ? (
					<>
						<motion.h1
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
							className="text-4xl lg:text-5xl font-bold text-foreground  text-center"
						>
							Welcome to <span className="text-primary-foreground">Beshofy</span>
						</motion.h1>
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className=""
						>
							<Input
								placeholder="What's your name?"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="max-w-md lg:w-sm text-background font-semibold placeholder:text-background "
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1.2 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							>
							<MotionButton
								onClick={handleSubmit}
								className="cursor-pointer"
								whileTap={{ scale: 0.95 }}
							>
								Continue
							</MotionButton>
						</motion.div>
					</>
				) : (
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ type: "spring", stiffness: 100 }}
						className="text-3xl md:text-4xl font-extrabold flex flex-col items-center text-center"
					>
						<p className="text-foreground">
							it&apos;s shopping o&apos;clock
						</p>
						<p className="text-foreground">
							Hope your bag can handle this
						</p>
						<p className="text-primary-foreground">
							{name}
						</p>
					</motion.div>
				)}
				{/* <GlassShoppingBag /> */}
				{/* Skip */}
				<Button
					variant={"link"}
					onClick={() => router.push("/home")}
					className="absolute bottom-8 text-lg text-foreground underline cursor-pointer"
				>
					Skip
				</Button>
			</motion.div>
		</>
	);
}
