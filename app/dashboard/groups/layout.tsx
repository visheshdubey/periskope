"use client";
import { MoveLeft, MoveRight } from "lucide-react";
import React, { ReactNode } from "react";
import { useQuery } from "react-query";

import SecondaryHeader from "@/components/headers/SecondaryHeader";
import Spinner from "@/components/Spinner";
import DataTable from "@/components/tables/DataTable";
import TableSection from "@/components/tables/TableSection";
import { Button } from "@/components/ui/button";
import { tableColumns } from "@/data";
import { user } from "@/service";

const GroupLayout = ({ children }: { children: ReactNode }) => {
  const groupsRes = useQuery(["groups"], () => user.getGroups());

  return (
    <main className="flex w-full h-full transition-all ease-in-out">
      <div className="flex flex-col grow ">
        <SecondaryHeader />
        <TableSection className="bg-white">
          <DataTable tableData={groupsRes.data || []} columns={tableColumns} />
          {groupsRes.isLoading && (
            <div className="flex items-center justify-center absolute inset-0">
              <Spinner size={"large"} />
            </div>
          )}
          {/* Pagination */}
          <div className="flex items-center  bg-white border-t shadow-sm px-4 py-2 gap-2 absolute bottom-0 w-full z-50">
            <div className="flex items-center gap-2">
              <Button size={"icon"} variant={"outline"} className="w-8 h-6">
                <MoveLeft size={14} />
              </Button>
              <span className="text-xs">1 of 6</span>
              <Button size={"icon"} variant={"outline"} className="w-8 h-6">
                <MoveRight size={14} />
              </Button>
            </div>
            <span className="text-xs">256 rows</span>
          </div>
        </TableSection>
      </div>
      {children}
    </main>
  );
};

export default GroupLayout;
