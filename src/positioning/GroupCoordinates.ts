import {IParticipantModel, SingleOrGroup} from "./ParticipantListener";

export function GroupCoordinates(participants: IParticipantModel[], absolutePos: (name: (string | undefined)) => number) {
  let result = [] as any;

  function _getLeft(participant: IParticipantModel) {
    let positionProvider = participant.type === SingleOrGroup.GROUP ? participant.children[0] : participant;
    return absolutePos(positionProvider.name);
  }

  function _processItem(participant: IParticipantModel, relativeLeft: number = 0) {
    let left = _getLeft(participant);
    result.push({name: participant.name, left: left - relativeLeft})
    for (const item of participant.children) {
      _processItem(item, left);
    }
  }

  for (const participant of participants) {
    _processItem(participant);
  }
  return result;
}
