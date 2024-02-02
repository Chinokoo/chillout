"use client";
import React from "react";

const RightSideBar = () => {
  return (
    <div className="sticky right-0 top-0 h-screen w-[300px] flex flex-col gap-12 overflow-auto py-6 pl-6 pr-10 max-lg:hidden">
      <div className="flex flex-col gap-4">
        <h4 className="text-heading4-bold text-light-1">Following</h4>
        <div className="flex flex-col gap-4">mapping users</div>
      </div>
      <div>
        <h4 className="text-heading4-bold text-light-1">Suggested People</h4>
        <div className="flex flex-col gap-4">mapping users</div>
      </div>
    </div>
  );
};

export default RightSideBar;
