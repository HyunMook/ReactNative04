import { StyleSheet } from 'react-native';

const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  bg_yellow: {
    backgroundColor: '#f6e58d',
  },
  f_alignc: {
    textAlign: 'center',
  },
  color_white: {
    color: '#fff',
  },
  h1: {
    paddingVertical: 12,
    fontWeight: 'bold',
    fontSize: 60,
  },
  h2: {
    paddingVertical: 12,
    fontWeight: 'bold',
    fontSize: 48,
  },
  h3: {
    paddingVertical: 12,
    fontWeight: 'bold',
    fontSize: 36,
  },
  h4: {
    paddingVertical: 12,
    fontWeight: 'bold',
    fontSize: 24,
  },
  h5: {
    paddingVertical: 12,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CommonStyles;
