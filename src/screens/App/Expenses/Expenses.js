import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {BarChart, chartConfig} from 'react-native-chart-kit';

const Expenses = () => {
  const screenWidth = Dimensions.get('window').width;
  const data = {
    labels: ['Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item'],
    datasets: [
      {
        data: [1000, 1200, 2634, 8341, 653, 6543, 9876, 1234],
      },
    ],
  };
  return (
    <View>
      <Text>Bezier Line Chart</Text>
      <BarChart
        //style={graphStyle}
        data={data}
        width={screenWidth}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </View>
  );
};

export default Expenses;

const styles = StyleSheet.create({});
