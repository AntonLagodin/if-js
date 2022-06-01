export function replace(number) {
  if (`${number}`.includes('0')) {
    return `${number}`.replaceAll('0', 'zero');
  } else {
    return number;
  }
}
