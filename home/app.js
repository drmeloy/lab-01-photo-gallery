import { renderFigure } from './render-figure.js';
import htmlToDom from '../utils/html-to-DOM.js';
import images from '../data/images.js';

const gallery = document.getElementById('gallery');

images.forEach(image => {
    const html = renderFigure(image);
    const figure = htmlToDom(html);
    gallery.appendChild(figure);
});