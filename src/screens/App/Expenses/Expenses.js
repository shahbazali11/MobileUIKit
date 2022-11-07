import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const Expenses = () => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <View>
      <Text>Bezier Line Chart</Text>
      <BarChart
        data={{
          labels: [
            'Item',
            'Item',
            'Item',
            'Item',
            'Item',
            'Item',
            'Item',
            'Item',
          ],
          datasets: [
            {
              data: [1000, 1200, 2634, 8341, 653, 6543, 9876, 1234],
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: 'white',
          backgroundGradientFrom: '#daf448',
          backgroundGradientTo: 'black',
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(225, 755, 285, ${opacity})`,
          //   labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 80,
            backgroundColor: 'green',
          },
          propsForDots: {
            r: '8',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          backgroundColor: 'green',
          color: 'red',
        }}
      />
    </View>
  );
};

export default Expenses;

const styles = StyleSheet.create({});
