import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function ViewProposalsScreen(props) {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    async function getProposals() {
      const { token, projectId } = props.route.params;

      console.log('Fetching proposals for project ID:', projectId);

      try {
        const res = await fetch(
          `http://157.175.52.228/api/v1/projects/${projectId}/proposals?pageNumber=0&pageSize=25`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          console.error('Failed to fetch proposals:', res.status);
          return;
        }

        const data = await res.json();
        console.log('Data received from API:', data);

        if (data && data.proposals) {
          setProposals(data.proposals);
        } else {
          console.log('No proposals found in response');
          setProposals([]);
        }
      } catch (error) {
        console.log('Error occurred while fetching proposals:', error);
      }
    }

    getProposals();
  }, [props.route.params]);

  useEffect(() => {
    console.log('Updated proposals state:', proposals);
  }, [proposals]);

  return (
    <ScrollView style={{ flex: 1, paddingHorizontal: 8 }}>
      <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: 'black', marginVertical: 10 }}>Proposals</Text>
      {proposals.length > 0 ? (
        proposals.map((item, index) => (
          <View key={index} style={{ marginVertical: 5, padding: 10, borderWidth: 1, borderColor: '#ddd', backgroundColor: 'white', borderRadius: 10 }}>
            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            
            <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black'}}>Freelancer:   </Text>
            <Text style={{color: 'black', fontWeight: 'bold'}}>{item.serviceProviderName}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black'}}>Hourly rate: </Text>
            <Text style={{color: 'black', fontWeight: 'bold'}}>{item.hourlyRate}$</Text>
            </View>
            </View>
            <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black'}}>Esimated Hours: </Text>
            <Text style={{color: 'black', fontWeight: 'bold'}}>{item.estimatedHours}</Text>
            </View>
            <Text style={{color: 'black', marginVertical: 4}}>{item.coverLetter}</Text>
          </View>
        ))
      ) : (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>No proposals found.</Text>
      )}
    </ScrollView>
  );
}
