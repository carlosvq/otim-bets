import { cn } from "@utils/cn";
import { cva } from "cva";

export const gapWrapperStyles = cva({
  base: ["grid gap-4", "lg:gap-6"],
});

export const marginTopGapClassName = cn(["mt-4", "lg:mt-6"]);
export const marginBottomGapClassName = cn(["mb-4", "lg:mb-6"]);
