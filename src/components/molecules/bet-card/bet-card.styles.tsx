import { cva } from "cva";

export const betCardStyles = cva({
  base: [
    "flex items-center justify-center p-6 bg-primary/90 rounded-xl  backdrop-blur-sm min-h-64 relative transition-all",
    "hover:shadow-lg hover:border-secondary-border",
    "dark:border border-secondary-border/50",
  ],
});
