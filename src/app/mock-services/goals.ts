import {Goal} from '../models/goal';

export const goals = [
  {
    id: 'test-goal-1'
  },
  {
    id: 'test-goal-2'
  }
]
  .map(goalData =>  new Goal(goalData));
