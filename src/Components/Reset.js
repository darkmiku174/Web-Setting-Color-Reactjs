import React, { Component } from 'react';

class Reset extends Component {
	reset () {
		this.props.onReset();
	}

    render () {
    	return (
        	<button type="button" className="btn btn-primary" onClick = { () => this.reset() } >reset</button>
        );
    }
}

export default Reset;
