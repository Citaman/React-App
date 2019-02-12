import React from 'react';
import './Spiritualite.css'
class Spiritualite extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            Title : 'Spiritualite',
            Text : 'Ici represente la bar latterale'
        }
    }
    render(){
        return (
            <div>
                <div id ='Container'>
                    <div id ='Nav_bar'>
                        <div>
                            <h1>Spiritualite</h1>
                        </div>
                        <div>
                            <p>Predication</p>
                            <p>Acitvité</p>
                            <p>Etude</p>
                            <p>Projet</p>
                        </div>
                    </div>
                    <div id='Main'>b</div>
                </div>
            </div>
        )
    }
}

export default Spiritualite;