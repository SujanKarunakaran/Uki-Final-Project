import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
// import './App.css';
// import Profile from './NewCardmethode.js';
import CardHeader from "@material-ui/core/CardHeader";
import { Avatar, IconButton ,CardMedia } from "@material-ui/core";
import {Grid,Card,CardContent,Typography} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {spacing} from "@material-ui/core";

export default class  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 6,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
receivedData() {
    axios
        .get(`https://gold-covering.herokuapp.com/jewellry`)
        .then(res => {

            const data = res.data;
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            
            const postData = slice.map(jewells => 
            //     <div class="card">
               
        
            //     <Grid  item xs={3} sm={5}>
            // <Card key={jewells.id} style={{width:"280px", paddingLeft:"px"}} >
            //     {/* <Card > */}
            //       <CardHeader title={jewells.name}/>
            //       <CardMedia title="Jewellry"/>
            //       <img src={jewells.image} alt= "jewells" width="250" height="250"/>
            //       <CardContent>
			// 		<Typography> <b> Rs:{jewells.price}.00 </b> </Typography>
            //               </CardContent>		
            //       <CardActions disableSpacing>
            //               <Button href={"/view-jewellry/"+jewells.id} size="medium" class="btn">More & Buy</Button>
            //   </CardActions>
            //     {/* </Card> */}

            // </Card>
            // </Grid>
             
            //     </div>
            <div className="col-lg-4 col-md-6 mb-5">
				<div className="card border-0 bg-transparent box">
					<img src={jewells.image} alt="jewells" className="img-fluid rounded" style={{height:"300px",width:"300px", paddingTop:"20px", paddingLeft:"25px", paddingRight:"8px", borderRadius:"20px"}} />
                        <br/>
					<div className="card-body mt-2">
						<div >
                        <center><h4 className="mt-3 mb-5 lh-36">{jewells.name}</h4></center> <br/>
                        <center><h4 className="mt-3 mb-5 lh-36">Rs:{jewells.price}.00</h4></center>
						</div> 
                        <Button href={"/view-jewellry/"+jewells.id} size="small" class="btn" variant="contained">Buy Now</Button>

                        {/* <button href={"/view-jewellry/"+jewells.id} className="btn"></button> */}
					</div>
				</div>
			</div>
            )
            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),
               
                postData
            })
        });
}
handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.receivedData()
    });

};

componentDidMount() {
    this.receivedData()
}
render() {
    return (
        <div>
             <Grid container >
            {this.state.postData}
            </Grid>
            {/* <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}/> */}
        </div>

    )
}
}

