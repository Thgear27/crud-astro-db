import { defineConfig, passthroughImageService } from "astro/config";
import db from "@astrojs/db";

import deno from "@astrojs/deno";
import { server } from "typescript";

// https://astro.build/config
export default defineConfig({
  integrations: [db()],
  output: "server",
  adapter: deno({
    mode: "standalone",
  }),
  image: {
    service: passthroughImageService(),
  },
  devToolbar: {
    enabled: false,
  },
});
