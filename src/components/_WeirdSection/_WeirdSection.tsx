// "use client";

// import { motion } from "framer-motion";

// export default function WeirdSection() {
// 	return (
// 		<section className="relative z-10 px-4 py-12">
// 			<motion.h2
// 				initial={{ opacity: 0, y: 20 }}
// 				whileInView={{ opacity: 1, y: 0 }}
// 				viewport={{ once: true }}
// 				transition={{ duration: 0.5 }}
// 				className="text-3xl font-bold mb-6 text-center"
// 			>
// 				🌀 Weird But Must-See
// 			</motion.h2>
// 			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
// 				{["Banana-shaped USB", "AI Horoscope", "Invisible Mug"].map((item, i) => (
// 					<motion.div
// 						key={i}
// 						initial={{ opacity: 0, y: 20 }}
// 						whileInView={{ opacity: 1, y: 0 }}
// 						transition={{ delay: i * 0.2 }}
// 						viewport={{ once: true }}
// 						className="bg-white/80 backdrop-blur p-4 rounded-lg shadow hover:scale-105 transition"
// 					>
// 						<h3 className="font-semibold text-lg mb-2">{item}</h3>
// 						<p className="text-muted-foreground text-sm">
// 							A totally necessary gadget you didn’t know you needed.
// 						</p>
// 					</motion.div>
// 				))}
// 			</div>
// 		</section>
// 	);
// }
