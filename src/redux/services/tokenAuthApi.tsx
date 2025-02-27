/* eslint-disable @typescript-eslint/no-explicit-any */
import {baseApi as api} from "./baseApi"

const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    apiTokenauthAuthenticatePost: build.mutation<
      ApiTokenauthAuthenticatePostApiResponse,
      ApiTokenauthAuthenticatePostApiArg
    >({
      query: queryArg => ({
        url: `/account/login`,
        method: "POST",
        body: queryArg.authenticateModel,
      }),
    }),
  }),
  overrideExisting: false,
})

export {injectedRtkApi as tokenAuthApi}

export type ApiTokenauthAuthenticatePostApiResponse = AuthenticateResultModel
export type ApiTokenauthAuthenticatePostApiArg = {
  authenticateModel: AuthenticateModel
}

export type AuthenticateResultModel = {
  value: LoginResponseData
  formatters: any[]
  contentTypes: any[]
  declaredType: any
  statusCode: number
}

export type AuthenticateModel = {
  email: string
  password: string
  type: string
}

interface Organization {
  name: string
  address: string
  emailAddress: string
  phoneNumber: string
  whatsappNumber: string | null
  description: string
  logo: string
  coverImage: string
  longitude: number
  latitude: number
  brandColorCode: string
  cityId: string
  city: string | null
  organizationTypeId: string
  yearsInOperation: number
  active: boolean
  isDeleted: boolean
  bankName: string
  bankCode: string
  accountName: string | null
  accountNumber: string
  sellerType: string | null
  status: string
  isPlansPublic: boolean
  reasonForDeletion: string | null
  estates: any
  houses: any
  verifications: any
  contactDetails: any
  preferredPlanTypes: any
  id: string
  createdBy: string
  dateCreated: string
  dateLastModified: string
  lastModifiedBy: string
}

interface ApplicationRole {
  access: string
  organizationId: string
  description: string
  createdBy: string
  dateCreated: string
  dateLastModified: string | null
  lastModifiedBy: string | null
  isDeleted: boolean
  id: string
  name: string
  normalizedName: string
  concurrencyStamp: string
}

interface User {
  firstName: string
  name: string
  lastName: string
  middleName: string | null
  address: string | null
  whatsAppPhoneNumber: string | null
  organizationId: string
  gender: string
  organization: Organization
  verificationCode: string | null
  roleId: string
  applicationRole: ApplicationRole
  stateId: string | null
  state: string | null
  nationalityId: string | null
  nationality: string | null
  city: string | null
  country: string | null
  videoUrl: string | null
  description: string | null
  maritalStatus: string | null
  howDidYouHearOfUs: string | null
  countryId: string | null
  withInNigeria: boolean
  age: number
  dateOfBirth: string
  specialityType: number
  income: number
  profilePicture: string
  createdBy: string
  incomeCurrencyId: string
  incomeCurrency: string | null
  dateCreated: string
  dateLastModified: string
  lastLoginDate: string
  lastModifiedBy: string
  isAViewingAgent: boolean
  isConsultantAgent: boolean
  isContactStaff: boolean
  preferredPurchaseOption: string | null
  isActive: boolean
  isDeleted: boolean
  registrationType: string
  isPoliticallyExposed: boolean
  bankName: string | null
  accountName: string | null
  accountNumber: string | null
  occupation: string | null
  employerName: string | null
  employerAddress: string | null
  nextOfKins: any
  affordability: string
  bio: string
  designation: string
  title: string
  jointApplication: boolean
  partnerIncome: number
  partnerAge: number
  partnerEmail: string | null
  partnerPhoneNumber: string | null
  partnerDateOfBirth: string | null
  verifications: any
  accounts: any
  id: string
  userName: string
  normalizedUserName: string
  email: string
  normalizedEmail: string
  emailConfirmed: boolean
  passwordHash: string
  securityStamp: string
  concurrencyStamp: string
  phoneNumber: string
  phoneNumberConfirmed: boolean
  twoFactorEnabled: boolean
  lockoutEnd: string
  lockoutEnabled: boolean
  accessFailedCount: number
}

interface LoginValue {
  user: User
  token: string
}

interface LoginResponseData {
  statusCode: number
  message: string
  value: LoginValue
}

export const {useApiTokenauthAuthenticatePostMutation} = injectedRtkApi
