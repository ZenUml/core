/**
 * There three sources of participants:
 * 1. Explicit participants from participant declarations
 * 2. @Starter
 * 3. Implicit participants from messages
 *
 * Let's first decide when we are not using @Starter:
 * The order will be _STARTER_, declared participants, implicit participants
 *
 * If we are using @Starter, and the `starter` is included in the declared participants,
 * the order will be declared participants (starter will be at the declared position), implicit participants.
 * If the `starter` is not included in the declared participants, the order will be
 * `starter`, declared participants, implicit participants.
 *
 * Examples:
 * A B C.m                => _STARTER_(invisible), A, B, C
 * A B @Starter(C) C.m    => C, A, B
 * A B @Starter(B) C.m    => A, B, C
 *
 * The concept is that declarations are for explicit positioning.
 * @Starter explicitly declare but still using implicit positioning (left-most).
 *
 * A participant can be either explicitly positioned or implicit positioned.
 *
 * @Starter does NOT explicitly position a participant. It works like `absolute`
 * in CSS. It pulls the participant out of the flow.
 *
 * Participant declaration works like `#id {display: relative}` in CSS. It puts
 * the participants back in the flow and a fixed flow decided by itself.
 */

describe('Participants.Order', () => {
  it('should return the order of participants', () => {
  })
})
