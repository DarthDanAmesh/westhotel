$(function(){

	// slideshow
	$(".single-item-rtl").slick(
	{
	
		autoplay : true,
		autoplaySpeed: 4000,
		arrows : false,
		speed: 800,
		fade: true,

	});

	// show && hide Menu 
	$(".hamburger").on("click", function(){
		$(this).toggleClass("is-active");		
		$(".sidebar").toggle(300);
		$(".sidebar ul").fadeToggle(1000);
	});

	// Make the default date
	var dateToday = new Date();
	var strDateTime = dateToday.getDate() + "/" + (dateToday.getMonth() + 1) + "/" + dateToday.getFullYear();
	$("#checkIn").html(strDateTime);

	// $("#checkIn").html(dateToday.toString().substring(0, 10));

	var tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	var strDateTime = tomorrow.getDate() + "/" + (tomorrow.getMonth() + 1) + "/" + tomorrow.getFullYear();
	// $("#checkOut").html(tomorrow.toString().substring(0, 10));
	$("#checkOut").html(strDateTime);

	// the first datepicker


//proto 

/*Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}


Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('');
};*/

///end proto 
	var data = $(".firstCal").datepicker({
		minDate: 0,
		onSelect : function() {
			var data = $(this).datepicker('getDate');
			var strDateTime = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();

			// var data_split = data.toString().substr(0, 10);
			// $("#checkIn").html(data_split);
			$("#checkIn").html(strDateTime);

			$(this).fadeOut(300);
			date.fadeIn(300);
			var selectDate = $(this).datepicker('getDate');
			selectDate = selectDate.setDate(selectDate.getDate() + 1);

			$('.secondCal').datepicker('option', 'minDate', new Date(selectDate));
			$( ".secondCal" ).datepicker( "setDate",new Date(selectDate) );

			 var date2 = $('.secondCal').datepicker('getDate', '+1d');
				var strDateTime = date2.getDate() + "/" + (date2.getMonth() + 1) + "/" + date2.getFullYear();
				$("#checkOut").html(strDateTime);

			 
			// var date_split2 = date2.toString().substr(0, 10);
			// $("#checkOut").html(date_split2);
		 

		}
	});

	// Show data
	$(".check-in").on("click", function(){
		// date.toggle(300);
		data.toggle(300);
	});

	// the second datepicker
	var date = $(".secondCal").datepicker({
		minDate:1,
		onSelect : function() {
			var date = $(this).datepicker('getDate', '+1d');

			var strDateTime =  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
			
			// var date_split = date.toString().substr(0, 10);
			// $("#checkOut").html(date_split);
			$("#checkOut").html(strDateTime);
			$(this).fadeOut(300);
		}
	});

	
	$(".check-in").on("click", function(){
		date.fadeOut(300);
		$('.list-dropUp').slideUp();
		$('.ul-down').slideUp();
	});


	$(".check-out").on("click", function(){
		data.fadeOut(300);
		date.toggle(300);
	});

	$(".adult").click(function(){
		data.fadeOut(300);
		date.fadeOut(300);
		$('.list-dropUp').slideToggle();
	});

	$(".child").click(function(){
		$('.list-dropUp').fadeOut();
		$('.ul-down').slideToggle();
	});

	// choose from dropdown
	$('.list-dropUp li, .list-dropUp li span').click(function(){
	 	valAdult = $(this).text();
	$(".adult_nbr").html(valAdult);
});

	$('.down .ul-down .item, .down .ul-down .item .x').click(function(){

	$(".child_nbr").html($(this).text());
});

	// when you click at home
	$(".home").on("click", function(){
		data.fadeOut(300);
		date.fadeOut(300);
	});

	$('.boxRes').on('click', function(event){
     	event.stopPropagation();
 	});


	// number of adult
 	$(".ArrowUp").on("click", function(){

		var adult_nbr = $(".adult_nbr").text();

		var Convert_Up = parseInt(adult_nbr);

		// console.log(ConvertUp);

		if(Convert_Up >= 6) {
			$(".ArrowUp").addClass("prevent");
			// alert("the number of adult must be smaller than 6");

		} else {
			$(".ArrowUp").removeClass("prevent");			
			Convert_Up++;
			$(".adult_nbr").html(Convert_Up);
		}

 	}); // end arrowUp


 	$(".ArrowDown").on("click", function(){

		var adult_nbr = $(".adult_nbr").html();

		var Convert_Up = parseInt(adult_nbr);
		console.log(Convert_Up);

		if(Convert_Up <= 0) {
			$(".ArrowUp").addClass("prevent");


		} else {
			$(".ArrowUp").removeClass("prevent");
			Convert_Up--;
			 $('.adult_nbr').html(Convert_Up);
		}
 	});


	 	// number of children

	 	$(".up-ico").on("click", function(){
	

			var child_nbr = $(".child_nbr").text();

			var Convert_Up = parseInt(child_nbr);

			 // console.log(Convert_Up);

			if(Convert_Up >= 6) {
				$(".up-ico").addClass("prevent");

			} else {
				$(".up-ico").removeClass("prevent");
				Convert_Up++;
				$('.child_nbr').html(Convert_Up);
			}

	 	});


	 	$(".down-ico").on("click", function(){

			var child_nbr = $(".child_nbr").text();

			var Convert_Up = parseInt(child_nbr);

			 // console.log(Convert_Up);

			if(Convert_Up <= 0) {
				$(".down-ico").addClass("prevent");

			} else {
				$(".down-ico").removeClass("prevent");
				Convert_Up--;
				$('.child_nbr').html(Convert_Up);
			}
	 	});

	 	/* Restaurant */
/*
	 	$('.restaurant').mouseenter(function(){
	 		$('.overlay').fadeIn(300);
	 	});

	 	$('.restaurant').mouseleave(function(){
	 		$('.overlay').fadeOut(300);
	 	});
*/


	$('.btn_mobile').click( function(){
		// $(this).hide();
		$('.boxRes').fadeToggle();
	});





}); // end jQuery