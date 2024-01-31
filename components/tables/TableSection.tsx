import { MoveLeft, MoveRight } from "lucide-react";
import React, { ReactNode } from "react";

import { ScrollArea } from "../ui/scroll-area";

const TableSection = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="relative flex grow h-full w-full"
      style={{ height: "calc(100vh - 6rem)" }}
    >
      <ScrollArea className=" h-full w-full rounded-md">{children}</ScrollArea>
    </div>
  );
};

export default TableSection;
