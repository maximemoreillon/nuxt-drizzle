import { db } from "@/server/db"
import { Movies } from "~/db/schema"

export default defineEventHandler(async () => {
  return await db.select().from(Movies)
})
