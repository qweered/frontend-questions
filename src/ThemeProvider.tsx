import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import {ReactNode} from "react";

export const theme: MantineThemeOverride = {
  colorScheme: "dark",
};

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      {children}
    </MantineProvider>
  );
}
