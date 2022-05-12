/**
 * @jest-environment jsdom
 */

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
let currentColor1 = 0;
let currentColor2 = 0;
let currentColor3 = 0;
const p1 = document.getElementById('text1');
const p2 = document.getElementById('text2');
const p3 = document.getElementById('text3');
document.addEventListener('DOMContentLoaded', function () {
    p1.addEventListener('click', function () {
        currentColor1++;
        if (currentColor1 > 4) currentColor1 = 0;
        p1.style.color = colors[currentColor1];
    });
    p2.addEventListener('click', function () {
        currentColor2++;
        if (currentColor2 > 4) currentColor2 = 0;
        p2.style.color = colors[currentColor2];
    });
    p3.addEventListener('click', function () {
        currentColor3++;
        if (currentColor3 > 4) currentColor3 = 0;
        p3.style.color = colors[currentColor3];
    });
});

test ('When we click on p, color will change', () => {
    expect(p1).toContain('magenta');
    expect(p2).toContain('cyan');
    expect(p3).toContain('firebrick');
});