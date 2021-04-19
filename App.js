import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "a7ed9a63ec4f0bd5c170854a3143f2d7";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  // data에 main에 temp(온도)를 가져옴
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
    });
  };
  getLocation = async () => {
    try {
      await Location.getForegroundPermissionsAsync();
      // 위치가져와도돼?
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // 지금 내 위치
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  // temp, condition을 넣은  이유는 weather 컴포넌트에서 부를 수 있게 하려고
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
