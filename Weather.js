import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house",
  },
  Drizzle: {
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Is like rain, but gay 🏳️‍🌈",
  },
  Rain: {
    gradient: ["#00C6FB", "#005BEA"],
    title: "Raining like a MF",
    subtitle: "For more info look outside",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Cold as balls",
    subtitle: "Do you want to build a snowman? Fuck no.",
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "Sunny as fuck",
    subtitle: "Go get your ass burnt",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "I know, fucking boring",
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Mist!",
    subtitle: "It's like you have no glasses on.",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Dusty",
    subtitle: "Thanks a lot China 🖕🏻",
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside.",
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
        <Image
          style={styles.logo}
          source={{
            uri:
              "data:image/jpeg;base64,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",
          }}
        ></Image>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
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
    alignItems: "flex-start",
    paddingHorizontal: 40,
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    height: 100,
    width: 100,
  },
});
