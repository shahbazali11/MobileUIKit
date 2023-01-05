import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

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
  },
  inputcontainer: {
    backgroundColor: '#F6F6F6',
    marginTop: 16,
    borderRadius: 8,
    height: 50,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    padding: 16,
  },
  crossImg: {
    width: 20,
    height: 20,
    marginTop: 3,
  },
  checkImg: {
    width: 16,
    height: 16,
    marginTop: 3,
  },
  check: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 30,
  },
  text: {
    marginLeft: 10,
    color: '#666666',
    alignSelf: 'flex-start',
    fontSize: 14,
    fontWeight: '400',
  },
  submit: {
    height: 50,
    marginTop: 167,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5DB075',
    borderRadius: 100,
  },
  GoogleFbSubmit: {
    height: 50,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#5DB075',
    borderRadius: 100,
    flexDirection: 'row',
  },
  forgot: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: '#5DB075',
    fontSize: 16,
    fontWeight: '600',
  },
  empty: {
    height: (width / 100) * 40,
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  inputText: {
    backgroundColor: '#F6F6F6',
    marginTop: 16,
    borderRadius: 8,
    height: 50,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    padding: 16,
    width: '80%',
    marginTop: 0,
    borderRadius: 0,
    borderWidth: 0,
  },
  LoginButton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  showPassword: {
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
});

export default styles;
