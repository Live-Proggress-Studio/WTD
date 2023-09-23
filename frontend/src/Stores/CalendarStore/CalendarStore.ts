import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// interface Option {
//     value: string;
// }

interface ICalenderStore {
    day: string;
    month: string;
    year: string;
    setDateStore: (date: string) => void
    setMonthStore: (date: string) => void
    setYearStore: (date: string) => void
}


export const useCalendarStore = create<ICalenderStore>()(devtools(persist(immer((set) => ({
    day: '',
    month: '',
    year: '',
    setDateStore: (date: string ) => set(state => {
        state.day = date
    }),
    setMonthStore: (date: string ) => set(state => {
        state.month = date
    }),
    setYearStore: (date: string ) => set(state => {
        state.year = date
    })
})),{name: 'CalendarStore'})))