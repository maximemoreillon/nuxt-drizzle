import { db } from "@/server/db"
import { eq } from "drizzle-orm"
import { Movies } from "~/db/schema"
export default defineEventHandler(async ({ context }) => {
  if (!context.params) throw "Params not defined"
  const { id } = context.params
  const [movie] = await db
    .select()
    .from(Movies)
    .where(eq(Movies.id, Number(id)))
  return movie
})
