import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

function HomeScreen() {
  return (
    <View>
      <View style={{ marginTop: 20, marginLeft: 30 }}>
        <Text style={{ fontSize: 17 }}>График температуры человека</Text>
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
            labels: ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
            datasets: [
              {
                data: [36.6, 36.4, 36.8, 36.2, 36.6, 36.5, 36.6],
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
          marginTop: 200,
          backgroundColor: "#f89b00",
          width: 360,
          height: 60,
          marginLeft: 25,
          marginTop: 240,
          borderRadius: 20,
        }}
      >
        <Text
          style={{ fontSize: 20, marginLeft: 20, marginTop: 17, color: "#fff" }}
        >
          Состояние здоровья: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 😊
        </Text>
      </View>
    </View>
  );
}

export { HomeScreen };
