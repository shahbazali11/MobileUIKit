import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5DB075',
  },
  warning: {
    marginTop: 208,
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: 'red',
  },
  warningText: {
    padding: 16,
    textAlign: 'center',
  },
  header: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: 'black',
  },
  action: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clickMe: {
    marginHorizontal: 16,
    padding: 16,
    height: 50,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5DB075',
    borderRadius: 100,
  },
  buttonClickText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonActionText: {
    color: '#5DB075',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
