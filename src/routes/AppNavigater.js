import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Logo from '../screens/Logo';
import Selectpath from '../screens/Selectpath';
import PartnerHome from '../screens/PartnerHome';
import Register from '../screens/Registerlogin/User/Register';
import MobileNumber from '../screens/Registerlogin/User/MobileNumber';
import Otp from '../screens/Registerlogin/User/Otp';
import FourWheeler from '../componant/FourWheeler/FourWheeler';
import Map from '../componant/Map/Map';
import TwoWheeler from '../componant/TwoWheeler/TwoWheeler';
import Login from '../screens/Registerlogin/User/Login';
import InstructorReg from '../screens/DrInstructor/InstructorReg';
import DrivingSchoolReg from '../screens/DrSchool/DrivingSchoolReg';
const Stack = createNativeStackNavigator();

function AppNavigater() {
  return (
    <Stack.Navigator
      initialRouteName="Selectpath"
      screenOptions={{ headerShown: true }}
      >
      <Stack.Screen name="Logo" component={Logo} />
      <Stack.Screen name="MobileNumber" component={MobileNumber} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="Selectpath" component={Selectpath} options={{headerShow: false}} />
      <Stack.Screen name="InstructorReg" component={InstructorReg} />
      <Stack.Screen name="DrivingSchoolReg" component={DrivingSchoolReg} />

      {/* <Stack.Screen name="Selectpath" component={Selectpath} options={{headerShow: false}} /> */}
  
  
  
  
      {/* <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShow: true}}
      /> */}

      {/* <Stack.Screen
        name="User/Login"
        component={Login}
        options={{headerShow: false}}
      /> */}

    

      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShow: false }}
      /> */}
      {/* <Stack.Screen name="FourWheeler/FourWheeler" component={FourWheeler} /> */}
      {/* <Stack.Screen name="Map/Map" component={Map} /> */}
      {/* <Stack.Screen name="TwoWheeler/TwoWheeler" component={TwoWheeler} /> */}
    </Stack.Navigator>
  );
}

export default AppNavigater;
