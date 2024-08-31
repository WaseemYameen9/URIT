import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import ProjectCard from '../components/ProjectCard';
import Header from '../components/Header';


export default function ServiceProviderHomeScreen(props) {
  const [projects,setProjects] = useState([])

  useEffect(()=>{
    const {token} = props.route.params
    async function getProjects(){
      try {
        const res = await fetch('http://157.175.52.228/api/v1/projects?pageNumber=0&pageSize=20', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        });
      
        const data = await res.json();
        setProjects(data.projects)
      } catch (error) {
        console.log('Error occurred', error);
      }
    } 
    getProjects()
  },[])

  return (
    <ScrollView>
    <Header/>
      {
        projects.map((item)=>{
          return <ProjectCard project={item} token={props.route.params.token}/>
        })
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 
});
