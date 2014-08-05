$(document).ready(function () {
    $('.col-md-2').hover(function (evt) {
        if (evt.type !== 'mouseenter') {
            return;
        }

        var target = $(evt.target),
            background = target.css('background-color');

        $('body').stop(true).animate({'backgroundColor': background},400);

        console.log(background);
    });
});