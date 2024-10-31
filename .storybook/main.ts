import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../**/*.mdx", "../stories/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ["../static"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
  ],
  framework: "@storybook/react-vite",
};
export default config;
