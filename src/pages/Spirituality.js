import React from 'react';
import '../styles/Spiritualite.css';

class Spiritualite extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            Title : 'Spiritualite',
            Text : 'Ici represente la bar latterale',
            list_nav : ['Predication','Acitvité','Etude','Projet']
        }
    }

    nav_button(){
        return this.state.list_nav.map(element => <div className= 'nav-Button-wrapper-default'>
                                                    <p className ='nav-Button-default'>{element}</p>
                                                  </div>)
    }
    render(){
        return (
            <div>
                <div id ='Container'>
                    <div id ='Nav_bar'>

                        <div className='header'>
                            <div className ='Title-header'>Spiritualité</div>
                        </div>
                        <div>
                            {this.nav_button()}
                        </div>
                    </div>
                    <div id='Main'>b</div>
                </div>
            </div>
        )
    }
}

export default Spiritualite;