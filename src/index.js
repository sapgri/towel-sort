module.exports = function towelSort(matrix) {
  return matrix
    ? matrix.map((item, i) => (i % 2 ? item.reverse() : item)).flat()
    : [];
};
