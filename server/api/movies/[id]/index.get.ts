import { db } from "@/server/db"
import { eq } from "drizzle-orm"
import { Movies } from "~/db/schema"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id")
  const [movie] = await db
    .select()
    .from(Movies)
    .where(eq(Movies.id, Number(id)))
  return movie
})
