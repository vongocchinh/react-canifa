import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IndexUserComponent from '../components/User/user/Detail/Route/IndexUserRouter';
import BillUserRouterComponent from './../components/User/user/Detail/Route/BillUserRouter';
import BankContainer from '../container/User/Bank';
import PasswordContainer from './../container/Password/Password';


export default function RouterUser() {
        return (
            <>
                 <Switch>
                    <Route component={IndexUserComponent} exact path="/user" ></Route>
                    <Route component={BillUserRouterComponent}  path="/user/bill" ></Route>
                    <Route component={BankContainer} path="/user/bank"></Route>
                    <Route component={PasswordContainer} path="/user/password"></Route>
                </Switch>
            </>
        )
    }
