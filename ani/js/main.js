$(function () {

    $(document).on('mousemove', function (e) {
        let posX = e.pageX;
        let posY = e.pageY;
        $('.posX').text(posX);
        $('.posY').text(posY);
    });

    $('article.point img').click(function () {
        $('article.point .p_txtbox .p_txt').stop().fadeIn();
        $('article.point .p_txtbox .p_txt').css('display', 'flex');

    });

    $('.p_txt_btn').click(function () {
        $('article.point .p_txtbox .p_txt').stop().fadeOut();
        $('article.point .p_txtbox .p_txt').css('display', 'flex');

    });

    let btnI = 0;
    $('.wrap1_btn').click(function () {
        /*  $('.wrap1_btn').removeClass('on');
         $(this).addClass('on') */


        if (btnI == 0) {
            btnI++;
            $('.cart').addClass('on');

        } else if (btnI == 1) {
            btnI++;
            $('.cart').removeClass('on').addClass('on1');
            setTimeout(function () {
                $('.cart img').eq(0).attr('src', 'img/1stfinish.png');
            }, 1000);
            $('.finishflag').addClass('on');
        }
        else if (btnI == 2) {
            btnI++;
            $('.cart').removeClass('on1').addClass('on2');
            setTimeout(function () {
                $('.tire').addClass('on');
            }, 900);
            setTimeout(function () {
                $('.bang').addClass('on');
            }, 900);
            setTimeout(function(){
                $('.next_btn button').addClass('on')
            },2000);
        }
        else {
            btnI = 0;
            $('.cart').removeClass('on2').addClass('on');
            $('.tire').removeClass('on')
            $('.bang').removeClass('on')
            $('.finishflag').removeClass('on');
            $('.next_btn button').removeClass('on')


        }
        $(this).text(`주행하기${btnI + 1}`);
        $('.cart img').eq(0).attr('src', 'img/1st.png');

    });
    /* 
        $('.wrap1_btn').click(function(){
            $('article.cart img:nth-child(1)').css('animation','cartAni1_2 1.5s  linear  forwards')
        
        }); */
       
    


}); 