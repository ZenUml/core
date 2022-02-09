let m = Array<Array<number>>();
let min_distance = (i: number, j: number) => {
  return m[i][j];
}
let final_distance = (i: number, j: number): number => {
  if (j === i) {
    return 0;
  } else if(j - i === 1) {
    let temp = [];
    for(let k = 0; k <= i; k++) {
      temp.push(min_distance(k, j) - final_distance(k, i));
    }
    return Math.max(...temp)
  } else {
    let sum = 0;
    for(let l = i; l < j; l++) {
      sum += final_distance(l, l + 1);
    }
    return sum;
  }
}

let final_pos = (i: number): number => {
  return final_distance(0, i);
}

describe('go', () => {
  it('go', () => {
    m = [
      [0, 100, 100, 800],
      [0, 0,   100, 0],
      [0, 0,   0,   100],
      [0, 0,   0,   0],
    ]
    expect(final_distance(0, 0)).toBe(0)
    expect(final_distance(0, 1)).toBe(100)
    expect(final_distance(0, 2)).toBe(200)
    expect(final_distance(0, 3)).toBe(800)
    expect(final_distance(1, 2)).toBe(100)
    expect(final_distance(1, 3)).toBe(700)
    expect(final_distance(2, 3)).toBe(600)
  })

  it('go2', () => {
    m = [
      [0, 100, 0, 100],
      [0, 0, 300, 800],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]
    expect(final_distance(0, 0)).toBe(0)
    expect(final_distance(0, 1)).toBe(100)
    expect(final_distance(0, 2)).toBe(400)
    expect(final_distance(0, 3)).toBe(900)
    expect(final_distance(1, 2)).toBe(300)
    expect(final_distance(1, 3)).toBe(800)
    expect(final_distance(2, 3)).toBe(500)
  })

  it('go3', () => {
    m = [
      [0, 300, 200, 700, 0],
      [0, 0, 100, 0, 500],
      [0, 0, 0, 300, 900],
      [0, 0, 0, 0, 200],
      [0, 0, 0, 0, 0],
    ]
    expect(final_distance(0, 0)).toBe(0)
    expect(final_distance(0, 1)).toBe(300)
    expect(final_distance(0, 2)).toBe(400)
    expect(final_distance(0, 3)).toBe(700)
    expect(final_distance(0, 4)).toBe(1300)
    expect(final_distance(1, 2)).toBe(100)
    expect(final_distance(1, 3)).toBe(400)
    expect(final_distance(1, 4)).toBe(1000)
    expect(final_distance(2, 3)).toBe(300)
    expect(final_distance(2, 4)).toBe(900)
    expect(final_distance(3, 4)).toBe(600)
  })
})
