import {Participants} from "@/parser/Participants";

describe('Participants', ()=>{
  test('Get a NullParticipant', () => {
    const participants = new Participants();
    const nullParticipant = participants.Get('X');
    expect(nullParticipant).toEqual({
      "name": "__NULL__"
    });
    expect(nullParticipant.IsPositioned()).toBeFalsy();
  });
  test('Get implicitly declared participants', () => {
    const participants = new Participants();
    participants.Add('A');
    expect(participants.ImplicitArray()).toEqual([{name: 'A', isStarter: false, stereotype: undefined, width: undefined}]);
  });
});
