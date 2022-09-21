import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { QuestsData } from '../../types/state';
import {
  fetchQuestAction,
  fetchQuestsAction,
  postOrderAction
} from '../api-actions';

const initialState: QuestsData = {
  quests: [],
  quest: undefined,
  isDataLoading:false,
  isQuestLoading: false,
  isOrderBeingPosted: false,
};

export const questsData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchQuestAction.pending, (state) => {
        state.isQuestLoading = true;
      })
      .addCase(fetchQuestAction.fulfilled, (state, action) => {
        state.quest = action.payload;
        state.isQuestLoading = false;
      })
      .addCase(fetchQuestAction.rejected, (state) => {
        state.isQuestLoading = false;
      })
      .addCase(postOrderAction.pending, (state) => {
        state.isOrderBeingPosted = true;
      })
      .addCase(postOrderAction.fulfilled, (state) => {
        state.isOrderBeingPosted = false;
      })
      .addCase(postOrderAction.rejected, (state) => {
        state.isOrderBeingPosted = false;
      });
  }
});
