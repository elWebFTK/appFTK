document.addEventListener('DOMContentLoaded', function () {
    var Calendar = FullCalendar.Calendar;
    var calendarEl = document.getElementById('calendar');

    var sucursales = calendarEl.getAttribute('datas');
    // initialize the calendar

    var calendar = new Calendar(calendarEl, {
        schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
        headerToolbar: {
            left: 'prev today next',
            center: 'title',
            right: ''
        },
        scrollTime: '9:00',
        initialView: 'resourceTimelineDay',

        views: {
            timeGridWeek: {
                buttonText: 'Semana'
            },
            timeGridDay: {
                buttonText: 'Día'
            }
        },

        resourceGroupField: 'Nombre',
        resources: JSON.parse(sucursales),

        events: JSON.parse(sucursales),

        resourceAreaHeaderContent: 'Sucursales',
        nowIndicator: true,
        allDaySlot: false,

    });

    calendar.render();
});