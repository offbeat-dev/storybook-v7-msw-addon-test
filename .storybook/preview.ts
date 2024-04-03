import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "storybook-msw-addon";
initialize({ onUnhandledRequest: "bypass" });

export const loaders = [mswLoader];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
