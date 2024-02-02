import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../global.css";
import LeftSideBar from "../../components/layout/LeftSideBar";
import TopBar from "../../components/layout/TopBar";
import BottomBar from "../../components/layout/BottomBar";
import RightSideBar from "../../components/layout/RightSideBar";
import MainContainer from "../../components/layout/MainContainer";

export const metadata = {
  title: "Chillout zone",
  description: "Chillout zone is a social media web application",
};

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2 text-light-1`}>
          <main className="flex flex-row">
            <LeftSideBar />
            <MainContainer>{children}</MainContainer>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
