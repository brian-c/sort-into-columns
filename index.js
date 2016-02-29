function sortIntoColumns(originalArray, numberOfColumns) {
  var arrayCopy = originalArray.slice();
  var newArray = [];

  var item;
  var perColumn;
  while (arrayCopy.length !== 0) {
    item = arrayCopy.shift();
    perColumn = Math.floor(arrayCopy.length / numberOfColumns);
    arrayCopy = arrayCopy.splice(perColumn).concat(arrayCopy);
    newArray.push(item);
  }

  return newArray;
}

module.exports = sortIntoColumns;
