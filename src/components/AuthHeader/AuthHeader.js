import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const AuthHeader = ({
  leftRightTitleStyle,
  rightTitle,
  leftTitle,
  mainTitle,
  onPressLeft,
  onPressRight,
  isLeftImage,
  isLeftText,
  mainStyle,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressLeft}>
        {isLeftImage && (
          <Image
            source={require('../../assets/cross.png')}
            style={styles.crossImg}
            resizeMode={'contain'}
          />
        )}
        {isLeftText && (
          <Text style={[styles.leftRightTitleStyle, {...leftRightTitleStyle}]}>
            {leftTitle}
          </Text>
        )}
      </TouchableOpacity>
      <Text style={[styles.mainTitleStyle, {...mainStyle}]}>{mainTitle}</Text>
      <TouchableOpacity onPress={onPressRight}>
        <Text style={[styles.leftRightTitleStyle, {...leftRightTitleStyle}]}>
          {rightTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export {AuthHeader};

const styles = StyleSheet.create({
  container: {
    marginVertical: (width / 100) * 5,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftRightTitleStyle: {
    color: '#5DB075',
    fontSize: 16,
  },
  crossImg: {
    width: (width / 100) * 6,
    height: (width / 100) * 6,
    marginTop: (width / 100) * 1,
  },
  mainTitleStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
