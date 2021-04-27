type TReturnedType = 'string' | 'number';

export const cleanMask = (
  value: string,
  returnedType?: TReturnedType,
): number | string => {
  const stringNumber = String(value)
    .replace(/[.\-%() /]/g, '')
    .replace(',', '.');
  if (returnedType === 'string') {
    return stringNumber;
  }
  return Number(stringNumber);
};
