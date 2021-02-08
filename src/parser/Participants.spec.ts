import {Participants} from "@/parser/Participants";

describe('Participants', ()=>{
  test('Get implicitly declared participants', () => {
    const participants = new Participants();
    participants.Add('A');
    expect(participants.ImplicitArray()).toEqual([{name: 'A', isStarter: false, stereotype: undefined, width: undefined}]);
  });
});
