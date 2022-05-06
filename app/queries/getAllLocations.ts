import db from "db"

export default async function getAllLocations() {
  return await db.location.findMany()
}
