"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Music2, } from "lucide-react";

export default function SocialLinks() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className="fixed left-1/2 -translate-x-1/2 top-40 sm:bottom-8 sm:right-8 sm:left-auto sm:top-auto sm:-translate-x-0 flex items-center gap-4 z-50"
		>
            <a
                href='https://instagram.com/yourpage'
                target="_blank"
                className="transition duration-300 text-white/50 hover:text-[#E1306C] hover:-rotate-12"
            >
                <Instagram size={24} />
            </a>
            <a
                href='https://tiktok.com/@yourpage'
                target="_blank"
                className="transition duration-300 text-white/50 hover:text-[#000000] hover:-rotate-12"
            >
                <Music2 size={24} />
            </a>
            <a
                href='https://facebook.com/yourpage'
                target="_blank"
                className="transition duration-300 text-white/50 hover:text-[#1877F2] hover:-rotate-12"
            >
                <Facebook size={24} />
            </a>
		</motion.div>
	);
}