// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import relativeLinks from "astro-relative-links";
import starlightImageZoomPlugin from "starlight-image-zoom";
import starlightKbd from "starlight-kbd";

// https://astro.build/config
export default defineConfig({
  outDir: "./html", 
  integrations: [
    starlight({
      title: "Documentation",
      favicon: "favicon.ico",
      logo: {
        src: "./src/assets/logo.svg",
      },
      sidebar: [
        {
          label: "Overview",
          autogenerate: { directory: "01-overview" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "02-guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "03-reference" },
        },
        {
          label: "Other docs",
          items: [
            {
              label: "API Reference",
              link: "https://example.com",
            },
          ],
        },
      ],
      plugins: [
        starlightImageZoomPlugin(),
        starlightKbd({
          types: [
            { id: "mac", label: "macOS" },
            { id: "windows", label: "Windows", default: true },
          ],
        }),
      ],
    }),
    relativeLinks(),
  ],
});
