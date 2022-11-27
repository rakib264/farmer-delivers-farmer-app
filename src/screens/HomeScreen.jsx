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

const HomeScreen = ({ navigation }) => {
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
        <View style={{marginHorizontal: 15}}>
          <View style={styles.secondWrapper}>
            <View style={styles.wrapOne}>
              <Text style={styles.titleStyleOne}>Farmex_Farm101</Text>
              <View style={styles.contentWrapOne}>
                <Text style={{ fontSize: 14, fontWeight: "400" }}>12</Text>
                <Text style={{ fontSize: 14, fontWeight: "400" }}>Plants</Text>
              </View>
            </View>
            <View style={styles.wrapTwo}>
              <Text style={{ fontSize: 14, color: "black", fontWeight: "600" }}>
                Scroll Location
              </Text>
              <MapView
                style={{ width: "100%", height: 160, marginTop: 5 }}
                region={mapRegion}
              >
                <Marker coordinate={mapRegion} title="Marker" />
              </MapView>
            </View>
            <View>
              <View>
                <View
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 10,
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
                        fontSize: 14,
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
                        fontSize: 14,
                        fontWeight: "bold",
                        color: showDesc === false ? "#FD6A65" : "black",
                      }}
                    >
                      Plant Condition
                    </Text>
                  </TouchableOpacity>
                </View>
                <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, height: 150 }}>
                  {showDesc ? (
                    <View
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                      }}
                    >
                      <View style={styles.wrapContainer}>
                        <TouchableOpacity style={styles.contentContainer}>
                          <View style={styles.structContent}>
                            <Ionicons name='thermometer-outline' size={18} color='black' />
                            <Text>Temp. Level</Text>
                          </View> 
                          <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold' }}>22 C</Text> 
                        </TouchableOpacity> 
                        <TouchableOpacity style={styles.contentContainer}>
                        <View  style={styles.structContent}>
                            <Ionicons name='speedometer-outline' size={18} color='black' />
                            <Text>Do Level</Text>
                        </View> 
                        <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold' }}>5.5</Text> 
                      </TouchableOpacity>   
                    </View> 
                    <View style={styles.wrapContainer}>
                        <TouchableOpacity style={styles.contentContainer}>
                          <View style={styles.structContent}>
                            <Ionicons name='sync-circle-outline' size={18} color='black' />
                            <Text>Filteration</Text>
                          </View> 
                          <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold' }}>4 Times</Text> 
                        </TouchableOpacity> 
                        <TouchableOpacity style={styles.contentContainer}>
                        <View  style={styles.structContent}>
                            <Ionicons name='timer-outline' size={18} color='black' />
                            <Text>PH Level</Text>
                        </View> 
                        <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold' }}>6.9</Text> 
                      </TouchableOpacity>   
                    </View>  
                    </View>
                  ) : (
                    <View
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 5,
                      }}
                    >
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
                    </View>
                  )}
                </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
        <View style={{ position: 'absolute', bottom: 5, left: 20}}>
          <Text onPress={() => navigation.navigate('TempStack')}>Temp</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      marginBottom: 5,
      
    },
    firstWrapper: {
      width: screenWidth,
      height: screenWidth * .85,
      backgroundColor: "#086972",
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    secondWrapper: {
      flex: 1,
      width: screenWidth - 30,
      backgroundColor: "white",
      padding: 5,
      borderRadius: 20,
      borderWidth: 8,
      borderColor: "#EDF0EF",
      position: "absolute",
      top: - (screenWidth/3 + 35),
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
    wrapContainer:{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 2
    },
    contentContainer:{
      backgroundColor: '#e2f3f5',
      width: '48%',
      paddingVertical: 12,
      paddingHorizontal: 18,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: "#17b978",
    },
    structContent: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      borderRadius: 15
    }
  });

export default HomeScreen;
