import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Quests } from '../types/quest';
import { APIRoute } from '../const';
import { OrderPost } from '../types/order-post';

export const fetchQuestsAction = createAsyncThunk<Quests, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchQuests',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Quests>(APIRoute.Quests);
    return data;
  },
);

export const postOrderAction = createAsyncThunk<OrderPost, {order: OrderPost}, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postOrder',
  async ({order}, {dispatch, extra: api}) => {
    const {data} = await api.post<any>(APIRoute.Order, order);
    return data;
  },
);
