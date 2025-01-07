import { useQuery } from '@tanstack/react-query';
import { Api } from '../../utils/api';
import { ConfigStep } from 'src/models/configuration';

export const useConfigQuery = () =>
  useQuery<ConfigStep[]>({
    queryKey: ['configuration'],
    queryFn: () => Api.get('/configuration'),
  });
