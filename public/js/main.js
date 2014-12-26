$( document ).ready(function($) {
    //$('#background_img').pixelate({value : 0.5, reveal : false});

    $('.revealPic').css({
        'background-size' : $(window).width()
    })
//     $('#canvas').height($('#canvas').width() / 2.031);
//    $('#canvas').css({
//        'height' : $(window).height(),
//        'width' : $(window).width()-12
//    })
    var div = parseFloat($('#canvas').width()) / parseFloat($('#canvas').height());
    $( window ).resize(function() {
        $('.revealPic').css({
            'background-size' : $(window).width()
        })
    });
//    $('#slides, #slider1_container').css({height:$(window).height()-59.5});
/*
    jssor_slider1_starter = function (containerId) {
        var options = {
//            $SlideWidth: 1000;
//            $SlideHeight: 600;
        	$FillMode: 2,
        	$SlideDuration: 1000,
        	$PauseOnHover: false, 
            $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
            $PlayOrientation: 6,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
            $DragOrientation: 0,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
                $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                $AutoCenter: 1,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
            }
        };

        var jssor_slider1 = new $JssorSlider$(containerId, options);
        return jssor_slider1;
    };
    jssor_slider1 = jssor_slider1_starter('slider1_container');
    function ScaleSlider() {
        var bodyWidth = document.body.clientWidth;
        if (bodyWidth)
            jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));
        else
            window.setTimeout(ScaleSlider, 30);
    }
    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
*/

var hgt = $('.background_screen'),
    bgt = $('.background_screen .revealPic');

var bgtHalfW = bgt.width()/2,
    bgtHalfH = bgt.height()/2;

/**Change position of .revealPic and background-image within it on mousemove over container**/
hgt.mousemove(function(event){
    event.preventDefault();
    bgt.show();
    var scrollLeftPos = $(window).scrollLeft(),
    scrollTopPos = $(window).scrollTop(),
    offsetLft = hgt.offset().left,
    offsetTp = hgt.offset().top;
    var upX=event.clientX;
    var upY=event.clientY;
    bgt.css({backgroundPosition : ''+(offsetLft-upX+bgtHalfW-scrollLeftPos)+'px '+(offsetTp-upY+bgtHalfH-scrollTopPos)+'px',top:''+(-offsetTp+upY-bgtHalfH+scrollTopPos)+'px',left:''+(-offsetLft+upX-bgtHalfW+scrollLeftPos)+'px'});
});
/*********************************************/

/*Hide .revealPic div on mouseout*/
hgt.mouseout(function(){
    bgt.hide();
});
/*********************************/

//document.getElementById('background_img').closePixelate([
//       { resolution : 6 }
//])

(function() {
    var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');
    img = new Image();
    play = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
    img.onload = pixelate;
    img.src = 'http://192.168.0.104/wix/public/images/slider/img4.png';
    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            canvas.width = $(window).width();
            canvas.height = $(window).width() / div;//$(window).height()-4;

            /**
             * Your drawings need to be inside this function otherwise they will be reset when 
             * you resize the browser window and the canvas goes will be cleared.
             */
            drawStuff(); 
    }
    resizeCanvas();
    function pixelate(v) {

        /// if in play mode use that value, else use slider value
        var size = (play ? v : 100) * 0.01,

            /// cache scaled width and height
            w = canvas.width * size,
            h = canvas.height * size;

        /// draw original image to the scaled size
        ctx.drawImage(img, 0, 0, w, h);

        /// then draw that scaled image thumb back to fill canvas
        /// As smoothing is off the result will be pixelated
        ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
    }

    function drawStuff() {
        ctx.fillStyle="#000000";
        ctx.fillRect(0,0,canvas.width,canvas.height);            // do your drawing stuff here
        pixelate();

        window.requestAnimationFrame = (function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        })();
    }


})();
/*Using vague.js to make blurred image*/
//var vague = $(".background_screen img").Vague({intensity:5});
//vague.blur();
});