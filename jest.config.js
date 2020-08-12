module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverageFrom: [
    "**/src/**/*.{js,vue}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/dist/**",
    "!**/src/main.js",
    "!**/src/routes.js",
    "!**/src/App.vue",
  ],
};
