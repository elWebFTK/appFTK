/*
JS para Calendario de Especialista.

El calendario tiene su propia documentación para las vistas, funciones, vistas, etc.

Mas información en: https://fullcalendar.io.
*/

document.addEventListener('DOMContentLoaded', function () {
  var Calendar = FullCalendar.Calendar;
  var calendarEl = document.getElementById('calendar');

  var horarios = calendarEl.getAttribute('data');
  var horario_fac = calendarEl.getAttribute('datafac');
  // initialize the calendar

  var calendar = new Calendar(calendarEl, {
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    headerToolbar: {
      left: 'prev today next',
      center: 'title',
      right: 'timeGridWeek,timeGridDay'
    },
    scrollTime: '9:00',
    initialView: 'timeGridWeek',

    views: {
      timeGridWeek: {
        buttonText: 'Semana'
      },
      timeGridDay: {
        buttonText: 'Día'
      }
    },
    events: JSON.parse(horario_fac),

    businessHours: JSON.parse(horarios),

    nowIndicator: true,
    allDaySlot: false,

  });

  calendar.render();
});