"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, MessageSquareX, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AssistantBubble() {
	const [open, setOpen] = useState(false);
    const [userName, setUserName] = useState("");

	const router = useRouter();

	useEffect(() => {
        const storedName = localStorage.getItem("BeshofyUserName");
        if (storedName) {
            setUserName(storedName);
        }
	}, [])

	return (
		<motion.div 
			initial={{ x: -20, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className="fixed top-1/2 -translate-y-1/2 left-8 z-50">
			<AnimatePresence>
				{open && (
					<>
                        {/* ToolTip */}
						<motion.div
							initial={{ y: 0, opacity: 0 }}
							animate={{ y: -50, opacity: 1 }}
							exit={{ y: 0, opacity: 0 }}
							transition={{ type: "spring", stiffness: 300 }}
							className="absolute left-0 bg-white/70 text-black px-4 py-2 rounded-xl shadow-md border backdrop-blur-sm text-sm whitespace-nowrap"
						>
							💬 Hey <span className="text-primary font-semibold">{userName}</span>! Need help with something?
						</motion.div>

                        {/* Contact */}
						<motion.button
							initial={{ y: 0, opacity: 0 }}
							animate={{ y: 70, opacity: 1 }}
							exit={{ y: 0, opacity: 0 }}
                            whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 300 }}
                            onClick={() => router.push("/contact")}
							className="absolute left-0 bg-white/90 text-black px-4 py-2 rounded-full shadow border backdrop-blur-sm flex items-center gap-2"
						>
                            <Send className="w-5 h-5" />
							<span className="text-sm">Contact</span>
						</motion.button>
					</>
				)}
			</AnimatePresence>

			{/* Toggle Button */}
			<button
				onClick={() => setOpen(!open)}
				className="w-14 h-14 rounded-full bg-gradient-to-bl from-primary to-primary/30 text-white backdrop-blur-lg flex items-center justify-center shadow-lg hover:scale-105 transition"
			>
                {open ? <MessageSquareX size={24} /> : <MessageSquare size={24} />}
			</button>
		</motion.div>
	);
}
