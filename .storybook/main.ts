import type { StorybookConfig } from "@storybook/react-vite";
import path from 'path';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/stories/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ["../static"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
       
          include: [path.resolve(__dirname, '../src/stories\.tsx?$/')], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
  ],
  framework: "@storybook/react-vite",
};
export default config;
