import pixelWidth from "string-pixel-width";
const MARGIN = 20
export function LifelineLayout(participants) {
  const participantsWithLeft = participants.map(p => {
    const textWidth = pixelWidth(p, {size: 16});
    const innerWidth = Math.max(100, Math.floor(textWidth));
    return {
      name: p,
      innerWidth: innerWidth,
      outerWidth: innerWidth + MARGIN
    }
  }).map((participant, index, array) => {
    const accumulatedLeft = array.filter((pf, i_f) => i_f < index).map(p => p.outerWidth).reduce((x, y) => x + y, 0)
    return {
      name: participant.name,
      innerWidth: participant.innerWidth,
      outerWidth: participant.outerWidth,
      left: accumulatedLeft,
      outerLeft: accumulatedLeft - (MARGIN / 2)
    }
  })
  return {
    ...participantsWithLeft,
    center: (participant) => {
      const found = participantsWithLeft.find(p => p.name === participant);
      return found?.left + (found?.outerWidth / 2)
    },
    left: (participant) => {
      const found = participantsWithLeft.find(p => p.name === participant);
      return found?.left + (MARGIN / 2)
    },
    right: (participant) => {
      const found = participantsWithLeft.find(p => p.name === participant);
      return found?.left + found?.innerWidth
    },
    outerLeft: (participant) => {
      const found = participantsWithLeft.find(p => p.name === participant);
      return found?.left
    },
    outerRight: (participant) => {
      const found = participantsWithLeft.find(p => p.name === participant);
      return found?.outerLeft + found?.outerWidth
    }
  }
}
