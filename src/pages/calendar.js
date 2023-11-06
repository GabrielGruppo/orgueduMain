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
			body: JSON.stringify(data),
		  })
      


      returnedEvent = {
        ...event,
        event_id: Math.random()
      };
      /** await addEventOnServer() */
    }

    return returnedEvent;
  };

  const handleDelete = async (deletedId) => {
    console.log(deletedId);
    /** await deleteEventOnServer() */

    /**
     * Just return the deleted id
     * as long as you sure the end-point request was success
     */
    return deletedId;
  };

  return (
    <Scheduler
      onConfirm={handleConfirm}
      onDelete={handleDelete}

      events={EVENTS}
    />
  );
}
