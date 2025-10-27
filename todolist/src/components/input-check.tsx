import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import CheckIcon from "../assets/icons/ckeck.svg?react";
import Icon from "./icon";
export const inputCheckboxWrapperVariants = cva(`
      inline-flex items-center justify-center relative
      group
  ` )

export const inputCheckboxVariants = cva(`
    appearance-none peer flex items-center justify-center border-2 border-solid transition-all overflow-hidden cursor-pointer border-green-base hover:border-green-dark hover:bg-green-dark/20 checked:border-green-base checked:bg-green-base  group-hover:checked:border-green-dark group-hover:checked:bg-green-dark w-5 h-5 rounded-md
`, {
  variants: {
    disabled: {
      true: "pointer-events-none"
    }
  },
  defaultVariants: {
    disabled: true
  }
})

export const inputCheckboxIconVariants = cva(`
    absolute top-1/2 left-1 -translate-y-1/2 hidden peer-checked:block fill-white  w-3 h-3
`)

interface InputCheckboxProps extends Omit<React.ComponentProps<"input">, "disabled">, VariantProps<typeof inputCheckboxVariants> { }

export default function InputCheck({ className, disabled, ...props }: InputCheckboxProps) {
  return (
    <label className={inputCheckboxWrapperVariants({ className })}>
      <input type="checkbox" {...props} className={inputCheckboxVariants({ disabled })} />
      <Icon className={inputCheckboxIconVariants({ className })} svg={CheckIcon} />
    </label>
  )
}