import { MoveLeft, MoveRight } from "lucide-react";
import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { ScrollArea } from "../ui/scroll-area";

const TableSection = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("relative flex grow h-full w-full", className)}
      style={{ height: "calc(100vh - 6rem)" }}
    >
      <ScrollArea className=" h-full w-full rounded-md">{children}</ScrollArea>
    </div>
  );
};

export default TableSection;
