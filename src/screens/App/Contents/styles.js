import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginBottom: 16,
    marginTop: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  inputcontainer: {
    backgroundColor: '#F6F6F6',
    marginTop: 16,
    borderRadius: 100,
    height: 50,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    padding: 16,
  },
  cont: {
    marginTop: 16,
  },
  contentBox: {
    height: 240,
    width: 325,
    borderRadius: 8,
  },
  dHeader: {
    marginLeft: 10,
    marginRight: 50,
    alignItems: 'center',
  },
});

export default styles;
