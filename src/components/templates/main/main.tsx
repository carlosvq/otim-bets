import {
  marginTopGapClassName,
  marginBottomGapClassName,
} from "@atoms/gap-wrapper";
import { BaseComponentProps } from "@common/types/component";
import { MotionContainer } from "@molecules/motion-container";
import { cn } from "@utils/cn";
import { HTMLAttributes, ReactNode } from "react";

export interface MainLayoutProps
  extends HTMLAttributes<HTMLDivElement>,
    BaseComponentProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <MotionContainer className={cn(["flex flex-col px-4"])}>
      <div className={cn(["bg-wallpaper"])}>
        <img className={cn(["max-h-[320px] mx-auto"])} src="/bg.webp" />
      </div>

      <div
        className={cn([
          "flex-1",
          marginTopGapClassName,
          marginBottomGapClassName,
        ])}
      >
        {children}
      </div>
    </MotionContainer>
  );
};

export { MainLayout };
