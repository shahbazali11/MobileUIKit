import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginTop: 16,
    marginBottom: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  inputcontainer: {
    marginBottom: 16,
    backgroundColor: '#F6F6F6',
    marginTop: 16,
    borderRadius: 100,
    height: 50,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    padding: 16,
  },
  check: {
    marginTop: 16,
  },
  checkImg: {
    width: 110,
    height: 110,
    marginTop: 3,
    borderRadius: 8,
  },
  details: {
    width: '80%',
  },
});

export default styles;
