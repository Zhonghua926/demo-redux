import React, { Component } from 'react';
import Counter from './Counter';
import Summary from './Summary';
import FontSize from './FontSize';

const style = {
    margin: '20px'
}

export default class App extends Component {
    render() {
        return (
            <div style={style}>
                <Counter caption="First" />
                <Counter caption="Second" />
                <Counter caption="Third" />
                <Summary />
                <hr/>
                <FontSize />
            </div>
        )
    }
} 