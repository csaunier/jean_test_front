const {CracoAliasPlugin} = require('react-app-alias')

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {} // default is empty for most cases
    }
  ],
  "jest": {
    "configure": {
      "moduleNameMapper": {
        '@components/(.+)': "<rootDir>/src/app/components/$1",
        "@uiComponents/(.+)": "<rootDir>/src/app/ui-components/$1",
        "@utils/(.+)": "<rootDir>/src/app/utils/$1",
        "@customTypes/(.+)": "<rootDir>/src/types/$1",
        "@api/(.+)": "<rootDir>/src/api/$1",
        "@mock/(.+)": "<rootDir>/src/mock/$1"
      }
    }
  },
}