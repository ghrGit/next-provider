
import * as React from 'react';
import Sub from './sub';
import { subContext } from '../context/sub'

export default class SubProvider extends React.Component {
    state = {
        text: 'subProvider'
    };

    render() {
        const { props } = this
        return (
            <subContext.Provider
                value={{
                    text: this.state.text
                }}
            >
                <Sub size={props.size} color={props.color} />

            </subContext.Provider>
        );
    }
}