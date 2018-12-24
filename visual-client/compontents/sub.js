

import * as React from 'react';
import { subContext } from '../context/sub';

const SubComponent = (props) => (
    <div>
        <div>{props.color}11111</div>
        <div>{props.size}</div>
        <div>{props.text}</div>

    </div>
);
export default class Sub extends React.Component {
    render() {
      const { props } = this
      
      return (
        <subContext.Consumer>
          {({text}) => (
            <SubComponent color={props.color} size={props.size} text={text}/> 
          )}
        </subContext.Consumer>
      );
    }
  }