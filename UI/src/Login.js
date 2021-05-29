import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import { Typography, CircularProgress } from '@material-ui/core';

import AuthService from "./../src/services/auth.service";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    AuthService.login(this.state.username, this.state.password)
      .then(() => {
        this.props.history.push("/");
        window.location.reload();
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage
        });
      }
    );
  }

  render() {
    return (
      <div class="bg-img">
                <Form onSubmit={this.handleLogin} action="/action_page.php" class="container1">
                <h1>Login</h1>


                          <label htmlFor="username"><b>Username</b></label>
                          <Input type="text" name="username" placeholder="Enter Username" value={this.state.username}
                            onChange={this.onChangeUsername}/>


                          <label htmlFor="password"><b>Password</b></label>
                          <Input type="password" name="password" placeholder="Enter Password" value={this.state.password}
                            onChange={this.onChangePassword}/>




                          <button type="submit" class="btn" disabled={this.state.loading}>
                            {this.state.loading && (
                              <CircularProgress size='10'/>
                            )}
                            <span><b>Login</b></span>
                          </button>


                  {this.state.message && (
                    <div>
                      <Typography color='error' variant="overline" display="block" gutterBottom>
                          <strong>{this.state.message}</strong>
                      </Typography>
                    </div>
                  )}
                </Form>

              </div>
    );
  }
}
