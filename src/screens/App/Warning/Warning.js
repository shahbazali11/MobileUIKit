import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Modal, Pressable} from 'react-native';
import styles from './styles';

const Warning = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const onPressHandler = () => {
    if (true > 3) {
      setSubmitted(!submitted);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <View>
      <Modal
        style={{backgroundColor: '#B6A3B0'}}
        // transparent={true}
        collapsable
        visible={showWarning}
        animationType="slide"
        statusBarTranslucent={true}
        onRequestClose={() => setShowWarning(false)}>
        <View style={styles.warning}>
          <Text style={styles.header}>Congratulations!</Text>
          <View>
            <Text style={styles.warningText}>
              Consequat velit qui adipisicing sunt do reprehenderit ad laborum
              tempor ullamco execitation. Ullamco tempor adipisicing et
              voluptate duis sit esse aliqua esse ex dolore esse. Consequat
              velit qui adipisicing sunt.
            </Text>
          </View>
          <TouchableOpacity>
            <View style={styles.clickMe}>
              <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '600'}}>
                Click Me
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.action}>
              <Text style={{color: '#5DB075', fontSize: 16, fontWeight: '600'}}>
                Secondry Action
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
      <View>
        <TouchableOpacity onPress={onPressHandler}>
          <Text>clickMe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Warning;
