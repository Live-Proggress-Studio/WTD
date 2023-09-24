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

interface IAuthStore {
  Auth: boolean;
  User: IUser;
  error: string | null;
  isLoading: boolean;
  setIsAuth: () => void;
}


export const useAuthStore = create<IAuthStore>()(devtools(persist(immer((set) => ({
    Auth: false,
    error: null,
    isLoading: false,
    User: {} as IUser,
    setIsAuth: () => set(state => {
            state.Auth = true
    }),
    
})),{name: 'AuthStore', version: 1})))