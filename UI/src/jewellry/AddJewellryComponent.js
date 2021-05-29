import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert_j'
import ApiService from '../services/ApiService';

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}

class AddJewellryComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            image: '',
            imageurl: '',
            name: '',
            description: '',
            price: '',
            message: '',
            show: false
        }
    }

    saveJewellry = (e) => {
        e.preventDefault();
        let jewellry = {
            image: this.state.image, 
            imageurl: this.state.imageurl, 
            name: this.state.name, 
            description: this.state.description, 
            price: this.state.price
        };

        ApiService.addJewellry(jewellry)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Jewellry added successfully.'});
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

    onChange = (e) =>
        this.setState({ 
            [e.target.name]: e.target.value 
        });
    onFileChangeHandler = (e) => {
        e.preventDefault();
        var elements=[];
        console.log(e.target.files.length)
        let files = e.target.files
        console.log(files)
        for(let i = 0; i<e.target.files.length; i++){
            let reader = new FileReader()
            reader.readAsDataURL(files[i])
            reader.onload = (e) => {
            console.log(" Imagedata",e.target.result)
            elements.push(e.target.result)
            this.setState({image:elements[0]})
            }
            console.log(elements)
        }
   }
    render() {
     console.log(this.state.image)
        return(
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
                </div>
                
                <Typography variant="h4" style={style}>Add Jewellry</Typography>
                <form style={formContainer}>
                    <TextField type="text" placeholder="image" fullWidth margin="normal" name="image" value={this.state.image} onChange={this.onChange}/>
                    <TextField type="text" placeholder="imageurl" fullWidth margin="normal" name="imageurl" value={this.state.imageurl} onChange={this.onChange}/>
                    <TextField placeholder="name" fullWidth margin="normal" name="name" value={this.state.name} onChange={this.onChange}/>
                    <TextField type="text" placeholder="description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>
                    <TextField type="number" placeholder="price" fullWidth margin="normal" name="price" value={this.state.price} onChange={this.onChange}/>
                    <input type="file" multiple onChange={this.onFileChangeHandler }/>
                    <img src={this.state.image}/>
                    <Button variant="contained" color="primary" onClick={this.saveJewellry}>Save</Button>
                </form>
            </div>
        );
    }
}

export default AddJewellryComponent;
