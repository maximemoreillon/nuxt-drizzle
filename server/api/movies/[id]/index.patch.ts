import { db } from "~~/server/db";
import { eq } from "drizzle-orm";
import { Movies } from "~~/server/db/schema";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  const values = await readBody(event);

  const [movie] = await db
    .update(Movies)
    .set(values)
    .where(eq(Movies.id, Number(id)))
    .returning();

  return movie;
});
