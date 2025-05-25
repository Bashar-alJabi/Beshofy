import Background from "@/components/Background/Background";
import WelcomeComp from "@/components/Pages/WelcomeComp";
import GlassShoppingBag from "../../components/GlassShoppingBag/GlassShoppingBag";

export default function Welcome() {
	return (
		<>
			<Background url="/Videos/enter.mp4" />
			<GlassShoppingBag />
			<WelcomeComp />
		</>
	);
}
