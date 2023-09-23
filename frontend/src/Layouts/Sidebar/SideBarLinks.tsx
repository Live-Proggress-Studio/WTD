import { useTranslation } from 'react-i18next';
import { Paths } from '@/App/Routing';
// import { userModel } from '@Services/Models';
import calendarIcon from '@Icons/Calendar.svg';
import todo from '@Icons/TodoList.svg';
import goal from '@Icons/Goal.svg';
import graph from '@Icons/Graph.svg';
import settings from '@Icons/Settings.svg';
import account from '@Icons/Account.svg';

const SidebarLinks = () => {
  const { t } = useTranslation();

  const sidebarLinks = [
    {
      icon: calendarIcon,
      text: t('main.sidebar.calendar'),
      link: `${Paths.Home}`,
    },
    {
      icon: todo,
      text: t('main.sidebar.todolist'),
      link: `${Paths.TODO}`,
    },
    {
      icon: goal,
      text: t('main.sidebar.mygoals'),
      link: `${Paths.Goals}`,
    },
    {
      icon: graph,
      text: t('main.sidebar.statistic'),
      link: `${Paths.Stats}`,
    },
    {
      icon: settings,
      text: t('main.sidebar.settings'),
      link: `${Paths.Settings}`,
    },
    {
      icon: account,
      text: t('main.sidebar.account'),
      link: `users`,
    },
  ];

  return sidebarLinks;
};

export default SidebarLinks;
