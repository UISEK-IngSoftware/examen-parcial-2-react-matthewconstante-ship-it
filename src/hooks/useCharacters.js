import { useState, useEffect, useCallback } from 'react';
import { getCharacters } from '../services/futuramaService';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getCharacters(page); 
      setCharacters(data.items || []);
    } catch (err) {
      console.error("Error capturado:", err);
      setError('Error de conexión con la red de Planet Express.');
    } finally {
      setLoading(false);
    }
  }, [page]); 

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, [fetchData]);

  return { characters, loading, error, page, setPage, refetch: fetchData };
};