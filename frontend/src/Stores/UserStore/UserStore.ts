import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface IUser {
    id: number,
    name: string,
    email:  string,
    password:  string,
    createdAt:  string,
}

interface IUserStore {
  Auth: boolean;
  User: IUser
  setIsAuth: () => void;
}


export const useUserStore = create<IUserStore>()(devtools(persist(immer((set) => ({
    Auth: false,
    User: {} as IUser,
    setIsAuth: () => set(state => {
            state.Auth = true
    }),
})),{name: 'userStore'})))