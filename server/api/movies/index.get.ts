import { db } from "@/server/db"
import { Movies } from "~/db/schema"
export default defineEventHandler(async () => {
  const movies = await db.select().from(Movies)
  console.log(movies)
  return movies
})
