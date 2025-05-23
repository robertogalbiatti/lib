// vite.playground.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname, "playground"),
  plugins: [react()],
  resolve: {
    alias: {
      lib: path.resolve(__dirname, "src"),
    },
  },
});
