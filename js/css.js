$(function() {
    var backgroundColor = '<p> color was: rgb(215, 102, 107) </p>';
    $("ul").append(backgroundColor);
    $("li").css('background-color', '#c5a996');
    $("li").css('border', '1px solid white'); // https://www.w3schools.com/cssref/pr_border.asp
    $("li").css('color', 'black');
    $('li').css('text-shadow', 'none');
    $("li").css('font-family', 'Georgia');;
});