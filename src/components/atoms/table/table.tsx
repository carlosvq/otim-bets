import type { BaseComponentProps } from "@common/types/component";
import type { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";

import { cn } from "@utils/cn";

interface TableProps
  extends HTMLAttributes<HTMLTableElement>,
    BaseComponentProps {}

const Table = ({
  "data-testid": testId = "default.table",
  className,
  ...props
}: TableProps) => (
  <div
    className={cn([
      "relative w-full overflow-auto shadow-sm rounded-xl border border-primary-border bg-primary",
    ])}
    data-testid={testId}
  >
    <table
      className={cn(["w-full caption-bottom text-sm", className])}
      {...props}
    />
  </div>
);

const TableHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) => (
  <thead
    className={cn(["[&_tr]:border-b [&_tr]:border-primary-border", className])}
    {...props}
  />
);

const TableBody = ({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody className={cn(["[&_tr:last-child]:border-0", className])} {...props} />
);

const TableRow = ({
  className,
  ...props
}: HTMLAttributes<HTMLTableRowElement>) => (
  <tr
    className={cn(
      "border-b border-primary-border transition-colors hover:bg-primary",
      "data-[state=selected]:bg-primary",
      className,
    )}
    {...props}
  />
);

const TableHead = ({
  className,
  ...props
}: ThHTMLAttributes<HTMLTableCellElement>) => (
  <th
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-primary-foreground [&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...props}
  />
);

const TableCell = ({
  className,
  ...props
}: TdHTMLAttributes<HTMLTableCellElement>) => (
  <td
    className={cn(
      "py-2 px-4 align-middle [&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...props}
  />
);

export { Table, TableHeader, TableBody, TableHead, TableRow, TableCell };
