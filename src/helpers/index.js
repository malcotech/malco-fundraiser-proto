export const basename = (typeof process !== 'undefined' && process?.env?.REACT_APP_BASENAME)
  ? process.env.REACT_APP_BASENAME
  : '/';

export function formatNumbers(input, type) {
  if (input.length <= 0) {
    return '';
  }

  switch(type) {
    case 'addComma':
      const num = Number(input);
      return Intl.NumberFormat(
        'en-US', {
          style: 'decimal',
          maximumFractionDigits: 2,
          minimumFractionDigits: 2
        }).format(num);
    case 'removeComma':
      return (input.length > 0)
        ? Number(input.replace(/\,/g, ''))
        : '';
  }
}
