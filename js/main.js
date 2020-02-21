/* ===================================================================
 * Main JS
 *
 * ------------------------------------------------------------------- */

(function($) {

	"use strict";

	var cfg = {
		defAnimation   : "fadeInUp",    // default css animation
		scrollDuration : 800,           // smoothscroll duration
		statsDuration  : 4000           // stats animation duration
	},
	$WIN = $(window);


  /* Intro Animation
	* ------------------------------------------------------- */
	var ssIntroAnimation = function() {

		$WIN.on('load', function() {

	     	if (!$("html").hasClass('no-cssanimations')) {
	     		setTimeout(function(){
	    			$('.animate-intro').each(function(ctr) {
						var el = $(this),
	                   animationEfx = el.data('animate') || null;

	               if (!animationEfx) {
	                 	animationEfx = cfg.defAnimation;
	               }

	              	setTimeout( function () {
							el.addClass(animationEfx + ' animated');
						}, ctr * 300);
					});
				}, 100);
	     	}
		});

	};




  /* Initialize
	* ------------------------------------------------------ */
	(function ssInit() {

		ssIntroAnimation();

	})();


})(jQuery);
