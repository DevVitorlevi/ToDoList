import type React from "react";
import Icon from "./icon";
import { cva, type VariantProps } from "class-variance-authority"

export const buttonIconVariants = cva("py-1.5 px-1.5 transition-all rounded-md", {
  variants: {
    variant: {
      primary: "bg-green-base hover:bg-green-dark",
      secundary: "bg-pink-light hover:bg-pink-base",
      terciary: "bg-white hover:bg-pink-light"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
})

export const iconVariants = cva("", {
  variants: {
    variant: {
      primary: "fill-white",
      secundary: "fill-pink-base hover:fill-white",
      terciary: "fill-gray-300 hover:fill-gray-400"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
})

interface ButtonIconProps extends React.ComponentProps<"button">, VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"]
}

export default function ButtonIcon({ variant, icon: IconElement, className, ...props }: ButtonIconProps) {
  return (
    <button {...props} className={buttonIconVariants({ variant, className })}><Icon className={iconVariants({ variant, className })} svg={IconElement} /></button>
  )
}