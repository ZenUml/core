import pixelWidth from "string-pixel-width";

const MARGIN = 10
const MIN_WIDTH = 88
const MAX_WIDTH = 250
export function LifelineLayout(participants) {
  const layoutMap = participants.map(p => {
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
    const center = accumulatedLeft + participant.innerWidth / 2 + MARGIN;
    return {
      name: participant.name,
      innerWidth: participant.innerWidth,
      outerWidth: participant.outerWidth,
      center: center,
      outerLeft: accumulatedLeft,
      left: accumulatedLeft + MARGIN,
      right: center + participant.innerWidth / 2,
      outerRight: accumulatedLeft + participant.outerWidth
    }
  }).reduce((acc, curr) => {
    acc[curr.name] = curr
    return acc
  }, {})
  return {
    ...layoutMap,
    // Only center is reliable. We assume that we will use transform: translateX(-50%) to shift the participant.
    center: (participant) => {
      return layoutMap[participant]?.center
    },
    left: (participant) => {
      return layoutMap[participant]?.left
    },
    right: (participant) => {
      return layoutMap[participant]?.right
    },
    outerLeft: (participant) => {
      return layoutMap[participant]?.outerLeft
    },
    outerRight: (participant) => {
      return layoutMap[participant]?.outerRight
    },
    innerWidth: (participant) => {
      const found = layoutMap[participant];
      return found?.innerWidth
    }
  }
}
