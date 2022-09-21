import { State } from '../../types/state';
import { Quest, Quests } from '../../types/quest';

export const getQuests = (state: State): Quests => state.quests;
export const getQuest = (state: State): Quest | undefined => state.quest;
export const getLoadingStatus = (state: State): boolean => state.isDataLoading;
export const getQuestLoadingStatus = (state: State): boolean => state.isQuestLoading;
export const getOrderStatus = (state: State): boolean => state.isOrderBeingPosted;
