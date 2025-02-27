import React from "react"
import CustomSelect from "../SharedComponents/CustomSelect"
import {OptionType} from "@/types"

const FormElement = ({
  options,
  handleSelectChange,
  placeholder = '"Select a fruit"',
  label = "Custom Select",
  searchable,
}: {
  options: OptionType[]
  handleSelectChange: (value: string) => void
  placeholder: string
  label: string
  searchable: boolean
}) => {
  return (
    <div>
      <h1 className="text-[12px] font-[700] mb-[2px] text-[#000000]">
        {label} <span className="text-red-500">*</span>
      </h1>
      <CustomSelect
        data={options}
        placeholder={placeholder}
        searchable={searchable}
        onChange={handleSelectChange}
      />
    </div>
  )
}

export default FormElement
