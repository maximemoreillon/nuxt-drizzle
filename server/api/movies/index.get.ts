import { db } from "@/server/db";
import { Movies } from "~/db/schema";

import { z } from "zod";
import { asc, count, desc, like } from "drizzle-orm";

const querySchema = z.object({
  itemsPerPage: z.coerce.number().default(3),
  page: z.coerce.number().gt(0).default(1),
  sort: z.union([z.literal("title"), z.literal("id")]).default("id"),
  order: z.union([z.literal("asc"), z.literal("desc")]).default("asc"),
  search: z.string().optional(),
});

export default defineEventHandler(async (event) => {
  const { itemsPerPage, page, sort, order, search } = await getValidatedQuery(
    event,
    querySchema.parse
  );

  const offset = (page - 1) * itemsPerPage;

  const orderMap = {
    asc,
    desc,
  };

  let where;
  if (search) where = like(Movies.title, `%${search}%`);

  const items = await db
    .select()
    .from(Movies)
    .where(where)
    .orderBy(orderMap[order](Movies[sort]))
    .limit(itemsPerPage)
    .offset(offset);

  const [{ total }] = await db.select({ total: count() }).from(Movies);

  return { items, total, itemsPerPage, page };
});
