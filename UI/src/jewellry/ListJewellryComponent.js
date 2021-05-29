import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import MyAlert from './MyAlert_j'
import ApiService from '../services/ApiService';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const style ={
    display: 'flex',
    justifyContent: 'center'
}
const table ={
    width:"100%"
}

class ListJewellryComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            jewellries: [],
            show: false,
            message: ''
        }
    }

    componentDidMount() {
        ApiService.fetchJewellries()
            .then((res) => {
                this.setState({jewellries: res.data})
                console.log(res.data);
            });
    }

    deleteJewellry = (jewellryId) => {
        ApiService.deleteJewellry(jewellryId)
           .then(res => {
               if(res.data != null) {
                this.setState({"show":true, message : 'Jewellry deleted successfully.'});
                setTimeout(() => this.setState({"show":false}), 3000);
                this.setState({
                    jewellries: this.state.jewellries.filter(jewellry => jewellry.id !== jewellryId)
                });
            } else {
                this.setState({"show":false});
            }
           })
    }

    editJewellry = (id) => {
        this.props.history.push('/edit-jewellry/'+ id);
    }

    addJewellry = () => {
        this.props.history.push('/add-jewellry');
    }

    render() {
        const {jewellries} = this.state;
        console.log(jewellries);
        return (
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"error"}/>
                </div>
                <br/>
                <Typography variant="h4" style={style}><b>Jewellry Details</b></Typography> <br/>
                <Button size="small" class="btn" variant="contained" onClick={() => this.addJewellry()}>
                    Add Jewellry
                </Button> <br/>

                <Table style={table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right"><h5><b>Id</b></h5></TableCell>
                            <TableCell align="right"><h5><b>Image</b></h5></TableCell>
                            <TableCell align="right"><h5><b>ImageURL</b></h5></TableCell>
                            <TableCell align="right"><h5><b>Name</b></h5></TableCell>
                            <TableCell align="right"><h5><b>Description</b></h5></TableCell>
                            <TableCell align="right"><h5><b>Price</b></h5></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        jewellries.length === 0 ?
                        <TableRow>
                            <TableCell colSpan="6" align="center"><h5><b>No Jewellries Available.</b></h5></TableCell>
                        </TableRow> 
                        :
                        jewellries.map(row => (
                            <TableRow key={row.id}>
                                <TableCell align="center">
                                    {row.id}
                                </TableCell>
                                <TableCell align="center"><img src={row.image} alt= "jewel" width="150" height="150" /></TableCell>
                                <TableCell align="center"><h5><b>{row.imageurl}</b></h5></TableCell>
                                <TableCell align="center"><h5><b>{row.name}</b></h5></TableCell>
                                <TableCell align="center"><h5><b>{row.description}</b></h5></TableCell>
                                <TableCell align="center"><h5><b>{row.price}</b></h5></TableCell>
                                <TableCell align="center" onClick={() => this.editJewellry(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="center" onClick={() => this.deleteJewellry(row.id)}><DeleteIcon /></TableCell>
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>          
			
            </div>
        );
    }

}

export default ListJewellryComponent;
