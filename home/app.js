import { renderFigure } from './render-figure.js';
import htmlToDom from '../utils/html-to-DOM.js';
import images from '../data/images.js';

const gallery = document.getElementById('gallery');
const select = document.querySelector('select');

const render = (imagesToRender) => {
    while (gallery.lastElementChild){
        gallery.lastElementChild.remove();
    }

    imagesToRender.forEach(image => {
        const html = renderFigure(image);
        const figure = htmlToDom(html);
        gallery.appendChild(figure);
    });
};

render(images);

select.addEventListener('change', () => {
    const filterValue = select.value;
    let filteredImages;

    if (!filterValue){
        filteredImages = images;
    }
    else {
        filteredImages = images.filter(image => {
            return image.keyword === filterValue;
        });
    }

    render(filteredImages);
});