import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "rounded-full size-24 p-6 font-multicolore flex justify-center items-center text-white tracking-wider before:w-full before:h-full before:absolute before:top-0.5 relative before:left-0 before:rounded-full before:-z-10 before:scale-105 active:before:top-0 active:before:scale-95 transition-all before:transition-all overflow-visible",
  {
    variants: {
      variant: {
        destructive:
          "bg-red-500 active:bg-red-600 before:bg-red-300 active:bg-red-600",
        warining:
          "bg-amber-500 active:bg-amber-600 before:bg-amber-300 active:bg-amber-600",
        success:
          "bg-green-500 active:bg-green-600 before:bg-green-300 active:bg-green-600",
        primary:
          "bg-primary/90 active:bg-primary before:bg-primary/30 active:bg-primary",
      },
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {};

const BigButton: React.FC<ButtonProps> = ({
  variant = "destructive",
  children,
  className,
  ...props
}) => (
  <button
    className={twMerge(
      buttonVariants({
        variant: variant,
      }),
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export default BigButton;
