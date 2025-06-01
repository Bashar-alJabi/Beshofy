import Background from "@/components/Background/Background";
import WelcomeComp from "@/components/Pages/WelcomeComp";
import GlassShoppingBag from "../../components/GlassShoppingBag/GlassShoppingBag";

export default function Welcome() {
	return (
		<div className="relative min-h-dvh overflow-hidden">
			<Background url="/Videos/enter.mp4" />
			<GlassShoppingBag />
			<WelcomeComp />
		</div>
	);
}
