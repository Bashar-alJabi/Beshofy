import Background from '@/components/Background/Background';
import ContactForm from '@/components/ContactForm/ContactForm';
import HomeBubble from '@/components/HomeBubble/HomeBubble';
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
    title: "Contact Beshofy - Get in Touch",
    description: "Contact Beshofy's support team for any questions about our products, technical assistance, or partnership opportunities. We're here to help you make the most of your experience.",
    authors: [{ name: "Bashar Al-jabi" }],
    keywords: ["contact beshofy", "customer support", "marketplace support", "technical assistance", "partnership inquiries", "product help"],
    openGraph: {
        title: "Contact Beshofy - Get in Touch",
        description: "Contact Beshofy's support team for any questions about our products, technical assistance, or partnership opportunities. We're here to help you make the most of your experience.",
        images: ["/preview/contact-preview.jpg"],
        url: "https://beshofy.com/contact",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Beshofy - Get in Touch",
        description: "Contact Beshofy's support team for any questions about our products, technical assistance, or partnership opportunities. We're here to help you make the most of your experience.",
        images: ["/preview/contact-preview.jpg"],
    },
});

export default function ContactPage() {
    return (
        <>
            <div className="relative min-h-dvh overflow-hidden">
                <Background url="/Videos/contact.mp4" />
                <main className="relative z-10">
                    <ContactForm />
                    <HomeBubble />
                </main>
            </div>
        </>
    );
}
