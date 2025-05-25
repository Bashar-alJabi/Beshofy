"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const defaultMessages = [
	"🛒 Latest Sale: Zucchini Cooking Course 🎉",
	"🤯 Someone just bought a digital UFO tracker!",
	"🎨 Don't miss: AI-generated art for cats!",
	"📚 New drop: 300-page guide on sneezing etiquette",
	"💾 Vintage floppy disks now available!",
	"📦 Mystery box just shipped to Antarctica 🐧",
	"🎲 Limited-time: Dice that only roll 7s (somehow)",
	"🧠 Brainwave sync crystals back in stock!",
	"🎩 Smart hats that react to your mood — kinda.",
	"💡 Someone just bought a lamp that tells jokes!",
	"🍕 Pizza-shaped phone cases selling fast!",
	"🛸 Adopt a digital alien — zero feeding needed!",
	"🧃 Juice box chargers? Yep, we have those too.",
	"📺 Retro TV earrings are trending again!",
	"🧦 Socks that scream when lost (softly)."
];

const welcomeMessages = [
	"👋 Welcome back, {name}! Ready for some shopping?",
	"🎉 Hey {name}! Great to see you again!",
	"🌟 {name} is back! Let's find something unusual!",
	"🎭 {name} returns! Ready for some fun shopping?",
	"🎨 Look who's back! Hello {name}!",
	"🎮 {name} is in the house! Let's shop!",
	"🎵 Welcome back {name}! Time for some retail therapy!",
	"🌱 Hey {name}! Ready to explore?",
	"🎪 {name} is here! Let's make some unusual purchases!",
];

const morningMessages = [
	"🌞 Good morning! Let's discover weird things!",
	"🌅 Rise and shine! Time for some unusual shopping!",
	"☀️ Morning vibes? Let's find something extraordinary!",
	"🌤️ Early bird gets the weirdest worm!",
	"🌅 Start your day with something unique!",
];

const afternoonMessages = [
	"☕ Afternoon vibes? Browse something unusual!",
	"🌤️ Midday madness: Check out our latest drops!",
	"🌤️ Afternoon delight: Discover something new!",
	"☀️ Perfect time for some quirky shopping!",
	"🌞 Afternoon adventures await!",
];

const eveningMessages = [
	"🌙 Late night shopping? You're not alone!",
	"🌠 Night owls unite: Special deals just for you!",
	"🌛 Evening escapades: Find your next treasure!",
	"🌜 Night shopping spree? We've got you covered!",
	"✨ Starlit shopping: Discover the unusual!",
];

export default function Avatar() {
	const [messages, setMessages] = useState(defaultMessages);
	const [index, setIndex] = useState(0);

	// Name message
	useEffect(() => {
		const name = localStorage.getItem("BeshofyUserName");
		if (name) {
			const randomWelcomeMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)]
				.replace("{name}", name);
			setMessages(prev => [randomWelcomeMessage, ...prev]);
		}
	}, []);

	// Time message
	useEffect(() => {
		const hour = new Date().getHours();
		let timeMessages = [];
		if (hour < 12) {
			timeMessages = morningMessages;
		} else if (hour < 18) {
			timeMessages = afternoonMessages;
		} else {
			timeMessages = eveningMessages;
		}
		const randomTimeMessage = timeMessages[Math.floor(Math.random() * timeMessages.length)];
		setMessages(prev => [randomTimeMessage, ...prev]);
	}, []);

	// Weird message
	useEffect(() => {
		const interval = setInterval(() => {
			// setIndex((prev) => (prev + 1) % messages.length);
			setIndex(Math.floor(Math.random() * messages.length));
		}, 7000);
		return () => clearInterval(interval);
	}, [messages.length]);

	return (
		<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
			<motion.img
				src="/Avatar/Besho.png"
				alt="Avatar"
				initial={{ y: 0, }}
				animate={{ y: [0, -5, 0] }}
				transition={{ repeat: Infinity, duration: 2 }}
				className="w-28"
			/>
			<motion.div
				key={index}
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				className="max-w-xs sm:max-w-sm px-6 py-2 text-foreground font-semibold rounded-full text-center text-sm shadow-xl border border-background/20 bg-background/20 backdrop-blur-md relative overflow-hidden"
			>
				{messages[index]}
			</motion.div>
		</div>
	);
}
