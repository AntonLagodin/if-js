export function uniqueLocation(array) {
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