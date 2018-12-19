<?php include 'inc/header.php';?>



		<form action="" method="GET" target="_blank">
			<div class="boxRes">
				<!-- <div class="bEngine"> -->
					<div class="check-in">
						<label for="">Check-in</label>
						<label for="" id="checkIn"></label>
						<input type="hidden" id="checkInDate">
					</div>
					<div class="firstCal"></div> 
					<!--the first -->

					<div class="check-out">
						<label for="">Check-out</label>
						<label for="" id="checkOut"></label>
						<input type="hidden" id="checkOutDate">
					</div>
					<div class="secondCal"></div> 
					<!-- the second -->

					<div class="range" style="display: flex;">
						<div class="adult">
							<label for="">Adult</label>
							<label class="adult_nbr" for="">1</label>
							<div class="arrows"><i class="fa fa-sort"></i></div>
							<!-- <div class="ArrowUp"><i class="fa fa-caret-up"></i></div>
							<div class="ArrowDown"><i class="fa fa-caret-down"></i></div> -->


							<div class="dropUp">
								<ul class="list-dropUp">
									<li class="list-item"><span>1</span></li>
									<li class="list-item"><span>2</span></li>
									<li class="list-item"><span>3</span></li>
									<li class="list-item"><span>4</span></li>
									<li class="list-item"><span>5</span></li>
									<li class="list-item"><span>6</span></li>
								</ul>
							</div>
						</div>

					<div class="child">
						<label for="">Children</label>
						<label class="child_nbr" for="">0</label>
						<!-- <div class="up-ico"><i class="fa fa-caret-up"></i></div>
						<div class="down-ico"><i class="fa fa-caret-down"></i></div> -->
						<div class="arrows"><i class="fa fa-sort"></i></div>

					<div class="down">
						<ul class="ul-down">
							<li class="item"><span class="x">0</span></li>
							<li class="item"><span class="x">1</span></li>
							<li class="item"><span class="x">2</span></li>
							<li class="item"><span class="x">3</span></li>
							<li class="item"><span class="x">4</span></li>
						</ul>
					</div>
				</div><!--./child -->
			</div> <!--./range-->

				<div class="promoCode">
					<label for="">Promo Code</label>
					<input type="text" class="inputCode">

				</div>

			<!-- </div> ./ bEngine -->

			<button class="btn-booking">Book now</button>
				

			</div> <!--/.boxRes -->
		</form>
		<button class="btn_mobile">Book Now</button>

		<div class="socialMedia">
			<a href="#" target="_blank">
				<i class="fa fa-facebook fa-fw sm_ico"></i>
			</a>
			<a href="#" target="_blank">
				<i class="fa fa-pinterest-p fa-fw sm_ico"></i>
			</a>

			<a href="#" target="_blank">
				<i class="fa fa-instagram fa-fw sm_ico"></i>
			</a>
			<a href="#" target="_blank">
				<i class="fa fa-twitter fa-fw sm_ico"></i>
			</a>

		</div>

		<div class="slider">
			<div class="single-item-rtl">
			  <div class="slide" style="background-image: url(img/home/rktkn-111844-unsplash.jpg);">
			  	<h2 class="animated fadeInLeft">Best City Hotel</h2>
			  </div>

			  <div class="slide" style="background-image: url('img/home/chastity-cortijo-604624-unsplash.jpg');">
			  	<h2 class="animated fadeInLeft delay-4s">See What We Offer</h2>
			  </div>


			  <div class="slide" style="background-image: url('img/home/dan-gold-220226-unsplash.jpg');">
			  	<h2 class="animated fadeInLeft delay-8s">Best Hotel</h2>
			  </div>


			  <div class="slide" style="background-image: url('img/home/toa-heftiba-205003-unsplash.jpg')">
			  	<h2 class="animated fadeInLeft delay-12s">We Offer</h2>
			  </div>

			  <div class="slide" style="background-image: url('img/home/sylvie-tittel-673971-unsplash.jpg')">
			  	<h2 class="animated fadeInLeft delay-16s">Lorem, ipsum dolor.</h2>
			  </div>
			  
			</div>
		</div>



<!-- 	<ul id="language">
		<li>
			<a href="#">
				<span class="icon-footer flag-icon flag-icon-us"></span>
			</a>
			<ul class="dropLang">
				<li>
					<a href="#">
						<span class="icon-footer flag-icon flag-icon-fr"></span>
					</a>
				</li>

				<li>
					<a href="#">
						<span class="icon-footer flag-icon flag-icon-ru"></span>
					</a>
				</li>
			</ul>
		</li>
	</ul> -->




	<?php include 'inc/footer.php';?>

