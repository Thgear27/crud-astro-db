import { column, defineDb, defineTable } from "astro:db";

const Tasks = defineTable({
  columns: {
    id: column.number({primaryKey: true, unique: true}),
    autor: column.text(),
    name: column.text(),
    done: column.boolean(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Tasks },
});
