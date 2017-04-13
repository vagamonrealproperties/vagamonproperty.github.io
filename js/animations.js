/* ======= Animations ======= */
$(document).ready(function() {
    
    //Only animate elements when using non-mobile devices    
 
        $('.banner .slider-text h6,.banner .slider-text h3').one('inview', function(isInView) {
                    if (isInView) {
                        $(this).addClass('animated fadeInDown ');
                    }
                });
        
        
});