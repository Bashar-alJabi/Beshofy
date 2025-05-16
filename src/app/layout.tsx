import CustomCursor from "@/components/Cursor/Cursor";
// import SplashScreen from "@/components/SplashScreen/SplashScreen";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Beshofy",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/Logo/By-Logo.png" />
			</head>
			<body className={`${poppins.variable}`}>
				{/* <SplashScreen /> */}
					<CustomCursor />
					{children}
			</body>
		</html>
	);
}
