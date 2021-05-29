import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert_u'
import ApiService from '../services/ApiService';

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}

class AddUserComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            id: '',
            username: '',
            email: '',
            password: '',
            message: '',
            show: false
        }
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {
            id: this.state.id, 
            username: this.state.username, 
            email: this.state.email, 
            password: this.state.password, 
        };

        ApiService.addUser(user)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'User added successfully.'});
                    setTimeout(() => this.setState({show:false}), 3000);
                    setTimeout(() => this.userList(), 3000);
                } else {
                    this.setState({show:false});
                }
            });
    }

    userList = () => {
        return this.props.history.push('/users');
    }

    onChange = (e) =>
        this.setState({ 
            [e.target.name]: e.target.value 
        });

    render() {
        return(
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
                </div>
                
                <Typography variant="h4" style={style}>Add User</Typography>
                <form style={formContainer}>
                    <TextField type="text" placeholder="username" fullWidth margin="normal" name="username" value={this.state.username} onChange={this.onChange}/>
                    <TextField type="password" placeholder="password" fullWidth margin="normal" name="password" value={this.state.password} onChange={this.onChange}/>
                    <TextField type="text" placeholder="email" fullWidth margin="normal" name="email" value={this.state.email} onChange={this.onChange}/>
                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
                </form>
            </div>
        );
    }
}

export default AddUserComponent;
