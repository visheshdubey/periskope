import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { MenuItem } from "@/types/Menu";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const filterMenuItems = (
  menuItems: MenuItem[],
  targetTo: string
): MenuItem | undefined => {
  const normalizedTargetTo = targetTo.toLowerCase();

  if (
    normalizedTargetTo.endsWith("/dashboard") ||
    normalizedTargetTo.endsWith("/dashboard/")
  ) {
    return menuItems.find((item) => item.to === "/dashboard");
  } else {
    // Check if any group is active
    const groupItem = menuItems.find(
      (item) => normalizedTargetTo.startsWith(item.to) && item.name === "Groups"
    );

    if (groupItem) {
      return groupItem;
    } else {
      return menuItems.find(
        (item) =>
          normalizedTargetTo.startsWith(item.to) && item.name !== "Dashboard"
      );
    }
  }
};
