import { State } from '../../types/state';
import { Quests } from '../../types/quest';
import { NameSpace } from 'const';

export const getQuests = (state: State): Quests => state[NameSpace.Data].quests;
export const getLoadingStatus = (state: State): boolean => state[NameSpace.Data].isDataLoading;
export const getOrderStatus = (state: State): boolean => state[NameSpace.Data].isOrderBeingPosted;
