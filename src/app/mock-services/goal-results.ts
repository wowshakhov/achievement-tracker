import {GoalResult} from '../models/goal-result';

export const goalResults = [
  {
    goalId: 'test-goal-1',
    comment: 'test-goal-result-1'
  },
  {
    goalId: 'test-goal-1',
    comment: 'test-goal-result-2'
  }
]
  .map(goalResultData => new GoalResult(goalResultData));
