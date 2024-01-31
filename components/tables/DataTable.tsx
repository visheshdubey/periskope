"use client";
import { usePathname, useRouter } from "next/navigation";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { TableData } from "@/types/Table";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ScrollArea } from "../ui/scroll-area";

const data = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
const DataTable = ({
  tableData,
  columns,
}: {
  tableData: TableData[];
  columns: string[];
}) => {
  const router = useRouter();
  const path = usePathname();
  return (
    <Table className="mb-12 min-w-screen-lg">
      <TableHeader className="bg-white text-[0.85rem] font-medium shadow-sm w-full ">
        <TableRow>
          <TableHead className="w-4 py-2 h-fit">
            <input
              type="checkbox"
              name="selected-table-row"
              id=""
              className="accent-primary"
            />
          </TableHead>
          {columns.map((item, index) => (
            <TableHead
              key={`column-header-item-${index}`}
              className={cn(
                columns.length === index + 1 && "text-end",
                "h-fit"
              )}
              scope="col"
            >
              {item}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="bg-white">
        {data.map((item, index) => (
          <TableRow
            key={`table-row-key-${index}`}
            className={cn(
              "hover:bg-gray-200/50 border-0  transition-colors ease-in-out duration-200  cursor-pointer ",
              path.toLowerCase().startsWith(`/dashboard/groups/${index}`) &&
                "bg-gray-200/50"
            )}
            onClick={() =>
              router.push(`/dashboard/groups/${index}`, { scroll: false })
            }
          >
            <TableCell className="font-medium py-2 h-4  ">
              <input
                type="checkbox"
                name="selected-table-row"
                id=""
                className="accent-primary"
              />
            </TableCell>
            <TableCell className="  h-4 py-2 ">
              {" "}
              <div className="flex items-center gap-2">
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
                {`TeamWorkz <> Periskope`}
                <div className="bg-green-600 rounded-full w-[18px] h-[18px] text-primary-foreground text-[0.575rem] flex items-center justify-center p-1.5">
                  12
                </div>
              </div>
            </TableCell>
            <TableCell className="py-2">
              <span className="bg-blue-50 text-blue-500 font-semibold px-2.5 py-1 rounded-full text-xs">
                # Demo
              </span>
            </TableCell>
            <TableCell className="gap-1 flex h-4  py-2">
              <div className="flex items-center gap-1.5 border shadow-sm bg-white px-3 py-3 font-medium text-xs rounded-full">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Team 1
              </div>
              <div className="flex items-center gap-1.5 border shadow-sm bg-white px-3 py-3 font-medium text-xs rounded-full">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Team 2
              </div>
              <div className="flex items-center gap-1.5 border shadow-sm bg-white px-1.5 py-3 font-medium text-xs rounded-full">
                + 3
              </div>
            </TableCell>
            <TableCell className="text-center h-4 py-2 ">1200</TableCell>
            <TableCell className="text-right h-4  py-2">Yesterday</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
