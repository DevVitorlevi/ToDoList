import { cva, type VariantProps } from "class-variance-authority"
import React from "react"

export const containerVariants = cva("mx-auto ", {
  variants: {
    size: {
      md: "max-w-126 px-2"
    }
  },
  defaultVariants: {
    size: "md"
  }
})

interface CardProps extends VariantProps<typeof containerVariants>, React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements
}

export default function Card({ as = "div", size, className, children, ...props }: CardProps) {
  return React.createElement(
    as, { className: containerVariants({ size, className }), ...props }, children
  )
}