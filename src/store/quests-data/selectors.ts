import { State } from '../../types/state';
import { Quest, Quests } from '../../types/quest';
import { NameSpace } from 'const';

export const getQuests = (state: State): Quests => state[NameSpace.Data].quests;
export const getQuest = (state: State): Quest | undefined => state[NameSpace.Data].quest;
export const getLoadingStatus = (state: State): boolean => state[NameSpace.Data].isDataLoading;
export const getQuestLoadingStatus = (state: State): boolean => state[NameSpace.Data].isQuestLoading;
export const getOrderStatus = (state: State): boolean => state[NameSpace.Data].isOrderBeingPosted;
