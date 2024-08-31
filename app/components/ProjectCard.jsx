import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Icon } from '@rneui/themed';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/styles/typography';
import { useNavigation } from '@react-navigation/native';

const ProjectCard = (props) => {
  const navigation = useNavigation()
  //const formattedcost = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cost);
  let skills = new Array(props.project.projectSkills)
  skills = skills[0]
  return (
    <View style={styles.row}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <Avatar
          size={60}
          rounded
          title='60x60'
          titleStyle={{ fontSize: 20 }}
          containerStyle={{ backgroundColor: 'gray' }}
        />
        <Text style={styles.title}>{props.project.title}</Text>
      </View>
      <View style={{ gap: 10 }}>
        <View style={styles.projectInfo}>
          <View style={{
            flexDirection: 'row',
            columnGap: 10,
            alignItems: 'center',
            marginBottom: 20
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Icon size={16} name='clockcircle' type='antdesign' color={Colors.blue0} />
              <Text style={styles.text}>time | a month ago</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Icon size={16} name='request-page' type='MaterialIcons' color={Colors.blue0} />
              <Text style={styles.text}>Proposals Received</Text>
            </View>
          </View>
          <Text style={{ fontWeight: '400' }}>{props.project.description}</Text>
          <View style={styles.skillsContainer}>
            {
            skills.map((skill, index) => (
              <View key={index} style={styles.skill}>
                <Text>{skill.name}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.costText}>{props.project.cost}$</Text>
          <Text style={styles.costText}>{props.project.projectDuration + ' ' + props.project.projectDurationType}</Text>
        </View>
        <TouchableOpacity style={styles.sendButton} onPress={()=>navigation.navigate('Submit Proposal',{projectId: props.project.id,token:props.token})}>
          <Text style={{ fontWeight: 'bold', color: Colors.blue1 }}>Send Proposal</Text>
          <Icon name={'arrow-up-right'} type='feather' size={20} color={Colors.blue1} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderRadius: 10,
    maxWidth: '100%',
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    gap: 20,
  },
  projectInfo: {
    paddingRight: 10,
  },
  skillsContainer: {
    marginVertical: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8
  },
  skill: {
    backgroundColor: Colors.red0,
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    ...Typography.body2,
    fontSize: 12,
    color: 'gray'
  },
  costText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  sendButton: {
    gap: 20,
    width: '100%',
    marginTop: 10,
    borderRadius: 4,
    paddingVertical: 16,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.green1
  }
});

export default ProjectCard;
