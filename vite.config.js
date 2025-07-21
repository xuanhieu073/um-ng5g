import { defineConfig } from "vite";
import vituum from "vituum";
import tailwindcss from "@tailwindcss/vite";
import handlebars from "@vituum/vite-plugin-handlebars";

export default defineConfig(({ command, mode }) => ({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "content/dam/frfe/af/[ext]/[name][extname]",
        chunkFileNames: "content/dam/frfe/af/chunks/[name].js",
        entryFileNames: "content/dam/frfe/af/js/[name].js",
      },
    },
  },
  plugins: [
    vituum(),
    handlebars({
      root: "./src",
    }),
    tailwindcss(),
  ],
}));
