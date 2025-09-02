import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target: "https://www.themealdb.com/api/json/v1/1",
        changeOrigin: true,
        secure: false, // DEV ONLY: bypass VPN/corp MITM cert issue
        rewrite: (p) => p.replace(/^\/api/, ""),
      },
    },
  },
});
