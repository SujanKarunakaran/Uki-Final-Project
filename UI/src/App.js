import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Paper, Typography, AppBar, Toolbar, Button, IconButton } from "@material-ui/core";

import AuthService from "./services/auth.service";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Profile from "./Profile";
import BoardUser from "./BoardUser";
import BoardAdmin from "./BoardAdmin";
import ProductPage from "./ProductPage";
import { AccountCircle } from "@material-ui/icons";
import ItemCards from "./ItemCards";
import ProductDetails from "./ProductDetails";
import image1 from './img/1.png';
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const style = {
  // paper: {
  //   flexGrow: 1,
  //   backgroundColor: '#1a237e',
  //   color: '#c5cae9'
  // },
  menuButton: {
    spacing: 2,
  },
  link: {
    underline: 'none'
  },
  appBar: {
    backgroundColor: "#1a237e"
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
      value: 0
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: AuthService.getCurrentUser(),
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (

      // <ProductDetails/>
      <Router>
        <div>
  <section id="header_2" className="clearfix">
    <div className="container">
      <div className="row">
      <div className="header_2_top clearfix">
        <div className="col-sm-3 header_2_top_left clearfix">
      <div className="header_2_top_left_inner clearfix">
        <p><a href="#"><img src={image1}/></a></p>
      </div>
      </div>
      <div className="col-sm-5 header_2_top_middle clearfix">
      <div className="header_2_top_middle_inner clearfix">
      {/* {showAdminBoard && (
                   <ul>
                      <div className="col-sm-5 header_2_top_middle clearfix">
      <div className="header_2_top_middle_inner clearfix">
                    <Button href="/admin_u" color='inherit'>
                      <strong>Admin User Board</strong>
                    </Button>
                    </div>
                  </div>
                    <div className="col-sm-5 header_2_top_middle clearfix">
      <div className="header_2_top_middle_inner clearfix">
                    <Button href="/admin_j" color='inherit'>
                      <strong>Admin Jewellry Board</strong>
                    </Button>
                    </div>
                  </div>
                  <div className="col-sm-5 header_2_top_middle clearfix">
      <div className="header_2_top_middle_inner clearfix">
                    <Button href="/admin_o" color='inherit'>
                      <strong>Admin Orders Board</strong>
                    </Button>
                    </div>
                  </div>
                  </ul>
                  
                )}         */}
        
      </div>
      </div>
      <div className="col-sm-4 header_2_top_right clearfix">
      <div className="header_2_top_right_inner clearfix">
        
      {currentUser ? (
                <ul>
                  <div className="col-sm-4 header_2_top_right clearfix">
      <div className="header_2_top_right_inner clearfix">
            <button className="button button1">
                  <a href="/profile" style={{textDecoration:"none",color:"#753c0f"}}>
                    {/* <AccountCircle style={{ fontSize: 40 }}/> */}
                    <strong>{currentUser.username}</strong>
                  </a>
                </button>
                  </div>
                  </div>

                  <div className="col-sm-4 header_2_top_right clearfix">
      <div className="header_2_top_right_inner clearfix">
                 <button className="button button1">
                  <a href="/login" style={{textDecoration:"none",color:"#753c0f"}} onClick={this.logOut}>
                    <strong>LogOut</strong>
                  </a>
                  </button>
                  </div>
                  </div>
                </ul>
              ) : (
                <ul>
                   <div className="col-sm-4 header_2_top_right clearfix">
      <div className="header_2_top_right_inner clearfix">
      <button className="button button1">
                  <a size="large" className="tag_menu" href="/login" style={{textDecoration:"none",color:"#753c0f"}} color='inherit'>
                    <strong>Login</strong>
                  </a>
                  </button>
                  </div>
                  </div>
                  <div className="col-sm-4 header_2_top_right clearfix">
      <div className="header_2_top_right_inner clearfix">
      <button className="button button1">
                  <a size="large" className="tag_menu" href="/register" style={{textDecoration:"none",color:"#753c0f"}} color='black'>
                    <strong>SignUp</strong>
                  </a>
                  </button>
                  </div>
                  </div>
                </ul>
               
              )}
      </div>
      </div>
      </div>
      </div>
    </div>
  </section>
  <section id="header_3"  className="cd-secondary-nav sec_n">
	<nav className="navbar navbar-default">
        <div className="container-fluid">


            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <a className="tag_menu active_tab" href="/">HOME</a>
                    </li>
					 
					 <li className="dropdown">
					  <a className="tag_menu" href="/itemCards">PRODUCTS</a>
                    </li>
          
					
					<li>
                        <a className="tag_menu" href="/aboutUs">ABOUT</a>
                    </li>
					
					<li>
                        <a className="tag_menu" href="/contactUs">CONTACT</a>
                    </li>
              
                       
                    {showAdminBoard && (
                   <li>
                    <div className="dropdown tag_menu">
                      <span>ADMIN</span>
                      <div className="dropdown-content">
                      <Button href="/admin_j" size="small" class="btn" variant="contained">
                      <strong>Admin Jewellry Board</strong>
                    </Button>
                    <p> </p>

                    <Button href="/admin_u" size="small" class="btn" variant="contained">
                      <strong>Admin User Board</strong>
                    </Button>
                    <p> </p>
               
                    <Button href="/admin_o" size="small" class="btn" variant="contained">
                      <strong>Admin Orders Board</strong>
                    </Button>
                    <p> </p>
                      </div>
                    </div>

                    {/* <Button className="tag_menu" href="/admin_u" color='inherit'>
                      <strong>Admin User Board</strong>
                    </Button>
                    

                    <Button className="tag_menu" href="/admin_j" color='inherit'>
                      <strong>Admin Jewellry Board</strong>
                    </Button>
                  
               
                    <Button className="tag_menu" href="/admin_o" color='inherit'>
                      <strong>Admin Orders Board</strong>
                    </Button> */}
                 </li>
                  
                )} 

      {/* {currentUser ? (
                <li>
              
                  <a className="tag_menu" href="/profile" >
                    <AccountCircle style={{ fontSize: 40 }}/>
                    <strong>{currentUser.username}</strong>
                  </a>
                 
                 

                  
      
                  <a className="tag_menu" href="/login" onClick={this.logOut}>
                    <strong>LogOut</strong>
                  </a>
              
                  
                </li>
              ) : (
                <li>
                   
                   <div className="col-sm- header_2_top_left clearfix">
      <div className="header_6_top_left_inner clearfix">
                  <a className="tag_menu" href="/login" color='inherit'>
                    <strong>Login</strong>
                  </a>
                  </div>
                  </div>
               
                  
                  
                  <div className="col-sm- header_2_top_left clearfix">
      <div className="header_6_top_left_inner clearfix">
                  <a className="tag_menu" href="/register" color='inherit'>
                    <strong>Sign Up</strong>
                  </a>
                  </div>
                  </div>
                 
                 
                </li>
               
              )} */}


 
              
					
                </ul>
            </div>
        </div>
    </nav>
    
</section>

          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/admin_u" component={BoardAdmin} />
              <Route path="/admin_j" component={BoardAdmin} />
              <Route path="/admin_o" component={BoardAdmin} />
              <Route path="/aboutUs" component={AboutUs} />
              <Route path="/contactUs" component={ContactUs} />
              <Route path="/view-jewellry/:id" component={ProductDetails} />
              <Route exact path="/itemCards" component={ItemCards} />

              
            </Switch>
            <Footer/>
            
          </div> 
        </div>
      </Router>
    );
  }
}

export default App;
