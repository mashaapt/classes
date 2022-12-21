let bg = (color) => {
    document.body.style.backgroundColor = color;
    // document.getElementsByTagName("body")[0].style.backgroundColor = color;
}
bg(prompt('choose background of this page'));

let fontF = (font) => {
    document.body.style.fontFamily = font;
}
fontF(prompt('choose ur font'));

let head = (aligntmnt) => {
    // document.getElementByTagName('h1').style.display = 'flex';
    document.getElementsByTagName('h1')[0].style.textAlign = aligntmnt;
}
head(prompt('align the title on the page'));



let links = (links) => {
    document.getElementById('links').style.backgroundColor = links;
}
links(prompt('choose background color for your links'));

let link = (color) => {
    for (let link of document.getElementById('links').children) {

        if(link.matches('.link')) {
            link.style.color = color;
            link.target = 'blank';
        } 
    }
}
link(prompt('choose color exactly for links'));


let listColor = (listColor) => {
    document.getElementsByClassName('list')[0].style.color = listColor;
}
listColor(prompt('choose color for the list'));

let listSize = (size) => {
    document.getElementsByClassName('list')[0].style.fontSize = `${size}px`;
}
listSize(prompt('choose font size for the list'));

let listFWeight = (weight) => {
    document.getElementsByClassName('list')[0].style.fontWeight = weight;
}
listFWeight(prompt('choose font weight for the list'));

let listSt = (styleL) => {
    document.querySelector('.list ul').style.listStyle = styleL;
}
listSt(prompt('choose list style for your list'));
