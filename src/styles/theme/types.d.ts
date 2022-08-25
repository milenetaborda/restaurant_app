import { defaultTheme } from ".";

declare module "styled-components" {
  type Theme = typeof defaultTheme;

  interface DefaultTheme extends Theme {}
}
