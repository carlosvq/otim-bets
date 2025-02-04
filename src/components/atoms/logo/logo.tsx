import type { BaseComponentProps } from "@common/types/component";
import type { SVGProps } from "react";

import { cn } from "@utils/cn";

interface LogoProps extends SVGProps<SVGSVGElement>, BaseComponentProps {
  customSize?: number;
}

const colorClassName = cn(["fill-primary-foreground"]);

const Logo = ({
  "data-testid": testId = "default.logo",
  ...props
}: LogoProps) => {
  return (
    <svg
      data-testid={testId}
      fill="none"
      height="249"
      viewBox="0 0 687 249"
      width="687"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2221_7328)">
        <path
          className={cn([colorClassName])}
          d="M220.5 214C245.629 214 266 173.258 266 123C266 72.7421 245.629 32 220.5 32C195.371 32 175 72.7421 175 123C175 173.258 195.371 214 220.5 214Z"
        />
        <path
          className={cn([colorClassName])}
          d="M152.75 216.022C165.314 216.022 175.5 174.827 175.5 124.011C175.5 73.1948 165.314 32 152.75 32C140.186 32 130 73.1948 130 124.011C130 174.827 140.186 216.022 152.75 216.022Z"
        />
        <path
          className={cn([colorClassName])}
          d="M118.5 214C124.851 214 130 173.258 130 123C130 72.7421 124.851 32 118.5 32C112.149 32 107 72.7421 107 123C107 173.258 112.149 214 118.5 214Z"
        />
        <path
          className={cn([colorClassName])}
          d="M101 214C104.314 214 107 173.258 107 123C107 72.7421 104.314 32 101 32C97.6863 32 95 72.7421 95 123C95 173.258 97.6863 214 101 214Z"
        />
        <path
          className={cn([colorClassName])}
          d="M92 214C93.6569 214 95 173.258 95 123C95 72.7421 93.6569 32 92 32C90.3431 32 89 72.7421 89 123C89 173.258 90.3431 214 92 214Z"
        />
        <path
          className={cn([colorClassName])}
          d="M175 138C253.977 138 318 131.06 318 122.5C318 113.94 253.977 107 175 107C96.0233 107 32 113.94 32 122.5C32 131.06 96.0233 138 175 138Z"
        />
      </g>
      <path
        className={cn([colorClassName])}
        d="M624.619 80C643.256 80 656.788 89.216 659.979 104.832L639.299 109.056C637.767 100.992 631.129 97.024 624.363 97.024C617.342 97.024 612.875 100.864 612.875 105.728C612.875 109.184 614.406 111.744 619.768 112.896L637.512 116.864C652.32 120.192 661 128.256 661 141.824C661 160.128 644.788 169.6 625.768 169.6C606.492 169.6 590.663 160.384 588.365 143.616L610.066 139.392C612.236 148.224 618.364 152.064 626.917 152.064C634.831 152.064 639.554 148.48 639.554 143.232C639.554 139.392 637.767 136.96 631.64 135.68L613.768 131.84C601.513 129.024 590.79 122.624 590.79 107.008C590.79 90.368 604.577 80 624.619 80Z"
      />
      <path
        className={cn([colorClassName])}
        d="M582.344 100.352H554.643V167.68H533.708V100.352H506.007V81.9199H582.344V100.352Z"
      />
      <path
        className={cn([colorClassName])}
        d="M496.433 149.504V167.68H429.798V81.9199H496.05V100.096H450.861V116.224H492.348V133.376H450.861V149.504H496.433Z"
      />
      <path
        className={cn([colorClassName])}
        d="M400.168 123.392V123.904C408.082 124.544 416.635 130.688 416.635 143.616C416.635 157.824 407.061 167.68 388.424 167.68H344V81.9199H388.296C403.997 81.9199 414.21 91.2639 414.21 105.344C414.21 117.12 405.912 122.752 400.168 123.392ZM365.063 98.9439V117.376H383.445C389.7 117.376 393.785 113.536 393.785 107.776C393.785 102.4 389.573 98.9439 384.211 98.9439H365.063ZM365.063 150.656H384.722C391.487 150.656 395.189 146.944 395.189 141.056C395.189 135.424 391.104 131.84 385.105 131.84H365.063V150.656Z"
      />
    </svg>
  );
};

Logo.displayName = "Logo";

export { Logo };
export type { LogoProps };
