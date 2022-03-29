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
    eventClick: function () {
      var modal = document.getElementById("myModal");
      var span = document.getElementsByClassName("close")[0];
      var cancelar = document.getElementById("cancel");
      modal.style.display = "block";

      cancelar.onclick = function () {
        modal.style.display = "none";
      };

      span.onclick = function () {
        modal.style.display = "none";
      };

      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
      
    },
    events: JSON.parse(horario_fac),

    businessHours: JSON.parse(horarios),

    nowIndicator: true,
    allDaySlot: false,

  });

  calendar.render();
});