import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { QuestsData } from '../../types/state';
import {
  fetchQuestsAction,
  postOrderAction
} from '../api-actions';

const initialState: QuestsData = {
  quests: [],
  isDataLoading:false,
  isPosting: false,
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
      .addCase(postOrderAction.pending, (state) => {
        state.isPosting = true;
      })
      .addCase(postOrderAction.fulfilled, (state) => {
        state.isPosting = false;
      })
      .addCase(postOrderAction.rejected, (state) => {
        state.isPosting = false;
      });
  }
});
