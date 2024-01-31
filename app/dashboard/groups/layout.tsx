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

const GroupLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full h-full transition-all ease-in-out">
      <div className="flex grow flex-col">
        {/* row */}
        <div className="flex w-full p-2  items-center gap-4 justify-between">
          {/* first half */}
          <div className="flex gap-4 h-8">
            <div
              className="flex h-8 max-w-56 items-center flex-1 gap-2 px-4 py-1 rounded-md border border-gray-200 bg-white"
              role="search"
            >
              <Search className="stroke-muted-foreground" size={14}></Search>
              <input
                type="text"
                name="search"
                placeholder="Search "
                className="w-full bg-transparent active:border-0 text-[14px] outline-none  placeholder-black/50"
                aria-label="Search"
              />
            </div>
            <Button
              variant={"outline"}
              size={"sm"}
              className="h-8 gap-2 text-xs text-muted-foreground"
            >
              <Filter className="stroke-current" size={10} />
              Filter
            </Button>
          </div>
          <div className="flex gap-4">
            <Button size={"sm"} className="text-xs h-8">
              Bulk message
            </Button>
            <Button
              variant={"outline"}
              size={"sm"}
              className="h-8 gap-2 text-xs text-muted-foreground"
            >
              Group Actions
              <ChevronsUpDown className="stroke-current" size={14} />
            </Button>
          </div>
        </div>
        {/* Second half */}
        <div
          className="relative flex grow h-full w-full"
          style={{ height: "calc(100vh - 6rem);" }}
        >
          <ScrollArea className=" h-full w-full rounded-md">
            <DataTable tableData={tableData} columns={tableColumns}></DataTable>
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
          </ScrollArea>
        </div>
      </div>
      {children}
    </div>
  );
};

export default GroupLayout;
