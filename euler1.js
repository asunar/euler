const getRange1 = (limit) => {return [...Array(limit).keys()]};

function sumOfMultiples(input) {
 const numbersToAdd = getRange1(input).filter(x => x%3===0 || x%5 === 0);
 const reducer = (accumulator, currentValue) => accumulator + currentValue;
 return numbersToAdd.reduce(reducer);
}
