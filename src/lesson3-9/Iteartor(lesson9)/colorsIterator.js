export const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    let index = 0;
    const next = () => {
      if (index < this.data.length) {
        const value = this.data[index++];
        return { value, done: false };
      }
      if (index === this.data.length) {
        index = 0;
        const value = this.data[index++];
        return { value, done: false };
      }
      return { done: true };
    };
    return { next };
  },
};
