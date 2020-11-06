export const combineStrings = (...strArray: string[]): string =>
  strArray.reduce((a, b) => `${a} ${b}`);
