var test = require('tape');
var sortIntoColumns = require('./index');

test('sortIntoColumns', function(t) {
  t.equal(typeof sortIntoColumns, 'function', 'exports a function');

  var inOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  var intoTwo = [
    0, 5,
    1, 6,
    2, 7,
    3, 8,
    4, 9
  ];

  t.deepEqual(sortIntoColumns(inOrder, 2), intoTwo, 'sorts into two columns');

  var intoThree = [
    0, 4, 7,
    1, 5, 8,
    2, 6, 9,
    3
  ];

  t.deepEqual(sortIntoColumns(inOrder, 3), intoThree, 'sorts into three columns');

  var intoFour = [
    0, 3, 6, 8,
    1, 4, 7, 9,
    2, 5
  ];

  t.deepEqual(sortIntoColumns(inOrder, 4), intoFour, 'sorts into four columns');

  t.end()
});
