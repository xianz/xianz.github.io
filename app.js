$(function(){
    let toggle = function(){
        $(".xuanzeti dd span").toggleClass('text_green');
        $(".tiankongti dt span").toggleClass('text_brown');
        $(".jiandati dt span").toggleClass('text_green');
        $(".panduan dd span").toggleClass('text_green');

        $(".zongheti span,.zongheti dd").toggleClass('textarea_color');

        $(".mingcijieshi dd").toggleClass('textarea_color');
        $(".jiandati dd").toggleClass('textarea_color');


        color = $('#toggle_but').css('background')=='red'?'green':'red';
        $('#toggle_but').css('background', color);
    }
    $('#toggle_but').click(toggle);
    toggle();
});