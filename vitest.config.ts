import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      reporter: ["html", "text", "json"],
      include: ["src/**.test.ts"],
      exclude: ["**/node_modules/**", "**/*.exclude.test.ts"],
      all: true,
    },

    include: ["**/*.test.ts"],
    exclude: ["**/node_modules/**", "**/*.exclude.test.ts"],
  },
});
