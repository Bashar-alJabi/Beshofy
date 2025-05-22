// import AssistantBubble from "@/components/AssistantBubble/AssistantBubble";
import Background from "@/components/Background/Background";
import Categories from "@/components/Categories/Categories";
import HomeBubble from "@/components/HomeBubble/HomeBubble";
import Logo from "@/components/Logo/Logo";

export default function StorePage() {
	return (
		<>
			<Background url="/Videos/robots.mp4" />
			<main className="relative z-10">
				<Logo />
				<HomeBubble />
				{/* <AssistantBubble /> */}
				<Categories />
			</main>
		</>
	);
}
