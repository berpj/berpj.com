import { defineConfig } from 'vite';
export default defineConfig({base:'/longtail/',build:{outDir:process.env.LONGTAIL_OUT_DIR||'../../longtail',emptyOutDir:true},server:{port:5178}});
