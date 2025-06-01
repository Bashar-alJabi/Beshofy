"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { smartFiles } from "@/data/smart-files";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, Flame, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = ["All", "Excel", "Word", "PDF", "PowerPoint"];

export default function SmartFilesContent() {
	// const [activeFilter, setActiveFilter] = useState("All");
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [statusFilters, setStatusFilters] = useState<string[]>([]);
	const [search, setSearch] = useState("");
	const [currentPage, setCurrentPage] = useState(1);

	const filteredProducts = smartFiles.filter((product) => {
		// Cat
		const matchCategory =
			selectedCategory === "All" || product.category === selectedCategory;
		// Search
		const matchSearch = product.name
			.toLowerCase()
			.includes(search.toLowerCase());
		// Status
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

	// Pagination
	const itemsPerPage = 6;
	const paginatedProducts = filteredProducts.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	return (
		<>
			{/* Filters */}
			<div className="max-w-4xl mx-auto mb-4 flex flex-wrap gap-3 justify-center">
				{categories.map((cat) => (
					<button
						key={cat}
						onClick={() => {
							setSelectedCategory(cat);
							window.dispatchEvent(
								new CustomEvent("filterChange", {
									detail: { cat },
								})
							);
						}}
						className={cn(
							"px-4 py-1 rounded-sm border text-sm transition-all duration-300",
							selectedCategory === cat
								? "bg-foreground text-background font-semibold border-none"
								: "border-foreground/30 hover:bg-foreground/10"
						)}
					>
						{cat}
					</button>
				))}
			</div>

			{/* Secondary Filter - Status checkboxes */}
			<div className="flex gap-4 justify-center mb-8">
				{["Free", "New", "Trending"].map((status) => (
					<div
						key={status}
						className="flex items-center space-x-2 text-sm text-foreground"
					>
						<Checkbox
							checked={statusFilters.includes(status)}
							onCheckedChange={(checked) => {
								setStatusFilters((prev) =>
									checked
										? [...prev, status]
										: prev.filter((s) => s !== status)
								);
							}}
							className="rounded-t-md accent-primary-foreground border border-foreground/20"
						/>
						<label
							htmlFor={status}
							className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							{status}
						</label>
					</div>
				))}
			</div>

			{/* Search */}
			<div className="max-w-2xl mx-auto mb-12">
				<div className="relative">
					<Search
						className="absolute top-2.5 left-3 text-foreground/50"
						size={18}
					/>
					<Input
						type="text"
						placeholder="Search for a file..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="w-full pl-10 pr-4 py-4.5 rounded-sm bg-foreground/5 placeholder:text-foreground/50 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
					/>
				</div>
			</div>

			<AnimatePresence mode="wait">
				{/* Grid */}
				<motion.div
					key={selectedCategory}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.4 }}
					className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
				>
					{paginatedProducts.map((product) => (
						<div
							key={product.id}
							className="bg-foreground/5 border border-foreground/10 rounded-md overflow-hidden relative top-0 hover:-top-1 shadow hover:shadow-lg transition-all duration-300"
						>
							<Image
								src={product.image}
								alt={product.name}
								width={400}
								height={300}
								className="w-full h-28 object-cover"
							/>

							<div className="p-4 flex flex-col gap-2">
								<div className="flex items-center gap-2">
									<span className="text-sm bg-foreground/10 px-2 py-0.5 rounded-full text-foreground">
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
									<span className="font-medium text-foreground/80">
										{product.isFree
											? "Free"
											: product.price}
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
											Buy me 🙈
										</Link>
									)}
								</div>
							</div>
						</div>
					))}
				</motion.div>
			</AnimatePresence>

			{/* Pagination */}
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
							onClick={() =>
								setCurrentPage((prev) => Math.max(prev - 1, 1))
							}
							className={cn(
								currentPage === 1
									? "pointer-events-none opacity-50"
									: "cursor-pointer"
							)}
						/>
					</PaginationItem>

					{Array.from(
						{
							length: Math.ceil(
								filteredProducts.length / itemsPerPage
							),
						},
						(_, i) => i + 1
					).map((page) => (
						<PaginationItem key={page}>
							<PaginationLink
								isActive={page === currentPage}
								onClick={() => setCurrentPage(page)}
								className="cursor-pointer"
							>
								{page}
							</PaginationLink>
						</PaginationItem>
					))}

					<PaginationItem>
						<PaginationNext
							onClick={() =>
								setCurrentPage((prev) =>
									Math.min(
										prev + 1,
										Math.ceil(
											filteredProducts.length /
												itemsPerPage
										)
									)
								)
							}
							className={cn(
								currentPage ===
									Math.ceil(
										filteredProducts.length / itemsPerPage
									)
									? "pointer-events-none opacity-50"
									: "cursor-pointer"
							)}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>

			{/* Freebies Section */}
			{/* {smartFiles.some((p) => p.isFree) && (
				<div className="max-w-6xl mx-auto mt-16">
					<h2 className="text-2xl font-bold mb-4">
						🎁 Freebies Zone
					</h2>
					<p className="text-foreground/50 mb-6">
						Download some of our best designs for free!
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{smartFiles
							.filter((p) => p.isFree)
							.map((product) => (
								<div
									key={product.id}
									className="bg-foreground/5 border border-foreground/10 rounded-xl p-4 flex flex-col gap-3"
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
											className="text-xs px-2 py-1 rounded-full bg-foreground text-background hover:bg-foreground/80 transition"
										>
											Download
										</a>
									</div>
								</div>
							))}
					</div>
				</div>
			)} */}

			{/* 💎 Premium Vault */}
			{smartFiles.some((files) => files.isPremium) && (
				<section className="max-w-5xl mx-auto mt-16">
					<h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
						💎 Premium Vault
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{smartFiles
							.filter((file) => file.isPremium)
							.map((f) => (
								<motion.div
									key={f.id}
									initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									whileHover={{ rotate: [0, -2, 2, 0]}}
									transition={{ duration: 0.5 }}
									// className="relative rounded-xl p-5 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900 dark:to-yellow-800 shadow-md border border-yellow-400 overflow-hidden"
									className="relative bg-foreground/5 rounded-xl p-5 flex flex-col gap-3 shadow-lg hover:shadow-xl"
								>
									{/* Effect */}
									<motion.div
										className="absolute inset-0 border-2 border-primary rounded-xl pointer-events-none z-10"
										animate={{ opacity: [0.2, 0.8, 0.2] }}
										transition={{
											duration: 4,
											repeat: Infinity,
											ease: "easeInOut",
										}}
									/>
									<Image
										src={f.image}
										alt={f.name}
										width={300}
										height={200}
										className="rounded-md object-cover w-full h-20"
									/>
									<div className="relative z-20">
										<h3 className="text-lg font-semibold mb-1 text-yellow-900">
											{f.name}
										</h3>
										<p className="text-sm text-yellow-800">
											{f.category}
										</p>
										<div className="flex justify-between items-center mt-1">
											<span className="font-semibold">
												{f.price}
											</span>
											<a
												href={f.gumroadLink}
												download
												className="text-xs font-semibold px-4 py-2 rounded-full bg-primary text-background hover:bg-primary/80 transition"
											>
												Buy Now 💸
											</a>
										</div>
									</div>
								</motion.div>
							))}
					</div>
				</section>
			)}
		</>
	);
}
