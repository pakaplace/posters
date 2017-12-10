const $container= null;

$(window).on('load' , function(){
    $container= $('div.container').masonry({
    columnWidth: '.picture',
    itemSelector: '.picture',
    percentPosition: true
});
});




$('div.container').imagesLoaded( { background: true }, function() {
    alert('images loaded')
  console.log('#container background image loaded');
});



//var $rows = $('#table tr');
//$('#search').keyup(function() {
//    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
//    
//    $rows.show().filter(function() {
//        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
//        return !~text.indexOf(val);
//    }).hide();
//});