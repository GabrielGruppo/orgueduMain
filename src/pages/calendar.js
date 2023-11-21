import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect } from "react";

moment.locale("pt-BR");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  const [eventsData, setEventsData] = useState(events);

  
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
          let events = response;
          for(let i=0;i<events.length;i++){
            console.log(events[i]);
            
            setEventsData([
              ...eventsData,
              {
                start:new Date(events[i].inicio),
                end:new Date(events[i].fim),
                title:events[i].titulo
              }
            ]);
          }
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