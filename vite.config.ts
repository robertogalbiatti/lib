// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { resolve } from 'path';
// import dts from 'vite-plugin-dts';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     dts({ include: ['src'] })
//   ],
//   build: {
//     lib: {
//       entry: resolve(__dirname, 'src/index.ts'),
//       name: 'lib',
//       fileName: 'index',
//       formats: ['es', 'cjs']
//     },
//     rollupOptions: {
//       external: ['react', 'react-dom'],
//       output: {
//         globals: {
//           react: 'React',
//           'react-dom': 'ReactDOM'
//         }
//       }
//     },
//     sourcemap: true,
//     emptyOutDir: true
//   }
// });

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "MyDesignSystem",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    cssCodeSplit: true,
  },
});
