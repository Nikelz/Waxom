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
const videoPlay = document.querySelector('.play-btn');
const closePopup = document.querySelector('.popup__close');
const playPopup = document.querySelector('.popup');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll(".lock-padding");
// const popupLink = document.querySelector('.popup-link');
let unlock = true;


if (videoPlay) {
	videoPlay.addEventListener('click', function (e) {
		playPopup.classList.add('open');
	});
};
if (closePopup) {
	closePopup.addEventListener('click', function(e) {
		playPopup.classList.remove('open');
	});
};
const popupActive = document.querySelector('.popup.open');
if (popupActive) {
	popupActive.addEventListener('click', function(e) {
		if (!e.target.closest('.popup__content')) {
			popupActive.classList.remove('.open');
		}
	});
}


// if (popupLink.length > 0) {
// 	for (let index = 0; index < popupLink.length; index++) {
// 		const popupLink = popupLink[index];
// 		popupLink.addEventListener("click", function (e) {
// 			const popupName = popupLink.getAttribute('href').replace('#', '');
// 			const curentPopup = document.getElementById(popupName);
// 			popupOpen(curentPopup);
// 			e.preventDefault();
// 		});
// 	}
// }
// const popupCloseIcon = document.querySelector('.popup__close');
// if (popupCloseIcon.length > 0) {
// 	for (let index = 0; index < popupCloseIcon.length; index++) {
// 		const el = popupCloseIcon[index];
// 		el.addEventListener('click', function (e) {
// 			popupClose(el.closest('.popup'));
// 			e.preventDefault();
// 		});
// 	}
// }
// function popupOpen(curentPopup) {
// 	if (curentPopup && unlock) {
// 		const popupActive = document.querySelector('.popup.open');
// 		if (popupActive) {
// 			popupClose(popupActive, false);
// 		} else {
// 			bodyLock();
// 		}
// 		curentPopup.classList.add('.open');
// 		curentPopup.addEventListener("click", function (e) {
// 			if (!e.target.closest('.popup__content')) {
// 				popupClose(e.target.closest('.popup'));
// 			}
// 		});
// 	}
// }

// function popupClose(popupActive, doUnlock = true) {
// 	if (unlock) {
// 		popupActive.classList.remove('open');
// 		if (doUnlock) {
// 			bodyUnLock();
// 		}
// 	}
// }

// function bodyLock() {
// 	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	

// 	if (lockPadding.length > 0) {
// 		for (let index = 0; index < lockPadding.length; index++) {
// 			const el = lockPadding[index];
// 			el.style.paddingRight = lockPaddingValue;
// 		}
// 	}
// 	body.style.paddingRight = lockPaddingValue;
// 	body.classList.add('lock');

// 	unlock = false;
// 	setTimeout(function () {
// 		unlock = true;
// 	},	timeout);
// }


