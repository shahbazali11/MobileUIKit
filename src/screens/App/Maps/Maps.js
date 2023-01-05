import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const Maps = ({route}) => {
  const {city, latitude, longitude, markers} = route.params;

  return (
    <View style={styles.textView}>
      <Text style={styles.cityText}>{city}</Text>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {markers?.map(marker => {
          <Marker
            image={marker.markerImage}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
          />;
        })}
      </MapView>
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({
  mainConteiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  cityText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00f',
  },
  textView: {
    alignItems: 'center',
    backgroundColor: '#30f127',
  },
});
