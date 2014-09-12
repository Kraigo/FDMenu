(function($) {
	$.fn.markCurrentMenu = function(options) {

		var $_menu = $(this);
		// Settings
		var settings = $.extend({
			'offsetTop': 20,
			'speed': 600
		}, options );

		// Check Active Menu
		check_menu();
		$(window).scroll(function(){
			check_menu();
		});
		
		function check_menu() {
			var top = $(window).scrollTop();

			$_menu.find('li').each(function() {
				var thisMenu = $(this);
				var item = $(this).find('a').attr('href');

				if ($(item).offset().top + $_menu.height() < top + $(window).height()/2) {
					$_menu.find('.active').removeClass('active');
					$(this).addClass('active');
				}
			});
			if (top >= settings.offsetTop) {		
				$('body').css('margin-top', $_menu.height() );
				$_menu.addClass('fixed');
			} else {
				$('body').css('margin-top', 0);
				$_menu.removeClass('fixed');
			}
		};

		$_menu.find('li').click(function() {
			var target = $(this).find('a').attr('href');
			console.log(target);
			$('html,body').animate({
				scrollTop: $(target).offset().top - $_menu.height()-20
			}, settings.speed);
			return false;
		});
			
	};
})(jQuery);