import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import OtherOptions from '../components/OtherOptions';
import { CommonActions } from '@react-navigation/native';

export default function LoginScreen(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  let token;
  const HandlePress = async () => {
    try {
      const res = await fetch('http://157.175.52.228/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, password: password }),
      });
  
      try {
        const resp = await res.json();
        token = resp.token.replace('Bearer ', '').trim();
        
        if (resp.userType) {
          if (resp.userType == 'CLIENT') {
            props.navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [
                  { name: 'Client Homescreen', params: { userId: resp.userId, token: token } },
                ],
              })
            );
          } else if (resp.userType == 'SERVICE_PROVIDER') {
            props.navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [
                  { name: 'ServiceProvider Homescreen', params: { token: token } },
                ],
              })
            );
          }
        } else {
          setError('Wrong username or password');
          setTimeout(() => {
            setError('');
          }, 5000);
        }
      } catch {
        setError('Wrong username or password');
        setTimeout(() => {
          setError('');
        }, 5000);
      }
    } catch (e) {
      setError('Error with Internet Connection');
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFEDE8'}}>
      <View
        style={{
          backgroundColor: 'white',
          marginTop: '40%',
          height: '45%',
          width: '90%',
          borderRadius: 5,
          paddingHorizontal: 25,
          justifyContent: 'center',
        }}>
        <TextInput
          placeholder="Email"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
            marginVertical: 10,
          }}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
            marginVertical: 10,
          }}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Reset Password');
          }}>
          <Text style={{marginLeft: '55%', marginBottom: 13}}>
            Lost Your Password?
          </Text>
        </TouchableOpacity>
        <Text style={{color: 'red', textAlign: 'center'}}>{error}</Text>
        <TouchableOpacity
          onPress={HandlePress}
          style={{
            backgroundColor: '#0047ab',
            width: '40%',
            height: '12%',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 'auto',
            marginVertical: 10,
          }}>
          <Text style={{color: 'white'}}>LOGIN</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={()=>props.navigation.navigate("Client Homescreen")} style={{backgroundColor: '#0047ab', width: '40%', height: '12%', alignItems: 'center', justifyContent: 'center', marginHorizontal: 'auto', marginVertical: 10}}><Text style={{color: 'white'}}>LOGIN</Text></TouchableOpacity> */}
      </View>

      <View style={{alignItems: 'center', marginTop: '20%'}}>
        <View style={{flexDirection: 'row'}}>
          <Text>Don't have any account?</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('SIGN UP');
            }}>
            <Text style={{color: '#0047ab', fontWeight: 'bold'}}> SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <Text style={{marginVertical: 8}}>Or Continue with</Text>
        <View>
          <OtherOptions />
        </View>
      </View>
    </View>
  );
}
