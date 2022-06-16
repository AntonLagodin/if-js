export function uniqueLocation(array) {
<<<<<<< HEAD
  const result = {};
  for (let i = 0; i < array.length; i++) {
    const { country, city } = array[i];
    if (result[country]) {
      result[country].push(city);
    } else {
      result[country] = [city];
    }
  }
  return result;
}
=======
    const result = {};
    for (let i = 0; i < array.length; i++) {
        const { country, city } = array[i];
        if (result[country]) {
            result[country].push(city);
        } else {
            result[country] = [city];
        }
    }
    return result;
}
>>>>>>> ab6c366 (resolve conflict)
