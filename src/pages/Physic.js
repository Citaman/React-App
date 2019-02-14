import React from 'react';

import Accounting from '../components/Accounting'
import Activity from '../components/Activity'
import InterestingSubject from '../components/InterestingSubject'
import Project from '../components/Project'
import NavBar from '../components/NavBar'
import { Route, Switch,Redirect } from "react-router-dom"

import '../styles/Spiritualite.css';

export default class Physic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            side: this.props.location.pathname.split('/')[1]
        }
    }

    render() {
        return (
            <Switch>
                <div className='Container'>
                    <NavBar location={this.props.location}/>
                    <Redirect from='/physic' to='/physic/activity'/>
                    <Route path='/physic/accounting' component={Accounting} />
                    <Route path='/physic/activity' component={Activity} />
                    <Route path='/physic/project' component={Project} />
                    <Route path='/physic/interest' component={InterestingSubject} />
                </div>
            </Switch>
        )
    }
}