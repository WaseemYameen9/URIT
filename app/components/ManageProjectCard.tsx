import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/styles/typography';


const ManageProjectCard = (props) => {
  // const [isEditModalVisible, setEditModalVisible] = useState(false);
  // const [isProposalModalVisible, setProposalModalVisible] = useState(false);

  // const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);


  return (
    <View style={styles.row}>
      <View style={{ gap: 10 }}>
        <View style={styles.projectInfo}>
          <Text style={styles.title}>{props.project.title}</Text>
          <View style={{
            flexDirection: 'row',
            columnGap: 10,
            alignItems: 'center'
          }}>
            <View style={styles.iconView}>
              <Icon name='date' type='fontisto' color={Colors.blue0} size={18} />
              <Text style={styles.text}>a month ago  |</Text>
            </View>
            <View style={styles.iconView}>
              <Icon name='page' type='foundation' color={Colors.blue0} size={18} />
              <Text style={[styles.text, { color: Colors.blue0 }]}> Received</Text>
            </View>
          </View>
        </View>
        <Text style={styles.priceText}>{props.project.cost}/{props.project.priceType}</Text>
      </View>
      <View style={{ justifyContent: 'space-around' }}>
        <TouchableOpacity style={styles.actionIconContainer}>
          <Icon name='handshake' color={Colors.blue0} size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionIconContainer}>
          <Icon name='edit' color={Colors.blue0} size={20} />
        </TouchableOpacity>
      </View>
      {/* <DeleteModal visible={isProposalModalVisible} onClose={() => setProposalModalVisible(false)} onDelete={() => setProposalModalVisible(false)} />
      <ProposalModal visible={isEditModalVisible} onClose={() => setEditModalVisible(false)} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white0,
    borderRadius: 10,
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
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  iconView: {
    rowGap: 10
  },
  text: {
    ...Typography.body2,
    fontSize: 14,
  },
  categoryText: {
    fontSize: 14,
  },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIconContainer: {
    padding: 4,
    backgroundColor: Colors.red0,
    borderRadius: 4
  },
  iconButton: {
    marginHorizontal: 5,
  },
  tooltipOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  tooltip: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 10,
    color: '#007bff',
  },
});

export default ManageProjectCard;
