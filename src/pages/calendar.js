import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect } from "react";

moment.locale("pt-BR");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  const [eventsData, setEventsData] = useState([]);

  
  useEffect(() => {

      const data = {acao:'busca',user_id: localStorage.getItem("user_id")};

			fetch('http://localhost:84/orgueduMain/event_repositorio.php', {
				method: 'POST',
				headers: {
				'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})
			.then((response) => response.json())
			.then((response) => {

          events = return.map((appointment)=>{
            return {
              id: training.id,
              title: training.activity,
              start: new Date(training.date),
              end: new Date(training.date),
              allDay: false
            }
          
          for(let i=0;i<response.length;i++){
            console.log(response[i]);
            
            setEventsData([
              ...eventsData,
              {
                start:new Date(events[i].inicio),
                end:new Date(events[i].fim),
                title:events[i].titulo
              }
            ]);
          }

          console.log(eventsData);
			})
			.catch(
				console.log()
			);

  }, []);

  const handleSelect = ({ start, end }) => {
    console.log(start);
    console.log(end);
    const title = window.prompt("New Event name");
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title
        }
      ]);

      const datafetch = {
        acao: 'insert',
        title,
        start,
        end,
        user_id: localStorage.getItem('user_id')
      };

      fetch('http://localhost:84/orgueduMain/event_repositorio.php', {
				method: 'POST',
				headers: {
				'Content-Type': 'application/json',
				},
				body: JSON.stringify(datafetch),
			})

  };
  return (
    <div className="App">
      <Calendar
        views={["day", "work_week"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="day"
        events={eventsData}
        style={{ height: "75vh" }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
      />
    </div>
  );
}