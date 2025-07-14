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
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: "Overview",
          collapsed: true,
          autogenerate: { directory: "01-overview" },
        },
        {
          label: "Guides",
          collapsed: true,
          autogenerate: { directory: "02-guides" },
        },
        {
          label: "Reference",
          collapsed: true,
          autogenerate: { directory: "03-reference" },
        },
        {
          label: "Other docs",
          collapsed: true,
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
