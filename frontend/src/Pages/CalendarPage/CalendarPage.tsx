import "./CalendarPage.scss";

const CalendarPage = () => {
  
  const divs = Array.from({ length: 100 }, (_, index) => (
    <div className="CalendarPage__wrapper-box" key={index}>Div {index + 1}</div>
  ));

  return (
      <div className="CalendarPage">
        <div className="CalendarPage__wrapper">
            {divs}
        </div>
      </div>
    
  )
};

export default CalendarPage;
