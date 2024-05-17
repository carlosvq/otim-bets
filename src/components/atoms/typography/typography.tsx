import type { BaseComponentProps } from "@common/types/component";
import type { BlockquoteHTMLAttributes, HTMLAttributes } from "react";

import { cn } from "@utils/cn";

import {
  h1Styles,
  h2Styles,
  h3Styles,
  h4Styles,
  h5Styles,
  h6Styles,
  paragraphStyles,
  descriptionStyles,
  blockquoteStyles,
} from "./typography.styles";

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    BaseComponentProps {}

const H1 = ({ className, children, ...props }: HeadingProps) => {
  return (
    <h1 className={cn([h1Styles(), className])} {...props}>
      {children}
    </h1>
  );
};

const H2 = ({ className, children, ...props }: HeadingProps) => {
  return (
    <h2 className={cn([h2Styles(), className])} {...props}>
      {children}
    </h2>
  );
};

const H3 = ({ className, children, ...props }: HeadingProps) => {
  return (
    <h3 className={cn([h3Styles(), className])} {...props}>
      {children}
    </h3>
  );
};

const H4 = ({ className, children, ...props }: HeadingProps) => {
  return (
    <h4 className={cn([h4Styles(), className])} {...props}>
      {children}
    </h4>
  );
};

H4.displayName = "H4";

const H5 = ({ className, children, ...props }: HeadingProps) => {
  return (
    <h5 className={cn([h5Styles(), className])} {...props}>
      {children}
    </h5>
  );
};

const H6 = ({ className, children, ...props }: HeadingProps) => {
  return (
    <h6 className={cn([h6Styles(), className])} {...props}>
      {children}
    </h6>
  );
};

H6.displayName = "H6";

type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

const Paragraph = ({ className, children, ...props }: ParagraphProps) => {
  return (
    <p className={cn([paragraphStyles(), className])} {...props}>
      {children}
    </p>
  );
};

type DescriptionProps = HTMLAttributes<HTMLParagraphElement>;

const Description = ({ className, children, ...props }: DescriptionProps) => {
  return (
    <span className={cn([descriptionStyles(), className])} {...props}>
      {children}
    </span>
  );
};

type BlockquoteProps = BlockquoteHTMLAttributes<HTMLQuoteElement>;

const Blockquote = ({ className, children, ...props }: BlockquoteProps) => {
  return (
    <blockquote className={cn([blockquoteStyles(), className])} {...props}>
      {children}
    </blockquote>
  );
};

export { H1, H2, H3, H4, H5, H6, Blockquote, Paragraph, Description };
export type { HeadingProps, ParagraphProps, DescriptionProps };
