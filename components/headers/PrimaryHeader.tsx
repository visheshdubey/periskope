"use client";
import { Bell, HelpCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

import { filterMenuItems } from "@/lib/utils";

import { routes } from "../navigation/SideBarNav";
import { Button } from "../ui/button";

const PrimaryHeader = () => {
  const currentRoute = usePathname();
  return (
    <div className="flex min-h-10 h-10 text-muted-foreground justify-between w-full border-b p-2">
      <div className="flex gap-1 text-xs items-center">
        <span>{filterMenuItems(routes, currentRoute)?.icon}</span>
        {filterMenuItems(routes, currentRoute)?.name}
      </div>
      <div className="flex  gap-4">
        <Button
          variant={"outline"}
          className="flex  text-xs items-center gap-2 px-2 py-1 h-fit"
        >
          <HelpCircle size={14} />
          Docs
        </Button>
        <Button
          variant={"outline"}
          className="flex text-xs items-center gap-2 px-2 py-1 h-fit"
        >
          <div className="flex w-4 h-4  relative items-center  justify-center  rounded-full">
            <div className="w-2.5 h-2.5 blur-sm bg-primary/80 rounded shadow-3xl absolute"></div>
            <div className="w-2 h-2 bg-primary rounded shadow-2xl absolute"></div>
          </div>
          +91 8840224036
        </Button>
        <Button variant={"outline"} size={"icon"} className="p-0 h-full">
          <Bell size={14} />
        </Button>
      </div>
    </div>
  );
};

export default PrimaryHeader;
