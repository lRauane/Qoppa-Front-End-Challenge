'use client'

import { twMerge } from "tailwind-merge"
import { Icon } from "@iconify/react/dist/iconify.js";

type TextInputProps ={
  iconLeft?: string,
  iconsRight?: string,
  label?: string,
  labelClassNames?: string,
} & React.InputHTMLAttributes<HTMLInputElement>

const TextInput = ({iconLeft, iconsRight, label, labelClassNames, ...props}: TextInputProps) => {
  const defaultInputClasses = "flex-grow px-3 rounded-[8px] focus:border-none py-3 text-sm outline-0 w-full"
  const defaultLabelClasses = "block mb-2 text-sm font-bold text-gray-600"
  const mergedLabelClass = twMerge(labelClassNames, defaultLabelClasses);


  return (
    <div className="mb-6">
      <label className={mergedLabelClass}>{label}</label>
      <div className="flex items-center border border-cards rounded-[8px] bg-white">
      {iconLeft && (
          <div className="pl-2">
            <Icon className="text-sub" icon={iconLeft} />
          </div>
        )}
        <input
          {...props}
          className={`${defaultInputClasses} ${iconLeft ? "pl-2" : ""} ${
            iconsRight ? "pr-2 " : ""
          }`}
        />
        {iconsRight && <Icon icon={iconsRight} />}
      </div>
    </div>
  )
}

export default TextInput;