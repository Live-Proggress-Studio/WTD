import { Paths } from "@/App/Routing";
import { userModel } from "@Services/Models";
import calendarIcon from "@Icons/Calendar.svg";
import todo from "@Icons/TodoList.svg";
import goal from "@Icons/Goal.svg";
import graph from "@Icons/Graph.svg";
import settings from "@Icons/Settings.svg";
import account from "@Icons/Account.svg";

const sidebarLinks = [
  { icon: calendarIcon, text: "Календарь", link: `${Paths.Home}` },
  { icon: todo, text: "Список дел", link: `${Paths.TODO}` },
  { icon: goal, text: "Мои Цели", link: `${Paths.Goals}` },
  { icon: graph, text: "Статискика", link: `${Paths.Stats}` },
  { icon: settings, text: "Настройки", link: `${Paths.Settings}` },
  { icon: account, text: "Аккаунт", link: `users/${userModel.id}` },
];

export default sidebarLinks;
