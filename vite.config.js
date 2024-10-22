// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   build: {
//     chunkSizeWarningLimit: 1600,
//     outDir: "dist",
//   },
//   plugins: [react()],
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Ensures that the application works with Vercel routing
  build: {
    chunkSizeWarningLimit: 1600,
    outDir: "dist",
  },
  plugins: [react()],
});
