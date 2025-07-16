import "./globals.css";
import Header from "@/components/Header";
import ThemeComponent from "@/components/ThemeComponent";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeComponent>
            <Header />
            {children}
          </ThemeComponent>
        </body>
      </html>
   </ClerkProvider>
  );
}
