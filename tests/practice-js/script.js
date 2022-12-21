// const getQSel = (value) => document.querySelector(value);
// const table = getQSel('table');
// const tr = document.createElement(`tr`);

const table = document.createElement('table');
document.body.appendChild(table);

let numsRows = (rows) => {
    for(let i = 0; i <= rows; i++) {

        table.appendChild(document.createElement(`tr`));
    }
} 

numsRows(+prompt('Enter number of <tr>'));

let numsCols = (cols) => {
    document.querySelectorAll('tr').forEach((row, rowIndex) => {
        for(let j = 0; j <= cols; j++) {
            const td = document.createElement(`td`);
            const text = document.createTextNode(`${rowIndex}${j}`)
            td.appendChild(text);
            row.appendChild(td);
        }
    })
} 
numsCols(+prompt('Enter number of <td>'));

const tds = document.querySelectorAll('td');
const oddTds = document.querySelectorAll('td:nth-child(odd)');
const evenTds = document.querySelectorAll('td:nth-child(even)');

let borderSz = (size) => {
    tds.forEach(td => {
        td.style.border = `${size}px solid black`;
    });
}
borderSz(prompt('Enter border size of table'));

let cellsSpace = (space) => {
    tds.forEach(td => { 
        td.style.borderSpacing = `${space}px`;
    });
}
cellsSpace(prompt('Enter cellspacing'));

let colWidth = (width) => {
    tds.forEach(td => { 
        td.style.colWidth = `${width}px`;
    });
}
colWidth(prompt('Enter width'));

let colHeight = (height) => {
    tds.forEach(td => { 
        td.style.colHeight = `${height}px`;
    });
}
colHeight(prompt('Enter height'));

let colBgColor1 = (bgColor) => {
    oddTds.forEach(td => {  
        td.style.backgroundColor = bgColor;
    })
}
colBgColor1(prompt('Enter color of cells 1'));

let colBgColor2 = (bgColor) => {
    evenTds.forEach(td => {  
        td.style.backgroundColor = bgColor;
    })
}
colBgColor2(prompt('Enter color of cells 2'));
