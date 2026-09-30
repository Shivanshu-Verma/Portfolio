import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary: "border-foreground bg-foreground text-background hover:opacity-90",
  secondary: "hover:bg-surface",
};

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
};

const ButtonLink = ({
  variant = "secondary",
  className,
  ...props
}: ButtonLinkProps) => (
  <Link
    className={cn(
      "inline-flex h-11 items-center gap-2 rounded-[10px] border px-[18px] text-[15px] font-medium whitespace-nowrap transition",
      variants[variant],
      className,
    )}
    {...props}
  />
);

export default ButtonLink;
