document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  var horarios = calendarEl.getAttribute('data');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    locale: 'en',
    defaultTimedEventDuration: '01:15:00',
    headerToolbar: {
      right: 'today prev,next resourceTimeGridDay,timeGridWeek listDay',
      center: '',
      left: 'title'
    },
    initialView: 'resourceTimeGridDay',
    scrollTime: '8:00',
    aspectRatio: 1.6,
    views: {
      resourceTimeGridDay: {
        buttonText: 'Cabinas',
        slotDuration: '00:15',
      },
      timeGridWeek: {
        buttonText: 'Semana',
        slotDuration: '00:15',
      },
      listDay: {
        buttonText: 'Resumen'
      }
    },

    resourceAreaHeaderContent: 'Cabinas',
    resources: [
      { "id": "1", "title": "Saphire" },
      { "id": "2", "title": "Emerald", "eventColor": "rgb(0, 116, 217)" },
      { "id": "3", "title": "Ruby", "eventColor": "rgb(240, 18, 190)" },
      { "id": "4", "title": "Starlight", "eventColor": "rgb(136, 17, 85)" },
      { "id": "5", "title": "Opal" },
      { "id": "6", "title": "Pearl" }
    ],
    events: JSON.parse(horarios),

    nowIndicator: true,
    allDaySlot: false,
  });

  calendar.render();

});
