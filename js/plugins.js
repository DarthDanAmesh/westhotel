$(function(){

	// Make the default date
	var today = new Date();
	var strDateTime = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
	$("#check__in").html(strDateTime);

	var tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	var strDateTime = tomorrow.getDate() + "/" + (tomorrow.getMonth() + 1) + "/" + tomorrow.getFullYear();

	$("#check__out").html(strDateTime);


	var departure = $("#check__In").datepicker({
		minDate: '0',
		onSelect : function(){
			var departure = $(this).datepicker('getDate');
			var strDateTime = departure.getDate() + "/" + (departure.getMonth() + 1) + "/" + departure.getFullYear();
			// var departure_split = departure.toString().substr(0, 10);
			$("#check__in").html(strDateTime);

			$(this).slideUp(300);
			// data.fadeIn(300);
			arrived.slideDown(300);

			var  checkDate  = $(this).datepicker('getDate');
			checkDate = checkDate.setDate(checkDate.getDate() + 1);

			$('#check__Out').datepicker('option', 'minDate', new Date(checkDate));
			$('#check__Out').datepicker('setDate', new Date(checkDate));

			var arrived2 = $('#check__Out').datepicker('getDate', '+1d');
			var strDateTime = arrived2.getDate() + "/" + (arrived2.getMonth() + 1) + "/" + arrived2.getFullYear();


			// var arrived_split2 = arrived2.toString().substr(0, 10);
			$('#check__out').html(strDateTime); 
		}
	});



	// Show data
	$(".checkIn").on("click", function(){
		arrived.slideUp(300);
		departure.slideToggle(300);
	});

	var arrived = $("#check__Out").datepicker({
		minDate: '1',
		onSelect : function() {
			var arrived = $(this).datepicker('getDate', '+1d') ;
			var strDateTime = arrived.getDate() + "/" + (arrived.getMonth() + 1) + "/" + arrived.getFullYear();

			// var arrived_split = arrived.toString().substring(0, 10);
			$("#check__out").html(strDateTime);
			$(this).slideUp(300);
		}
	});

	$(".checkOut").on("click", function(){
		departure.slideUp(300);
		arrived.slideToggle(300);
	});

	$(".adult").click(function(){
		departure.slideUp(300);
		arrived.slideUp(300);
		$('.child__val').fadeOut();
		$('.adult__val').slideToggle();

		$('.adult__val li, .adult__val li span').on('click', function(){
			var valAdult = $(this).text();
			// console.log(valAdult);
			$('.adult_val').html(valAdult);
			$('.adult__val').slideUp();


		});

	});


	$(".child").click(function(){
			// $(".child").css("borderBottom", "2px solid #dfdfdf");
			departure.slideUp(300);
			arrived.slideUp(300);
			$('.adult__val').fadeOut();
			$('.child__val').slideToggle();

		$('.child__val li, .child__val li span').on('click', function(){
			var valChild = $(this).text();
			// console.log(valAdult);
			$('.child_val').html(valChild);
			$('.child__val').slideUp();

		});

	});

	$(".child").on('click', function(){
		// $(this).css('borderBottom','2px solid #dfdfdf');
		$(this).toggleClass('borderBottom');
	});

	$(".adult").on('click', function(){
		$(".child").toggleClass('borderTop');
	});

	$('.promoCode').click(function(){
		$('.adult__list').toggle();
		$('.child__list').toggle();
	});


		$(".zoom").on('click', function(){
		$(".slide__show").toggleClass("all__width");
		
		$(this).toggleClass('fa-compress');
		$('.toggle').toggle();
	});


	$('.appear').on('click',function(){
		$('.hidden').fadeToggle();
		$('.drag').toggleClass('col-md-4');
		$('.drag').toggleClass('col-md-12');
		$(this).toggleClass('fa-search-minus');
	});


	// $('.restaurant i').click(function()){
	// 	$('.resMenu').toggle();
	// }

	$('.restaurant .ico1').on('click', function(){
		$('.resMenu1').toggle(300);
	});


	$('.restaurant .ico4').on('click', function(){
		$('.resMenu4').toggle(300);
	});	


	$("body").niceScroll({
		cursorcolor:"#ff9d01"
	});

	jQuery(function () {
		jQuery('.container--gellery').magnificPopup({
			delegate: 'a',
			type: 'image',
			mainClass: 'mfp-with-zoom mfp-img-mobile',

			image: {
				verticalFit: true,
			},
			gallery: {
				enabled: true
			},

			zoom: {
				enabled: true,
				duration: 230,
				opener: function (element) {
					return element.find('img');
				}
			}
		});
	});



$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();

	if(scrollTop > 222) {
		$('.__boxRes').addClass('fixed');
		$('.__boxRes').css('width', '28%');
	} else {
		$('.__boxRes').removeClass('fixed');
		$('.__boxRes').css('width', '100%');

	}

});



// if($('body').width() < 320) {$('.__boxRes').removeClass('fixed');}

$('.restaurant').mouseenter(function(){
	$('.ico1').css('color', '#ff9d01');
});

$('.restaurant').mouseleave(function(){
	$('.ico1').css('color', '#fff');
});


$('.restaurant').mouseenter(function(){
	$('.ico4').css('color', '#ff9d01');
});

$('.restaurant').mouseleave(function(){
	$('.ico4').css('color', '#fff');
});


	AOS.init({
		duration: 1800, // values from 0 to 3000, with step 50ms
		easing: 'ease' // default easing for AOS animations
	});



}); // end





/*
		$(".zoom").on('click', function(){
		$(".slide__show").toggleClass("all__width");
		$(this).toggleClass('fa-search-minus');
	});
*/


	/*var zoom = $('.zoom');
	zoom.on('click', function(){
		$('.hide').fadeToggle();
		$('.drag').toggleClass('col-md-4');
	$('.drag').toggleClass('col-md-12');
			zoom.toggleClass('fa-search-minus');
			$('.drag').css('width', '100%');
	});*/




