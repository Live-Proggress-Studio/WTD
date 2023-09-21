// import { notification } from "@/Components";
// import { useUserStore } from "@/Stores";
// import { t } from "i18next";
// import { IInputs } from "../Interface/IInputs";
// import { request } from "@/Services/userApi/useApi";
// import { Response } from "../Interface/IRespone";

// type Error = {
//     message: string,
//     code: number,
//   };

// export const onAuth = async (data: IInputs, action: string) => {

//   // Отправка запроса на сервер
//   try {
//     const response: Response | Error | unknown = await request(action, 'POST', data, true);

//     // Обработка ответа от сервера
//     if (response.status === 200) {
//       // Успешная авторизация
//       if (action === 'login') {
//       }
//       notification.success(t('main.auth.notifications.success'));
//     } else {
//       // Ошибка авторизации
//       notification.error(t('main.auth.notifications.error'));
//     }
//   } catch (error) {
//     // Ошибка отправки запроса
//     notification.error(error);
//   }

//   return 
// };