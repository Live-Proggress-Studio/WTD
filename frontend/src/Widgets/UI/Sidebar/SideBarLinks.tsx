import { Pathes } from "@/App/Routing";
import { userModel } from "@/Shared/Models/userModel";
import calendarIcon from "@Icons/Calendar.svg";
import todo from "@Icons/TodoList.svg";
import goal from "@Icons/Goal.svg";
import graph from "@Icons/Graph.svg";
import settings from "@Icons/Settings.svg";
import account from "@Icons/Account.svg";

const sidebarLinks = [
  { icon: calendarIcon, text: "Календарь", link: `${Pathes.Calendar}` },
  { icon: todo, text: "Список дел", link: `${Pathes.TODO}` },
  { icon: goal, text: "Мои Цели", link: `${Pathes.Goals}` },
  { icon: graph, text: "Статискика", link: `${Pathes.Stats}` },
  { icon: settings, text: "Настройки", link: `${Pathes.Settings}` },
  { icon: account, text: "Аккаунт", link: `users/${userModel.id}` },
];

export default sidebarLinks;
