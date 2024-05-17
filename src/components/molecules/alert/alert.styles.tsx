import { cva } from "cva";

export const AlertIntent = {
  Success: "SUCCESS",
  Error: "ERROR",
  Warning: "WARNING",
  Info: "INFO",
} as const;
export type AlertIntent = (typeof AlertIntent)[keyof typeof AlertIntent];

export const alertStyles = cva({
  base: [
    "w-full flex items-start justify-between relative",
    "border rounded-xl shadow-sm text-foreground py-3 px-3 pl-4",
    "text-foreground",
    "dark:border-transparent",
  ],
  variants: {
    intent: {
      [AlertIntent.Success]: [
        "bg-green-50 border-green-200",
        "dark:bg-green-800",
      ],
      [AlertIntent.Error]: ["bg-red-50 border-red-200", "dark:bg-red-800"],
      [AlertIntent.Warning]: [
        "bg-yellow-50 border-yellow-200",
        "dark:bg-yellow-800",
      ],
      [AlertIntent.Info]: ["bg-secondary border-secondary-border"],
    },
  },
  defaultVariants: { intent: AlertIntent.Info },
});

export const childrenStyles = cva({
  base: ["mt-4 text-base font-medium"],
});

export const messageStyles = cva({
  variants: {
    intent: {
      [AlertIntent.Success]: ["text-green-700", "dark:text-foreground"],
      [AlertIntent.Error]: ["text-red-700", "dark:text-foreground"],
      [AlertIntent.Warning]: ["text-yellow-700", "dark:text-foreground"],
      [AlertIntent.Info]: ["text-slate-700", "dark:text-foreground"],
    },
  },
  defaultVariants: { intent: AlertIntent.Info },
});
