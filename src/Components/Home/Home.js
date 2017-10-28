import React, {Component} from "react";
import { Route, withRouter } from "react-router-dom";

import { Navbar, Reportlist, Profile, Dashboard } from "../../Components";
import ComponentWrappers from '../../ComponentWrappers';

class Home extends Component{

    constructor(props) {

        super(props);

        this.state = {
            tabValue: 0,
        }

        this.changeRoute = this.changeRoute.bind(this);
        this.changeTabValue = this.changeTabValue.bind(this);

    }

    changeRoute(route) {
        this.props.history.push(route);
    }

    changeTabValue(index) {
        this.setState({ tabValue: index });
    }

    render() {

        return(
            <div>
                <Navbar changeRoute={ this.changeRoute } changeTabValue={ this.changeTabValue } tabValue={ this.state.tabValue } />
                <Route exact path="/" component={ Reportlist } />
                <Route exact path="/profile" component={ Profile } />
                <Route exact path="/dashboard" component={ Dashboard } />
            </div>
        );

    }

}

export default ComponentWrappers(withRouter(Home));