import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Linking,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import axios from 'axios';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons2 from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Navebar from '../componant/Navebar/Navebar';
function Home() {
  const navigation = useNavigation();
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationName, setLocationName] = useState(null);
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const [region, setRegion] = useState({
    latitude: 28.5449127,
    longitude: 77.2691532,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    requestLocationPermissionAndFetch();
  }, []);

  const requestLocationPermissionAndFetch = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
        getCurrentLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocation = async () => {
    try {
      Geolocation.getCurrentPosition(
        async position => {
          const {latitude, longitude} = position.coords;
          setCurrentLocation({latitude, longitude});
          setRegion({
            latitude,
            longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          });
          console.log('Current location:', latitude, longitude);

          const apiKey = 'AIzaSyCm3WwUsMToIr6L2VWtaKg-fClolpLz6n0';
          const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

          try {
            const response = await axios.get(url);
            if (response.data.status === 'OK') {
              const address = response.data.results[0].formatted_address;
              setLocationName(address);
              console.log('Location name:', address);
            } else {
              console.log('Geocoding error:', response.data.status);
            }
          } catch (error) {
            console.error('Geocoding API error:', error);
          }
        },
        error => {
          alert('Error', error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  };
  // getAddress = async () => {
  //   let {status} = await Location.requestForegroundPermissionsAsync();
  //   if (status !== 'granted') {
  //     alert('Permission to access location was denied');
  //     return;
  //   }
  //   try {
  //     let location = await Location.getCurrentPositionAsync({});
  //     let address = await Location.reverseGeocodeAsync({
  //       latitude: location.coords.latitude,
  //       longitude: location.coords.longitude,
  //     });
  //     console.log(address);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const FourWheelerSection = () => {
    navigation.navigate('FourWheeler/FourWheeler'); // Adjust the route name if needed
  };
  const TwoWheelerSection = () => {
    navigation.navigate('TwoWheeler/TwoWheeler'); // Adjust the route name if needed
  };
  const PersonalTeacherSection = () => {
    navigation.navigate('User/Otp'); // Adjust the route name if needed
  };

  const openMaps = () => {
    if (currentLocation) {
      const {latitude, longitude} = currentLocation;
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      Linking.openURL(url);
    } else {
      alert('No Location Found');
    }
  };

  return (
    <ScrollView style={tw`flex-1 bg-[#000] `}>
      <View style={tw`h-[500px] items-center justify-center bg-white w-full `}>
        <View style={tw`flex-1 w-full  bg-[#000] rounded-br-[20px] `}>
          <TouchableOpacity
            style={tw`m-5`}
            onPress={() => setDrawerVisible(true)}>
            <Entypo name="unread" size={50} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={tw`text-white text-3xl font-bold  m-5 `}>
              {' '}
              Start Your Earning
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={tw`text-white text-2xl ml-8 `}>
              Start your journey
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Text
              style={tw`text-black text-2xl m-8 p-1 w-2/5 text-center border border-white bg-[#fff] rounded-3xl `}>
              Subscribe
            </Text>
          </TouchableOpacity> */}
        </View>
        <View style={tw`flex-1 w-full h-[400px] flex-col bg-white`}>
          <View
            style={tw` h-[400px] border border-gray-200 flex-row justify-center items-center`}></View>
          <View>
            <TouchableOpacity
              style={tw` h-[50px] text-black border border-gray-200 bg-gray-200 text-ml p-2  m-5 rounded-2xl`}>
              <Text style={tw`text-black text-ml font-bold p-1`}>
                {' '}
                Find trainer
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={tw` h-[50px] text-black m-5`}>
              {locationName ? (
                <Text style={tw`text-black text-ml font-bold p-1`}>
                  {locationName}
                  <Ionicons name="location-outline" size={24} color="black" />
                </Text>
              ) : (
                <Text style={tw`text-black text-ml font-bold p-1`}>
                  Fetching location...
                  <Ionicons name="location-outline" size={24} color="black" />
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={tw`h-[500px] items-center  justify-center bg-gray-200 w-full rounded-tl-[30px] rounded-tr-[30px]`}>
        <TouchableOpacity onPress={getCurrentLocation}>
          <Text
            style={tw`text-black text-xl p-2 items-center justify-center  mt-10`}>
            Your current location
            <MaterialIcons name="my-location" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <MapView
          style={tw`flex-1 w-[300px] h-full rounded-2xl mt-15 mb-15`}
          initialRegion={region}
          region={region}
          onRegionChangeComplete={setRegion}
          provider={PROVIDER_GOOGLE}>
          {currentLocation && (
            <Marker
              coordinate={currentLocation}
              title="You are here"
              description="This is your current location"
            />
          )}
        </MapView>
        <TouchableOpacity
          style={tw`flex-row items-center justify-center border  rounded-lg bg-white absolute bottom-0 right-2 mb-4`}>
          <Text></Text>
        </TouchableOpacity>
      </View>
      <Navebar
        isVisible={isDrawerVisible}
        onClose={() => setDrawerVisible(false)}
      />
    </ScrollView>
  );
}

export default Home;
