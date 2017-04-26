"use strict";
$(document).ready(function () {

    $('form').jsonForm({
        schema: {

            name: {
                type: 'string',
                title: 'Name',
                required: true
            },
            phone: {
                type: 'number',
                title: 'Phone',
                required: true
            },
            email: {
                type: 'string',
                title: 'Email',
                requried: true
            },
            gender: {
                type: "string",
                title: "Gender",
                enum: ["male", "female", "alien"]
            }


        },
        onSubmit: function (errors, values) {

            $('#res').html('<p>Hello ' + values.name + '.' + (values.phone ? '<br/>Your Number is ' + values.phone + '.' : '') + (values.email ? '<br/>We can contact you at: ' + values.email + '.' : '') + '</p>');

            //localStorage.setItem(name, JSON.stringify(schema));

        }
    });

});