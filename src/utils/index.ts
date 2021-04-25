export const cleanMask = (value: string): string => {
  return String(value).replace(/[.\-() /]/g, "");
};
