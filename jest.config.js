module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest",
  },
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverageFrom: [
    "src/**/*.{vue}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  //collectCoverage: true,
};
