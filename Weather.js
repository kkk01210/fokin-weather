import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "썬더스톰",
    subtitle: "",
    img:
      "https://image10.coupangcdn.com/image/retail/images/45324537240727-27be739b-1c95-4ae5-b9db-c48bd32c3ab7.jpg",
  },
  Drizzle: {
    gradient: ["#89F7FE", "#66A6FF"],
    title: "참이슬",
    subtitle: "",
    img:
      "data:image/jpeg;base64,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",
  },
  Rain: {
    gradient: ["#00C6FB", "#005BEA"],
    title: "비왕",
    subtitle: "",
    img: "http://image.auction.co.kr/itemimage/1d/56/22/1d5622f266.jpg",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "눈왕",
    subtitle: "",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVdjSzxyQAI8yb6aKbcqHMzP4Bw_e1aEX5aQ&usqp=CAU",
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74yRAG9-MzAriHculEFtkzkHXYlSEGoZXlw&usqp=CAU",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "맑앙",
    subtitle: "",
    img:
      "data:image/jpeg;base64,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",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "흐령",
    subtitle: "",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdakrcQvY8M6ANHUzXrT2Kq9Ile6H4hq6j1g&usqp=CAU",
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "미스퉁",
    subtitle: "",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSamRrwynaYDYkTFoMpAHQkoL70feEfOEHI4A&usqp=CAU",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "먼징",
    subtitle: "",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMh2XL51Rb5MJzK4tpvTcvW4P8nNWE9XHnIQ&usqp=CAU",
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "흐령",
    subtitle: "",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7RKcFk5mRkRNoF6Wns-5qoI2anV4-MZoeQ&usqp=CAU",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Image
          style={styles.logo}
          source={{
            uri: weatherOptions[condition].img,
          }}
        ></Image>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
    textAlign: "left",
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 40,
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    marginTop: 100,
    height: 200,
    width: 200,
  },
});
