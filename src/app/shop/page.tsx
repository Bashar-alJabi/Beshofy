import Background from "@/components/Background/Background";
import Categories from "@/components/Categories/Categories";
import HomeBubble from "@/components/HomeBubble/HomeBubble";

export default function StorePage() {
	return (
		<div className="relative min-h-dvh overflow-hidden">
			<Background url="/Videos/robots.mp4" />
			<main className="relative z-10">
				<Categories />
				<HomeBubble />
			</main>
		</div>
	);
}
