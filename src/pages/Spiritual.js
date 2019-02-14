import React from 'react'
import '../styles/Spiritualite.css'
import Activity from  '../components/Activity'
import Predication from '../components/Predication'
import Project from '../components/Project'
import Study from '../components/Study'
import NavBar from '../components/NavBar'
import { Switch, Route,Redirect} from "react-router-dom"

export default class Spiritual extends React.Component {
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
                   <NavBar location ={this.props.location}/>
                   <Redirect from='/' to='/spirituality/predication'/>
                   <Redirect from='/spirituality' to='/spirituality/predication'/>
                   <Route path='/spirituality/predication' component={Predication} />
                   <Route path='/spirituality/activity' component={Activity} />
                   <Route path='/spirituality/study' component={Study} />
                   <Route path='/spirituality/project' component={Project} />
                </div>
            </Switch>
        )
    }
}
/*  
 <Route path='/spirituality' component={Predication} />
                   <Route path='/spirituality/predication' component={Predication} />
<NavBar /><Route exact path='/spirituality' component={Predication} />
                    <Route path='/spirituality/predication' component={Predication} />
                    <Route path='/spirituality/activity' component={Activity} />
                    <Route path='/spirituality/study' component={Study} />
                    <Route path='/spirituality/project' component={Project} /> */