import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import copy from "rollup-plugin-copy";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("calcite-"),
        },
      },
    }),
    copy({
      // copy over the calcite-components assets
      targets: [
        {
          src: "node_modules/@arcgis/core/assets/",
          dest: "public/",
        },
      ],
    }),
  ],
});
