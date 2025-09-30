import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // GYNTECH Custom variants
        erp: "bg-erp-primary text-erp-foreground hover:bg-erp-accent shadow-erp hover:shadow-lg transform hover:-translate-y-0.5",
        "erp-outline": "border-2 border-erp-primary text-erp-primary bg-transparent hover:bg-erp-primary hover:text-erp-foreground",
        it: "bg-it-primary text-it-foreground hover:bg-it-accent shadow-it hover:shadow-lg transform hover:-translate-y-0.5",
        "it-outline": "border-2 border-it-primary text-it-primary bg-transparent hover:bg-it-primary hover:text-it-foreground",
        web: "bg-web-primary text-web-foreground hover:bg-web-accent shadow-web hover:shadow-lg transform hover:-translate-y-0.5",
        "web-outline": "border-2 border-web-primary text-web-primary bg-transparent hover:bg-web-primary hover:text-web-foreground",
        corporate: "bg-corporate-primary text-white hover:bg-corporate-primary/90 shadow-corporate hover:shadow-lg transform hover:-translate-y-0.5",
        "corporate-outline": "border-2 border-corporate-primary text-corporate-primary bg-transparent hover:bg-corporate-primary hover:text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
CustomButton.displayName = "CustomButton";

export { CustomButton, buttonVariants };