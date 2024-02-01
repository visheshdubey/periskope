"use client";
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
import { ReactNode } from "react";
import { useQuery } from "react-query";

import SecondaryHeader from "@/components/headers/SecondaryHeader";
import Spinner from "@/components/Spinner";
import DataTable from "@/components/tables/DataTable";
import TableSection from "@/components/tables/TableSection";
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
import { user } from "@/service";

const GroupLayout = ({ children }: { children: ReactNode }) => {
  const groupsRes = useQuery(["groups"], () => user.getGroups());
  return (
    <div className="flex w-full h-full transition-all ease-in-out">
      <div className="flex grow flex-col">
        <SecondaryHeader />
        <TableSection>
          <DataTable
            tableData={groupsRes.data}
            columns={tableColumns}
          ></DataTable>
          {groupsRes.isLoading && (
            <div className="flex grow  items-center absolute  w-full justify-center">
              <Spinner size={"large"}></Spinner>
            </div>
          )}
          {/* Pagination */}
          <div className="flex gap-2 items-center bg-white border-t shadow-sm px-4 py-2 absolute bottom-0 w-full  z-50">
            <Button size={"icon"} variant={"outline"} className="w-8 h-6">
              <MoveLeft size={14} />
            </Button>
            <span className="text-xs"> 1 of 6</span>
            <Button size={"icon"} variant={"outline"} className="w-8 h-6">
              <MoveRight size={14} />
            </Button>
            <span className="text-xs"> 256 rows</span>
          </div>
        </TableSection>
      </div>
      {children}
    </div>
  );
};

export default GroupLayout;
