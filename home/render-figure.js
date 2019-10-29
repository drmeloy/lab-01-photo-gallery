export const renderFigure = () => {
    const html = /*html*/`
        <figure>
            <p>${image.title}</p>
                <img src=${image.url} alt=${image.description} class=${image.keyword} />
            <figcaption>${image.description}</figcaption>
        </figure>
    `;

    return html;
};