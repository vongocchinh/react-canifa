import React  from 'react'
import { Switch, Route } from 'react-router-dom';
import HomeTopContainer from './../container/Home/HomeTop';
import UserContainer from './../container/User/User';

export default function RouterUI() {
        return (
            <>
                 <Switch>
                    <Route exact  path="/" component={HomeTopContainer}></Route>
                    <Route  path="/user" component={UserContainer}></Route>
                </Switch>
            </>
        )
    }
