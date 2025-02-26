import React, {forwardRef, InputHTMLAttributes} from "react"
import clsx from "clsx"

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({className, ...props}, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={clsx(
          "w-full rounded-[100px] shrink-0 border text-[14px] font-[500] border-[#F0F0F0] placeholder:text-[11px] placeholder:text-[#979797] leading-[21px] h-[39px] px-4 pl-10 text-gray-800 focus:outline-none",
          className
        )}
      />
    )
  }
)

TextInput.displayName = "TextInput"

export default TextInput
