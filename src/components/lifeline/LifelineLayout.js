import pixelWidth from "string-pixel-width";
const MARGIN = 20
export function LifelineLayout(participants) {
  const participantsWithLeft = participants.map(p => {
    return {name: p, width: Math.floor(pixelWidth(p, {size: 16})) + MARGIN}
  }).map((participant, index, array) => {
    const accumulatedLeft = array.filter((pf, i_f) => i_f < index).map(p => p.width).reduce((x, y) => x + y, 0)
    return {
      name: participant.name,
      left: accumulatedLeft
    }
  })
  return {
    center: (participant) => {
      return participantsWithLeft.find(p => p.name === participant)?.left
    }
  }
}
