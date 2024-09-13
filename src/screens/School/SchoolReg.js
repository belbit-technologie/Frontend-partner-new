import { TextInput, View, Image, Button, TouchableOpacity, ScrollView, Text } from 'react-native'
import tw from 'twrnc';
import DocumentPicker from 'react-native-document-picker'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import TopHeader from '../../componant/Common/TopHeader';

const SchoolReg = () => {
  const navigation = useNavigation()
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
    setData({ ...data, [name]: text })
  }

  const onClickSubmit = () => {
    console.log('data---', data)
    navigation.navigate('School/Home')
  }


  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      })
      console.log('res', res)

      console.log('res----', res[0].name)

      setFileName(res[0].name)
    } catch (err) {
      if (DocumentPicker.isCancel(e)) {
        console.log('Canceled from picker', e)
      } else {
        console.error('Unknown Error: ', err);
      }
    }
  }

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleProfilePress = () => {
    // Navigate to the profile screen or perform some action
    navigation.navigate('Profile');
  };

  return (
    <>
      <TopHeader
        title=""
      />
      <ScrollView style={tw`flex-1 bg-white`}>
        <View style={tw`justify-center items-center p-2`}>
          <View>
            <Button title="Select File" onPress={selectFile}
              style={tw`p-10,m-5 align-center`} />
            {fileName ? <Text style={tw`text-lg text-black mt-4`}>Selected File: {fileName}</Text> : null}
          </View>

          <TextInput
            placeholder="Enter School Name"
            placeholderTextColor="#000000"
            onChangeText={(text) => handleChange('schoolname', text)}
            style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
          />
          <TextInput
            placeholder="Enter Owner Name"
            placeholderTextColor="#000000"
            onChangeText={(text) => handleChange('ownername', text)}
            style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
          />
          <TextInput
            placeholder="Enter Phone Number"
            placeholderTextColor="#000000"
            onChangeText={(text) => handleChange('number', text)}
            style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
          />
          <TextInput
            placeholder="Enter Email"
            placeholderTextColor="#000000"
            onChangeText={(text) => handleChange('email', text)}
            style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
          />
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#000000"
            onChangeText={(text) => handleChange('password', text)}
            style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
          />
          <TextInput
            placeholder="Enter Address"
            placeholderTextColor="#000000"
            onChangeText={(text) => handleChange('address', text)}
            style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
          />
          <TextInput
            placeholder="Enter State"
            placeholderTextColor="#000000"
            onChangeText={(text) => handleChange('state', text)}
            style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
          />
          <TextInput
            placeholder="Enter City"
            placeholderTextColor="#000000"
            onChangeText={(text) => handleChange('city', text)}
            style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
          />
          <TextInput
            placeholder="Enter PinCode"
            placeholderTextColor="#000000"
            onChangeText={(text) => handleChange('pincode', text)}
            style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
          />

          <TouchableOpacity style={tw`w-full bg-blue-500 py-2 rounded-lg mt-4`} onPress={onClickSubmit}>
            <Text style={tw`text-xl font-bold text-white text-center`}>Submit</Text>
          </TouchableOpacity>
        </View >
      </ScrollView>
    </>
  )
}
export default SchoolReg