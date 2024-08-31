import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function SubmitProposalScreen(props) {
  const navigation = useNavigation()
  const { projectId } = props.route.params;
  const [hourlyRate, setHourlyRate] = useState('');
  const [estimatedHours, setEstimatedHours] = useState('');
  const [coverletter, setCoverletter] = useState('');

  async function handleSubmit() {
    if (!hourlyRate || !estimatedHours || !coverletter) {
        Alert.alert("Incomplete Form", "Please fill all the text fields.");
        return;
    }
    try {
      const res = await fetch(
        `http://157.175.52.228/api/v1/projects/${projectId}/proposals?pageNumber=0&pageSize=10`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${props.route.params.token}`,
          },
          body: JSON.stringify({
            coverLetter: coverletter,
            hourlyRate: hourlyRate,
            estimatedHours: estimatedHours,
          }),
        }
      );

      // Check if the response is OK (status 200-299)
      if (!res.ok) {
        console.log('Error: ', res.status, res.statusText);
        return;
      }

      // Check if response is not empty before parsing JSON
      const responseText = await res.text();
      if (responseText) {
        const data = JSON.parse(responseText);
        Alert.alert(
          "Proposal Successfully Submitted",
          data.description || "Your proposal has been submitted successfully.",
          [
            {
              text: 'OK',
              onPress: () => {
                navigation.navigate('ServiceProvider Homescreen',{token:props.route.params.token});
              },
            },
          ],
        );
      } else {
        console.log('Empty response');
      }
    } catch (error) {
      console.log('Error occurred', error);
    }
  }

  return (
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <Text style={{ marginVertical: '5%', marginBottom: '10%', fontSize: 22, color: 'black', fontWeight: 'bold' }}>
        Submit Proposal
      </Text>
      <TextInput
        value={hourlyRate}
        onChangeText={setHourlyRate}
        style={{ borderWidth: 1, borderRadius: 8, backgroundColor: 'white', marginBottom: '5%' }}
        placeholder='Hourly rate'
        keyboardType='numeric'
      />
      <TextInput
        value={estimatedHours}
        onChangeText={setEstimatedHours}
        style={{ borderWidth: 1, borderRadius: 8, backgroundColor: 'white', marginBottom: '5%' }}
        placeholder='Estimated hours'
        keyboardType='numeric'
      />
      <TextInput
        value={coverletter}
        onChangeText={setCoverletter}
        style={{
          borderWidth: 1,
          borderRadius: 8,
          backgroundColor: 'white',
          marginBottom: '5%',
          height: 100,
          textAlignVertical: 'top',
          padding: 10,
        }}
        placeholder='Write your proposal here...'
        multiline={true}
      />
      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          backgroundColor: '#0047ab',
          width: '40%',
          height: '7%',
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 'auto',
          marginVertical: 10,
        }}
      >
        <Text style={{ color: 'white' }}>Submit Proposal</Text>
      </TouchableOpacity>
    </View>
  );
}
