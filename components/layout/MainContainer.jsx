"use client";
import React from "react";
import TopBar from "./TopBar";
import { usePathname } from "next/navigation";
import { pageTitles } from "../../constants";

const MainContainer = ({ children }) => {
  //Get the current path.
  const regex = /^\/([^\/]+)/;
  const currentPath = usePathname();

  const firstPath = currentPath.match(regex)
    ? Path.match(regex)[0]
    : currentPath;

  // get the title of the current path.
  const title = pageTitles.find((page) => page.url === firstPath)?.title || "";
  return (
    <section className="flex flex-col flex-1 max-w-3xl px-5 md:px-10 xl:px-20">
      <TopBar />
      <div className="mt-6 mb-20">
        <h1 className="mb-5 text-heading2-bold max-sm:text-heading3-bold text-light-1">
          {title}
        </h1>
        <div className="h-screen overflow-y-scroll custom-scrollbar">
          {children}
        </div>
      </div>
    </section>
  );
};

export default MainContainer;
