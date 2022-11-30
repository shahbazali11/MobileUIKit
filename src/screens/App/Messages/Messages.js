import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, TextInput, FlatList} from 'react-native';
import styles from './styles';

const Messages = () => {
  const [search, setSearch] = '';
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerSText}>Messages</Text>
        <TouchableOpacity>
          <Text style={styles.headerText}>Filter</Text>
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
