import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import OtherOptions from '../components/OtherOptions'

export default function ClientSignUpScreen(props) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const HandleSignUpBtn = async () => {
    try {
      const res = await fetch('http://157.175.52.228/api/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: name, password: password, userType: "CLIENT", email: email}),
      });

      const resp = await res.json()
      if(resp.messageInfo)
      {
        if(resp.messageInfo.description === "User signed up successfully.")
        {
          props.navigation.navigate("LOGIN")
        }
      }
      if(resp.description){
        setError(resp.description)
        setTimeout(()=>{
          setError('')
        },5000)
      }
      else{
        setError("Internel server error")
        setTimeout(()=>{
          setError('')
        },5000)
      }

    } catch (e) {
      setError('Error Occured')
      setTimeout(()=>{
        setError('')
      },5000)
    }
  }

  return (
    <View style={{flex:1, alignItems:'center', backgroundColor: '#FFEDE8'}}>
      <View style={{backgroundColor: 'white',marginTop: '20%', height: '63%', width:'90%', borderRadius: 5, paddingHorizontal: 25, justifyContent: 'center'}}>
        <TextInput value={name} onChangeText={setName} placeholder='Display Name' style={{borderWidth: 1, borderColor: 'black', borderRadius: 5, marginVertical: 10}}/>
        <TextInput value={email} onChangeText={setEmail} placeholder='Email' style={{borderWidth: 1, borderColor: 'black', borderRadius: 5, marginVertical: 10}}/>
        <TextInput value={password} onChangeText={setPassword} placeholder='Password' secureTextEntry={true} style={{borderWidth: 1, borderColor: 'black', borderRadius: 5, marginVertical: 10}}/>
        <Text style={{color: 'red',textAlign: 'center'}}>{error}</Text>
        <TouchableOpacity onPress={HandleSignUpBtn} style={{backgroundColor: '#0047ab', width: '40%', height: '10%', alignItems: 'center', justifyContent: 'center', marginHorizontal: 'auto', marginTop: 10}}><Text style={{color: 'white'}}>Sign up</Text></TouchableOpacity>
      </View>

      <View style={{alignItems: 'center', marginTop: '10%'}}>
        <View style={{flexDirection: 'row'}}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={()=>{props.navigation.navigate("LOGIN")}}>
          <Text style={{color: '#0047ab', fontWeight: 'bold'}}> LOGIN</Text>
          </TouchableOpacity>
        </View>
        <Text style={{marginVertical: 8}}>Or Continue with</Text>
        <View>
            <OtherOptions/>
        </View>
      </View>
    </View>
  )
}