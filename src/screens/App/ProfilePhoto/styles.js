import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  head: {
    height: 217,
    backgroundColor: '#5DB075',
    paddingHorizontal: (width / 100) * 5,
    paddingTop: (width / 100) * 5,
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
    height: 200,
    width: 200,
    borderColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: -130,
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
  profileImage: {
    alignSelf: 'center',
    marginTop: 18,
    height: 240,
    borderRadius: 8,
  },
  detailHText: {
    color: 'black',
    fontSize: 30,
    fontWeight: '600',
  },
  detailText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
