import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const SubmitButton = ({
  onPressButton,
  buttonText,
  isLeftGoogleIcon,
  isLeftFacebookIcon,
  isRightText,
}) => {
  return (
    <TouchableOpacity onPress={onPressButton}>
      <View style={styles.submit}>
        {isLeftGoogleIcon && <Icon name="google" size={30} color="white" />}
        {isLeftFacebookIcon && (
          <Icon name="facebook-square" size={30} color="white" />
        )}

        <Text style={styles.signupButton}>{buttonText}</Text>
        {isRightText && <Text style={{color: '#5DB075'}}>.</Text>}
      </View>
    </TouchableOpacity>
  );
};

export {SubmitButton};

const styles = StyleSheet.create({
  signupButton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  submit: {
    height: 50,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#5DB075',
    borderRadius: 100,
    flexDirection: 'row',
  },
});
