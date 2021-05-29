import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert_j'
import ApiService from '../services/ApiService';

const style ={
    display: 'flex',
    justifyContent: 'center'
}

class EditJewellryComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            image: '',
            imageurl: '',
            name: '',
            description: '',
            price: '',
            show: false,
            message: ''
        }
    }

    componentDidMount() {
        const jewellryId = +this.props.match.params.id;
        console.log(jewellryId);
        ApiService.fetchJewellryById(jewellryId)
            .then((res) => {console.log(res.data);
                let jewellry = res.data;
                this.setState({
                    id: jewellry.id,
                    image: jewellry.image,
                    imageurl: jewellry.imageurl,
                    name: jewellry.name,
                    description: jewellry.description,
                    price: jewellry.price,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveJewellry = (e) => {
        e.preventDefault();
        let jewellry = {id: this.state.id, image: this.state.image, imageurl: this.state.imageurl, name: this.state.name, description: this.state.description, price: this.state.price};
        ApiService.editJewellry(jewellry)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Jewellry Updated successfully.'});
                    setTimeout(() => this.setState({show:false}), 3000);
                    setTimeout(() => this.jewellryList(), 3000);
                } else {
                    this.setState({show:false});
                }
            });
    }

    jewellryList = () => {
        return this.props.history.push('/jewellries');
    }

    render() {
        return (
            <div>
                 <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
                </div>
                <Typography variant="h4" style={style}>Edit Jewellry</Typography>
                <form>
                <TextField type="text" placeholder="image" fullWidth margin="normal" name="image" value={this.state.image} onChange={this.onChange}/>
                    <TextField type="text" placeholder="imageurl" fullWidth margin="normal" name="imageurl" value={this.state.imageurl} onChange={this.onChange}/>
                    <TextField placeholder="name" fullWidth margin="normal" name="name" value={this.state.name} onChange={this.onChange}/>
                    <TextField type="text" placeholder="description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>
                    <TextField type="number" placeholder="price" fullWidth margin="normal" name="price" value={this.state.price} onChange={this.onChange}/>
                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
                </form>
            </div>
        );
    }
}

export default EditJewellryComponent;
