"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import HomeBubble from "../HomeBubble/HomeBubble";

const typingPhrases = [
    "I'll read it myself",
    "Reading your thoughts",
    "Let me see what you wrote",
];

export default function ContactPage() {
	const [sent, setSent] = useState(false);
	const [showAvatar, setShowAvatar] = useState(false);
	const [userName, setUserName] = useState("");

	const typingTimeout = useRef<NodeJS.Timeout | null>(null);
	const formRef = useRef<HTMLFormElement>(null);

	const currentPhrase = typingPhrases[Math.floor(Math.random() * typingPhrases.length)]
	
	useEffect(() => {
		const storedName = localStorage.getItem("BeshofyUserName");
		if (storedName) {
			setUserName(storedName);
		}
	}, []);

	const handleTyping = () => {
		setShowAvatar(true);
		if (typingTimeout.current) clearTimeout(typingTimeout.current);
		typingTimeout.current = setTimeout(() => {
			setShowAvatar(false);
		}, 2000);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!formRef.current) return;
		try {
			await emailjs.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				formRef.current,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
			);
			setSent(true);
		} catch (error) {
			console.error("Email send error:", error);
			alert("Something went wrong, please try again later.");
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.6 }}
			className="fixed inset-0 flex items-center justify-center"
		>
			<div className="relative bg-white/5 border border-white/20 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8 max-w-lg w-full mx-4">
				{!sent ? (
					<>
						<motion.h1
							initial={{ y: -10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.2 }}
							className="text-xl sm:text-2xl text-primary-foreground font-semibold mb-6 text-center"
						>
							Got questions? Weird product ideas? Just say hi! 👋
						</motion.h1>
						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className="flex flex-col gap-4"
						>
							<Input
								name="from_name"
								placeholder="Your Name"
								required
								onChange={handleTyping}
								className="bg-white/10 text-white placeholder:text-primary-foreground"
							/>
							<Input
								name="email_id"
								type="email"
								placeholder="Email Address"
								required
								onChange={handleTyping}
								className="bg-white/10 text-white placeholder:text-primary-foreground"
							/>
							<Textarea
								name="message_content"
								placeholder="What's on your mind?"
								required
								onChange={handleTyping}
								className="bg-white/10 text-white placeholder:text-primary-foreground min-h-[120px]"
							/>
							<Button type="submit" className="w-full mt-2">
								Send it 🚀
							</Button>
						</form>
					</>
				) : (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center text-white space-y-4"
					>
						<p>Thanks for reaching out! 🫶</p>
						<p>We’ll get back to you soon!</p>
						<Button onClick={() => setSent(false)}>
							Send Another
						</Button>
					</motion.div>
				)}

				<AnimatePresence>
					{showAvatar && (
						<motion.div
							key="avatar"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 10 }}
							transition={{ duration: 0.3 }}
							className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm text-white bg-primary px-3 py-1 rounded-full shadow"
						>
							{currentPhrase}{" "}
							<span className="font-semibold">{userName}</span>{" "}👀
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			<HomeBubble />
		</motion.div>
	);
}
