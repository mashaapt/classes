const removeDuplicates = (arr) => {
    return arr.filter((word, index) => {
        return arr.indexOf(word) === index;
    })
};

const arr1 = removeDuplicates(['html', 'css', 'html', 'js']);
const arr2 = removeDuplicates(['html','css','js','html','js','python','js','scss']);

console.log(arr1);
console.log(arr2);
