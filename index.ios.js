import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import Landing from './application/components/Landing';

class assemblies extends Component {
  render() {
    return (
      <Landing />
    );
  }
}

AppRegistry.registerComponent('assemblies', () => assemblies);