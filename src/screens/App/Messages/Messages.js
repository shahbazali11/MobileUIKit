import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, TextInput, FlatList} from 'react-native';
import styles from './styles';

const Messages = () => {
  const [search, setSearch] = '';
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={{color: '#5DB075', fontSize: 16}}>Back</Text>
        </TouchableOpacity>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 30}}>
          Messages
        </Text>
        <TouchableOpacity>
          <Text style={{color: '#5DB075', fontSize: 16}}>Filter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.show}>
        <TextInput
          style={styles.inputcontainer}
          value={search}
          onChangeText={setSearch}
          underlineColorAndroid="transparent"
          placeholder="Search"
          keyboardType="ascii-capable"
        />
        <Text>Show</Text>
      </View>
    </View>
  );
};

export default Messages;
