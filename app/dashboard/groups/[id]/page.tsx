import {
  CalendarDays,
  ChevronsUpDown,
  Download,
  Filter,
  LogOut,
  MoveLeft,
  MoveRight,
  RefreshCcw,
  Search,
  Signal,
  SignalMedium,
} from "lucide-react";

import DataTable from "@/components/tables/DataTable";
import { Icons } from "@/components/theme/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tableColumns, tableData } from "@/data";

const page = () => {
  return (
    <div
      className=" w-3/12  max-w-sm border-l "
      style={{ height: "calc(100vh - 2.5rem);" }}
    >
      <ScrollArea className={"h-full bg-white"}>
        <div className="flex w-full flex-col  h-full mb-12 ">
          <div className="flex items-center justify-between w-full  p-6 ">
            <div className="flex items-center gap-4 ">
              <Avatar className=" h-8 w-8">
                <AvatarImage
                  className="rounded"
                  src={"https://github.com/visheshdubey.png"}
                  alt=""
                ></AvatarImage>
                <AvatarFallback className=" bg-muted text-xs  font-bold">
                  v
                </AvatarFallback>
              </Avatar>

              <span className="text-sm font-semibold truncate w-36 ">{`TeamWorkz <> Periskope`}</span>
            </div>
            <div className="flex gap-1.5 items-center text-gray-400 text-xs">
              <RefreshCcw size={12} className="stroke-current" />
              Refresh
            </div>
          </div>
          <Tabs defaultValue="overview" className="w-full   p-0">
            <TabsList className="bg-white border-b border-b-gray-200 w-full flex justify-start gap-2 px-6 py-0">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:border-b h-full data-[state=active]:text-primary data-[state=active]:font-medium text-sm  data-[state=active]:shadow-none data-[state=active]:bg-transparent border-primary px-2"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="members"
                className="data-[state=active]:border-b h-full data-[state=active]:text-primary data-[state=active]:font-medium text-sm  data-[state=active]:shadow-none data-[state=active]:bg-transparent border-primary px-2"
              >
                Members
              </TabsTrigger>
              <TabsTrigger
                value="logs"
                className="data-[state=active]:border-b h-full data-[state=active]:text-primary data-[state=active]:font-medium text-sm  data-[state=active]:shadow-none data-[state=active]:bg-transparent border-primary px-2"
              >
                Logs
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="overview"
              className="w-full py-6  flex flex-col gap-6"
            >
              <div className="px-6 gap-2 flex w-full text-sm font-medium">
                <span className="text-gray-400 w-2/3">Last Active</span>
                <span className="">03:17</span>
              </div>
              <div className="px-6 gap-2 flex w-full text-sm font-medium">
                <span className="text-gray-400 w-2/3">
                  Disappearing Messages
                </span>
                <span className="">
                  <Select>
                    <SelectTrigger className="w-fit h-fit p-0 border-0 active:border-0 outline-none focus-visible:ring-0 ">
                      <SelectValue placeholder="OFF" className="font-mono" />
                    </SelectTrigger>
                    <SelectContent className="w-fit">
                      <SelectItem value="on">ON</SelectItem>
                      <SelectItem value="off">OFF</SelectItem>
                    </SelectContent>
                  </Select>
                </span>
              </div>
              <div className="px-6 gap-2 flex w-full text-[0.85rem] font-medium">
                <span className="text-gray-400 w-4/6">
                  Send Message Permission
                </span>
                <span className="">
                  <Select>
                    <SelectTrigger className="w-fit h-fit p-0 border-0 active:border-0 outline-none focus-visible:ring-0 ">
                      <SelectValue placeholder="All" className="font-mono" />
                    </SelectTrigger>
                    <SelectContent className="w-fit">
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="only_admins">Only Admins</SelectItem>
                    </SelectContent>
                  </Select>
                </span>
              </div>
              <div className="px-6 gap-2 flex w-full text-sm font-medium">
                <span className="text-gray-400 w-4/6">Project</span>
                <span className="bg-blue-50 text-blue-500 font-semibold px-2.5 py-1 rounded-full text-xs">
                  # Demo
                </span>
              </div>
              <div className="px-6 gap-2 flex w-full text-sm font-medium">
                <span className="text-gray-400 w-4/6">Lables</span>
                <span className="flex flex-col gap-1">
                  <div className="w-fit flex items-center gap-1.5 border shadow-sm bg-white px-3 py-1 font-medium text-xs rounded-full">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Team 1
                  </div>
                  <div className="w-fit flex items-center gap-1.5 border shadow-sm bg-white px-3 py-1 font-medium text-xs rounded-full">
                    <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                    Team 2
                  </div>

                  <div className="w-fit text-nowrap truncate flex items-center gap-1.5 border text-gray-400 shadow-sm bg-white px-2 py-1  text-xs rounded-full">
                    + Add Label
                  </div>
                </span>
              </div>
              <Separator></Separator>
              <div className="px-6 flex flex-col gap-2 font-medium">
                <div className="flex gap-2 text-sm text-gray-600 items-center">
                  <Download size={14} className="stroke-current" /> Export Chat
                </div>
                <div className="flex gap-2 text-sm text-red-500 items-center ">
                  <LogOut size={14} className="stroke-current" /> Exit Group
                </div>
              </div>

              <div
                className="mx-6 flex flex-col  p-2.5 bg-white rounded-lg  gap-2"
                style={{
                  boxShadow: "0px 2px 25px 0px rgba(26, 24, 30, 0.1)",
                }}
              >
                <div className="flex text-sm items-center justify-between">
                  <span className="text-gray-400 text-[0.75rem]">
                    {`PER-011 | Evoke <> Skope`}
                  </span>
                  <Avatar className=" h-5 w-5">
                    <AvatarImage
                      className="rounded"
                      src={"https://github.com/visheshdubey_.png"}
                      alt=""
                    ></AvatarImage>
                    <AvatarFallback className=" bg-indigo-400 text-[0.7rem] text-primary-foreground ">
                      H
                    </AvatarFallback>
                  </Avatar>
                </div>
                <span className="font-semibold text-sm">
                  ⭕ Issues with mentions on groups
                </span>
                <div className="flex justify-between items-center text-[0.6rem] leading-[0.7rem]">
                  <div className="flex gap-2">
                    <span className="p-1  border rounded-md  flex gap-1 items-center ">
                      <Signal size={9.6} className="" />
                    </span>
                    <span className="px-1  border rounded-md  flex gap-1 items-center">
                      <div className=" aspect-square  rounded-full">
                        <CalendarDays
                          size={9.6}
                          className="stroke-fuchsia-600"
                        />
                      </div>
                      <span className="pt-[1.5px]"> Dec 22</span>
                    </span>
                    <span className="px-1  border rounded-md  flex gap-1 items-center">
                      <div className="w-1.5 aspect-square bg-gray-800 rounded-full"></div>
                      <span className="pt-[1.5px]"> client</span>
                    </span>
                  </div>
                  <span className="text-[0.6rem] text-gray-400">3 days</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="members">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
      </ScrollArea>
    </div>
  );
};

export default page;
