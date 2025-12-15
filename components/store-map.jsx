"use client"

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api"

const containerStyle = {
  width: "100%",
  height: "400px",
}

const center = {
  lat: 40.7128, // change to your real latitude
  lng: -74.0060, // change to your real longitude
}

export default function StoreMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  if (!isLoaded) {
    return (
      <div className="h-[400px] bg-secondary rounded-lg flex items-center justify-center">
        Loading map...
      </div>
    )
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      options={{
        disableDefaultUI: true,
        zoomControl: true,
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  )
}
