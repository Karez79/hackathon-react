import { members } from './member';

// Получить участника по ID
export const getMemberById = (id) => {
  const member = members.find((member) => member.id === id);

  return (
    member || {
      name: 'Участник не найден',
      role: 'Неизвестная роль',
      initials: '?',
      description: 'Информация об участнике не найдена.',
    }
  );
};

// Получить всех участников как массив
export const getAllMembers = () => {
  return members;
};

// Получить количество участников
export const getMembersCount = () => {
  return members.length;
};
