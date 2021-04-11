import pixelWidth from "string-pixel-width";
const MARGIN = 10
const MIN_WIDTH = 88
const MAX_WIDTH = 250
export function LifelineLayout(participants) {
  const participantsWithLeft = participants.map(p => {
    const textWidth = pixelWidth(p, {font: 'helvetica', size: 16});
    const estimatedWidth = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, Math.floor(textWidth)));
    const innerWidth = Math.ceil((estimatedWidth + 10) / 10) * 10;
    return {
      name: p,
      innerWidth: innerWidth,
      outerWidth: innerWidth + (MARGIN * 2)
    }
  }).map((participant, index, array) => {
    const accumulatedLeft = array.filter((pf, i_f) => i_f < index).map(p => p.outerWidth).reduce((x, y) => x + y, 0)
    return {
      name: participant.name,
      innerWidth: participant.innerWidth,
      outerWidth: participant.outerWidth,
      left: participant.innerWidth/2 + accumulatedLeft + MARGIN,
      outerLeft: participant.innerWidth/2+ accumulatedLeft
    }
  })
  return {
    ...participantsWithLeft,
    // Only center is reliable. We assume that we will use transform: translateX(-50%) to shift the participant.
    center: (participant) => {
      const found = participantsWithLeft.find(p => p.name === participant);
      return found?.left
    },
    left: (participant) => {
      const found = participantsWithLeft.find(p => p.name === participant);
      return found?.left - (found?.innerWidth / 2)
    },
    right: (participant) => {
      const found = participantsWithLeft.find(p => p.name === participant);
      return found?.left + (found?.innerWidth / 2)
    },
    outerLeft: (participant) => {
      const found = participantsWithLeft.find(p => p.name === participant);
      return found?.left - (found?.innerWidth / 2) - MARGIN
    },
    outerRight: (participant) => {
      const found = participantsWithLeft.find(p => p.name === participant);
      return found?.left + (found?.innerWidth / 2) + MARGIN
    },
    innerWidth: (participant) => {
      const found = participantsWithLeft.find(p => p.name === participant);
      return found?.innerWidth
    }
  }
}
