import PageTitle from "@/components/SharedComponents/PageTitle"
import React, {useEffect, useState} from "react"

const SpecificationAndAmenties = ({
  hideRuler,
  setSelectedAmenities,
}: {
  hideRuler?: boolean
  setSelectedAmenities?: React.Dispatch<React.SetStateAction<string[]>>
}) => {
  const allFeatures = [
    "Ample Parking Space",
    "Uniformed Security",
    "CCTV Surveillance System",
    "Inverter",
    "24/7 Electricity",
    "Cinema",
    "Bank",
    "Internet Services",
    "Fibre Optics",
    "Reliable Water Supply",
    "Children Playground",
    "Equestrian/Polo Centers",
    "Tennis Court",
    "Golf Court",
    "Lounge/Bar",
    "Restaurant",
    "Lakes/Ponds",
    "Gazebos",
    "Children Facilities",
    "School",
    "Hospital",
    "Shopping Complex",
    "Church/Mosque",
    "Greenery & Open Garden",
    "Gym",
    "Basketball Court",
    "Football Pitch",
    "Swimming Pool",
    "Clubhouse",
  ]

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  const allSelected = selectedFeatures.length === allFeatures.length

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedFeatures([])
    } else {
      setSelectedFeatures(allFeatures)
    }
  }

  const handleCheck = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(prev => prev.filter(f => f !== feature))
    } else {
      setSelectedFeatures(prev => [...prev, feature])
    }
  }
  useEffect(() => {
    if (selectedFeatures) {
      setSelectedAmenities?.(selectedFeatures)
    }
  }, [selectedFeatures, selectedFeatures.length])

  return (
    <div>
      <div className="flex mt-7 items-center gap-2">
        <PageTitle title="Specifications & Amenities" />
        {hideRuler ? (
          <></>
        ) : (
          <div className="h-[1px] bg-[#F0F0F0] flex-1"></div>
        )}
      </div>
      <div>
        <div className="flex items-center justify-between bg-[#F0F0F0] mt-6 rounded-[8px] py-2 px-4">
          <h2 className="text-lg font-semibold">General Features</h2>
          <label className="flex items-center space-x-3 cursor-pointer select-none">
            <span className="text-[13px] font-[700]">Select All</span>
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4"
              onChange={toggleSelectAll}
              checked={allSelected}
            />
          </label>
        </div>

        <div className="mt-6 mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-4">
          {allFeatures.map(feature => (
            <label
              key={feature}
              className="flex items-start gap-2 flex-col-reverse cursor-pointer select-none"
            >
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4"
                checked={selectedFeatures.includes(feature)}
                onChange={() => handleCheck(feature)}
              />
              <span className="text-[13px] font-[700]">{feature}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SpecificationAndAmenties
