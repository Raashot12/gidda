import {JSX} from "react"

export type FieldType = {
  id: string
  name: string
  label: string
  type: string
  placeholder: string
  icon: JSX.Element
}
export type OptionType = {value: string; label: string}

export type ErrorResponse = {
  data?: {
    value?: {
      message?: string
    }
  }
  message?: string
}

type CreatedBy = {
  Id: string
  Name: string
  RegistrationType: string
  Action: string
}

export type EstateResponse = {
  value: {
    statusCode: number
    message: string
    value: {
      name: string
      address: string
      ownerType: string
      landmark: string | null
      landSize: number
      videoUrl: string | null
      cityId: string
      city: string | null
      longitude: number
      latitude: number
      features: string | null
      houses: string | null
      isDeleted: boolean
      organizationId: string
      organization: string | null
      completionDate: string
      description: string
      completionStatus: number
      completionLevel: number
      floors: number
      isActive: boolean
      id: string
      createdBy: string | CreatedBy
      dateCreated: string
      dateLastModified: string | null
      lastModifiedBy: string | null
    }
  }
  formatters: unknown[]
  contentTypes: unknown[]
  declaredType: unknown | null
  statusCode: number
}
