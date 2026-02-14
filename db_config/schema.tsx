import {
  pgTable,
  integer,
  varchar,
  json,
  timestamp,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
});

export const HistoryTable = pgTable("HistoryTable", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    record_id: varchar().notNull(),
    content: json(),
    userEmail:varchar("userEmail").references(()=>usersTable.email),
    created_at: timestamp("created_at").defaultNow(),
});
