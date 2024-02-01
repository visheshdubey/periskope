import { clsx, ClassValue } from "clsx";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
  formatDistanceToNow,
  parseISO,
} from "date-fns";
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

export default function formatDateTime(date: string) {
  const now = new Date();

  const parsedDate = typeof date === "string" ? parseISO(date) : date;
  const timeDifferenceDays = differenceInDays(now, parsedDate);
  const timeDifferenceHours = differenceInHours(now, parsedDate);
  const timeDifferenceMinutes = differenceInMinutes(now, parsedDate);
  const timeDifferenceSeconds = differenceInSeconds(now, parsedDate);

  if (timeDifferenceDays < 2) {
    if (timeDifferenceHours < 1) {
      if (timeDifferenceMinutes < 1) {
        return formatDistanceToNow(parsedDate, { addSuffix: true });
      } else {
        return formatDistanceToNow(parsedDate, { addSuffix: true });
      }
    } else {
      return formatDistanceToNow(parsedDate, { addSuffix: true });
    }
  } else {
    return format(parsedDate, "yyyy-MM-dd");
  }
}
