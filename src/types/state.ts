
import { store } from '../store/index';
import { Quest, Quests } from './quest';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type QuestsData = {
  quests: Quests,
  quest: Quest,
  isDataLoading: boolean,
  isQuestLoading: boolean,
  isOrderBeingPosted: boolean,
};
