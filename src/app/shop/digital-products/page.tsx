"use client";

import { ThemeToggle } from "@/components/Theme/ThemeMode";
import { cn } from "@/lib/utils";
import { ArrowLeft, BadgeCheck, Flame, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Product = {
	id: number;
	name: string;
	image: string;
	category: string;
	price: string;
	isFree: boolean;
	isNew?: boolean;
	isTrending?: boolean;
	downloadLink?: string;
	gumroadLink?: string;
};

const allProducts: Product[] = [
	{
		id: 1,
		name: "Modern Website UI",
		image: "/images/website1.jpg",
		category: "Website",
		price: "$19",
		isFree: false,
		isNew: true,
		isTrending: true,
		gumroadLink: "https://gumroad.com/l/website-ui",
	},
	{
		id: 2,
		name: "Creative Logo Pack",
		image: "/images/logo1.jpg",
		category: "Logo",
		price: "Free",
		isFree: true,
		isNew: true,
		downloadLink: "/downloads/logo-pack.zip",
	},
	{
		id: 3,
		name: "Social Media Templates",
		image: "/images/poster1.jpg",
		category: "Posters",
		price: "$12",
		isFree: false,
		gumroadLink: "https://gumroad.com/l/poster-pack",
	},
	{
		id: 4,
		name: "Minimal UI Kit",
		image: "/images/uikit.jpg",
		category: "UI Kits",
		price: "Free",
		isFree: true,
		isTrending: true,
		downloadLink: "/downloads/ui-kit.zip",
	},
];

const categories = ["All", "Website", "Logo", "Posters", "UI Kits"];

export default function DigitalProductsPage() {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [statusFilters, setStatusFilters] = useState<string[]>([]);
	const [search, setSearch] = useState("");

	const filteredProducts = allProducts.filter((product) => {
		const matchCategory =
			selectedCategory === "All" || product.category === selectedCategory;
		const matchSearch = product.name
			.toLowerCase()
			.includes(search.toLowerCase());

		const matchStatus =
			statusFilters.length === 0 ||
			statusFilters.every((status) => {
				if (status === "Free") return product.isFree;
				if (status === "New") return product.isNew;
				if (status === "Trending") return product.isTrending;
				return true;
			});

		return matchCategory && matchSearch && matchStatus;
	});

	return (
		<div className="min-h-screen px-6 pt-4 pb-8 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 text-neutral-800 dark:text-neutral-200">
			<div className="flex items-center justify-between mb-4">
				{/* Logo */}
				<Image
					src="/Logo/By-Logo.png"
					alt="Beshofy Logo"
					width={100}
					height={50}
					className=" top-4 left-6 z-50 w-12 sm:w-14 md:w-16 lg:w-18 xl:w-20"
				/>
				<div className="flex justify-center items-center gap-4">
					{/* Back to Shop */}
					<Link
						href="/shop"
						className=" top-4 right-6 z-50 flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow hover:scale-105 transition"
					>
						<ArrowLeft size={16} />
						Back to Shop
					</Link>
					{/* Theme Toggle */}
					<ThemeToggle />
				</div>
			</div>

			{/* Header */}
			<div className="max-w-5xl mx-auto text-center mb-10">
				<h1 className="text-4xl font-bold mb-2">
					Explore Unique Digital Creations
				</h1>
				<p className="text-zinc-400">
					Ready-to-use designs for your brand, web, and social needs.
				</p>
			</div>

			{/* Filters */}
			<div className="max-w-4xl mx-auto mb-8 flex flex-wrap gap-3 justify-center">
				{categories.map((cat) => (
					<button
						key={cat}
						onClick={() => setSelectedCategory(cat)}
						className={cn(
							"px-4 py-1 rounded-full border text-sm transition-all",
							selectedCategory === cat
								? "bg-white text-black font-semibold"
								: "border-white/30 hover:bg-white/10"
						)}
					>
						{cat}
					</button>
				))}
			</div>

			{/* Secondary Filter - Status checkboxes */}
			<div className="flex gap-4 justify-center mb-10">
				{["Free", "New", "Trending"].map((status) => (
					<label
						key={status}
						className="flex items-center gap-2 text-sm text-white"
					>
						<input
							type="checkbox"
							value={status}
							checked={statusFilters.includes(status)}
							onChange={(e) => {
								const value = e.target.value;
								setStatusFilters((prev) =>
									prev.includes(value)
										? prev.filter((s) => s !== value)
										: [...prev, value]
								);
							}}
							className="accent-primary w-4 h-4"
						/>
						{status}
					</label>
				))}
			</div>

			{/* Search */}
			<div className="max-w-2xl mx-auto mb-12">
				<div className="relative">
					<Search
						className="absolute top-2.5 left-3 text-zinc-400"
						size={18}
					/>
					<input
						type="text"
						placeholder="Search for a product..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="w-full pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/10 placeholder:text-zinc-500 text-white outline-none focus:ring-1 focus:ring-white"
					/>
				</div>
			</div>

			{/* Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
				{filteredProducts.map((product) => (
					<div
						key={product.id}
						className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
					>
						<Image
							src={product.image}
							alt={product.name}
							width={400}
							height={300}
							className="w-full h-48 object-cover"
						/>

						<div className="p-4 flex flex-col gap-2">
							<div className="flex items-center gap-2">
								<span className="text-sm bg-white/10 px-2 py-0.5 rounded-full text-white">
									{product.category}
								</span>
								{product.isNew && (
									<span className="text-xs text-green-400 font-semibold flex items-center gap-1">
										<BadgeCheck size={14} />
										New
									</span>
								)}
								{product.isTrending && (
									<span className="text-xs text-orange-400 font-semibold flex items-center gap-1">
										<Flame size={14} />
										Trending
									</span>
								)}
							</div>
							<h3 className="text-lg font-semibold">
								{product.name}
							</h3>
							<div className="flex justify-between items-center">
								<span className="font-medium">
									{product.isFree ? "Free" : product.price}
								</span>
								{product.isFree ? (
									<a
										href={product.downloadLink}
										download
										className="text-sm px-3 py-1 rounded-full bg-green-500 text-black hover:bg-green-500/80 transition"
									>
										Download
									</a>
								) : (
									<Link
										href={product.gumroadLink || "#"}
										target="_blank"
										className="text-sm px-3 py-1 rounded-full bg-primary text-white hover:bg-primary/80 transition"
									>
										Buy
									</Link>
								)}
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Freebies Section */}
			{allProducts.some((p) => p.isFree) && (
				<div className="max-w-6xl mx-auto mt-16">
					<h2 className="text-2xl font-bold mb-4">
						🎁 Freebies Zone
					</h2>
					<p className="text-zinc-400 mb-6">
						Download some of our best designs for free!
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{allProducts
							.filter((p) => p.isFree)
							.map((product) => (
								<div
									key={product.id}
									className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-3"
								>
									<Image
										src={product.image}
										alt={product.name}
										width={300}
										height={200}
										className="rounded-md object-cover w-full h-40"
									/>
									<div className="flex justify-between items-center">
										<span className="font-semibold">
											{product.name}
										</span>
										<a
											href={product.downloadLink}
											download
											className="text-xs px-2 py-1 rounded-full bg-white text-black hover:bg-zinc-200 transition"
										>
											Download
										</a>
									</div>
								</div>
							))}
					</div>
				</div>
			)}
		</div>
	);
}
