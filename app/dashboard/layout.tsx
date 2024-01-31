"use client";
import { Bell, ChevronsUpDown, HelpCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import SideBarNavListItem from "@/components/layouts/SideBarNavListItem";
import { Icons } from "@/components/theme/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

interface MenuItem {
  to: string;
  name: string;
  icon: JSX.Element; // Assuming JSX.Element is the type for React icons
}

// function filterMenuItems(menuItems: MenuItem[], targetTo: string): MenuItem {
//   if (targetTo.toLowerCase().startsWith("/dashboard")) return menuItems[0];
//   else {
//     return menuItems.filter(
//       (item) =>
//         targetTo.toLowerCase().startsWith(item.to) && item.name !== "Dashboard"
//     )[0];
//   }
// }
function filterMenuItems(
  menuItems: MenuItem[],
  targetTo: string
): MenuItem | undefined {
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
}
const routes: MenuItem[] = [
  {
    to: "/dashboard",
    name: "Dashboard",
    icon: <Icons.home />,
  },
  {
    to: "/dashboard/chats",
    name: "Chats",
    icon: <Icons.chat />,
  },
  {
    to: "/dashboard/groups",
    name: "Groups",
    icon: <Icons.group />,
  },
  {
    to: "/dashboard/contacts",
    name: "Contacts",
    icon: <Icons.contact />,
  },
  {
    to: "/dashboard/files",
    name: "Files",
    icon: <Icons.files />,
  },
  {
    to: "/dashboard/settings",
    name: "Settings",
    icon: <Icons.settings />,
  },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentRoute = usePathname();
  return (
    <main className="flex relative h-screen overflow-hidden">
      <div className="z-50 flex w-56 flex-shrink-0 flex-col gap-2 max-h-screen h-full justify-between overflow-hidden border-r border-gray-200 px-4 shadow-sm">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full " asChild>
            <div className="flex cursor-pointer items-center gap-2 p-2 hover:bg-secondary rounded">
              <Avatar className="rounded-md h-7 w-7">
                <AvatarImage
                  className="rounded"
                  src={"/not_a_pic.png"}
                  alt=""
                ></AvatarImage>
                <AvatarFallback className="rounded-sm bg-primary text-primary-foreground font-bold">
                  T
                </AvatarFallback>
              </Avatar>
              <div className="flex items-center">
                <div className="w-full flex flex-col ">
                  <div className="flex w-full items-center justify-between">
                    <span className="w-32  text-sm truncate text-left font-semibold">
                      TeamWorkz
                    </span>
                  </div>
                  <span className="w-32 truncate text-left text-xs text-gray-500">
                    visheshdubey2016@gmail.com
                  </span>
                </div>{" "}
                <ChevronsUpDown size={16} className="stroke-muted-foreground" />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full gap-1 flex flex-col">
            <DropdownMenuLabel>
              <div className="flex items-center gap-2 ">
                <Avatar className="rounded-md h-4 w-4">
                  <AvatarImage
                    className="rounded"
                    src={"/not_a_pic.png"}
                    alt=""
                  ></AvatarImage>
                  <AvatarFallback className="rounded-sm bg-primary text-xs text-primary-foreground font-bold">
                    T
                  </AvatarFallback>
                </Avatar>
                <span className="w-32  text-sm truncate text-left font-semibold">
                  TeamWorkz
                </span>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuItem>Organization settings</DropdownMenuItem>
            <DropdownMenuItem>Invite team</DropdownMenuItem>
            <DropdownMenuItem>Manage projects</DropdownMenuItem>
            <DropdownMenuItem>Help & Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center gap-2 ">
                <Avatar className="rounded-md h-6 w-6">
                  <AvatarImage
                    className="rounded"
                    src={"/not_a_pic.png"}
                    alt=""
                  ></AvatarImage>
                  <AvatarFallback className="rounded-full bg-muted text-xs  font-bold">
                    v
                  </AvatarFallback>
                </Avatar>
                <span className="w-32  text-sm truncate text-left font-semibold">
                  visheshdubey2016@gmail.com
                </span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>Help & Support</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex flex-1  flex-col justify-between">
          <div className="flex flex-col gap-12">
            <ul className="flex flex-col text-sm gap-1">
              {routes.map((item, index) => (
                <li key={`side-nav-list-item-${index}`}>
                  <SideBarNavListItem item={item} currentRoute={currentRoute} />
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 items-center text-sm mb-4">
            <Icons.whatsapp />
            Help & Support
          </div>
        </div>
      </div>
      <div className="flex flex-col grow max-h-screen h-screen">
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
        <div className="flex grow bg-[#F9FAFB]">{children}</div>
      </div>
    </main>
  );
}
