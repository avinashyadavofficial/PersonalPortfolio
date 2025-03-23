
import { useQuery } from '@tanstack/react-query';
import { getSkills, getSkillsByCategory } from '../services/api';

export const useSkills = () => {
  return useQuery({
    queryKey: ['skills'],
    queryFn: getSkills,
  });
};

export const useSkillsByCategory = (category: string) => {
  return useQuery({
    queryKey: ['skills', category],
    queryFn: () => getSkillsByCategory(category),
    enabled: !!category,
  });
};
