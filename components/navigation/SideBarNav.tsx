"use client";
import { ChevronsUpDown } from "lucide-react";
import { usePathname } from "next/navigation";

import SideBarNavListItem from "@/components/navigation/SideBarNavListItem";
import { Icons } from "@/components/theme/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuItem } from "@/types/Menu";

export const routes: MenuItem[] = [
  {
    to: "/dashboard",
    name: "Dashboard",
    icon: <Icons.home />,
  },
  {
    to: "/dashboard/chats",
    name: "Chats",
    icon: <Icons.chat />,
    chipData: 33,
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

const SideBarNav = () => {
  const currentRoute = usePathname();

  return (
    <aside className="z-50 flex w-56 flex-shrink-0 flex-col gap-2 max-h-screen h-full justify-between overflow-hidden border-r border-gray-200 px-4 shadow-sm">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full " asChild>
          <div className="flex cursor-pointer items-center gap-2 p-2 hover:bg-secondary rounded">
            <Avatar className="rounded-md h-7 w-7">
              <AvatarImage
                className="rounded"
                src={"/not_a_pic.png"}
                alt="Profile Picture"
              />
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
                  alt="Organization Logo"
                />
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
                  alt="User Profile Picture"
                />
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
        <ul className="flex flex-col text-sm gap-1">
          {routes.map((item, index) => (
            <li key={`side-nav-list-item-${index}`}>
              <SideBarNavListItem item={item} currentRoute={currentRoute} />
            </li>
          ))}
        </ul>
        <div className="flex gap-4 items-center text-sm mb-4">
          <Icons.whatsapp />
          Help & Support
        </div>
      </div>
    </aside>
  );
};

export default SideBarNav;
