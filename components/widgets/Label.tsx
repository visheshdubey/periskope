import { cn } from "@/lib/utils";

const Label = ({
  name,
  color,
  className,
}: {
  name: string;
  color?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 border shadow-sm bg-white px-3 py-3 font-medium text-xs rounded-full",
        className
      )}
    >
      {color && (
        <span
          style={{ backgroundColor: color }}
          className={"w-2 h-2 rounded-full"}
        ></span>
      )}
      <span className="max-w-24 truncate">{name}</span>
    </div>
  );
};

export default Label;
