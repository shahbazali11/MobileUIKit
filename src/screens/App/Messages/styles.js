import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: '#F6F6F6',
    marginTop: 16,
    justifyContent: 'space-between',
    borderRadius: 100,
    height: 50,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    padding: 16,
  },
  checkImg: {
    width: 50,
    height: 50,
    marginTop: 3,
    borderRadius: 15,
  },
  check: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 30,
  },
  text: {
    marginLeft: 10,
    marginRight: 50,
    color: '#666666',
    alignSelf: 'flex-start',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 8,
  },
  details: {
    flexDirection: 'column',
  },
  dHeader: {
    marginLeft: 10,
    marginRight: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  seprator: {
    height: 1,
    width: '100%',
    backgroundColor: '#E8E8E8',
  },
  show: {
    flexDirection: 'row',
  },
  headerText: {
    color: '#5DB075',
    fontSize: 16,
  },
  headerSText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default styles;
