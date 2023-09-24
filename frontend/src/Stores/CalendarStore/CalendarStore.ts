import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// interface Option {
//     value: string;
// }

interface ICalenderStore {
    dayStore: string | null;
    monthStore: string | null;
    yearStore: string | null;
    setDateStore: (value: string | null) => void
    setMonthStore: (value: string | null) => void
    setYearStore: (value: string | null) => void
}


export const useCalendarStore = create<ICalenderStore>()(devtools(persist(immer((set) => ({
    dayStore: '',
    monthStore: '',
    yearStore: '',
    setDateStore: (value) => set(state => {
        state.dayStore = value
    }),
    setMonthStore: (value) => set(state => {
        state.monthStore = value
    }),
    setYearStore: (value) => set(state => {
        state.yearStore = value
    })
})),{name: 'CalendarStore'})))