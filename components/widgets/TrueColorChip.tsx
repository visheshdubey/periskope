import React, { ReactNode } from "react";

import { Project } from "@/types/Group";

const TrueColorChip = ({
  bg,
  text,
  children,
}: {
  bg: string;
  text: string;
  children: ReactNode;
}) => {
  return (
    <span
      style={{
        color: text,
        backgroundColor: bg,
      }}
      className=" font-semibold px-2.5 py-1 rounded-full text-xs"
    >
      {children}
    </span>
  );
};

export default TrueColorChip;
