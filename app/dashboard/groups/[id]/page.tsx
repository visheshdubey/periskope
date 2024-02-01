"use client";
import { Download, LogOut, RefreshCcw, User, UsersRound } from "lucide-react";
import { useQuery, useQueryClient } from "react-query";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Label from "@/components/widgets/Label";
import TicketCard from "@/components/widgets/TicketCard";
import TrueColorChip from "@/components/widgets/TrueColorChip";
import formatDateTime from "@/lib/utils";
import { user } from "@/service";
import { Group } from "@/types/Group";
import { faker } from "@faker-js/faker";

const GroupDetailPage = ({ params }: { params: { id: string } }) => {
  const queryClient = useQueryClient();
  const { data, ...groupsDetailRes } = useQuery(
    ["groupsId"],
    (): Promise<Group> => user.getGroupById(params.id)
  );
  const memebers = Array.from(
    { length: data?.memberCount || 0 },
    (_, index) => index
  );
  const customTabTriggerClass = `data-[state=active]:border-b h-full data-[state=active]:text-primary data-[state=active]:font-medium text-sm
   data-[state=active]:shadow-none data-[state=active]:bg-transparent border-primary px-2`;
  return (
    <div
      className=" w-3/12  max-w-sm border-l "
      style={{ height: "calc(100vh - 2.5rem)" }}
    >
      <ScrollArea className={"h-full bg-white"}>
        <div className="flex w-full flex-col  h-full mb-12 ">
          <div className="flex items-center justify-between w-full  p-6 ">
            <div className="flex items-center gap-4 ">
              {groupsDetailRes.isLoading ? (
                <>
                  <Skeleton className="w-8 h-8 rounded-full"></Skeleton>
                  <Skeleton className="w-36 h-4 rounded-full"></Skeleton>
                </>
              ) : (
                <>
                  <Avatar className=" h-8 w-8">
                    <AvatarImage
                      className="rounded"
                      src={data?.avatar}
                      alt=""
                    ></AvatarImage>
                    <AvatarFallback className=" bg-muted text-xs  font-bold">
                      <UsersRound size={12} />
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-semibold truncate w-36 ">{` ${data?.name}`}</span>
                </>
              )}
            </div>
            <Button
              variant={"ghost"}
              size={"sm"}
              className="flex rounded-lg gap-1.5 items-center text-gray-400 text-xs"
              onClick={() => {
                queryClient.invalidateQueries("groupsId");
              }}
            >
              <RefreshCcw size={12} className="stroke-current" />
              Refresh
            </Button>
          </div>
          <Tabs defaultValue="overview" className="w-full   p-0">
            <TabsList className="bg-white border-b border-b-gray-200 w-full flex justify-start gap-2 px-6 py-0">
              <TabsTrigger value="overview" className={customTabTriggerClass}>
                Overview
              </TabsTrigger>
              <TabsTrigger value="members" className={customTabTriggerClass}>
                Members
              </TabsTrigger>
              <TabsTrigger value="logs" className={customTabTriggerClass}>
                Logs
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="overview"
              className="w-full py-6 flex flex-col gap-6"
            >
              <section className="px-6 gap-2 flex w-full text-sm font-medium">
                <span className="text-gray-400 grow">Last Active</span>
                <span className="w-[120px] truncate">
                  {data && formatDateTime(data.lastActive)}
                </span>
              </section>
              <section className="px-6 gap-2 grow flex w-full text-sm font-medium">
                <span className="text-gray-400 grow">
                  Disappearing Messages
                </span>
                <Select value={data?.isDisapperingMessageActive ? "on" : "off"}>
                  <SelectTrigger className=" w-[120px] h-fit p-0 border-0 active:border-0 outline-none focus-visible:ring-0">
                    <SelectValue placeholder="OFF" className="font-mono" />
                  </SelectTrigger>
                  <SelectContent className="w-fit">
                    <SelectItem value="on">ON</SelectItem>
                    <SelectItem value="off">OFF</SelectItem>
                  </SelectContent>
                </Select>
              </section>
              <section className="px-6 gap-2 grow flex  text-[0.85rem] font-medium">
                <span className="text-gray-400 grow">
                  Send Message Permission
                </span>
                <Select
                  value={
                    data?.sendMessageProvision === "ALL" ? "all" : "only_admins"
                  }
                >
                  <SelectTrigger className=" w-[120px]  h-fit p-0 border-0 active:border-0 outline-none focus-visible:ring-0">
                    <SelectValue placeholder="All" className="font-mono" />
                  </SelectTrigger>
                  <SelectContent className="w-fit">
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="only_admins">Only Admins</SelectItem>
                  </SelectContent>
                </Select>
              </section>
              <section className="px-6 gap-2 grow flex w-full text-sm font-medium">
                <span className="text-gray-400 grow">Project</span>
                <span className="w-[120px]">
                  {data && (
                    <TrueColorChip
                      bg={data.project.bgColor}
                      text={data.project.color}
                    >
                      #{data.project.name}
                    </TrueColorChip>
                  )}
                </span>
              </section>
              <section className="px-6 gap-2 grow flex w-full text-sm font-medium">
                <span className="text-gray-400 grow">Labels</span>
                <div className="flex w-[120px] flex-col gap-1">
                  {data?.Labels?.map((items) => (
                    <Label
                      key={items.id + items.name + data?.id}
                      name={items.name}
                      color={items.color}
                      className="px-2 py-1 w-fit  h-fit"
                    />
                  ))}
                  <Label
                    name={" + Add Label"}
                    className="px-2 py-1 w-fit  h-fit text-gray-400"
                  />
                </div>
              </section>
              <Separator />
              <div className="px-6 flex flex-col gap-2 font-medium">
                <Button
                  variant={"ghost"}
                  className="flex gap-2 w-fit py-[2px] px-2 text-sm text-gray-600 items-center"
                >
                  <Download size={14} className="stroke-current" /> Export Chat
                </Button>
                <Button
                  variant={"ghost"}
                  className="flex gap-2 w-fit py-[2px] px-2 hover:bg-destructive hover:text-destructive-foreground text-sm text-red-500 items-center "
                >
                  <LogOut size={14} className="stroke-current" /> Exit Group
                </Button>
              </div>
              {parseInt(params.id) % 2 === 0 && (
                <TicketCard
                  data={{
                    id: "PER-011 | Evoke <> Skope",
                    title: "⭕ Issues with mentions on groups",
                    subtitle: "Subtitle",
                    avatarSrc: "https://github.com/visheshdubey_.png",
                    avatarFallbackText: "H",
                    signalColor: "red",
                    calendarDate: "Dec 22",
                    additionalInfo: "client",
                    duration: "3 days",
                  }}
                />
              )}
            </TabsContent>
            <TabsContent
              value="members"
              className="w-full -mt-6 pt-0 flex flex-col gap-2"
            >
              {memebers.slice(0, 200).map((_, index) => (
                <div
                  key={`member-array-${index}`}
                  className="flex items-center gap-4 px-2 hover:bg-gray-400/20 mx-6 py-2 rounded-lg cursor-pointer"
                >
                  <Avatar className=" h-10 w-10">
                    <AvatarImage
                      className="rounded"
                      src={faker.image.avatar()}
                      alt=""
                    ></AvatarImage>
                    <AvatarFallback className=" bg-muted text-xs  font-bold">
                      <User size={12} />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">
                      {faker.person.fullName()}
                    </span>
                    <span className="text-xs text-gray-400">
                      {faker.phone.number()}
                    </span>
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent
              value="logs"
              className="w-full grow py-6 flex flex-col gap-6"
            >
              <div className="px-6 text-xs text-center">
                Group logs appear here!
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </ScrollArea>
    </div>
  );
};

export default GroupDetailPage;
