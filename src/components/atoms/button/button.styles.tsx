import { cva } from "cva";

export const ButtonIntent = {
  Default: "DEFAULT",
  Destructive: "DESTRUCTIVE",
  Outline: "OUTLINE",
  Secondary: "SECONDARY",
  Ghost: "GHOST",
} as const;
export type ButtonIntent = (typeof ButtonIntent)[keyof typeof ButtonIntent];

export const buttonStyles = cva({
  base: [
    "inline-flex items-center justify-center rounded-xl text font-medium border border-transparent text-base",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-ring",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  variants: {
    intent: {
      [ButtonIntent.Default]: [
        "bg-primary-foreground text-primary",
        "hover:bg-primary-foreground/90",
        "active:bg-primary-foreground/80",
      ],
      [ButtonIntent.Outline]: [
        "border border-primary-border bg-primary text-primary-foreground",
      ],
      [ButtonIntent.Secondary]: [
        "bg-secondary text-secondary-foreground border border-secondary-border",
        "hover:bg-secondary/90",
        "active:bg-secondary/80",
      ],
      [ButtonIntent.Ghost]: [
        "shadow-none",
        "hover:bg-secondary hover:text-secondary-foreground",
      ],
    },
    size: {
      default: "h-12 px-4 py-2",
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 text-sm",
      lg: "h-14 px-8",
      icon: "h-9 w-9",
    },
  },
  defaultVariants: {
    intent: ButtonIntent.Default,
    size: "default",
  },
});
