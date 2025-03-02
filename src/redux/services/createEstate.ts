/* eslint-disable @typescript-eslint/no-explicit-any */
import {EstateResponse} from "@/types"
import {baseApi as api} from "./baseApi"

type Feature = {
  id?: string
  name?: string
  icon?: string
  hasAmpleParkingSpace?: boolean
  hasUniformSecurity?: boolean
  hasCCTVSurveillanceSystem?: boolean
  hasInverter?: boolean
  has24HoursElectricity?: boolean
  hasInternetServices?: boolean
  hasFiberOptics?: boolean
  hasReliableWaterSupply?: boolean
  hasChildernPlayground?: boolean
  hasEquestrainOrPoloCenter?: boolean
  hasTennisCourt?: boolean
  hasGolfCourt?: boolean
  hasLoungeOrBar?: boolean
  hasResturant?: boolean
  hasLakesOrPonds?: boolean
  hasGazebos?: boolean
  hasChildcareFacilities?: boolean
  hasSchool?: boolean
  hasHospital?: boolean
  hasShoppingComplex?: boolean
  hasChurchOrMosque?: boolean
  hasGreeneryAndOpenGardens?: boolean
  hasGym?: boolean
  hasBasketballCourt?: boolean
  hasFootballPitch?: boolean
  hasSwimmingPool?: boolean
  hasClubHouse?: boolean
  hasBank?: boolean
  hasCinema?: boolean
  hasEnsuite?: boolean
  hasPoPCeiling?: boolean
  hasWalkInClosets?: boolean
  hasAirConditioning?: boolean
  hasSpeedInternet?: boolean
  hasWineCeller?: boolean
  hasFurnished?: boolean
  hasWifi?: boolean
  hasFibreOptics?: boolean
  hasSatelliteTV?: boolean
  hasElevator?: boolean
  hasBoysQuarters?: boolean
  hasSmartHomeTechnology?: boolean
  hasFullyEquippedKitcken?: boolean
  hasModernAppliances?: boolean
  hasGraniteCountertops?: boolean
  hasBreakfastBar?: boolean
  hasStorageRoom?: boolean
  hasUpgradedBathroomFeatures?: boolean
  hasSpaLikeFeatures?: boolean
  hasTileOrMarbleFeatures?: boolean
  hasOpenFloorPlan?: boolean
  hasLargeWindwos?: boolean
  hasBuiltInHouseTheater?: boolean
  hasPrivateBackyard?: boolean
  hasPatioOrDarkSpace?: boolean
  hasLandscapedGarden?: boolean
  hasHomeOfficeSpace?: boolean
  hasBuiltInShelfOrBookSpace?: boolean
  hasAmpleNaturalLight?: boolean
  hasSecuritySystem?: boolean
  hasBulletProofDoors?: boolean
  hasGatedCompound?: boolean
  hasReinforcedDoorsAndWindows?: boolean
  hasGaurdedCommunity?: boolean
  hasUniformedSecurity?: boolean
  hasParkingGarage?: boolean
  hasDriveWaySpace?: boolean
  hasStreetParkingAvaliability?: boolean
  hasPrivateParkingSpace?: boolean
  hasElectricity?: boolean
  hasBackupGenerator?: boolean
  hasBorehole?: boolean
  hasWaterBoard?: boolean
  hasProximityToSchools?: boolean
  hasProximityToShoppingMalls?: boolean
  hasProximityToSupermarkets?: boolean
  hasNearByPublicTransportation?: boolean
  hasAccessiblityViaBoltOrUber?: boolean
  hasFencedBackyard?: boolean
  hasPetFriendlyNeighbourhood?: boolean
  hasNearbyWalkingTrailsAndSidewalks?: boolean
}

type Property = {
  name?: string
  cityId?: string
  address?: string
  videoUrl?: string
  ownerType?: string
  landmark?: string
  description?: string
  completionStatus?: string
  completionDate?: string
  completionLevel?: number
  longitude?: number
  latitude?: number
  features?: Feature[]
  landSize?: number
  organizationId?: string
  floors?: number
}

const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    apiPostEstateData: build.mutation<
      EstateResponse,
      {creatEstateObject: Property}
    >({
      query: queryArg => ({
        url: `/developer/estate/create`,
        method: "POST",
        body: queryArg.creatEstateObject,
      }),
      invalidatesTags: [{type: "Estate", id: "LIST"}],
    }),
  }),
  overrideExisting: false,
})

export {injectedRtkApi as createEstateApi}
export const {useApiPostEstateDataMutation} = injectedRtkApi
