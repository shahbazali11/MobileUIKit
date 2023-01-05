import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './styles';
//
import {AuthHeader, AppInput} from '../../../components';

const Contents = ({route, navigation}) => {
  const [search, setSearch] = useState('');
  const {source, head, time, detail} = route.params;

  return (
    <View style={styles.container}>
      <View style={{padding: 16}}>
        <AuthHeader
          isLeftText
          leftTitle={'Back'}
          mainTitle={'Contents'}
          rightTitle={'Filter'}
        />
        <AppInput
          inputcontainerStyle={{borderRadius: 50}}
          onTextChange={text => setSearch(text)}
          textValue={search}
          placeholderName={'Search'}
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
