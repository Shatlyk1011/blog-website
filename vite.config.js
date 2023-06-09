import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src/", import.meta.url)),
      },
      {
        find: "@/globals",
        replacement: fileURLToPath(new URL("./src/_globals", import.meta.url)),
      },
    ],
  },
  test: {
    globals: true,
    setupFiles: ["./tests/setup.js"],
  },
});
