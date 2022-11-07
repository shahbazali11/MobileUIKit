import {Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './styles';

import React, {useState} from 'react';

const Contents = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
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
        <Image
          source={require('../../../assets/Content_Block.png')}
          style={styles.contentBox}
        />
      </View>
      <View>
        <View style={styles.cont}>
          <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
            Header
          </Text>
          <Text>
            "He'll want to use your yacht, and I don't want this thing smelling
            like fish."
          </Text>
          <Text style={{color: '#BDBDBD'}}>timer</Text>
        </View>
      </View>
    </View>
  );
};

export default Contents;
