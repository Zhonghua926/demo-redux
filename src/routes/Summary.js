import React, { Component } from 'react';

import store from '../store';

export default class Summary extends Component {
    constructor(props) {
        super(props);

        this.state = this.getOwnState();
    }
    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }
    getOwnState = () => {
        const { reducerCaption } = store.getState();
        let sum = 0;
        for ( const key in reducerCaption) {
            if (reducerCaption.hasOwnProperty(key)) {
                sum += reducerCaption[key];
            }
        }
        return { sum };
    }
    onChange = () => {
        this.setState(this.getOwnState());
    }
    render() {
        const { sum } = this.state;
        return (
            <div>Total Count: {sum}</div>
        )
    }
}