import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
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
    alignItems: 'flex-start',
    marginTop: 16,
  },
  checkImg: {
    width: 120,
    height: 120,
    marginTop: 3,
    borderRadius: 15,
  },
  dHeader: {
    marginRight: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  details: {
    flexDirection: 'column',
  },
});

export default styles;
