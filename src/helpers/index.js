export function formatNumbers(input, type) {
  if (input.length <= 0) {
    return '';
  }

  switch(type) {
    case 'addComma':
      return Intl.NumberFormat(
        'en-US', {
          style: 'decimal',
          maximumFractionDigits: 2,
          minimumFractionDigits: 2
        }).format(Number(input));
    case 'removeComma':
      return (input.length > 0)
        ? Number(input.replace(/\,/g, ''))
        : '';
  }
}
