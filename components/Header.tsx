import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primaryGreen,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 20,
  },
  text: {
    alignSelf: 'center',
    color: colors.black,
    fontSize: 30,
  },
});

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Mealplanner Native</Text>
  </View>
);

export default Header;
