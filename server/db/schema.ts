import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const Movies = pgTable("movies", {
  id: serial().primaryKey(),
  title: text("title").notNull().default(""),
});
