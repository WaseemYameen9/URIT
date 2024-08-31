import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SignupScreen(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#FFEDE8'}}>
      <Text style={{marginHorizontal: 'auto', fontWeight:'bold', fontSize: 24, color: 'black', marginVertical: 15}}>Choose your account type</Text>
      <TouchableOpacity onPress={()=>props.navigation.navigate("Sign Up as Client")} style={{backgroundColor: '#0047ab', width: '67%',borderRadius: 5, height: '7%', alignItems: 'center', justifyContent: 'center', marginHorizontal: 'auto', marginVertical: 10}}><Text style={{color: 'white'}}>As a client</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>props.navigation.navigate("Sign Up as Client as Service Provider")} style={{backgroundColor: '#0047ab', width: '67%', height: '7%', borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginHorizontal: 'auto', marginVertical: 10}}><Text style={{color: 'white'}}>As a Service Provider</Text></TouchableOpacity>
    </View>
  )
}