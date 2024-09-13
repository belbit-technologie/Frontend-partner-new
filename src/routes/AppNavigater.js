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
import tw from 'twrnc';

import InstructorReg from '../screens/Instructor/InstructorReg';
import InstructorHome from '../screens/Instructor/InstructorHome';

import SchoolHome from '../screens/School/SchoolHome';
import NewEmp from '../screens/School/NewEmp';
import SchoolReg from '../screens/School/SchoolReg';
import EmpProfile from '../screens/School/EmpProfile';
import Profile from '../screens/Instructor/Profile';

const Stack = createNativeStackNavigator();

function AppNavigater() {
  return (
    <Stack.Navigator
      initialRouteName="Selectpath"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Logo" component={Logo} />
      <Stack.Screen name="MobileNumber" component={MobileNumber} />
      <Stack.Screen name="Otp" component={Otp} />
      
      <Stack.Screen name="Selectpath" component={Selectpath} />

      <Stack.Screen name="School/Reg" component={SchoolReg} />
      <Stack.Screen name="School/Home" component={SchoolHome} />
      <Stack.Screen name="School/EmpProfile" component={EmpProfile} />
      <Stack.Screen name="School/NewEmp" component={NewEmp} />

      <Stack.Screen name="Instructor/Reg" component={InstructorReg} />
      <Stack.Screen name="Instructor/Home" component={InstructorHome} />
      <Stack.Screen name="Instructor/Profile" component={Profile} />

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
