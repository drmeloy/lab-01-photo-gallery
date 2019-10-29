import { renderFigure } from '../home/render-figure.js';
const test = QUnit.test;

QUnit.module('Render Figure');

test('renderFigure renders proper html from data', assert => {
    const image = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };

    const expected = /*html*/`
        <figure>
            <p>UniWhal</p>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="A unicorn and a narwhal nuzzling their horns" class="narwhal" />
            <figcaption>A unicorn and a narwhal nuzzling their horns</figcaption>
        </figure>
        `;

    const html = renderFigure(image);

    assert.htmlEqual(html, expected);
});