import React from "react";

const NumberChip = ({ value }: { value: number }) => {
  return (
    <div className="px-1  h-fit bg-green-500 text-primary-foreground rounded-xl flex items-center justify-center text-[0.556rem] leading-[1rem]">
      {value > 99 ? "99+" : value}
    </div>
  );
};

export default NumberChip;
