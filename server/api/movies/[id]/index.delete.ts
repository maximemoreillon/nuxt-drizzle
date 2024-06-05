import { db } from "@/server/db"
import { eq } from "drizzle-orm"
import { Movies } from "~/db/schema"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id")
  const [movie] = await db
    .delete(Movies)
    .where(eq(Movies.id, Number(id)))
    .returning()
  return movie
})
