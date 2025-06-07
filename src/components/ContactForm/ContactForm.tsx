"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const typingPhrases = [
	"I'll read it myself name 🌚",
	"That's it? 😏",
	"Let me see what you wrote 🧐",
	"Hmm... what's on your mind name 🤔",
	"Peeking into your thoughts 👀",
	"Translating your ideas...🤯",
	"I sense curiosity in you 🤨",
	"Aha 🙄"
];

export default function ContactPage() {
	const [sent, setSent] = useState(false);
	const [showAvatar, setShowAvatar] = useState(false);
	const [userName, setUserName] = useState("");

	const typingTimeout = useRef<NodeJS.Timeout | null>(null);
	const formRef = useRef<HTMLFormElement>(null);

	const currentPhrase = typingPhrases[
		Math.floor(Math.random() * typingPhrases.length)
	].replace("name", userName);

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
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
			);
			setSent(true);
		} catch (error) {
			console.error("Email send error:", error);
			alert("Something went wrong, please try again later.");
		}
	};

	return (
		<motion.section
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.6 }}
			className="fixed inset-0 flex items-center justify-center"
		>
			<div className="relative bg-gradient-to-br from-[#f9f7fd]/5 to-[#f9f7fd]/10 border border-[#f9f7fd]/10 backdrop-blur-lg shadow-2xl px-6 sm:px-10 py-8 rounded-[2.5rem] ring-1 ring-[#f9f7fd]/10 max-w-xl w-full mx-4 group">
				{!sent ? (
					<>
						<motion.h1
							initial={{ y: -10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.2 }}
							className="text-xl sm:text-2xl text-[#f9f7fd] font-semibold mb-6 text-center"
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
								placeholder="🧑 Your Name"
								required
								onChange={handleTyping}
								className="bg-[#1e1b2e]/10 border border-white/10 rounded-xl px-4 py-3 text-[#f9f7fd] placeholder:text-[#f9f7fd]/70 focus:ring-2 focus:ring-primary/60 focus:outline-none transition"
								/>
							<Input
								name="email_id"
								type="email"
								placeholder="📧 Email Address"
								required
								onChange={handleTyping}
								className="bg-[#1e1b2e]/10 border border-[#f9f7fd]/10 rounded-xl px-4 py-3 text-[#f9f7fd] placeholder:text-[#f9f7fd]/70 focus:ring-2 focus:ring-primary/60 focus:outline-none transition"
								/>
							<Textarea
								name="message_content"
								placeholder="💬 What's on your mind?"
								required
								onChange={handleTyping}
								className="bg-[#1e1b2e]/10 border border-[#f9f7fd]/10 rounded-2xl px-4 py-3 text-[#f9f7fd] placeholder:text-[#f9f7fd]/70 min-h-[120px] focus:ring-2 focus:ring-primary/60 focus:outline-none transition"
								/>
							<Button type="submit"   className="w-full mt-2 rounded-full bg-primary text-[#f9f7fd] hover:bg-primary/80 transition-all shadow-lg shadow-primary/20"
							>
								Let it fly 🕊️
							</Button>
						</form>
					</>
				) : (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center text-[#1e1b2e] text-xl font-bold space-y-4"
					>
						<p>That was lovely. We’re on it 🫶</p>
						<p>Response is bubbling...🧪</p>
						<Button onClick={() => setSent(false)} className="text-lg">
							More ideas? Yes Please 🧠
						</Button>
					</motion.div>
				)}
				<AnimatePresence mode="wait">
					{showAvatar && (
						<motion.div
							key="avatar"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ 
								type: "spring",
								stiffness: 200,
								damping: 20,
								duration: 0.4 
							}}
							className="absolute -top-4 left-1/2 -translate-x-1/2 text-sm text-[#f9f7fd] bg-primary px-3 py-1 rounded-full shadow"
						>
							{currentPhrase}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.section>
	);
}
