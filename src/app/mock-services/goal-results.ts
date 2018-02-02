import {GoalResult} from '../models/goal-result';

export const goalResults = [
  {
    id: 'test-goal-1',
    comment: 'test-goal-result-1'
  },
  {
    id: 'test-goal-1',
    comment: 'test-goal-result-2'
  }
]
  .map(entry => new GoalResult(entry));
