(function() {
	
	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}
	
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
			this.slides = this.el.querySelectorAll( ".slide__show" );
			this.previous = this.el.querySelector( ".slider-previous" );
			this.next = this.el.querySelector( ".slider-next" );
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;
			
			this.actions();
			this.stopStart();	
		},
		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;
			
			for( var i = 0; i < this.slides.length; i++ ) {
				var slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
		actions: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self._slideTo( self.index );
				
			}, 3000);

			self.next.addEventListener("click", function(){
				self.index++;
				self.previous.style.display = 'block';

				if(self.index == self.total - 1) {
					self.index = self.total - 1;
					self.next.style.display = 'none';
				}

				self._slideTo(self.index);

			}, false);

			self.previous.addEventListener("click", function(){
				self.index--;
				self.next.style.display = 'block';

				if(self.index == 0) {
					self.index = 0;
					self.previous.style.display = 'none';
				}

				self._slideTo(self.index);

			}, false);
		},
		
		stopStart: function() {
			var self = this;
			self.el.addEventListener( "mouseover", function() {
				clearInterval( self.timer );
				self.timer = null;
				
			}, false);
			self.el.addEventListener( "mouseout", function() {
				self.actions();
				
			}, false);
		}
		
		
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		
		var slider = new Slideshow( "#main-slider" );
		
	});



	
	
})();


/*$(function(){
	$("#navigation a").click(function() {
		var button = $(this).attr('id');
		console.log(button);
		var currentImage = $(".slide .slide__show.active");
		var next;

		if(button == 'previous') {

			next = ($('.slide .slide__show.active').prev().length > 0) ?
			$('.slide .slide__show.active').prev():
			$('.slide .slide__show:last-child');

		} else {

			next = ($('.slide .slide__show.active').next().length > 0) ?
			$('.slide .slide__show.active').next():
			$('.slide .slide__show:last-child');
		}

		next.css('z-index',2).show();

		currentImage.fadeOut(300, function() {
			$(this).css('z-index', 1).removeClass('active');
			next.css('z-index', 3).addClass('active');
		});

		return false;

	});



});
*/

