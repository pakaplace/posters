const $container= null;

$(window).on('load' , function(){
    $container= $('div.container').masonry({
    columnWidth: '.picture',
    itemSelector: '.picture',
    percentPosition: true
});
});

$(document).ready(function() {
    $(".picture").click(function() {
        const $img = $(this);
		
		if($img.hasClass('focus')) {
			$img.removeClass('focus');
			$('div.container > img').each(function (){
			const $curr = $(this);
			$curr.removeClass('notFocus');
			});
			
		} else if ($img.hasClass('notFocus')){
			
			$('div.container > img').each(function (){
			const $curr = $(this);
			if($curr.hasClass('focus')){
				$curr.removeClass('focus');
				$curr.addClass('notFocus');
				}
			$img.removeClass('notFocus');
			$img.addClass('focus');
			});
		} else {
			$img.addClass('focus');
			$('div.container > img').each(function (){
			const $curr = $(this);
			if($curr.hasClass('focus') === false){
				$curr.addClass('notFocus');
				}
			});
		}
		$('div.container').masonry();
		});
    })


$('div.container').imagesLoaded( { background: true }, function() {
    alert('images loaded')
  console.log('#container background image loaded');
});


