import calendarIcon from "@Icons/Calendar.svg";
import todo from "@Icons/TodoList.svg";
import goal from "@Icons/Goal.svg";
import graph from "@Icons/Graph.svg";
import settings from "@Icons/Settings.svg";
import account from "@Icons/Account.svg";

const sidebarLinks = [
  { icon: calendarIcon, text: "Календарь", link: "/calendar" },
  { icon: todo, text: "Список дел", link: "/todo" },
  { icon: goal, text: "Мои Цели", link: "/todo" },
  { icon: graph, text: "Статискика", link: "/stats" },
  { icon: settings, text: "Настройки", link: "/settings" },
  { icon: account, text: "Аккаунт", link: "/profile" },
];

export default sidebarLinks;