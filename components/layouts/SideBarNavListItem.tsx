import Link from "next/link";
import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";

const SideBarNavListItem = ({
  className,
  item,
  currentRoute,
}: {
  className?: string;
  currentRoute: string;
  item: { to: string; name: string; icon: ReactNode };
}) => {
  let isActive = false;
  const { icon, name, to } = item;
  if (name === "Dashboard") {
    isActive =
      currentRoute.toLowerCase().endsWith(`dashboard`) ||
      currentRoute.toLowerCase().endsWith(`dashboard/`);
  } else isActive = currentRoute.toLowerCase().startsWith(to);

  const linkClasses = cn(
    className,
    "flex gap-4 hover:bg-secondary hover:text-primary cursor-pointer py-1.5 px-2 rounded-lg transition-colors ease-in-out duration-150 items-center",
    "text-secondary-foreground",
    isActive && "bg-secondary text-primary font-semibold"
  );

  return (
    <Link href={to} className={linkClasses}>
      {icon}
      <span className="text-sm">{name}</span>
    </Link>
  );
};
export default SideBarNavListItem;
