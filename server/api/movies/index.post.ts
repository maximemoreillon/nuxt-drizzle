import { db } from "~~/server/db";
import { Movies } from "~~/server/db/schema";

export default defineEventHandler(async (event) => {
  const { title } = await readBody(event);
  const [movie] = await db.insert(Movies).values({ title }).returning();
  return movie;
});
