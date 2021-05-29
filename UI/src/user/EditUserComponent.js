import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert_u'
import ApiService from '../services/ApiService';

const style ={
    display: 'flex',
    justifyContent: 'center'
}

class EditUserComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            userName: '',
            email: '',
            password: '',
            show: false,
            message: ''
        }
    }

    componentDidMount() {
        const userId = this.props.match.params.id;
        console.log(userId);
        console.log(this.props.match)
        console.log(this.props.match.params.id)
        ApiService.fetchUserById(userId)
            .then((res) => {
                let user = res.data;
                this.setState({
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    password: user.password,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let user = {id: this.state.id, password: this.state.password, email: this.state.email};
        ApiService.editUser(user)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'User Updated successfully.'});
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

    render() {
        return (
            <div>
                
                 <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
                </div>
                <Typography variant="h4" style={style}>Edit User</Typography>
                <form>
                        <TextField type="text" placeholder="username" fullWidth margin="normal" name="username" disabled readonly="true" value={this.state.username}/>
                        <TextField type="text" placeholder="email" fullWidth margin="normal" name="email" value={this.state.email} onChange={this.onChange}/>
                        <TextField type="text" placeholder="password" fullWidth margin="normal" name="password" value={this.state.password} onChange={this.onChange}/>
                        <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
                </form>
            </div>
        );
    }
}

export default EditUserComponent;