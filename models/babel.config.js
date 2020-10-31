// babel.config.js
module.exports = {
  presets: [
    '@babel/preset-env',
  ],
  plugins: [
    ["@babel/plugin-syntax-decorators", {"legacy": true}],
    ["@babel/plugin-proposal-decorators", {"legacy": true}],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
  ]
}
