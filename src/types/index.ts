import { JSX } from "react"

export type FieldType = {
  id: string
  name: string
  label: string
  type: string
  placeholder: string
  icon: JSX.Element
}
export type OptionType = {value: string; label: string}