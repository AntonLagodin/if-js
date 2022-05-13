/**
 * @jest-environment jsdom
 */

document.body.innerHTML = `
    <p id="text1">Text 1</p>
    <p id="text2">Text 2</p>
    <p id="text3">Text 3</p>
`;

const changeColor = require("../src/main");

describe('After click on p, text color should be change', () =>{
    const p1 = document.getElementById("text1");
    const p2 = document.getElementById("text2");
    const p3 = document.getElementById("text3");
    const paragraphs = [p1, p2, p3];
    test('After first click expect color magenta',async() => {
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].click();
            changeColor(paragraphs[i])
            const color = paragraphs[i].style.color;
            expect(color).toBe('magenta')
        }
    })
    test('After second click expect color cyan',async() => {
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].click();
            changeColor(paragraphs[i])
            const color = paragraphs[i].style.color;
            expect(color).toBe('cyan')
        }
    })
    test('After third click expect color firebrick',async() => {
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].click();
            changeColor(paragraphs[i])
            const color = paragraphs[i].style.color;
            expect(color).toBe('firebrick')
        }
    })
    test('After fourth click expect color springgreen',async() => {
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].click();
            changeColor(paragraphs[i])
            const color = paragraphs[i].style.color;
            expect(color).toBe('springgreen')
        }
    })
    test('After fifth click expect color skyblue',async() => {
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].click();
            changeColor(paragraphs[i])
            const color = paragraphs[i].style.color;
            expect(color).toBe('skyblue')
        }
    })
})