import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  block: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
  },
  keyText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  valueText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Styles;
