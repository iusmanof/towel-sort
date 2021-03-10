module.exports = function towelSort(matrix) {
  if (matrix !== undefined) {
    matrix.map((el, index) => (index % 2 ? el.reverse() : 0));
    return [].concat.apply([], matrix);
  } else {
    return [];
  }
};
