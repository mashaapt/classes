
// for(let i = 1000; i < 9999; i+=3) {
//     document.write(`<h3>${i}</h3>`)
// }

for(let i = 0; i <= 9999; i++) {
    if (i.toString().length === 4 && i % 3 === 1) {
        document.write(`<h3>${i}</h3>`)
    }
}