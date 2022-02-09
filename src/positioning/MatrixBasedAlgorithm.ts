export let final_distance = (i: number, j: number, minDistanceMatrix: Array<Array<number>>): number => {
  if (j === i) {
    return 0;
  } else if(j - i === 1) {
    let temp = [];
    for(let k = 0; k <= i; k++) {
      temp.push(minDistanceMatrix[k][j] - final_distance(k, i, minDistanceMatrix));
    }
    return Math.max(...temp)
  } else {
    let sum = 0;
    for(let l = i; l < j; l++) {
      sum += final_distance(l, l + 1, minDistanceMatrix);
    }
    return sum;
  }
}

export let final_pos = (i: number, minDistanceMatrix: Array<number>[]): number => {
  return final_distance(0, i, minDistanceMatrix);
}
