import React from 'react';

class Physique extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            Title : 'Physique',
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

export default Physique;