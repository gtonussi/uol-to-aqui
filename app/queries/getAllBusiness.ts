import db from "db"

export default async function getAllBusiness(id: number) {
  return await db.business.findMany({ where: { id: id } })
}
