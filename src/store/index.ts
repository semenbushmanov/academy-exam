import { configureStore } from '@reduxjs/toolkit';
import { questsData } from './quests-data/quests-data';
import { api } from '../services/api';

export const store = configureStore({
  reducer: questsData.reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
