import { ChevronsUpDown, Filter, Search } from "lucide-react";
import React from "react";

import { Button } from "../ui/button";

const SecondaryHeader = () => {
  return (
    <header className="flex w-full p-2 items-center gap-4 justify-between border-b border-gray-200">
      <nav className="flex gap-4 h-8">
        <div
          className="flex h-full max-w-56 items-center flex-1 gap-2 px-4 py-1 rounded-md border border-gray-200 bg-white"
          role="search"
        >
          <Search className="stroke-muted-foreground" size={14} />
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="w-full bg-transparent active:border-0 text-sm outline-none placeholder-black/50"
            aria-label="Search"
          />
        </div>
        <Button
          variant={"outline"}
          size={"sm"}
          className="h-8 gap-2 text-sm text-muted-foreground"
        >
          <Filter className="stroke-current" size={10} />
          Filter
        </Button>
      </nav>
      <aside className="flex gap-4">
        <Button size={"sm"} className="text-sm h-8">
          Bulk message
        </Button>
        <Button
          variant={"outline"}
          size={"sm"}
          className="h-8 gap-2 text-sm text-muted-foreground"
        >
          Group Actions
          <ChevronsUpDown className="stroke-current" size={14} />
        </Button>
      </aside>
    </header>
  );
};

export default SecondaryHeader;
