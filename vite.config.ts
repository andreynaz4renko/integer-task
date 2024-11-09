import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@model": path.resolve(__dirname, "./src/model"),
      "@controller": path.resolve(__dirname, "./src/controller"),
      "@view": path.resolve(__dirname, "./src/view"),
    },
  },
  build: {
    outDir: "build",
  },
  css: {
    preprocessorOptions: {
      sass: {
        api: "modern-compiler",
      },
    },
  },
});
