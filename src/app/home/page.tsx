import AssistantBubble from '@/components/AssistantBubble/AssistantBubble';
import Avatar from '@/components/Avatar/Avatar';
import Background from '@/components/Background/Background';
import Logo from '@/components/Logo/Logo';
import FloatingNavbar from '@/components/Navbar/FloatingNavbar';
import SocialLinks from '@/components/Socials/Socials';
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
    title: "Beshofy Home - Explore Our Premium Collection",
    description: "Welcome to Beshofy's home page. Browse our extensive collection of premium products and resources. Find the perfect solutions for your needs in our carefully curated marketplace.",
    authors: [{ name: "Bashar Al-jabi" }],
    keywords: ["premium products", "curated collection", "professional resources", "online marketplace", "premium resources"],
    openGraph: {
        title: "Beshofy Home - Explore Our Premium Collection",
        description: "Welcome to Beshofy's home page. Browse our extensive collection of premium products and resources. Find the perfect solutions for your needs in our carefully curated marketplace.",
        images: ["/preview/home-preview.jpg"],
        url: "https://beshofy.com/home",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Beshofy Home - Explore Our Premium Collection",
        description: "Welcome to Beshofy's home page. Browse our extensive collection of premium products and resources. Find the perfect solutions for your needs in our carefully curated marketplace.",
        images: ["/preview/home-preview.jpg"],
    },
});

export default function HomePage() {
    return (
        <>
            <div className="relative min-h-dvh overflow-hidden">
                <Background url="/Videos/home.mp4" />
                <main className="relative z-10">
                    <Logo />
                    <FloatingNavbar />
                    <AssistantBubble />
                    <Avatar />
                    <SocialLinks />
                </main>
            </div>
        </>
    );
}
