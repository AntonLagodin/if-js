export function palindrome(str) {
  str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
  const lastIndex = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[lastIndex - i]) {
      return false;
    }
  }
  return true;
}
