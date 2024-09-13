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
import { TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';

import InstructorReg from '../screens/Instructor/InstructorReg';
import InstructorHome from '../screens/Instructor/InstructorHome';

import SchoolHome from '../screens/School/SchoolHome';
import NewEmp from '../screens/School/NewEmp';
import SchoolReg from '../screens/School/SchoolReg';
import EmpProfile from '../screens/School/EmpProfile';

const Stack = createNativeStackNavigator();

function AppNavigater() {
  return (
    <Stack.Navigator
      initialRouteName="Logo"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen name="Logo" component={Logo} />
      <Stack.Screen name="MobileNumber" component={MobileNumber} options={{ title: '' }}/>
      <Stack.Screen name="Otp" component={Otp} options={{ title: '' }}/>

      <Stack.Screen name="Selectpath" component={Selectpath} options={{ headerShow: false, title: 'Choose Category' }} />

      <Stack.Screen name="School/Reg" component={SchoolReg} options={{ title: 'Register' }} />
      <Stack.Screen name="School/Home" component={SchoolHome} options={{ title: 'Dashboard' }} />
      <Stack.Screen name="School/EmpProfile" component={EmpProfile} options={{ title: 'Employee Profile' }} />
      <Stack.Screen name="School/NewEmp" component={NewEmp} options={{ title: 'Add new Employee' }} />

      <Stack.Screen name="Instructor/Reg" component={InstructorReg} options={{ title: 'Register' }} />
      <Stack.Screen name="Instructor/Home" component={InstructorHome} />

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
