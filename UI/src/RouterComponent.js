import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserComponent from "./user/ListUserComponent";
import AddUserComponent from "./user/AddUserComponent";
import EditUserComponent from "./user/EditUserComponent";
import AddJewellryComponent from "./jewellry/AddJewellryComponent";
import EditJewellryComponent from "./jewellry/EditJewellryComponent";
import ListJewellryComponent from "./jewellry/ListJewellryComponent";
import OrdersComponent from "./orders/OrdersComponent";
import React from "react";

const style = {
    color: 'red',
    margin: '10px'
}

const AppRouter = () => {
    return(
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route path="/admin_u" exact component={ListUserComponent} />
                        <Route path="/admin_u" component={ListUserComponent} />
                        <Route path="/users" exact component={ListUserComponent} />
                        <Route path="/add-user" component={AddUserComponent} />
                        <Route path="/edit-user/:id" component={EditUserComponent} />


                        <Route path="/admin_j" exact component={ListJewellryComponent} />
                        <Route path="/admin_j" component={ListJewellryComponent} />
                        <Route path="/jewellries" exact component={ListJewellryComponent} />
                        <Route path="/add-jewellry" component={AddJewellryComponent} />
                        <Route path="/edit-jewellry/:id" component={EditJewellryComponent} />

                        <Route path="/admin_o" exact component={OrdersComponent} />
                        <Route path="/admin_o" component={OrdersComponent} />
                        <Route path="/orders" exact component={OrdersComponent} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default AppRouter;