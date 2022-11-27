import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { SelectList } from "react-native-dropdown-select-list";
import React from "react";
import { useState } from "react";

export default function HumidityChart() {
  const [selected, setSelected] = useState("");

  const data = [
    { key: "2", value: "This Week" },
    { key: "3", value: "Previous Week" },
  ];

  const thisWeek = [
    "22 Nov",
    "23 Nov",
    "24 Nov",
    "25 Nov",
    "26 Nov",
    "27 Nov",
    "28 Nov",
  ]

  const prevWeek = [
    "14 Nov",
    "15 Nov",
    "16 Nov",
    "18 Nov",
    "19 Nov",
    "20 Nov",
    "20 Nov",
  ]

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 30}}>
          <View style={{width: '50%',}}>
            <Text
              style={{
                fontSize: 25,
                marginBottom: 10,
                fontWeight: "700",
              }}
            >
              Humidity Level
            </Text>
          </View>
          <View style={{width: '50%'}}>
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
            search={false}
            defaultOption={{ key: "2", value: "This Week" }} 
          />
          </View>
          </View>
          <View>
            <LineChart
              data={{
                labels: selected=== 'This Week'? thisWeek: prevWeek,
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                    ],
                  },
                ],
              }}
              width={Dimensions.get("window").width - 40} // from react-native
              height={220}
              yAxisSuffix="%"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "white",
                backgroundGradientFrom: "white",
                backgroundGradientTo: "white",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(62, 175, 111, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 5,
                },
                propsForDots: {
                  r: "5",
                  strokeWidth: "5",
                  stroke: "green",
                  barPercentage: 0.5,
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }} 
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 13,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 45,
    paddingHorizontal: 45,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
