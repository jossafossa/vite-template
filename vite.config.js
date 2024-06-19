import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

export default defineConfig( {
  plugins: [
    eslint( ),
  ],
  // alias @
  resolve: {
    alias: {
      "@": "/src",
    },
  },
} );