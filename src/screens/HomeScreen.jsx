import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import GlobalSafeareaStyle from "../utils/GlobalSafeArea.jsx";
import { Ionicons } from "react-native-vector-icons";
import HomeBar from "../coms/common/HomeBar.jsx";
import { Search } from "../coms/Search.jsx";
import HomeStatusBar from "../coms/common/HomeStatusBar.jsx";
import MapView, { Marker } from "react-native-maps";

const screenWidth = Dimensions.get("window").width;

const HomeScreen = () => {
  const [showDesc, setShowDesc] = useState(true);
  const [readMore, setReadMore] = useState(false);
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const scrollBtnTapDesc = () => {
    setShowDesc(!showDesc);
  };

  const scrollBtnTapReviews = () => {
    setShowDesc(!showDesc);
  };

  return (
    <SafeAreaView style={GlobalSafeareaStyle.androidSafeArea}>
      <View style={styles.container}>
        <View style={styles.firstWrapper}>
          <HomeStatusBar />
          <Search />
        </View>
        <View>
          <View style={styles.secondWrapper}>
            <View style={styles.wrapOne}>
              <Text style={styles.titleStyleOne}>Farmex_Farm101</Text>
              <View style={styles.contentWrapOne}>
                <Text style={{ fontSize: 14, fontWeight: "400" }}>12</Text>
                <Text style={{ fontSize: 14, fontWeight: "400" }}>Plants</Text>
              </View>
            </View>
            <View style={styles.wrapTwo}>
              <Text style={{ fontSize: 16, color: "black", fontWeight: "500" }}>
                Scroll Location
              </Text>
              <MapView
                style={{ width: "100%", height: 150, marginTop: 10 }}
                region={mapRegion}
              >
                <Marker coordinate={mapRegion} title="Marker" />
              </MapView>
            </View>
            <View style={styles.wrapThree}>
              <View style={styles.itemWrapper}>
                <Ionicons name="cloud-outline" size={18} color="black" />
                <Text style={{ fontSize: 12, fontWeight: "300" }}>
                  House Wind
                </Text>
                <Text style={{ fontSize: 14, fontWeight: "600" }}>5 m/s</Text>
              </View>
              <View style={styles.itemWrapper}>
                <Ionicons name="leaf-outline" size={18} color="black" />
                <Text style={{ fontSize: 12, fontWeight: "300" }}>
                  Plant Condition
                </Text>
                <Text style={{ fontSize: 14, fontWeight: "600" }}>Good</Text>
              </View>
              <View style={styles.itemWrapper}>
                <Ionicons name="water-outline" size={18} color="black" />
                <Text style={{ fontSize: 12, fontWeight: "300" }}>
                  Humidity
                </Text>
                <Text style={{ fontSize: 14, fontWeight: "600" }}>20 %</Text>
              </View>
            </View>
            <View>
              <View>
                <View
                  style={{
                    width: 230,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      padding: 5,
                      borderBottomWidth: showDesc === true ? 3 : 0,
                      borderBottomColor: showDesc === true ? "#FD6A65" : "",
                    }}
                    onPress={scrollBtnTapDesc}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: showDesc === true ? "#FD6A65" : "black",
                      }}
                    >
                      System Preferences
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      padding: 5,
                      borderBottomWidth: showDesc === false ? 3 : 0,
                      borderBottomColor: showDesc === false ? "#FD6A65" : "",
                    }}
                    onPress={scrollBtnTapReviews}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: showDesc === false ? "#FD6A65" : "black",
                      }}
                    >
                      Plants
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ height: 150 }}>
                  {showDesc ? (
                    <View
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 5,
                      }}
                    >
                      <Text style={{ fontSize: 12, color: "#323232" }}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                      </Text>
                    </View>
                  ) : (
                    <View
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 5,
                      }}
                    >
                      <Text style={{ fontSize: 18, color: "#323232" }}>
                        Reviews
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F1EF",
  },
  firstWrapper: {
    width: screenWidth,
    height: screenWidth * 0.8,
    backgroundColor: "#086972",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  secondWrapper: {
    flex: 1,
    width: "90%",
    backgroundColor: "white",
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 20,
    borderWidth: 10,
    borderColor: "#EDF0EF",
    position: "absolute",
    top: -140,
  },
  wrapOne: {
    backgroundColor: "#EDF0EF",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentWrapOne: {
    backgroundColor: "#fff4e3",
    width: 80,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#17b978",
  },
  contentWrapTwo: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleStyleOne: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  wrapTwo: {
    backgroundColor: "#EDF0EF",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  wrapThree: {
    backgroundColor: "#EDF0EF",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
