"use client";
import { UsersRound } from "lucide-react";
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
import { GroupsColumn } from "@/data";
import formatDateTime, { cn } from "@/lib/utils";
import { Group } from "@/types/Group";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Label from "../widgets/Label";
import NumberChip from "../widgets/NumberChip";
import TrueColorChip from "../widgets/TrueColorChip";

const DataTable = ({
  tableData,
  columns,
}: {
  tableData: Group[];
  columns: GroupsColumn;
}) => {
  const router = useRouter();
  const path = usePathname();
  return (
    <Table className=" mb-12 min-w-screen-lg ">
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
                "h-fit",
                item.className
              )}
              scope="col"
            >
              {item.name}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="bg-white">
        {tableData?.map((item, index) => (
          <TableRow
            key={`table-row-key-${item.id}`}
            className={cn(
              "hover:bg-gray-200/50 border-0  transition-colors ease-in-out duration-200  cursor-pointer ",
              path.toLowerCase().startsWith(`/dashboard/groups/${item.id}`) &&
                "bg-gray-200/50"
            )}
            onClick={() =>
              router.push(`/dashboard/groups/${item.id}`, { scroll: false })
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
                    src={item.avatar}
                    alt=""
                  ></AvatarImage>
                  <AvatarFallback className=" bg-muted text-xs text-gray-500  font-bold">
                    <UsersRound size={12} />
                  </AvatarFallback>
                </Avatar>
                {item.name}
                <NumberChip value={item.unreadMessageCount} />
              </div>
            </TableCell>
            <TableCell className="py-2">
              <TrueColorChip
                bg={item.project.bgColor}
                text={item.project.color}
              >
                #{item.project.name}
              </TrueColorChip>
            </TableCell>
            <TableCell className="gap-1 flex h-4  py-2">
              {item.Labels.slice(0, 2).map((items) => (
                <Label
                  color={items.color}
                  name={items.name}
                  key={items.id + items.name + item.id}
                />
              ))}
              {item.Labels.length > 2 && (
                <Label name={`+${item.Labels.length - 2}`} className="w-fit" />
              )}
            </TableCell>
            <TableCell className="text-center h-4 py-2 ">
              {item.memberCount}
            </TableCell>
            <TableCell className="text-right h-4  py-2">
              {item.lastActive && formatDateTime(item.lastActive)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
