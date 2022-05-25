let nums = [-4,-1,0,3,10]

function sortedSquares(nums: number[]): number[] {
  /*
  # Description for array v:
  #   - v[0] = input array
  #   - v[1] = output array squares and sorted
  */
  let v: [number[], number[]] = [nums, []]
  v[0].forEach(function(i) {
    v[1].push(Math.pow(i, 2));
  });
  v[1].sort((a, b) => a - b)
  return v[1];
}

console.log(sortedSquares(nums))