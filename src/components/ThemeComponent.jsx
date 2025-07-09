'use client';

import { ThemeProvider } from "next-themes";

export default function ThemeComponent({ children }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="text-orange-400 dark:text-gray-300 min-h-screen transition-colors duration-300">
                {children}
            </div>
        </ThemeProvider>
    );
}
