$(function(){

    //플레시 효과 시작
        const $images = $('.flash img');
        let currentIndex = 0; 
        function flashEffect() {
            $images.hide();
            $images.eq(currentIndex).fadeIn(500).delay(500).fadeOut(500);
            currentIndex = (currentIndex + 1) % $images.length;
            setTimeout(flashEffect, 1500); 
        }
        flashEffect(); 
    //플레시 효과 끝



    //한숨 쉬는 효과 시작
        $('.person').click(function() {
            $(this).toggleClass('on'); });
    //한숨 쉬는 효과 끝

    //f1레이싱카 설명 시작
    $('.f1_car').click(function(){
        $('.f1_txtbox').fadeIn();
    });
    $('.f1_txtbox button').click(function(e){
        e.stopPropagation();
        $('.f1_txtbox').fadeOut();
    });

    $('.racing_car').click(function(){
        $('.racing_txtbox').fadeIn();
    });
    $('.racing_car button').click(function(e){
        e.stopPropagation();
        $('.racing_txtbox').fadeOut();
    });
    
    //f1레이싱카 설명 끝


    $('.lifgt .left,.lifgt .right').click(function(){
        $(this).toggleClass('on')
    });
}); 