const pattern = /[\f\n\r\t\v ]{2,}/g;
const replacement = ' ';

function normalize(html) {
    // normalize whitespace, everything becomes one space
    const replaced = html.replace(pattern, replacement);
    // trim leading and trailing whitespace
    const trimmed = replaced.trim();
    // return the result
    return trimmed;
}

// add the custom assertion to QUnit
QUnit.assert.htmlEqual = function(actual, expected) {
    const normalizedActual = normalize(actual);
    const normalizedExpected = normalize(expected);
    QUnit.assert.equal(normalizedActual, normalizedExpected);
};


test('renderDomElement creates the correct HTML structure', assert => {
    const htmlItem = //HTML Element I want generated
    const result = renderDomElement(my, params)
    assert.htmlEqual(htmlItem, result)
});