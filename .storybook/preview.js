import Center from "../src/components/Center/Center";
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/core";
import { withConsole } from "@storybook/addon-console";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

/** @type { import('@storybook/react').Preview } */
const preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      // The `a` and `b` arguments in this function have a type of `import('@storybook/types').IndexEntry`. Remember that the function is executed in a JavaScript environment, so use JSDoc for IntelliSense to introspect it.
      storySort: (a, b) =>
        a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        customSmall: {
          name: "Custom Small Screen",
          styles: {
            width: "360px",
            height: "640px",
          },
        },
        customLarge: {
          name: "Custom Large Screen",
          styles: {
            width: "1280px",
            height: "1024px",
          },
        },
      },
      defaultViewport: "customSmall",
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box m="4">
        <Center>
          <Story />
        </Center>
      </Box>
    </ThemeProvider>
  ),
  (Story, context) => withConsole()(Story)(context),
];

export default preview;
