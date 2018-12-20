<?php include 'inc/header.php' ?>



<div class="section-header text-center">
	<h2 class="section-title">Special Offer</h2>
	<div class="line">
		<span></span>
	</div>
</div>

<section class="special">
	<div class="container">
		<div class="col-md-12">
			<div class="col-md-4">
				<div class="offer animated bounceInLeft " style="background-image: url(img/special/1439711.jpeg);">
					<h2 class="special_title">Spa</h2>
					<div class="overlay">
						<div class="special_desc">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium facere, consequuntur modi itaque commodi nisi numquam molestias. Aut, odio saepe, qui nostrum at assumenda illo error voluptatibus, laborum minima labore.</p>
							<a class="pop" href="special_1.php">Read more</a>
						</div>
					</div>

					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div class="col-md-4">
				<div class="offer wow bounceInUp delay-400ms" style="background-image: url(img/special/artiom-vallat-558033-unsplash.jpg);">
					<h2 class="special_title">Pool</h2>
					<div class="special_desc overlay">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium facere, consequuntur modi itaque commodi nisi numquam molestias. Aut, odio saepe, qui nostrum at assumenda illo error voluptatibus, laborum minima labore.</p>
					<a href="special_1.php">Read more</a>

					</div>

					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div class="col-md-4">
				<div class="offer animated bounceInRight" style="background-image: url(img/special/114972.jpeg);">
					<h2 class="special_title">Golf</h2>
					<div class="special_desc overlay">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium facere, consequuntur modi itaque commodi nisi numquam molestias. Aut, odio saepe, qui nostrum at assumenda illo error voluptatibus, laborum minima labore.</p>
					<a href="special_1.php">Read more</a>

					</div>

					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
		<div class="clearfix"></div>


	</div>
	
					


		


</section>


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

<form action="" method="GET" target="_blank">
		<div class="boxRes specialBoxRes">
			<div class="check-in" style="border-left: 1px solid #dfdfdf">
				<label for="">Check-in</label>
				<label for="" id="checkIn"></label>
				<input type="hidden" id="checkInDate">
			</div>
			<div class="firstCal" ></div> 
			<!--the first -->

			<div class="check-out">
				<label for="">Check-out</label>
				<label for="" id="checkOut"></label>
				<input type="hidden" id="checkOutDate">
			</div>
			<div class="secondCal" class="end"></div> 
			<!-- the second -->
		<div class="range" style="display: flex;">
			<div class="adult">
				<label for="">Adult</label>
				<label class="adult_nbr" for="">1</label>
				<!-- <div class="ArrowUp"><i class="fa fa-caret-up"></i></div>
				<div class="ArrowDown"><i class="fa fa-caret-down"></i></div> -->
				<div class="arrows"><i class="fa fa-sort"></i></div>



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
			</div>
		</div>

			<div class="promoCode">
				<label for="">Promo Code</label>
				<input type="text" class="inputCode">

			</div>

			
				<button class="btn-booking">Book now</button>

		</div>
</form>

		<button class="btn_mobile">Book Now</button>


<?php include 'inc/footer.php'; ?>
