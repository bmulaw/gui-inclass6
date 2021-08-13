$(function() {
    // .each function found from user named edcpinzon
        // https://forum.jquery.com/topic/jquery-select-option-add-class 
    $("li").each(function(){
        // learned from your lecture videos Professor
        if ($(this).html().includes('pine')){
            $(this).html("<em> almonds </em>");
        }
        if ($(this).hasClass('hot')) {
            // hasClass found from https://api.jquery.com/hasclass/
            var newHTML = "<em> " + $(this).html() + "</em>"; 
            $(this).html(newHTML);
        }
    })
    // thanks to your directions
    $('#one').remove();
});