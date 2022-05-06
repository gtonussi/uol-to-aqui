import { useMemo, useState, Suspense } from "react"
import { BlitzPage, useQuery } from "blitz"
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"

import getAllLocations from "app/queries/getAllLocations"
import { getLatLng } from "app/utils/getLatLng"

const UsuarioPage: BlitzPage = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.BLITZ_PUBLIC_GOOGLE_API_KEY!,
  })

  if (!isLoaded) return <div>Carregando mapa...</div>

  return <Map />
}

const Map = () => {
  const center = useMemo(() => ({ lat: -23.56976001689665, lng: -46.69183001233816 }), [])

  // const [selectedMarker, setSelectedMarker] = useState<any>(null)

  const MarkersList = () => {
    const [locations] = useQuery(getAllLocations, undefined)

    return (
      <>
        {locations.map((location) => {
          const coordinates = getLatLng(location.coordinates)
          return <Marker key={location.id} position={coordinates} />
        })}
      </>
    )
  }

  return (
    <GoogleMap zoom={18} center={center} mapContainerStyle={{ width: "100vw", height: "100vh" }}>
      <Suspense>
        <MarkersList />
      </Suspense>

      <Marker position={center} />

      {/* {selectedMarker && (
        <InfoWindow position={center} onCloseClick={() => setSelectedMarker(null)}>
          <div>Olá</div>
        </InfoWindow>
      )} */}
    </GoogleMap>
  )
}

export default UsuarioPage
