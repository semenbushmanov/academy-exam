
import { store } from '../store/index';
import { Quests } from './quest';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type QuestsData = {
  quests: Quests,
  isDataLoading: boolean,
  isPosting: boolean,
};
