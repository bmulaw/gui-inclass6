$(function() {
    var counter = 1;
    $("li").each(function(){
        if (counter === 3) {
            $(this).removeClass();
        }
        counter ++;
    })

    $("li").each(function(){
        if ($(this).hasClass('hot')) {
            $(this).addClass('favorite');
        }
    })
});