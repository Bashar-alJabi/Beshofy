import Background from '@/components/Background/Background';
import WelcomeComp from '@/components/Pages/WelcomeComp';
import type { Metadata } from "next";
import GlassShoppingBag from '../../components/GlassShoppingBag/GlassShoppingBag';

export const generateMetadata = (): Metadata => ({
    title: "Beshofy - Your Premium Online Marketplace",
    description: "Welcome to Beshofy - Your one-stop destination for premium products and resources. Discover a world of carefully curated items designed to enhance your experience.",
    authors: [{ name: "Bashar Al-jabi" }],
    keywords: ["online marketplace", "premium products", "curated collection", "professional resources", "online shop"],
    openGraph: {
        title: "Beshofy - Your Premium Online Marketplace",
        description: "Welcome to Beshofy - Your one-stop destination for premium products and resources. Discover a world of carefully curated items designed to enhance your experience.",
        images: ["/preview/welcome-preview.jpg"],
        url: "https://beshofy.com/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Beshofy - Your Premium Online Marketplace",
        description: "Welcome to Beshofy - Your one-stop destination for premium products and resources. Discover a world of carefully curated items designed to enhance your experience.",
        images: ["/preview/welcome-preview.jpg"],
    },
});

export default function Welcome() {
    return (
        <>
            <div className="relative min-h-dvh overflow-hidden">
                <Background url="/Videos/welcome.mp4" />
                <main className="relative z-10">
                    <GlassShoppingBag />
                    <WelcomeComp />
                </main>
            </div>
        </>
    );
}
