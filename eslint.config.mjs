import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];

// eslint-disable-next-line no-undef
module.exports = {
  ignorePatterns: ['webpack.config.js']
};
