import useSWR from 'swr';

import useApi from '../api/api';

export function useFetch<Data = any, Error = any>(url: string) {
  const { api } = useApi();
  const { data, error, mutate } = useSWR<Data, Error>(url, async (url) => {
    const response = await api.get(url);

    return response.data;
  });

  return { data, error, mutate };
}
