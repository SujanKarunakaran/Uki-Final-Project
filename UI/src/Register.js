import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import { Grid, Typography } from '@material-ui/core';

import AuthService from "./../src/services/auth.service";


export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    AuthService.register(
      this.state.username,
      this.state.email,
      this.state.password
    ).then(
      response => {
        this.setState({
          message: response.data.message,
          successful: true
        });
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          successful: false,
          message: resMessage
        });
      }
    );
  }

  render() {
    return (
            <div class="bg-img1">
                <Form onSubmit={this.handleRegister} action="/action_page.php" class="container1">
                <h1>SignUp</h1>
                  {!this.state.successful && (
                  <Grid>
                      
                          <label htmlFor="username"><b>Username</b></label>
                          <Input type="text" name="username" placeholder="Enter Username" value={this.state.username}
                            onChange={this.onChangeUsername}/>
                       
                      
                          <label htmlFor="email"><b>Email</b></label>
                          <Input type="text" name="email" placeholder="Enter Email" value={this.state.email}
                            onChange={this.onChangeEmail}/>
                       
                          <label htmlFor="password"><b>Password</b></label>
                          <Input type="password" name="password" placeholder="Enter Password" value={this.state.password}
                            onChange={this.onChangePassword}/>
                        
                          <button type="submit" class="btn"> <b>Sign Up</b> </button>
                        
                  </Grid>
                  )}
                  {
                    this.state.message && (
                    <div>
                      <Typography color={this.state.successful ? 'primary' : 'error'} variant="overline" display="block" gutterBottom>
                          <strong>{this.state.message}</strong>
                      </Typography>
                    </div>
                  )
                  }
                </Form>
           </div>

    );
  }
}