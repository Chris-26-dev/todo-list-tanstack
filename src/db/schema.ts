import { pgTable, uuid, text, boolean, timestamp } from 'drizzle-orm/pg-core'

export const todos = pgTable('todos', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  isComplete: boolean().notNull(),
  createdAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp({ withTimezone: true })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
})
