import React from 'react'
import './NavBar.css'
import { Link } from "react-router-dom"
export default class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            Title: 'Spiritualié',
            list_nav: ['Prédication',
                       'Acitvité',
                       'Étude',
                       'Projet'],
            list_link :['/spirituality/predication',
                        '/spirituality/activity',
                        '/spirituality/study',
                        '/spirituality/project' ]
        }
    }
    
    nav_button() {
        return this.state.list_nav.map((element,idx) => <Link className='Link' to ={this.state.list_link[idx]}><div className='nav-Button-wrapper'>
            <p className='nav-Button'>{element}</p>
        </div></Link>)
    }
    render() {
        return (
            <div id='Nav_bar'>
                <div className='header'>
                    <div className='Title-header'>{this.state.Title}</div>
                </div>
                <div>
                    {this.nav_button()}
                </div>
            </div>
        )
    }
}