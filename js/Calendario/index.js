$(document).ready(function () {
    $('#calendar').eCalendar({

 weekDays: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        textArrows: {previous: '<', next: '>'},
        eventTitle: 'Próximos Eventos',
        url: '',
        events: [
            {title: 'Moisés Wasserman', description: '¿Es seguro vacunarse contra la COVID-19?', datetime: new Date(2021, 0, 10, 17)},
            {title: 'Juan Manuel Anaya', description: '¿Cómo funcionan y qué efectos tienen las vacunas de COVID-19 que ha adquirido Colombia para su población?', datetime: new Date(2021, 0, 15, 16)}, 
            {title: 'Titulo Evento', description: 'Descripción Evento', datetime: new Date(2021, 0, 20, 16)},
            {title: 'Titulo Evento', description: 'Descripción Evento', datetime: new Date(2021, 0, 27, 16)}, 
            {title: 'Titulo Evento ', description: 'Descripción Evento', datetime: new Date(2021, 1, 13, 16)}
           
        ]});
});
