import React from 'react';

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
                <div>
                    <h1>{this.state.Title}</h1>
                    <h3>{this.state.Text}</h3>
                </div>
            </div>
        )
    }
}

export default Spiritualite;