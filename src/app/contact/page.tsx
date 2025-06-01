import Background from "@/components/Background/Background";
import ContactForm from "@/components/ContactForm/ContactForm";
import HomeBubble from "@/components/HomeBubble/HomeBubble";

export default function ContactPage() {
	return (
		<div className="relative min-h-dvh overflow-hidden">
			<Background url="/Videos/files.mp4" />
			<main className="relative z-10">
				<ContactForm />
				<HomeBubble />
			</main>
		</div>
	);
}
