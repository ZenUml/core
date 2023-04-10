import Store from './Store';
import { createStore } from 'vuex'
import {describe} from "vitest";

describe('Store', () => {
  it('should create an instance', () => {
    expect(Store().state.showTips).toBeDefined();
    expect(Store().state.showTips).toBeFalsy();
  });


  it.each([
    [['A', 'B', 'C'],             'A', 'All participants have positions'],
    [['B', 'C', 'A'],             'A', 'All participants have positions with different order'],
    [['D', 'E', 'F'],             undefined, 'None of the participants have positions'],
    [['A', 'D', 'C'],             'A', 'Some participants have positions'],
    [[null, 'A', undefined, 'C'], 'A', 'Array contains falsy values'],
    [[],                          undefined, 'Empty array'],
  ])('%s', (input, expected, description) => {
    const store = Store();
    const participants: Record<string, number> = { A: 10, B: 25, C: 35 };
    store.getters.centerOf = () => {
      return (participant: string): number => {
        // return -1 if participant is not found; same behavior as the original code
        return participants[participant] || -1;
      };
    };
    expect(createStore(store).getters.leftMost(input)).toBe(expected);
  });

});
