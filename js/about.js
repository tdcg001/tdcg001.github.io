$(function() {
    var reachEnd = false;

    rotate = function(degrees) {
        $(".glyphicon-circle-arrow-down").css({'transform' : 'rotate('+ degrees +'deg)'});
    };
    
    $(window).scroll(function() {
        if($(window).scrollTop() == 0) {
            reachEnd = false;
            rotate(360);
        } else if($(window).scrollTop() + $(window).height() == $(document).height()) {
            reachEnd = true;
            rotate(180);
        } else {
            reachEnd = false;
            rotate(360);
        }
    });

	$("#arrow a").click(function() {
        if(reachEnd) {
            $('html, body').animate({
                scrollTop: $("#top").offset().top
            }, 1000);
        } else {
            $('html, body').animate({
                scrollTop: $("#footer").offset().top
            }, 1000);
        }
    });
});