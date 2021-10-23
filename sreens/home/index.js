import React, { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

import RNPickerSelect from "react-native-picker-select";
function HomeScreen() {
  const initialState = {
    last12h: {
      "11:00": "36.6",
      "12:00": "36.2",
      "13:00": "36.7",
      "14:00": "36.5",
      "15:00": "36.4",
      "16:00": "36.8",
      "17:00": "36.9",
      "18:00": "37.2",
      "19:00": "37.5",
      "20:00": "36.8",
      "21:00": "36.6",
    },
    last6h: {
      "11:00": "36.6",
      "12:00": "36.2",
      "13:00": "36.7",
      "14:00": "36.5",
      "15:00": "36.4",
      "16:00": "36.8",
    },
    last1h: {
      "11:00": "36.6",
      "11:10": "36.4",
      "11:20": "36.4",
      "11:30": "36.1",
      "11:40": "36.5",
      "11:50": "36.8",
      "11:50": "36.6",
    },
  };
  const [selectSort, setSelectSort] = useState(null);
  const [selectSortY, setSelectSortY] = useState();
  const last12hX = {
    "11:00": "36.6",
    "12:00": "36.2",
    "13:00": "36.7",
    "14:00": "36.5",
    "15:00": "36.4",
    "16:00": "36.8",
    "17:00": "36.9",
    "18:00": "37.2",
    "19:00": "37.5",
    "20:00": "36.8",
    "21:00": "36.6",
  };
  const last6hX = {
    "11:00": "36.6",
    "12:00": "36.2",
    "13:00": "36.7",
    "14:00": "36.5",
    "15:00": "36.4",
    "16:00": "36.8",
  };
  const last1hX = {
    "11:00": "36.6",
    "11:10": "36.4",
    "11:20": "36.4",
    "11:30": "36.1",
    "11:40": "36.5",
    "11:50": "36.8",
    "11:50": "36.6",
  };
  const pickerStyle = {
    placeholder: {
      color: "white",
    },
    inputAndroid: {
      color: "black",
      backgroundColor: "white",
      paddingHorizontal: 0,
    },
  };
  console.log(initialState.last12h["11:00"]);
  const handlerSelectSort = (value) => {
    const sort = Object.keys(initialState).filter((el) => el === value);
    setSelectSort(initialState[sort[0]]);
  };

  let x = [];
  let y = [];
  for (let key in selectSort) {
    y.push(selectSort[key]);
    x.push(key);
  }
  console.log(y);
  return (
    <View>
      <View style={{ marginLeft: 30, marginTop: 15 }}>
        <Text style={{ fontSize: 17 }}>График температуры тела</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <LineChart
          data={{
            labels: x,
            datasets: [
              {
                data: y,
              },
            ],
          }}
          width={Dimensions.get("window").width - 50} // from react-native
          height={200}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 220,
          marginTop: 200,
          color: "#000",
        }}
      >
        <RNPickerSelect
          onValueChange={(value) => handlerSelectSort(value)}
          style={pickerStyle}
          placeholder={{
            label: "Сортировка по:",
            value: null,
          }}
          items={[
            { label: "Час", value: "last1h" },
            { label: "Шесть часов", value: "last6h" },
            { label: "Двенадцать часов", value: "last12h" },
          ]}
        />
      </View>
    </View>
  );
}

export { HomeScreen };
