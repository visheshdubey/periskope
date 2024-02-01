import { CalendarDays, Signal } from "lucide-react";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TicketCardProps {
  data: {
    id: string;
    title: string;
    subtitle?: string;
    avatarSrc: string;
    avatarFallbackText: string;
    signalColor?: string;
    calendarDate?: string;
    additionalInfo?: string;
    duration: string;
  };
}
const TicketCard = ({ data }: TicketCardProps) => {
  const {
    id,
    title,
    subtitle,
    avatarSrc,
    avatarFallbackText,
    signalColor,
    calendarDate,
    additionalInfo,
    duration,
  } = data;

  return (
    <div
      className="mx-6 flex flex-col p-2.5 bg-white rounded-lg gap-2"
      style={{ boxShadow: "0px 2px 25px 0px rgba(26, 24, 30, 0.1)" }}
    >
      <div className="flex text-sm items-center justify-between">
        <span className="text-gray-400 text-[0.75rem]">{id}</span>
        <Avatar className="h-5 w-5">
          <AvatarImage className="rounded" src={avatarSrc} alt="" />
          <AvatarFallback className="bg-indigo-400 text-[0.7rem] text-primary-foreground">
            {avatarFallbackText}
          </AvatarFallback>
        </Avatar>
      </div>
      <span className="font-semibold text-sm">{title}</span>
      <div className="flex justify-between items-center text-[0.6rem] leading-[0.7rem]">
        <div className="flex gap-2">
          {signalColor && (
            <span className="p-1 border rounded-md flex gap-1 items-center">
              <Signal size={9.6} className="" color={signalColor} />
            </span>
          )}
          {calendarDate && (
            <span className="px-1 border rounded-md flex gap-1 items-center">
              <div className="aspect-square rounded-full">
                <CalendarDays size={9.6} className="stroke-fuchsia-600" />
              </div>
              <span className="pt-[1.5px]">{calendarDate}</span>
            </span>
          )}
          {additionalInfo && (
            <span className="px-1 border rounded-md flex gap-1 items-center">
              <div className="w-1.5 aspect-square bg-gray-800 rounded-full"></div>
              <span className="pt-[1.5px]">{additionalInfo}</span>
            </span>
          )}
        </div>
        <span className="text-[0.6rem] text-gray-400">{duration}</span>
      </div>
    </div>
  );
};

export default TicketCard;
