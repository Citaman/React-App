import React from 'react';

class Physic extends React.Component{
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
                <div style ='flex : 1'>
                    <div style= 'background-color :blue'></div>
                    <div style='background-color :red'></div>
                </div>
            </div>
        )
    }
}

export default Physic;