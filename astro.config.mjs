import { defineConfig } from "astro/config";
import db from "@astrojs/db";

import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  integrations: [db()],
  output: "server",
  adapter: deno({
    mode: "standalone",
  }),
});
