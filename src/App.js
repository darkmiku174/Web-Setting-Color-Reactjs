import './App.css';
import React, { Component } from 'react';
import ColorPicker from './Components/ColorPicker'
import Reset from './Components/Reset'
import Result from './Components/Result'
import SizeSetting from './Components/SizeSetting'

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            color: 'red',
            fontSize : 12
        };
    }

    onSetColor = (color2set) => {
        this.setState({
            color : color2set
        }); 
    }

    onChangeSize = (size2change) => {
        if(this.state.fontSize + size2change >=8 && this.state.fontSize + size2change <=36){
            this.setState({
                fontSize : this.state.fontSize + size2change
            });
        };
        
    }

    onReset = () => {
        this.setState({
            color : 'red',
            fontSize : 12
        });
    }

    render () {
        return (
            <div className='container mt-50'>
                <div className='row'>
                    <ColorPicker color = { this.state.color } onReceiveColor = { this.onSetColor } />
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting fontSize = { this.state.fontSize } 
                                     onChangeSize = { this.onChangeSize }/>
                        <Reset onReset = { this.onReset } />
                    </div>
                    <Result color = { this.state.color } fontSize = { this.state.fontSize } />
                </div>
            </div>
        );
    }
}

export default App;
