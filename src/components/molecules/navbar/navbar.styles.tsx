import { cva } from "cva";

export const navbarStyles = cva({
  base: [
    "py-4 px-6 rounded-xl bg-primary/90 border border-secondary-border backdrop-blur-sm flex justify-between items-center",
    "lg:py-6 lg:px-8",
  ],
});
