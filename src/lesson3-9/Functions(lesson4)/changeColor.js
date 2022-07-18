const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
export function changeColor(elem) {
  let counter = 0;
  return function () {
    if (counter === colors.length) {
      counter = 0;
    }
    elem.style.color = colors[counter];
    counter++;
  };
}
