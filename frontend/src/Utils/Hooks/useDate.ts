import { useCalendarStore } from "@/Stores"


export const useDate = () => {

    const {dayStore, monthStore, yearStore} = useCalendarStore()

    const myDate = new Date(`${yearStore}-${monthStore}-${dayStore}`)
    const dateNow = new Date()
    
    const difference = Math.floor((dateNow.getTime() - myDate.getTime()) / (1000 * 60 * 60 * 24) / 7);
    
    return {difference}
}