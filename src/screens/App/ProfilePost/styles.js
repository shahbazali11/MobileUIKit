import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  head: {
    height: 217,
    backgroundColor: '#5DB075',
  },
  hearder: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  headerpProfileText: {
    fontSize: 30,
    color: 'white',
    fontWeight: '600',
  },
  profilePic: {
    height: 158,
    width: 158,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: -117,
  },
  bodyText: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switch: {
    width: 340,
    height: 42,
    marginTop: 24,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
  },
  switchSelector: {
    width: 171.5,
    height: 46,
    borderRadius: 100,
    borderColor: 'white',
  },
  check: {
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    flexDirection: 'row',
    marginTop: 16,
  },
  checkImg: {
    width: 60,
    height: 60,
    marginTop: 3,
    borderRadius: 8,
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
