import React, { Component } from "react";
import image1 from './img/1.png'
import image2 from './img/2.jpg'
import image3 from './img/3.jpg'
import image4 from './img/4.png'
import image5 from './img/5.png'
import image6 from './img/6.png'
import image7 from './img/7.png'
import image8 from './img/8.png'
import image9 from './img/9.png'
import image10 from './img/10.png'
import image11 from './img/11.png'
import image12 from './img/12.png'
import image13 from './img/13.png'
import image14 from './img/14.jpg'
import image15 from './img/15.png'
import image16 from './img/16.jpg'
import image17 from './img/17.jpg'
import image18 from './img/18.jpg'
import image19 from './img/19.jpg'
import image20 from './img/20.jpg'
import image21 from './img/21.png'
import image22 from './img/22.jpg'
import image23 from './img/23.png'
import image24 from './img/24.png'
import image25 from './img/25.png'
import image26 from './img/26.png'
import image27 from './img/27.jpg'
import image28 from './img/28.jpg'
import image29 from './img/29.jpg'
import image30 from './img/30.jpg'
import image31 from './img/31.jpg'
import image32 from './img/32.jpg'
import image33 from './img/33.jpg'
import image34 from './img/34.jpg'
import image35 from './img/35.jpg'
import image36 from './img/36.jpg'
import image37 from './img/37.png'
import image38 from './img/38.png'
import image39 from './img/39.png'
import image40 from './img/40.jpg'
import image41 from './img/41.jpg'
import image42 from './img/42.jpg'
import image43 from './img/43.jpg'
import image44 from './img/44.jpg'
import image45 from './img/45.jpg'
import image46 from './img/46.jpg'
import image47 from './img/47.png'
import image48 from './img/48.jpg'
import image49 from './img/49.jpg'
import image50 from './img/50.jpg'
import image51 from './img/51.jpg'
import image52 from './img/52.jpg'
import image53 from './img/53.jpg'
import image54 from './img/54.jpg'
import image55 from './img/55.jpg'
import image56 from './img/56.jpg'
import image57 from './img/57.jpg'
import image58 from './img/58.jpg'
import image59 from './img/59.jpg'
import image60 from './img/60.jpg'
import image61 from './img/61.jpg'
import image62 from './img/62.jpg'
import image63 from './img/63.jpg'
import image64 from './img/64.jpg'
import image65 from './img/65.jpg'
import image66 from './img/66.jpg'
import image67 from './img/67.jpg'
import image68 from './img/68.jpg'
import image69 from './img/69.jpg'
import image70 from './img/70.jpg'
import image71 from './img/71.jpg'
import image72 from './img/72.jpg'
import image73 from './img/73.jpg'
import image74 from './img/74.jpg'
import image75 from './img/75.jpg'
import image76 from './img/76.jpg'
import image77 from './img/77.jpg'
import image78 from './img/78.jpg'
import CarouselContainer from "./CarouselContainer";
import Grid from '@material-ui/core/Grid';
import Pagination from "./Pagination";
import Slider from "./Slider";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  content: ""
		};
	  }


    render() {
        return(
            <div>
            <div>
            <Grid container>
                    <Grid item xs={2}/>
                    {/* <Grid item xs={12}> */}
                <CarouselContainer/>
                {/* <Slider/> */}
                {/* </Grid> */}
                    <Grid item xs={2}/>
                    </Grid>
            </div>



<section id="center_2" className="clearfix">
 <div className="container">
  <div className="row">
   <div className="center_2_top clearfix">
     <h2>New Arrivals</h2>
	 <hr className="hr_1"/>
   </div>
   <div className="center_2_top_2 clearfix">
    <Pagination/>
   </div>
  </div>
 </div>
</section>

<section id="center_5" className="clearfix">
 <div className="container">
  <div className="row">
   <div className="center_5_bottom clearfix">
    <p><a href="/itemCards" className="hvr-bounce-in">View all Collections</a></p>
   </div>
  </div>
 </div>
</section>

<section id="center_7" className="clearfix">
 <div className="container">
  <div className="row">
   <div className="center_7_top clearfix">
    <div className="center_7_top_inner_1 clearfix">
	 <h2>FOLLOW US</h2>
	 <h5>Join Us & Save more on your favourite products</h5>
	 <hr className="hr_2"/>
	  <ul>
	   <li><a className="family_1" href="www.facebook.com"><i className="fa fa-facebook-f"></i>Facebook</a></li>
	   <li><a className="family_3" href="www.instagram.com"><i className="fa fa-instagram"></i>Instagram</a></li>
	  </ul>
	</div>
   </div>
  </div>
 </div>
</section>


{/* <script type="text/javascript">
$(document).ready(function(){

var secondaryNav = $('.cd-secondary-nav'),
   secondaryNavTopPosition = secondaryNav.offset().top;
	$(window).on('scroll', function(){
		if($(window).scrollTop() > secondaryNavTopPosition ) {
			secondaryNav.addclassName('is-fixed');	
		} else {
			secondaryNav.removeclassName('is-fixed');
		}
	});	
	
});
</script>
<script type="text/javascript">
	$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 5000
    })
});
	</script>
<script type="text/javascript">
	$(document).on('click', '.panel-heading span.icon_minim', function (e) {
    var $this = $(this);
    if (!$this.hasclassName('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addclassName('panel-collapsed');
        $this.removeclassName('glyphicon-minus').addclassName('glyphicon-plus');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeclassName('panel-collapsed');
        $this.removeclassName('glyphicon-plus').addclassName('glyphicon-minus');
    }
});
$(document).on('focus', '.panel-footer input.chat_input', function (e) {
    var $this = $(this);
    if ($('#minim_chat_window').hasclassName('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideDown();
        $('#minim_chat_window').removeclassName('panel-collapsed');
        $('#minim_chat_window').removeclassName('glyphicon-plus').addclassName('glyphicon-minus');
    }
});
$(document).on('click', '#new_chat', function (e) {
    var size = $( ".chat-window:last-child" ).css("margin-left");
     size_total = parseInt(size) + 400;
    alert(size_total);
    var clone = $( "#chat_window_1" ).clone().appendTo( ".container" );
    clone.css("margin-left", size_total);
});
$(document).on('click', '.icon_close', function (e) {

    $( "#chat_window_1" ).remove();
});

	</script> */}

            </div>
        )
    }
}

export default Home;