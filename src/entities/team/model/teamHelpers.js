import { teamInfo, technologies } from './teamData';
import { getMembersCount } from '../../member';

// Получить информацию о команде
export const getTeamInfo = () => {
  return {
    ...teamInfo,
    stats: {
      ...teamInfo.stats,
      members: getMembersCount(), // Динамически получаем количество участников
    },
  };
};

// Получить список технологий
export const getTechnologies = () => {
  return technologies;
};
