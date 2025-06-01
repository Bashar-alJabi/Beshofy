import AssistantBubble from "@/components/AssistantBubble/AssistantBubble";
import Avatar from "@/components/Avatar/Avatar";
import Background from "@/components/Background/Background";
import Logo from "@/components/Logo/Logo";
import FloatingNavbar from "@/components/Navbar/FloatingNavbar";
import SocialLinks from "@/components/Socials/Socials";

export default function HomePage() {
	return (
		<div className="relative min-h-dvh overflow-hidden">
			<Background url="/Videos/search.mp4" />
			<main className="relative z-10">
				<Logo />
				<FloatingNavbar />
				<AssistantBubble />
				<Avatar />
				<SocialLinks />
			</main>
		</div>
	);
}
