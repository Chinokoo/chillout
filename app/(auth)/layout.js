import { Inter } from "next/font/google";
import "../global.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Auth",
  description: "Social Media Application",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
