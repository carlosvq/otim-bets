import { defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

/// <reference types="vitest" />
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      clearMocks: true,
      deps: {
        moduleDirectories: ["node_modules", "src"],
      },
      globals: true,
      environment: "jsdom",
      includeSource: ["src/**/*.{js,ts}"],
      setupFiles: ["./vitest.setup.ts"],
    },
  }),
);
