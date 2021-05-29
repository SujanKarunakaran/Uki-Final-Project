import React, { Component } from 'react'
import ApiService from './../src/services/ApiService';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



class ItemCards extends Component {

  constructor(props) {
      super(props)
      this.state = {
          jewellries: [],
         
      }
  }

  componentDidMount() {
      ApiService.fetchJewellries()
          .then((res) => {
              this.setState({jewellries: res.data})
              console.log(res.data);
          });
  }
  
    viewJewellry = (id) => {
        console.log(this.props);
        this.props.history.push('/view-jewellry/'+ id);
    }


  render() {
    const {jewellries} = this.state;
    console.log(jewellries);
    return (
      <div>
        <br/>
        <div className="center_2_top clearfix">
          <h2>Our Collections</h2>
          <hr className="hr_1"/>
        </div>
      <Grid container spacing={3}>
        
		{ jewellries.length !== 0 ?(jewellries.map(row => (
		// <Grid item xs={12} sm={3}>
		// 	<Card >
		// 		      <CardHeader title={row.name}/>
		// 		      <CardMedia title="Jewellry"/>
		// 		      <img src={row.image} alt= "jewells" width="260" height="260"/>		
		// 		      <CardContent>
		// 			<Typography> <b> Rs:{row.price}.00 </b> </Typography>

		// 		      </CardContent>
		// 		      <CardActions disableSpacing>	
		// 			<Button onClick={() => this.viewJewellry(row.id)} size="small" class="btn" variant="contained">More & Buy</Button>
		// 			</CardActions>
		// 		    </Card>
		// 		    	</Grid>

<div className="col-lg-4 col-md-6 mb-5">
<div className="card border-0 bg-transparent box">
  <img src={row.image} alt="jewells" className="img-fluid rounded" style={{height:"300px",width:"300px", paddingTop:"20px", paddingLeft:"25px", paddingRight:"8px", borderRadius:"20px"}} />
      <br/>
  <div className="card-body mt-2">
    <div >
                <center><h4 className="mt-3 mb-5 lh-36">{row.name}</h4></center><br/>
                <center><h4 className="mt-3 mb-5 lh-36">Rs:{row.price}.00</h4></center>
    </div> 
                <Button href={"/view-jewellry/"+row.id} size="small" class="btn" variant="contained">Buy Now</Button>

                {/* <button href={"/view-jewellry/"+jewells.id} className="btn"></button> */}
  </div>
</div>
</div>
			))):null}
            
            </Grid>

            <section id="center_7" className="clearfix">
 <div className="container">
  <div className="row">
   <div className="center_7_top clearfix">
    <div className="center_7_top_inner_1 clearfix">
	 <h2>FOLLOW US</h2>
	 <h5>Join Us & Save more on your favourite products</h5>
	 <hr className="hr_2"/>
	  <ul>
	   <li><a className="family_1" href="#"><i className="fa fa-facebook-f"></i>Facebook</a></li>
	   <li><a className="family_3" href="#"><i className="fa fa-instagram"></i>Instagram</a></li>
	  </ul>
	</div>
   </div>
  </div>
 </div>
</section>

      </div>

      
              );
            }
        
        }
        
        export default ItemCards;