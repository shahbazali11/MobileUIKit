import React from 'react';
import {StyleSheet, View, TextInput, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const AppInput = ({
  textValue,
  placeholderName,
  onTextChange,
  secureText,
  containerStyle,
  inputcontainerStyle,
}) => {
  return (
    <View style={[styles.container, {...containerStyle}]}>
      <TextInput
        style={[styles.inputcontainer, {...inputcontainerStyle}]}
        onChangeText={onTextChange}
        value={textValue}
        placeholder={placeholderName}
        keyboardType="ascii-capable"
        secureTextEntry={secureText}
      />
    </View>
  );
};

export {AppInput};
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputcontainer: {
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    marginVertical: (width / 100) * 4,
    height: 50,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    padding: 16,
  },
});
