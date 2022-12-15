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
            <Text style={styles.headerText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerSText}>Contents</Text>
          <TouchableOpacity>
            <Text style={styles.headerText}>Filter</Text>
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
