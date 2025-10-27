import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import Icon from "./icon"
import { Text } from "./text"

export const buttonVariant = cva("h-14 py-4 px-5 flex items-center gap-2 transition-all", {
  variants: {
    variant: {
      primary: "bg-gray-200 hover:bg-pink-light"
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
    }
  },
  defaultVariants: {
    variant: "primary",
    disabled: false
  }
})

export const buttonTextVariant = cva("", {
  variants: {
    variant: {
      primary: "text-gray-400"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
})
interface ButtonProps extends Omit<React.ComponentProps<"button">, 'disabled'>, VariantProps<typeof buttonVariant> {
  icon: React.ComponentProps<typeof Icon>["svg"]
}

export default function Button({ variant, disabled, className, children, icon: IconElement, ...props }: ButtonProps) {
  return (
    <button className={buttonVariant({ variant, disabled, className })} {...props} >
      <Icon svg={IconElement} />
      <Text variant={"body-md"}>
        {children}
      </Text>
    </button>
  )
} 