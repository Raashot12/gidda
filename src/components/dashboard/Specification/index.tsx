import PageTitle from "@/components/SharedComponents/PageTitle"
import React, { useState } from "react"

const SpecificationAndAmenties = () => {
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

  // State to keep track of which features are selected
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  // Check if all features are currently selected
  const allSelected = selectedFeatures.length === allFeatures.length

  // Handle toggling "Select All"
  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedFeatures([])
    } else {
      setSelectedFeatures(allFeatures)
    }
  }

  // Handle selecting/deselecting an individual feature
  const handleCheck = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(prev => prev.filter(f => f !== feature))
    } else {
      setSelectedFeatures(prev => [...prev, feature])
    }
  }

  return (
    <div>
      <PageTitle title="Specifications & Amenities" />
      <div className="p-4">
        {/* Header row */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
          <h2 className="text-lg font-semibold">General Features</h2>
          <label className="flex items-center space-x-2 cursor-pointer select-none">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4"
              onChange={toggleSelectAll}
              checked={allSelected}
            />
            <span className="text-sm">Select All</span>
          </label>
        </div>

        {/* Grid of checkboxes */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-4">
          {allFeatures.map(feature => (
            <label
              key={feature}
              className="flex items-center space-x-2 cursor-pointer select-none"
            >
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4"
                checked={selectedFeatures.includes(feature)}
                onChange={() => handleCheck(feature)}
              />
              <span className="text-sm">{feature}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SpecificationAndAmenties
