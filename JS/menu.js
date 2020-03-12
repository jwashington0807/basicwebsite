$(function() {
  $('#main_nav').hover(function() {
    $('#nav_list').css('visibility', 'visible');
	$('#nav_list').css('opacity', '1');
	    $('.hamburger_container').css('right', '0');
		$('.hamburger_container').css('padding-right', '10px');
			$('.topBar').css('-webkit-transform', 'rotate(-45deg) translate(-9px, 6px)');
				$('.topBar').css('transform', 'rotate(-45deg) translate(-9px, 6px)');
					$('.midBar').css('opacity', '0');
						$('.botBar').css('-webkit-transform', 'rotate(45deg) translate(-8px, -8px)');	
							$('.botBar').css('transform', 'rotate(45deg) translate(-8px, -8px)');		
  }, function() {
    // on mouseout, reset the background colour
    $('#nav_list').css('visibility', 'hidden');
	$('#nav_list').css('opacity', '0');
	    $('#nav_list').css('transition', 'visibility 0s, opacity 0.5s linear');
		$('.hamburger_container').css('right', '29%');
			$('.hamburger_container').css('padding-right', '0px');
				$('.topBar').css('-webkit-transform', 'rotate(0deg) translate(0px, 0px)');
					$('.topBar').css('transform', 'rotate(0deg) translate(0px, 0px)');
						$('.midBar').css('opacity', '100');
							$('.botBar').css('-webkit-transform', 'rotate(0deg) translate(0px, 0px)');	
								$('.botBar').css('transform', 'rotate(0deg) translate(0px, 0px)');
  });
});
