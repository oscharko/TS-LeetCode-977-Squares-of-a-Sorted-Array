let nums = [-4, -1, 0, 3, 10];
function sortedSquares(nums2) {
  let v = [nums2, []];
  v[0].forEach(function(i) {
    v[1].push(Math.pow(i, 2));
  });
  v[1].sort((a, b) => a - b);
  return v[1];
}
console.log(sortedSquares(nums));
//# sourceMappingURL=index.js.map
