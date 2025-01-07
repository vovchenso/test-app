import { useMutation } from '@tanstack/react-query';
import { Api } from '../../utils/api';
import { ConfigStep } from '../../models/configuration';

export const useConfigMutation = () => useMutation<void, Error, ConfigStep[]>({
  mutationFn: (data) => Api.post('/configuration', data),
});
