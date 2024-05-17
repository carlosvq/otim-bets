import { cva } from "cva";

export const LoaderIntent = {
  Background: "background",
  Secondary: "secondary",
} as const;
export type LoaderIntent = (typeof LoaderIntent)[keyof typeof LoaderIntent];

export const progressBarStyles = cva({
  base: "rounded-xl overflow-hidden h-2 w-10",
  variants: {
    intent: {
      [LoaderIntent.Secondary]: ["bg-primary-foreground/25"],
      [LoaderIntent.Background]: ["bg-primary/25"],
    },
  },
  defaultVariants: {
    intent: LoaderIntent.Background,
  },
});

export const progressStyles = cva({
  base: "h-full w-1/2 rounded-xl animate-move",
  variants: {
    intent: {
      [LoaderIntent.Secondary]: ["bg-primary-foreground/50"],
      [LoaderIntent.Background]: ["bg-primary/50"],
    },
  },
  defaultVariants: {
    intent: LoaderIntent.Background,
  },
});
