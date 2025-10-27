import { cva, cx, type VariantProps } from "class-variance-authority";
import type React from "react";
import { textVariants } from "./text";

export const inputTextVariant = cva("border-b border-solid border-gray-200 focus:border-pink-base bg-transparent outline-none pb-2 px-2", {
  variants: {
    disabled: {
      true: "pointer-events-none"
    }
  },
  defaultVariants: {
    disabled: false
  }
})
interface InputTextProps extends Omit<React.ComponentProps<"input">, "disabled">, VariantProps<typeof inputTextVariant> {

}

export default function InputText({ className, disabled, ...props }: InputTextProps) {
  return (
    <input {...props} className={cx(
      inputTextVariant({ disabled, className }),
      textVariants()
    )} />
  )
}