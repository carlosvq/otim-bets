import { cva } from "cva";

export const h1Styles = cva({
  base: "scroll-m-20 text-4xl font-semibold tracking-normal first:mt-0 ",
});

export const h2Styles = cva({
  base: "scroll-m-20 text-3xl font-semibold tracking-normal first:mt-0",
});

export const h3Styles = cva({
  base: "scroll-m-20 text-2xl font-semibold tracking-normal first:mt-0",
});

export const h4Styles = cva({
  base: "scroll-m-20 text-xl font-semibold tracking-normal first:mt-0",
});

export const h5Styles = cva({
  base: "scroll-m-20 text-lg font-semibold tracking-normal first:mt-0",
});

export const h6Styles = cva({
  base: "scroll-m-20 text-md font-semibold tracking-normal first:mt-0",
});

export const paragraphStyles = cva({
  base: [
    "leading-7 [&:not(:first-child)]:mt-4",
    "lg:[&:not(:first-child)]:mt-6",
  ],
});

export const descriptionStyles = cva({
  base: "text-tertiary-foreground",
});

export const blockquoteStyles = cva({ base: "mt-6 border-l-2 pl-6 italic" });
