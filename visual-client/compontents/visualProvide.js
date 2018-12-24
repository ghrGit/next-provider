
import * as React from 'react';

import Visual from '../compontents/visual'

import { visualContext } from '../context/visual'

export default class VisualProvider extends React.Component {
  state = {
    color: 'blue'
  };

  render() {
    return (
      <visualContext.Provider
        value={{
          color: this.state.color,
          size: 20
        }}
      >
        <Visual /> 
      </visualContext.Provider>
    );
  }
}