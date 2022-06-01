/**
 * @jest-environment jsdom
 */

document.body.innerHTML = `
    <p id="text1">Text 1</p>
    <p id="text2">Text 2</p>
    <p id="text3">Text 3</p>
`;
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const changeColor = function changeColor(elem) {
    let counter = 0;
    return function () {
        if (counter === colors.length) {
            counter = 0;
        }
        elem.style.color = colors[counter];
        counter++;
    };
}

describe('After click on p, text color should be change', () =>{
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const text3 = document.getElementById('text3');
    const paragraphs = [text1, text2, text3];
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].addEventListener('click', changeColor(paragraphs[i]));
    }
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