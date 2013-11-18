$(document).ready(function () {

    function drawItems(items) {

    }

    function draw(data) {

        var channels = [];
        $.each(data, function (key, val) {
            var channel = val.channel;

            channels.push("<h1><a href='"+channel.link+"'>" +channel.title + "</a></h1>");

            channels.push("<p><i>" +channel.description + "</i></p>");
            $("<div/>", {
                html: channels.join("")
            }).appendTo("body");

            var items = channel.item;
            drawItems(items);


        });
    }

    $.getJSON("http://localhost:63342/angular-seed/app/mikes/data.json", function (jsonData) {
            draw(jsonData);
        }
    );

});