import calendarIcon from "@Shared/assets/icons/Calendar.svg";
import todo from "@Shared/assets/icons/TodoList.svg";
import goal from "@Shared/assets/icons/Goal.svg";
import graph from "@Shared/assets/icons/Graph.svg";
import settings from "@Shared/assets/icons/Settings.svg";

const sidebarLinks = [
  { icon: calendarIcon, text: "Календарь", link: "/calendar" },
  { icon: todo, text: "Список дел", link: "/todo" },
  { icon: goal, text: "Мои Цели", link: "/todo" },
  { icon: graph, text: "Статискика", link: "/stats" },
  { icon: settings, text: "Настройки", link: "/settings" },
];

export default sidebarLinks;