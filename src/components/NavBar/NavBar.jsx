import React from 'react'
import './NavBar.css'
import { Link } from "react-router-dom"
export default class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            Title: 'Spirituel',
            side: this.props.location.pathname.split('/')[1],
            tabSelected: this.props.location.pathname.split('/')[2],
            list_nav_Spirituel: ['Prédication',
                'Acitvité',
                'Étude',
                'Projet'],
            list_link_Spirituel: ['/spirituality/predication',
                '/spirituality/activity',
                '/spirituality/study',
                '/spirituality/project'],
            list_nav_Physic: ['Activité',
                'Sujet Intéressant',
                'Comptabilité',
                'Projet'],
            list_link_Physic: ['/physic/activity',
                '/physic/interest',
                '/physic/accounting',
                '/physic/project'],
            switchPageLink : '/physic/activity',
            color: '#E71D36',
            background : '#6BFFB8',
        }
    }
    change_tabSelected(idx) {
        if(this.state.side == 'spirituality')
            this.setState({ tabSelected: this.state.list_link_Spirituel[idx].split('/')[2] })
        else
            this.setState({ tabSelected: this.state.list_link_Physic[idx].split('/')[2] })
    }
    selectedOrNot(element) {
        if(this.state.side == 'spirituality')
            return this.state.tabSelected == element ? '-select-S' : ' '
        else
            return this.state.tabSelected == element ? '-select-P' : ' '
    }
    componentWillReceiveProps(props){
        this.setState({side : props.location.pathname.split('/')[1] })
        this.change_switchPageLink()
        this.change_color()
        this.change_backgroung()
        this.change_title()
    }
    change_switchPageLink(){
        this.setState({switchPageLink : this.state.side == 'spirituality' ? '/physic/activity' : '/spirituality/predication'})
    }
    change_color(){
        this.setState({color : this.state.side == 'spirituality' ? '#E71D36' : '#6BFFB8' })
    }
    change_backgroung(){
        this.setState({background : this.state.side == 'spirituality' ?  '#6BFFB8' :'#E71D36' })
    }
    change_title(){
        this.setState({Title : this.state.side == 'spirituality' ? 'Spirituel' : 'Physique'})
    }

    nav_button() {
        if(this.state.side == 'spirituality'){
            return (
                this.state.list_nav_Spirituel.map((element, idx) =>
                    <Link className='Link'
                        to={this.state.list_link_Spirituel[idx]}
                        onClick={() => this.change_tabSelected(idx)}>
                        <div className={'nav-Button-wrapper' + this.selectedOrNot(this.state.list_link_Spirituel[idx].split('/')[2])}>
                            <p className={'nav-Button' + this.selectedOrNot(this.state.list_link_Spirituel[idx].split('/')[2])}>{element}</p>
                        </div>
                    </Link>
                ))}
        else{
            return (
                this.state.list_nav_Physic.map((element, idx) =>
                    <Link className='Link'
                        to={this.state.list_link_Physic[idx]}
                        onClick={() => this.change_tabSelected(idx)}>
                        <div className={'nav-Button-wrapper' + this.selectedOrNot(this.state.list_link_Physic[idx].split('/')[2])}>
                            <p className={'nav-Button' + this.selectedOrNot(this.state.list_link_Physic[idx].split('/')[2])}>{element}</p>
                        </div>
                    </Link>
                ))}
    }
    render() {
        return (
            <div className='Nav_bar'>
                <div className='header' style={{backgroundColor : this.state.background}}>
                    <div className='Title-header'>{this.state.Title}</div>
                </div>
                <div>
                    {this.nav_button()}
                </div>
                <div className='svg'>
                <Link className='Link' to={this.state.switchPageLink} >
                        <svg width='50' height='50' version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlnsXlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                            <g>
                                <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" fill={this.state.color} />
                            </g>
                        </svg>
                    </Link>
                </div>
            </div>
        )
    }
}