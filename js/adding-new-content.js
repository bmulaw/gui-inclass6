$(function() {
	$('ul').before('<p> Just Updated </p>')
    var counter = 1;
    var last = '<li> <em> gluten free soy sauce </em> </li>';
    $("li").each(function(){
        if ($(this).hasClass('hot')) {
            var symbol = "+ " + $(this).html(); 
            $(this).html(symbol);
        }
        if (counter === $("li").length) {
            $(this).after(last);
        }
        counter ++;
    })
});