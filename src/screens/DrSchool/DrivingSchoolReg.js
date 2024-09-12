import { TextInput, View, TouchableOpacity, ScrollView, Text } from 'react-native'
import tw from 'twrnc';
import DocumentPicker from 'react-native-document-picker'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';

const DrivingSchoolReg = () => {
  const [fileName, setFileName] = useState('');

  const [data, setData] = useState({
    schoolname: "",
    ownername: "",
    email: "",
    password: "",
    number: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    certificate: "",
    license: "",
  })


  const handleChange = (name, text) => {

  }


  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      })
      setFileName(res[0].name)
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled from picker');
      } else {
        console.error('Unknown Error: ', err);
      }
    }
  }

  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <View style={tw`justify-center items-center p-2`}>
        <TextInput
          placeholder="Enter School Name"
          name="schoolname"
          onChangeText={(text) => handleChange(name, text)}
          style={tw`w-[90%] px-4 mb-4 bg-white text-md text-gray-800 font-bold rounded-[15px] border border-gray-300 shadow-lg`}
        />
        <TextInput
          placeholder="Enter Owner Name"
          name="ownername"
          onChangeText={(text) => handleChange(name, text)}
          style={tw`w-[90%] px-4 mb-4 bg-white text-md text-gray-800 font-bold rounded-[15px] border border-gray-300 shadow-lg`}
        />
        <TextInput
          placeholder="Enter Email"
          name="email"
          onChangeText={(text) => handleChange(name, text)}
          style={tw`w-[90%] px-4 mb-4 bg-white text-md text-gray-800 font-bold rounded-[15px] border border-gray-300 shadow-lg`}
        />
        <TextInput
          placeholder="Enter  Password"
          name="password"
          onChangeText={(text) => handleChange(name, text)}
          style={tw`w-[90%] px-4 mb-4 bg-white text-md text-gray-800 font-bold rounded-[15px] border border-gray-300 shadow-lg`}
        />
        <TextInput
          placeholder="Enter Address"
          name="address"
          onChangeText={(text) => handleChange(name, text)}
          style={tw`w-[90%] px-4 mb-4 bg-white text-md text-gray-800 font-bold rounded-[15px] border border-gray-300 shadow-lg`}
        />
        <TextInput
          placeholder="Enter State"
          name="state"
          onChangeText={(text) => handleChange(name, text)}
          style={tw`w-[90%] px-4 mb-4 bg-white text-md text-gray-800 font-bold rounded-[15px] border border-gray-300 shadow-lg`}
        />
        <TextInput
          placeholder="Enter City"
          name="city"
          onChangeText={(text) => handleChange(name, text)}
          style={tw`w-[90%] px-4 mb-4 bg-white text-md text-gray-800 font-bold rounded-[15px] border border-gray-300 shadow-lg`}
        />
        <TextInput
          placeholder="Enter PinCode"
          name="pincode"
          onChangeText={(text) => handleChange(name, text)}
          style={tw`w-[90%] px-4 mb-4 bg-white text-md text-gray-800 font-bold rounded-[15px] border border-gray-300 shadow-lg`}
        />

        {/* <View>
          <Button title="Select File" onPress={selectFile}
            style={tw`p-10,m-5 alignItem-center`} />
          {fileName ? <Text style={tw`text-lg mt-4`}>Selected File: {fileName}</Text> : null}
        </View> */}

        <TouchableOpacity style={tw`w-full bg-blue-500 py-2 rounded-lg mt-4`}>
          <Text style={tw`text-xl font-bold text-white text-center`}>Submit</Text>
        </TouchableOpacity>
      </View >
    </ScrollView>
  )
}

export default DrivingSchoolReg

