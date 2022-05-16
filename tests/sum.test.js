function sum(a) {
    let currentSum = a;
    function f(b) {
        currentSum += b;
        return f;
    }
    f.toString = function () {
        return currentSum;
    };
    return f;
}
test('Function sum will be return sum of arguments', () => {
    expect(sum(5)(2).toString()).toBe (7);
});