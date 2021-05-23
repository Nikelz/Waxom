$(function() {

	var header = $("#header"),
		introH = $("#intro").innerHeight();
		scrollOffset = $(window).scrollTop();


	// Fixed Header-----------
	checkScroll(scrollOffset);

	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});


	function checkScroll(scrollOffset) {

		if( scrollOffset >= introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}


	// Smooth scroll
	$("[data-scroll]") .on("click", function(event){
		event.preventDefault();

		var $this = $(this),
			blockid = $(this).data('scroll'),
			blockOffset = $(blockid).offset().top;

		$("#nav a").removeClass("active");	
		$this.addClass("active");	

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});


		/* Menu nav toggle */
	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});


});

let filters = document.querySelectorAll('a[data-filter]');

for (let filter of filters) {
	filter.addEventListener('click', function(e) {
		e.preventDefault();

		let catId = filter.getAttribute('data-filter');
		let workCat = document.querySelectorAll('.projects-item');

		workCat.forEach(function (c) {
			if (catId === 'all') {
				c.classList.remove('hide');
			} else {
				if (c.getAttribute('data-cat') !== catId) {
					c.classList.add('hide');
				} else {
					c.classList.remove('hide');
				}
			}
		})
	});
};


// Popup ---------------

function toggle() {
	let popup = document.querySelector('.popup');
	let video = document.querySelector('.popup-video');
	popup.classList.toggle("active");
	video.pause();
	video.currentTime = 0;
};