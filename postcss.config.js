module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-nested"),
    require("postcss-custom-properties"),
    require("autoprefixer"),
  ],
};
