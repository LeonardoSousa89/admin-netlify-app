import {React, Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Auth from '../login/auth'
import App from  '../app/App'

export default class Routes extends Component{

    render(){
        return(
               <BrowserRouter>
                    <Switch>
                        <Route  exact={true} path="/" component={Auth}/>
                        <Route  exact={true} path="/admin" component={App}/>
                    </Switch>
                </BrowserRouter>
        )
    }
}