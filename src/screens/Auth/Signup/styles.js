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
  check: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 30,
  },
  text: {
    color: '#666666',
    alignSelf: 'flex-start',
    marginTop: 4,
    fontSize: 14,
    fontWeight: '400',
  },
  submit: {
    height: 50,
    marginTop: 43,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5DB075',
    borderRadius: 100,
  },
  forgot: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
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
  showPassword: {
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
  button: {
    color: '#5DB075',
    fontSize: 16,
    fontWeight: '600',
  },
  signupButton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
