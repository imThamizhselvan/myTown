import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginLeft: 25,
    marginRight: 25,
  },
  centerWrapper: {
    marginTop: 25,
    marginBottom: 15,
  },
  textBox: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  rightAlignedText: {
    color: '#4B4DEA',
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  button: {
    borderRadius: 25,
    backgroundColor: '#5100A1',
    marginTop: 25,
  },
  primaryTitle: {
    color: '#6E2CB1',
    fontSize: 35,
    fontWeight: 'bold',
  },
  secondaryTitle: {
    color: '#57CFBD',
    fontWeight: 'bold',
  },
  close: {
    marginTop: 25,
    marginBottom: 25,
  }
});
