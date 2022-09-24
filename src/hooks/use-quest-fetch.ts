
import { useState, useCallback, useEffect } from 'react';
import { useIsAlive } from './use-is-alive';
import { RequestStatus, APIRoute } from 'const';
import { api } from 'services/api';
import { Quest } from 'types/quest';

export const useQuestFetch = (id: string | undefined) => {
  const [quest, setQuest] = useState<Quest | undefined>();
  const [status, setStatus] = useState(RequestStatus.NotStarted);
  const isAlive = useIsAlive();

  const fetch = useCallback(async () => {
    if (id) {
      setStatus(RequestStatus.Loading);

      try {
        const {data} = await api.get<Quest>(`${APIRoute.Quests}/${id}`);

        if (isAlive.current && data) {
          setQuest(data);
          setStatus(RequestStatus.Success);
        }
      } catch(error) {
        if (isAlive.current){
          setStatus(RequestStatus.Error);
        }
      }
    }
  }, [isAlive, setQuest, setStatus, id]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return [quest, status] as const;
};
