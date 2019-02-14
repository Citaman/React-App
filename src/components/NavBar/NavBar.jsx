import React from 'react'
import './NavBar.css'
import { Link } from "react-router-dom"
import Arrow from '../../Icon/down-arrow.svg'
export default class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            Title: 'Spiritualié',
            list_nav: ['Prédication',
                'Acitvité',
                'Étude',
                'Projet'],
            list_link: ['/spirituality/predication',
                '/spirituality/activity',
                '/spirituality/study',
                '/spirituality/project']
        }
    }

    nav_button() {
        return this.state.list_nav.map((element, idx) => <Link className='Link' to={this.state.list_link[idx]}><div className='nav-Button-wrapper'>
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
                <div className='svg'>
                    <Link className='Link' to='/physic/activity'>
                        <svg width='50' height='50' version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlnsXlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                            <g>
                                <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" fill='red' />
                            </g>
                        </svg>
                    </Link>
                </div>
            </div>
        )
    }
}