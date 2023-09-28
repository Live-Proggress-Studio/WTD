import { useCalendarStore } from "@/Stores"
import moment from "moment-timezone";

export interface DataObject {
    date: Date;
    isActive: boolean;
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

export const useDate = () => {

    const {dayStore, monthStore, yearStore} = useCalendarStore()

    const myDate = new Date(`${yearStore}-${monthStore}-${dayStore}`)
    const dateNow = new Date()
    
    const numberOfArrays = 80; 
    const objectsPerArray = 52; 

    function fillDataArrays() {
        let currentArrayIndex = 0; // Индекс текущего массива
        let currentObjectIndex = 0; // Индекс текущего объекта в текущем массиве
        
        let currentDateToAdd = myDate; // Инициализируем дату для добавления значением, введенным пользователем
        const newData: DataObject[][] = [];
        for (let i = 0; i < numberOfArrays; i++) {
          newData[i] = []; // Создаем пустой массив внутри массива data
      
          for (let j = 0; j < objectsPerArray; j++) {
            if (currentObjectIndex >= objectsPerArray) {
              // Если закончились объекты в текущем массиве, переходим к следующему
              currentArrayIndex++;
              currentObjectIndex = 0;
            } 
    
            
            // Создаем объект с текущей датой и isActive равным true
            const objToAdd = {
              date: currentDateToAdd,
              isActive: currentDateToAdd <= dateNow ? true : false,
            };
      
            newData[currentArrayIndex].push(objToAdd); // Добавляем объект в текущий массив
            currentDateToAdd = new Date(currentDateToAdd.getTime() + 7 * 24 * 60 * 60 * 1000); // Увеличиваем дату на 7 дней
            currentObjectIndex++;
          }
        }
    
        return newData
      }
    
    return {myDate, dateNow, fillDataArrays}
}