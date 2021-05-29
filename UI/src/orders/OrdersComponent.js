import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import MyAlert from './MyAlert_o'
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

class OrdersComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            show: false,
            message: ''
        }
    }

    componentDidMount() {
        ApiService.fetchOrders()
            .then((res) => {
                this.setState({orders: res.data})
                console.log(res.data);
            });
    }

    deleteOrder = (orderId) => {
        ApiService.deleteOrder(orderId)
           .then(res => {
               if(res.data != null) {
                this.setState({"show":true, message : 'Order deleted successfully.'});
                setTimeout(() => this.setState({"show":false}), 3000);
                this.setState({
                    orders: this.state.orders.filter(order => order.id !== orderId)
                });
            } else {
                this.setState({"show":false});
            }
           })
    }

    render() {
        const {orders} = this.state;
        console.log(orders);
        return (
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"error"}/> 
                </div> <br/>
                <Typography variant="h4" style={style}><b>Orders Details</b></Typography>
                <br/>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><h5><b>Id</b></h5></TableCell>
                            <TableCell align="center"><h5><b>JewellryName</b></h5></TableCell>
                            <TableCell align="center"><h5><b>Price</b></h5></TableCell>
                            <TableCell align="center"><h5><b>CustomerName</b></h5></TableCell>
                            <TableCell align="center"><h5><b>Address</b></h5></TableCell>
                            <TableCell align="center"><h5><b>Email</b></h5></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        orders.length === 0 ?
                        <TableRow>
                            <TableCell colSpan="6" align="center"><h5><b>No Orders Available.</b></h5></TableCell>
                        </TableRow> 
                        :
                        orders.map(row => (
                            <TableRow key={row.id}>
                                <TableCell align="right">
                                <h5><b>{row.id}</b></h5>
                                </TableCell>
                                <TableCell align="center"><h5><b>{row.jewellryName}</b></h5></TableCell>
                                <TableCell align="center"><h5><b>{row.price}</b></h5></TableCell>
                                <TableCell align="center"><h5><b>{row.customerName}</b></h5></TableCell>
                                <TableCell align="center"><h5><b>{row.address}</b></h5></TableCell>
                                <TableCell align="center"><h5><b>{row.email}</b></h5></TableCell>
                                <TableCell align="center" onClick={() => this.deleteOrder(row.id)}><DeleteIcon /></TableCell>
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>          
			
            </div>
        );
    }

}

export default OrdersComponent;
