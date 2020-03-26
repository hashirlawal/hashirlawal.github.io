$(document).ready(() => {

	sal();
	var scroll = new SmoothScroll('a[href*="#"]', {
		easing: 'linear'
	});

	$('.portfolio_item').isotope({
		itemSelector: '.item',
		layoutMode: 'fitRows'
	});
	// Isotope
	var $win = $(window),
        $imgs = $("img"),
        $con = $('.portfolio_item').isotope();

    function loadVisible($els, trigger) {
        $els.filter(function () {
            var rect = this.getBoundingClientRect();
            return rect.top >= 0 && rect.top <= window.innerHeight;
        }).trigger(trigger);
    }

    $con.isotope('on', 'layoutComplete', function () {
        loadVisible($imgs, 'lazylazy');
    });

    $win.on('scroll', function () {
        loadVisible($imgs, 'lazylazy');
    });

    $imgs.lazyload({
        effect: "fadeIn",
        failure_limit: Math.max($imgs.length - 1, 0),
        event: 'lazylazy'
    });
	// Sorting
	$(document).on('click', '.heading ul li', function () {
		if (!$(this).hasClass('active')) {
			$('.heading ul li').removeClass('active');
			$(this).addClass('active');
		}

		var selector = $(this).attr('data-filter');
		$('.portfolio_item').isotope({
			filter: selector
		})
	})
	// Nav 
	$(document).on('click', '#menu_icon', function () {
		$('#menu_icon').toggleClass('rotate');
		$('.nav_link').toggleClass('drop');
	});

	$(document).on('click', 'body', function (event) {
		if (!$(event.target).is('.nav_link')) {
			
		}
	});

	$(document).on('click', '.nav_links li', function () {
		$('.nav_link').removeClass('drop');
		$('#menu_icon').removeClass('rotate');
	});

	$(document).on('submit', '#contactForm', function (e) {
		e.preventDefault();
		var name 	= $('#name');
		var email 	= $('#email');
		var message = $('#message');
		if (email.val() == '' || name.val() == '' || message.val() == '') {
			$('.send_message_alert p').html('<span>All Field are require</span>');
			$('.send_message_alert').fadeIn(1000);
		} else {
			$('.send_message_alert p').html('<span>Error:</span> But you can still email me at <span><i class="fa fa-envelope"></i> lawalhashir@gmail.com</span>');
			$('.send_message_alert').fadeIn(1000);
		}
		
	})

});