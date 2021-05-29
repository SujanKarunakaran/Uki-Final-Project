import React, { Component } from "react";
import { Typography, Card, CardContent, Paper, Grid } from '@material-ui/core';

import AuthService from "./../src/services/auth.service";

const style = {
  root: {
    minWidth: 275,
    backgroundColor:'#da7b0e',
    marginTop: 20,
    height: 400,
    color: '#5c3817'
  },
  title: {
    fontSize: 14,
  },
  paper: {
    spacing: 2,
    textAlign: 'left',
    backgroundColor: '#da7b0e',
    color: '#5c3817'
  },
}

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  render() {
    const { currentUser } = this.state;
    console.log(currentUser);
    return (
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={4}/>
          <Grid item xs={4}>
            <Paper>
              <Card style={style.root} variant="outlined">
                <CardContent>
                  <strong style={style.title} gutterBottom>
                    <h1>Profile : {currentUser.username}</h1>
                  </strong>
                </CardContent>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Paper style={style.paper} elevation={0}>
                        <h3><strong>Token:</strong>{" "}
                        {currentUser.basicToken}</h3>
                      </Paper>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper style={style.paper} elevation={0}>
                      <h3><strong>Id:</strong>{" "}
                        {currentUser.id}</h3>
                      </Paper>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper style={style.paper} elevation={0}>
                      <h3><strong>Email:</strong>{" "}
                        {currentUser.email}</h3>
                      </Paper>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper style={style.paper} elevation={0}>
                      <h3><strong>Authorities:</strong>
                        <ul>
                          {currentUser.roles &&
                            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                        </ul></h3>
                      </Paper>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={4}/>
        </Grid>
      </React.Fragment>
    );
  }
}