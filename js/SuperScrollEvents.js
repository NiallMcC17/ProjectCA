$(document).ready(function () {


    toastr.options = {
        "closeButton": true,
        "progressBar": true,
        "positionClass": "toast-bottom-full-width",
        "showDuration": "3000",
        "timeOut": "3000",
        "extendedTimeOut": "3000",
        "showMethod": "show",
        "hideMethod": "hide"
    }
    toastr.info('Scroll to start SuperScrollarama :-)');

    var controller = $.superscrollorama(
        {
            triggerAtCentre: true,
            playoutAnimations: false
        });

    // Rotate the Title "Portfolio of Ireland"
    controller.addTween('#twitter', TweenMax.fromTo($('#twitter'), 1.5, { css: { opacity: 0, marginTop: 150, x: 1500 }, ease: Quad.easeInOut },
        { css: { opacity: 1, fontSize: '100px', x: 0, color: 'white', backgroundColor: 'black', borderRadius: '50%', padding: 50 }, ease: Circ.easeOut }, 0, 200));

    controller.addTween('#achill', TweenMax.fromTo($('#achill'), 1.5, { css: { opacity: 0, marginTop: 150, x: -1500 }, ease: Quad.easeInOut },
        { css: { opacity: 1, fontSize: '100px', x: 0, }, ease: Circ.easeOut }, 0, 200));

});