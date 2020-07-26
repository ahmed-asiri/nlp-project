export function checkElementExisting(element) {
    var elementFromDoc = document.querySelector(element);
    return elementFromDoc;
}