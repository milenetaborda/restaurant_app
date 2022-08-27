import { defaultTheme } from "~/styles/theme";

type ITheme = "primary" | "white" | "dark";

export const colorByThemeProps = (themeColor: ITheme) => {
  switch (themeColor) {
    case "primary":
      return defaultTheme.colors.primary;
    case "white":
      return defaultTheme.colors.white;
    case "dark":
      return defaultTheme.colors.dark;
  }
};
