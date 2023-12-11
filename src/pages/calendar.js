import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect } from "react";

require('moment/locale/pt.js')

const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  const [eventsData, setEventsData] = useState([]);

  
  useEffect(() => {

      const data = {acao:'busca',user_id: localStorage.getItem("user_id")};


      //busca todos os eventos do usuario com este ID salvos no banco de dados

			fetch('http://localhost:84/orgueduMain/event_repositorio.php', {
				method: 'POST',
				headers: {
				'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})
			.then((response) => response.json())
			.then((response) => {

        const events = response; //variavel recebe todos os objetos eventos contidos em response

        //coloca todos os eventos que a API PHP mandou na const eventsData
        for(let i=0;i<events.length;i++){
          const event = {id:events[i].id,title:events[i].titulo,start:new Date(events[i].inicio),end:new Date(events[i].fim)};
          setEventsData((prevdata) => [
            ...prevdata,
            event,
        ]);
        }})
			.catch(
				
			);

  }, []);

  //criar novo evento

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

      //salva evento no banco, mandando a const datafetch para a API PHP

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

  const selectEvent = (event) => {
    if (window.confirm(event.title + ":  Você deseja excluir este evento?") == true) {
      
        const deleteEvent = eventsData;
        for(let i=0;i<deleteEvent.length;i++){
          if(event.id == deleteEvent[i].id){
            deleteEvent.splice(i,1);
            break;
          }
        }

        setEventsData(deleteEvent);
        
      const datafetch = {acao:'delete',id:event.id};
      fetch('http://localhost:84/orgueduMain/event_repositorio.php', {
				method: 'POST',
				headers: {
				'Content-Type': 'application/json',
				},
				body: JSON.stringify(datafetch),
			})
      
    } else {
      console.log('Cancelada a exclusão');
    }
  };

  let formato = {
    timeGutterFormat: 'HH:mm',
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
        onSelectEvent={selectEvent}
        onSelectSlot={handleSelect}

        min={new Date(2023, 11, 0, 7, 0, 0)}
        max={new Date(2023, 11, 0, 23, 0, 0)} 
        formats={formato}

        messages={{
          next: "Proximo",
          previous: "Anterior",
          today: "Hoje",
          month: "Mês",
          work_week: "Semana",
          day: "Dia"
        }}
      />
    </div>
  );
}