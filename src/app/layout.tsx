import CustomCursor from '@/components/Cursor/Cursor';
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';
import { ThemeProvider } from '@/context/Theme/theme-provider';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../styles/globals.css';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-poppins',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://beshofy.com'),
    title: {
        default: 'Beshofy - Your Premium Online Marketplace',
        template: '%s | Beshofy',
    },
    description: 'Welcome to Beshofy - Your one-stop destination for premium products and resources. Discover a world of carefully curated items designed to enhance your experience.',
    authors: [{ name: 'Bashar Al-jabi' }],
    creator: 'Bashar Al-jabi',
    publisher: 'Beshofy',
    keywords: ['online marketplace', 'premium products', 'curated collection', 'professional resources', 'online shop', 'Beshofy', 'Shop', 'e-commerce'],
    category: 'e-commerce',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://beshofy.com',
        siteName: 'Beshofy',
        title: 'Beshofy - Your Premium Online Marketplace',
        description: 'Welcome to Beshofy - Your one-stop destination for premium products and resources. Discover a world of carefully curated items designed to enhance your experience.',
        images: [
            {
                url: '/preview/welcome-preview.jpg',
                width: 1200,
                height: 630,
                alt: 'Beshofy Preview',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Beshofy - Your Premium Online Marketplace',
        description: 'Welcome to Beshofy - Your one-stop destination for premium products and resources. Discover a world of carefully curated items designed to enhance your experience.',
        images: ['/preview/welcome-preview.jpg'],
        creator: '@beshofy',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    manifest: '/manifest.json', // manifest
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-smooth">
            <head>
                {/* Favicon */}
                <link rel="icon" href="/Logo/By-Logo.png" />
                <link rel="shortcut icon" href="/Logo/By-Logo.png" type="image/x-icon" />
                <link rel="apple-touch-icon" href="/Logo/By-Logo.png" />
                {/* SitMap */}
                <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
            </head>
            <body className={`${poppins.variable}`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <CustomCursor />
                    <ScrollToTop />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
