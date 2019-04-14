import React from 'react';
import './App.css';

class DiseaseAsk extends React.Component{
    render(){
        return(
            <div className="component">
            <h3>Do tou have : <span style={{color: "red"}}>{this.props.symptoms} </span>
            </h3>
            
            </div>
        );
    }
} 

export default DiseaseAsk;