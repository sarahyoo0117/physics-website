import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
//import { viteStaticCopy } from "vite-plugin-static-copy";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    //viteStaticCopy({
      //targets: [
        //{
          //src: 'assets/space_shuttle/scene.gltf',
          //dest: 'assets/space_shuttle'
        //}
      //]
    //})
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});