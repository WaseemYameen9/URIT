import {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import buttonStyles from '../constants/styles/custom-buttons';
import {Colors} from '../constants/Colors';
import axios from 'axios';
import {ActivityIndicator} from 'react-native-paper';
import ManageProjectCard from '../components/ManageProjectCard';

export default function ClientHomeScreen(props) {
  const [activeTab, setActiveTab] = useState('Posted Projects');
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getPostedProjects() {
      const {token} = props.route.params;
      const {userId} = props.route.params;
      try {
        const res = await fetch(
          'http://157.175.52.228/api/v1/projects?userId=' +
            userId +
            '8&pageNumber=0&pageSize=20',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const data = await res.json();
        setProjects(data.projects);
      } catch (error) {
        console.log('Error occurred', error);
      }
    }
    getPostedProjects();
  }, []);

  const tabs = [
    'Posted Projects',
    'Pending Projects',
    'Ongoing Projects',
    'Expired Projects',
    'Completed Services',
    'Canceled Services',
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.gray0}}>
      <StatusBar barStyle="dark-content" />
      <View style={{alignItems: 'flex-end', padding: 10}}>
        <TouchableOpacity
          style={[
            buttonStyles.customButton,
            buttonStyles.primaryButton,
            {backgroundColor: Colors.black0},
          ]}>
          <Text
            style={[buttonStyles.primaryText, buttonStyles.customButtonText]}>
            Create Project
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Navigation */}
      <View>
        <FlatList
          data={tabs}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => setActiveTab(item)}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderBottomColor:
                  activeTab === item ? 'black' : Colors.dark.icon,
                borderBottomWidth: 1.5,
              }}>
              <Text style={{fontWeight: activeTab === item ? 'bold' : '400'}}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{padding: 20}}>
        {activeTab === 'Posted Projects' &&
          projects.map((item, index) => {
            return (
              <TouchableOpacity onPress={()=>props.navigation.navigate("View Proposals",{projectId:item.id,token:props.route.params.token})}>
                <ManageProjectCard key={index} project={item} />
              </TouchableOpacity>
            );
          })}
        {activeTab === 'Pending Projects' && (
          <Text style={{fontSize: 16, color: Colors.black}}>
            You currently have pending projects.
          </Text>
        )}
      </View>

      {/* Your existing loader or project list components */}
      {/* {loading ? <Loader /> : <ManageProjectList data={projectsData} />} */}
    </SafeAreaView>
  );
}
