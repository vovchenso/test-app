import { useMutation } from '@tanstack/react-query';
import { Api } from '../../utils/api';
import { OnboardingData } from '../../models/data';

export const useDatMutation = () => useMutation<void, Error, OnboardingData>({
  mutationFn: (data) => Api.post('/data', data),
});
