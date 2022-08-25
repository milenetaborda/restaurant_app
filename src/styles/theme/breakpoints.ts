interface INumbers {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

const numbers = {
  xs: 340,
  sm: 500,
  md: 800,
  lg: 1280,
  xl: 1920,
};

const media = {
  up: (bp: keyof INumbers) =>
    `@media (min-width: ${numbers[bp as unknown as keyof INumbers]}px)`,
  down: (bp: keyof INumbers) =>
    `@media (max-width: ${numbers[bp as unknown as keyof INumbers]}px)`,
};

export const breakpoints = {
  ...numbers,
  ...media,
};
