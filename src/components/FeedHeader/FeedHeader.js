import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const FeedHeader = ({source, head, time, detail}) => {
  return (
    <View style={styles.check}>
      <Image source={source} style={styles.checkImg} />
      <View style={styles.details}>
        <View style={styles.dHeader}>
          <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
            {head}
          </Text>
          <Text style={{color: '#BDBDBD'}}>{time}</Text>
        </View>
        <Text style={styles.text}>{detail}</Text>
      </View>
    </View>
  );
};

export {FeedHeader};

const styles = StyleSheet.create({
  check: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 30,
  },
  checkImg: {
    width: 50,
    height: 50,
    marginTop: 3,
    borderRadius: 15,
  },
  details: {
    flexDirection: 'column',
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
  dHeader: {
    marginLeft: 10,
    marginRight: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
