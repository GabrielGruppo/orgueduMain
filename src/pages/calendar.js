import { Scheduler } from "@aldabil/react-scheduler";
import { useState, useEffect } from 'react';


export default function Calendar() {
   
    const EVENTS = [
      {
        event_id: 10,
        title: "Event 1",
        start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
        end: new Date(new Date(new Date().setHours(11)).setMinutes(0))
      }
    ];

    useEffect(() => {
      const data = {action:'busca',user_id: localStorage.getItem("user_id")};

      fetch('http://localhost:84/orgueduMain/event_repositorio.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((response) => {
          EVENTS.push(...response);
          console.log(EVENTS);
        })

	}, []);

  const handleConfirm = async (event, action) => {
    /**
     * My end-point does not return anything
     * also does not have event_id
     * so deal with it with local saved
     */
    let returnedEvent;

    if (action === "edit") {
      returnedEvent = event;
      /** await editEventOnServer() */
    } else if (action === "create") {

      const data = {
        title: event.title,
        event_start: event.start,
        event_end: event.end,
        action: action,
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
