import SmartFilesBackground from "@/components/Background/SmartFilesBackground";
import SmartFilesContent from "@/components/Pages/SmartFilesComp";
// import { ThemeToggle } from "@/components/Theme/ThemeMode";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SmartFilesPage() {
	return (
		<div className="min-h-screen px-6 pt-4 pb-8 bg-gradient-to-b from-background to-background/50 text-foreground">
			<div className="flex items-center justify-between mb-2">
				{/* Logo */}
				<Link href="/home">
					<Image
						src="/Logo/By-Logo.png"
						alt="Beshofy Logo"
						width={100}
						height={50}
						className="w-12 sm:w-14 md:w-16 lg:w-18 xl:w-20"
					/>
				</Link>
				<div className="">
					{/* Back to Shop */}
					<Link
						href="/shop"
						className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-background/80 backdrop-blur-md shadow-md hover:scale-105 transition"
					>
						<ArrowLeft size={16} />
						Back to Shop
					</Link>
					{/* Theme Toggle */}
					{/* <ThemeToggle /> */}
				</div>
			</div>

			{/* Header */}
			<div className="max-w-5xl mx-auto text-center mb-8">
				<h1 className="text-4xl font-bold mb-2">
					Smart Educational Files
				</h1>
				<p className="text-foreground/50">
					Professional templates and resources for educators 📚
				</p>
			</div>

			{/* Content */}
			<SmartFilesContent />

			{/* Falling Decoration */}
			<SmartFilesBackground />
		</div>
	);
}
