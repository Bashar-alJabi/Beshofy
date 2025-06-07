import Background from '@/components/Background/Background';
import Categories from '@/components/Categories/Categories';
import HomeBubble from '@/components/HomeBubble/HomeBubble';
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
    title: "Beshofy Shop - Browse All Categories",
    description: "Explore Beshofy's comprehensive marketplace. Browse through our carefully curated categories of premium products and professional resources to find exactly what you need.",
    authors: [{ name: "Bashar Al-jabi" }],
    keywords: ["online marketplace", "premium products", "professional resources", "curated categories", "online shop"],
    openGraph: {
        title: "Beshofy Shop - Browse All Categories",
        description: "Explore Beshofy's comprehensive marketplace. Browse through our carefully curated categories of premium products and professional resources to find exactly what you need.",
        images: ["/preview/shop-preview.jpg"],
        url: "https://beshofy.com/shop",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Beshofy Shop - Browse All Categories",
        description: "Explore Beshofy's comprehensive marketplace. Browse through our carefully curated categories of premium products and professional resources to find exactly what you need.",
        images: ["/preview/shop-preview.jpg"],
    },
});

export default function StorePage() {
    return (
        <>
            <div className="relative min-h-dvh overflow-hidden">
                <Background url="/Videos/shop.mp4" />
                <main className="relative z-10">
                    <Categories />
                    <HomeBubble />
                </main>
            </div>
        </>
    );
}
