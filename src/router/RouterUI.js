import React  from 'react'
import { Switch, Route } from 'react-router-dom';
import HomeTopContainer from './../container/Home/HomeTop';
import UserContainer from './../container/User/User';
import LoginContainer from './../container/Login/Login';
import RegisterContainer from './../container/Register/Register';
import CartContainer from './../container/Cart/Cart';
import ProductDetailContainer from './../container/Product/ProductDetail';
import ProductSearch from './../container/ProductSearch/ProductSearch';
import EditUser from './../container/EditUser/EditUser';
import CheckOut from './../container/Checkout/CheckOut';
export default function RouterUI() {
        return (
            <>
                 <Switch>
                    <Route exact  path="/" component={HomeTopContainer}></Route>
                    <Route  path="/user" component={UserContainer}></Route>
                    <Route path="/login" component={LoginContainer}></Route>
                    <Route path='/register' component={RegisterContainer}></Route>
                    <Route  path='/cart' component={CartContainer}></Route>
                    <Route path="/product" component={ProductDetailContainer}></Route>
                    <Route path="/productSearch" component={ProductSearch}></Route>
                    <Route path="/edit" component={EditUser} ></Route>
                    <Route path="/checkout" component={CheckOut} ></Route>
                </Switch>
            </>
        )
    }
