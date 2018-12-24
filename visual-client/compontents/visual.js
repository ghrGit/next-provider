import * as React from 'react';
import { visualContext } from '../context/visual';
import { subContext } from '../context/sub';
import  SubProvide from './subProvide';


export default class Visual extends React.Component {
  render() {
    return (
      <visualContext.Consumer>
        {({color, size}) => (
          <SubProvide color={color} size={size} /> 
        )}
      </visualContext.Consumer>
    );
  }
}