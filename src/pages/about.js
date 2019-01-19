import React, { Component } from 'react';

class About extends Component{
    constructor(props) {
        super(props);
        this.handleCalculation = this.handleCalculation.bind(this);
    }
    
    handleCalculation(){
        console.log('hi');
    }

    render(){
        this.handleCalculation();
        return(
            <div>
                <h2>About</h2>
            </div>
        );
    }
}

export default About;