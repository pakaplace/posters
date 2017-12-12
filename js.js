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


