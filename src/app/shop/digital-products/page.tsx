"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
	{
		id: 1,
		title: "AI Logo Pack",
		description: "A bundle of AI-generated logos.",
		image: "/products/logo-pack.jpg",
		isFree: false,
		price: "$5",
		gumroadUrl: "https://your-gumroad-link.com/logo-pack",
	},
	{
		id: 2,
		title: "Free Instagram Templates",
		description: "Editable Canva templates for your IG.",
		image: "/products/ig-templates.jpg",
		isFree: true,
		downloadUrl: "/downloads/instagram-templates.zip",
	},
];

export default function DigitalProducts() {
	return (
		<div className="min-h-screen p-6 bg-black text-white">
			<h1 className="text-3xl font-bold mb-6">Digital Products</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{products.map((product) => (
					<motion.div
						key={product.id}
						className="bg-white/10 backdrop-blur p-4 rounded-xl shadow-md hover:shadow-xl transition"
						whileHover={{ scale: 1.03 }}
					>
						<Image
							src={product.image}
							alt={product.title}
							width={500}
							height={300}
							className="rounded-md object-cover mb-4"
						/>
						<h2 className="text-xl font-semibold mb-1">
							{product.title}
						</h2>
						<p className="text-sm text-white/80 mb-4">
							{product.description}
						</p>

						{product.isFree ? (
							<a
								href={product.downloadUrl}
								className="px-4 py-2 rounded-full bg-green-600 hover:bg-green-700 transition"
								download
							>
								Download Free
							</a>
						) : (
							<a
								href={product.gumroadUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="px-4 py-2 rounded-full bg-primary hover:bg-primary/90 transition"
							>
								Buy for {product.price}
							</a>
						)}
					</motion.div>
				))}
			</div>
		</div>
	);
}
