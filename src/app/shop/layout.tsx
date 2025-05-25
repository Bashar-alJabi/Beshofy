import { ThemeProvider } from "@/context/Theme/theme-provider";
import type { ReactNode } from "react";

export default function ShopLayout({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			{children}
		</ThemeProvider>
	);
}
