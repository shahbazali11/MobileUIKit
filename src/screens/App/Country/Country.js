import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const Country = ({navigation}) => {
  const [data, setData] = useState([
    {
      country: 'Pakistan',
      city: 'Lahore',
      latitude: 31.582045,
      longitude: 74.329376,
      markers: [
        {
          title: 'Location 1',
          latitude: 31.582047,
          longitude: 74.309376,
          markerImage: require('../../../assets/marker.png'),
          weight: 19,
        },
        {
          title: 'Location 2',
          latitude: 31.523147,
          longitude: 74.309476,
          markerImage: require('../../../assets/marker.png'),
          weight: 19,
        },
        {
          title: 'Location 3',
          latitude: 31.503047,
          longitude: 74.399376,
          markerImage: require('../../../assets/marker.png'),
          weight: 19,
        },
      ],
    },
    {
      country: 'Norway',
      city: 'Burgen',
      latitude: 60.3913,
      longitude: 5.3221,
    },
    {
      country: 'Germeny',
      city: 'Berlin',
      latitude: 52.52,
      longitude: 13.405,
    },
    {
      country: 'France',
      city: 'Paris',
      latitude: 48.8566,
      longitude: 2.3522,
    },
  ]);

  const [locationsLHR, setLocationsLHR] = useState([
    {
      title: 'Location 1',
      latitude: 31.583047,
      longitude: 74.309376,
    },
    {
      title: 'Location 2',
      latitude: 31.523147,
      longitude: 74.309476,
    },
    {
      title: 'Location 1',
      latitude: 31.503047,
      longitude: 74.399376,
    },
  ]);

  const handleRenderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Maps', {
            city: item.city,
            latitude: item.latitude,
            longitude: item.longitude,
            markers: item.markers,
          });
        }}
        style={styles.selectCountryButton}>
        <Text style={styles.countryText}>{item.country}</Text>
        <Text style={styles.cityText}>{item.city}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        renderItem={handleRenderItem}
        data={data}
        keyExtractor={(item, index) => item + index.toString()}
      />
    </View>
  );
};

export default Country;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  selectCountryButton: {
    marginTop: 20,
    width: (width / 100) * 85,
    height: (height / 100) * 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0f',
    padding: 15,
  },
  countryText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000dae',
    marginBottom: 8,
  },
  cityText: {
    color: 'black',
  },
});
