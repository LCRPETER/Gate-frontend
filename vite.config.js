import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "tw-elements/dist/css/tw-elements.min.css";`,
      },
    },
  },
  server: {
    port: 3000,
  },
});
