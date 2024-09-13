import { View, Text } from 'react-native'
import React from 'react'

const EmpProfile = ({route}) => {
  const { name, phone } = route.params;

  return (
    <View>
      <Text>{name}</Text>
      <Text>{phone}</Text>
    </View>
  )
}

export default EmpProfile