import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state = { visibility : false} ;
	};

	showPara = () => {
		this.setState({visibility:true}) ;
	}

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				<button id = "click" onClick = {this.showPara}> Show Paragraph </button>
				this.state.visibility ? (<p id = "para"> Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p> ): null ;
				
    		</div>
    	);
    }
}


export default App;

