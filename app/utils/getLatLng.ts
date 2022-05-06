export const getLatLng = (str: string) => {
  const arr = str.split(",")

  return {
    lat: parseFloat(arr[0]!),
    lng: parseFloat(arr[1]!),
  }
}
