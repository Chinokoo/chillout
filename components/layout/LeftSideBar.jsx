"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import { SignOutButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Logout } from "@mui/icons-material";

const LeftSideBar = () => {
  return (
    <div className=" h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md-hidden custom-scrollbar">
      {/*** Logo in the top left bar ***/}
      <Link href="/">
        <Image
          src="/assets/logo.png"
          alt="Chillout zone logo"
          width={200}
          height={200}
        />
      </Link>
      {/*** Profile photo in the top left bar ***/}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center text-light-1">
          <Link href="/">
            <Image
              src="/assets/phucmai.png"
              alt="profile photo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
          {/*** Profile name in the top left bar ****/}
          <p className="text-small-bold">Phuc Mai</p>
        </div>
        {/*** Profile info in the top left bar ****/}
        <div className="flex text-light-1 justify-between">
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">Following</p>
          </div>
        </div>
        <hr />
        {/*** Menu links in the top left bar **/}
        <Menu />

        <hr />
        {/*** Settings link in the top left bar ***/}
        <div className=" flex flex-row gap-4">
          <UserButton />
          <p className="text-light-1 text-body-bold">Manage Account</p>
        </div>
        <SignedIn>
          <SignOutButton>
            <div className="flex gap-4 items-center cursor-pointer">
              <Logout sx={{ color: "white", fontSize: "32px" }} />
              <p className="text-body-bold text-light-1">Log out</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </div>
  );
};

export default LeftSideBar;
