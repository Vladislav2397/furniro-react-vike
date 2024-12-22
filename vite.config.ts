import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import prettyModuleClassnames from "vite-plugin-pretty-module-classnames";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  ssr: { noExternal: ["effector-factorio"] },
  build: { minify: false },
  plugins: [
    react({
      babel: { babelrc: true, plugins: ["@babel/plugin-syntax-import-attributes"] },
    }),
    vike({
      redirects: {},
    }),
    svgr({
      svgrOptions: {},
    }),
    prettyModuleClassnames(),
  ],
  server: {
    port: 5173
  },
  define: {},
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
});