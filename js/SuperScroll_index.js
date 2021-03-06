﻿$(document).ready(function () {

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "500",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    toastr.info('Welcome');


    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        defaultDate: '2017-02-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2017-02-01'
            },
            {
                title: 'Long Event',
                start: '2017-02-07',
                end: '2017-02-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2017-02-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2017-02-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2017-02-11',
                end: '2017-02-13'
            },
            {
                title: 'Meeting',
                start: '2017-02-12T10:30:00',
                end: '2017-02-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2017-02-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2017-02-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2017-02-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2017-02-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2017-02-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2017-02-28'
            }
        ]
    });
})