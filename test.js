// this file is not connected to project for raff file

const createElements = (arr) => {
    const htmlElements = arr.map((el) => `<span class="btn">${el}</span>`);
    console.log(htmlElements.join(" "));
}


const synonyms = ['hello', 'hi', 'bye'];
createElements(synonyms);