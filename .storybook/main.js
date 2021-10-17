module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/preset-create-react-app"],
  rules: [
    {
      test: /\.(woff2|woff|eot|ttf|otf)$/,
      use: ["file-loader"],
    },
  ],
};
