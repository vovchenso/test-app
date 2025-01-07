import { useQuery } from '@tanstack/react-query';
import { Data } from '../../models/data';
import { Api } from '../../utils/api';

export const QUERY_CACHE_KEY_DATA = 'data';

export const useDataQuery = () =>
  useQuery<Data[]>({
    queryKey: [QUERY_CACHE_KEY_DATA],
    queryFn: () => Api.get('/data'),
  });
