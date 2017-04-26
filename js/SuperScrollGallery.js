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
            playoutAnimations: true
        });


    // Rotate the Title "Portfolio of Ireland"
    controller.addTween('#mainTitle', TweenMax.fromTo($('#mainTitle'), 1.5, { css: { opacity: 0, marginTop: 150, x: 1500 }, ease: Quad.easeInOut },
        { css: { opacity: 1, fontSize: '100px', x: 0, color: 'white', backgroundColor: 'black', borderRadius: '50%', padding: 50 }, ease: Circ.easeOut }, 0, 200));



    // Fade in each image
    controller.addTween('#img1', TweenMax.from($('#img1'), 2, { css: { opacity: 0, scale: 0, rotation: -180 }, ease: Power3.easeOut, /*onComplete: toastrs("img1")*/ }));
    controller.addTween('#img2', TweenMax.from($('#img2'), 2, { css: { opacity: 0, scale: 0 }, ease: Bounce.easeOut }));
    controller.addTween('#img3', TweenMax.from($('#img3'), 2, { css: { opacity: 0, scale: 0, rotation: 1440 }, ease: Quad.easeInOut }));

    // Zoom the title for each image
    controller.addTween('#title1', TweenMax.fromTo($('#title1'), 1, { css: { opacity: 0 }, ease: Quad.easeInOut }, { css: { opacity: 1, fontSize: '90px' }, ease: Quad.easeInOut }), 0, -200);
    controller.addTween('#title2', TweenMax.fromTo($('#title2'), 1, { css: { opacity: 0 }, ease: Quad.easeInOut }, { css: { opacity: 1, fontSize: '90px' }, ease: Quad.easeInOut }), 0, -200);
    controller.addTween('#title3', TweenMax.fromTo($('#title3'), 3, { css: { opacity: 0, 'letter-spacing': '700px', left: 500 }, immediateRender: true, ease: Quad.easeInOut },//To
        { css: { opacity: 1, 'letter-spacing': '20px', 'font-size': '50px' }, ease: Quad.easeInOut, onComplete: ScrollAnimations }));

    //$('p').each(function () {
    //    controller.addTween('p', TweenMax.fromTo($('p'), 1, { css: { opacity: 0 }, ease: Quad.easeInOut }, { css: { opacity: 1 }, ease: Quad.easeInOut }));
    //})

    function ScrollAnimations() {
        var pinDur = 4000;


        var Animations = new TimelineLite();

        Animations.append(TweenMax.to($('.footer-blurb'), 2, { css: { paddingTop: 70, paddingBottom: 300, backgroundColor: '#222438', color: 'white', borderRadius: 400 }, ease: Quad.easeIn }), .2);
        Animations.append(TweenMax.staggerFrom($('.btn.btn-primary'), 1, { css: { opacity: 0, y: 200, rotation: 360, scale: 10 }, immediateRender: true, onComplete: Next }, 0.3));

        function Next()
        {

            TweenMax.to($('.img-circle'), 1, { css: { opacity: 0, y: -900, rotation: 1440, scale: 10 } },.5);

            $('#img1').attr('src', 'http://www.tmb.ie/wp/wp-content/uploads/2015/12/budget-travel-tips-2.jpg');

            TweenMax.staggerTo($('.img-circle'), 1, { css: { opacity: 1, y: 0, rotation: 720, scale: 1 } },.5);
        };
    };

    //function toastrs(img)
    //{
    //    if (img === "img1") {
    //        toastr.info('Titanic Belfast');
    //    }
    //}

});
