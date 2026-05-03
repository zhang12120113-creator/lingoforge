import { useState, useCallback } from 'react';
import * as storage from '../utils/readingStorage';

export const useNotebook = () => {
  const [notebook, setNotebook] = useState(storage.getNotebook());

  const refresh = useCallback(() => setNotebook(storage.getNotebook()), []);

  const add = useCallback((item) => {
    storage.addToNotebook(item);
    refresh();
  }, [refresh]);

  const remove = useCallback((word) => {
    storage.removeFromNotebook(word);
    refresh();
  }, [refresh]);

  const toggleMaster = useCallback((word) => {
    storage.toggleMastered(word);
    refresh();
  }, [refresh]);

  return { notebook, add, remove, toggleMaster, refresh };
};

export const useStats = () => {
  const [stats, setStats] = useState(storage.getStats());

  const refresh = useCallback(() => setStats(storage.getStats()), []);

  const recordActivity = useCallback((readWords, newWords) => {
    storage.recordDaily(readWords, newWords);
    storage.updateStatsSummary();
    refresh();
  }, [refresh]);

  return { stats, recordActivity, refresh };
};
