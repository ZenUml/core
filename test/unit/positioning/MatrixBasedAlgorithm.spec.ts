let m = Array<Array<number>>();
let p = (i: number, j: number) => {
  return m[i][j];
}
let r = (i: number, j: number): number => {
  if (j === i) {
    return 0;
  } else if(j - i === 1) {
    let temp = [];
    for(let k = 0; k <= i; k++) {
      temp.push(p(k, j) - r(k, i));
    }
    return Math.max(...temp)
  } else {
    let sum = 0;
    for(let l = i; l < j; l++) {
      sum += r(l, l + 1);
    }
    return sum;
  }
}

describe('go', () => {
  it('go', () => {
    m = [
      [0, 100, 100, 800],
      [0, 0, 100, 0],
      [0, 0, 0, 100],
      [0, 0, 0, 0],
    ]
    expect(r(0, 0)).toBe(0)
    expect(r(0, 1)).toBe(100)
    expect(r(0, 2)).toBe(200)
    expect(r(0, 3)).toBe(800)
    expect(r(1, 2)).toBe(100)
    expect(r(1, 3)).toBe(700)
    expect(r(2, 3)).toBe(600)
  })

  it('go2', () => {
    m = [
      [0, 100, 0, 100],
      [0, 0, 300, 800],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]
    expect(r(0, 0)).toBe(0)
    expect(r(0, 1)).toBe(100)
    expect(r(0, 2)).toBe(400)
    expect(r(0, 3)).toBe(900)
    expect(r(1, 2)).toBe(300)
    expect(r(1, 3)).toBe(800)
    expect(r(2, 3)).toBe(500)
  })

  it('go3', () => {
    m = [
      [0, 300, 200, 700, 0],
      [0, 0, 100, 0, 500],
      [0, 0, 0, 300, 900],
      [0, 0, 0, 0, 200],
      [0, 0, 0, 0, 0],
    ]
    expect(r(0, 0)).toBe(0)
    expect(r(0, 1)).toBe(300)
    expect(r(0, 2)).toBe(400)
    expect(r(0, 3)).toBe(700)
    expect(r(0, 4)).toBe(1300)
    expect(r(1, 2)).toBe(100)
    expect(r(1, 3)).toBe(400)
    expect(r(1, 4)).toBe(1000)
    expect(r(2, 3)).toBe(300)
    expect(r(2, 4)).toBe(900)
    expect(r(3, 4)).toBe(600)
  })
})
