"use client";

import { Add, Search } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { Logout } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

const TopBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <div className="flex justify-between items-center mt-6">
      {/**Search bar on the main container. */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search posts, people, ..."
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="search-icon" onClick={() => {}} />
      </div>
      {/** post button on the main container. */}
      <button
        className="create-post-btn"
        onClick={() => router.push("/create-post")}
      >
        <Add />
        <p>Create A Post</p>
      </button>
      {/**profile image and logout button visible on small devices */}
      <div className="flex gap-3">
        <SignedIn>
          <SignOutButton>
            <div className="flex gap-4 items-center cursor-pointer md:hidden">
              <Logout sx={{ color: "white", fontSize: "32px" }} />
              <p className="text-body-bold text-light-1">Log out</p>
            </div>
          </SignOutButton>
        </SignedIn>
        <Link href="/">
          <Image
            src="/assets/phucmai.png"
            alt="profile photo"
            width={50}
            height={50}
            className="rounded-full md:hidden"
          />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
