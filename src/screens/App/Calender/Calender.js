import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';

import ABC from '../../../../CustomModule';

const Calender = () => {
  const [deviceId, setDeviceId] = useState('');

  useEffect(() => {
    const fetchDiviceId = async () => {
      const id = await ABC.getDeviceId();
      setDeviceId(id);
    };
    fetchDiviceId();
  }, []);

  ABC.show();
  return (
    <View>
      <Text>Calender</Text>
      <Text>{deviceId}</Text>
    </View>
  );
};

export default Calender;

const styles = StyleSheet.create({});
