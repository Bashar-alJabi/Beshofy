"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";

export function ThemeProvider({
	children,
	storageKey = "theme",
	...props
}: React.ComponentProps<typeof NextThemesProvider> & { storageKey?: string }) {
	return <NextThemesProvider storageKey={storageKey} {...props}>{children}</NextThemesProvider>;
}