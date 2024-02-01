import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";

import { cn } from "@/lib/utils";

const spinnerVariants = cva(
  `inline-block animate-spin rounded-full border-primary border-solid  border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`,
  {
    variants: {
      size: {
        small: "h-4 w-4 border-2",
        medium: "h-8 w-8 border-4",
        large: "h-12 w-12 border-4",
      },
    },
    defaultVariants: {
      size: "small",
    },
  }
);
export interface SpinnerProps extends VariantProps<typeof spinnerVariants> {}

const Spinner: FC<SpinnerProps> = ({ size }) => {
  return (
    <div
      className={cn("border-current", spinnerVariants({ size }))}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
};

export default Spinner;
