import {defineConfig} from 'vite';

const repo = 'type-script-arcanoid-2023';

export default defineConfig(({command, mode, ssrBuild}) => {
  if (mode == "production") {
    return {
      base: `/${repo}/`
    }
  }
  return {};
});