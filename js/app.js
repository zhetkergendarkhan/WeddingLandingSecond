$(function(){

    var header=$('#header');

    var scrollOffset=$(window).scrollTop();

    var introH = $('#intro').innerHeight();

    /*Fixed Header*/

    checkScroll(scrollOffset);

    $(window).on('scroll',function(){
        
        scrollOffset =$(this).scrollTop();
        checkScroll(scrollOffset);

        
    })



    function checkScroll(scrollOffset){
        if(scrollOffset >= introH){
            header.addClass('fixed')
        }
        else{
            header.removeClass('fixed')
        }
    }

    /*Smooth Scroll*/

    $('[data-scroll]').on('click',function(event){
        event.preventDefault();

        var blockId = $(this).data('scroll')
        var blockOffset= $(blockId).offset().top;

        $('html,body').animate({
            scrollTop:blockOffset
        },500)
    })



});