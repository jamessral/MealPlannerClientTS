import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends React.Component<{}> {
  render() {
    return <Header />;
  }
}

export default App;
