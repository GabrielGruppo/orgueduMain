<div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Stay organized with our user-friendly Calendar featuring events, reminders, and a customizable interface. Built with HTML, CSS, and JavaScript. Start scheduling today!" />
  <meta name="keywords" content="calendar, events, reminders, javascript, html, css, open source coding" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
  <link rel="stylesheet" href="/css/calendar.css" />
  <title>Calendário com eventos</title>
  <button id="back-btn">Voltar</button>
  <div className="container">
    <div className="left">
      <div className="calendar">
        <div className="month">
          <i className="fas fa-angle-left prev" />
          <div className="date">december 2015</div>
          <i className="fas fa-angle-right next" />
        </div>
        <div className="weekdays">
          <div>Dom</div>
          <div>Seg</div>
          <div>Ter</div>
          <div>Qua</div>
          <div>Qui</div>
          <div>Sex</div>
          <div>Sab</div>
        </div>
        <div className="days" />
        <div className="goto-today">
          <div className="goto">
            <input type="text" placeholder="mm/yyyy" className="date-input" />
            <button className="goto-btn">Go</button>
          </div>
          <button className="today-btn">Today</button>
        </div>
      </div>
    </div>
    <div className="right">
      <div className="today-date">
        <div className="event-day">wed</div>
        <div className="event-date">12th december 2022</div>
      </div>
      <div className="events" />
      <div className="add-event-wrapper">
        <div className="add-event-header">
          <div className="title">Add Event</div>
          <i className="fas fa-times close" />
        </div>
        <div className="add-event-body">
          <div className="add-event-input">
            <input type="text" placeholder="Event Name" className="event-name" />
          </div>
          <div className="add-event-input">
            <input type="text" placeholder="Event Time From" className="event-time-from" />
          </div>
          <div className="add-event-input">
            <input type="text" placeholder="Event Time To" className="event-time-to" />
          </div>
        </div>
        <div className="add-event-footer">
          <button className="add-event-btn">Add Event</button>
        </div>
      </div>
    </div>
    <button className="add-event">
      <i className="fas fa-plus" />
    </button>
  </div>
</div>
