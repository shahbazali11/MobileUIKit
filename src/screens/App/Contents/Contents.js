import {Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './styles';

import React, {useState} from 'react';

const Contents = ({route, navigation}) => {
  const [search, setSearch] = useState('');
  const {source, head, time, detail} = route.params;

  return (
    <View style={styles.container}>
      <View style={{padding: 16}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
            <Text style={{color: '#5DB075', fontSize: 16}}>Back</Text>
          </TouchableOpacity>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 30}}>
            Contents
          </Text>
          <TouchableOpacity>
            <Text style={{color: '#5DB075', fontSize: 16}}>Filter</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.inputcontainer}
          onChangeText={setSearch}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search"
          keyboardType="ascii-capable"
        />
        <View style={styles.cont}>
          <Image source={source} style={styles.contentBox} />
        </View>
        <View>
          <View style={styles.cont}>
            <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
              {head}
            </Text>
            <Text>{detail}</Text>
            <Text style={{color: '#BDBDBD'}}>{time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Contents;
