import React from 'react';
import './NavBar.css';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Title: 'Spiritualié',
            Text: 'Ici represente la bar latterale',
            list_nav: ['Predication', 'Acitvité', 'Etude', 'Projet']
        }
    }

    nav_button() {
        return this.state.list_nav.map(element => <div className='nav-Button-wrapper-default'>
            <p className='nav-Button-default'>{element}</p>
        </div>)
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