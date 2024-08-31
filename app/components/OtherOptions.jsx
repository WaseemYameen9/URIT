import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Colors } from "../constants/Colors"
import buttonStyles from "../constants/styles/custom-buttons"
import { Typography } from "../constants/styles/typography"
import { Icon } from "@rneui/themed"


const OtherOptionButton = ({ label, href, icon, type = '', color = Colors.light.secondary }) => {
  return (
    <TouchableOpacity style={[styles.otherOptionButton, { borderColor: color }]}>
      <Icon name={icon} color={color} type={type} />
      <Text style={[buttonStyles.customButtonText, buttonStyles.secondaryText, { color: color }]}>{label}</Text>
    </TouchableOpacity>
  )
}

const OtherOptions = ({ screen }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <OtherOptionButton label={'Facebook'} href='' icon={'facebook'} />
        <OtherOptionButton label={'Google'} href='' icon={'google'} color={'red'} type={"antdesign"} />
        <OtherOptionButton label={'Apple'} href='' icon={'apple'} color={'black'} />
      </View>
    </View>
  )
}

export default OtherOptions;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    marginHorizontal: 30
  },
  signupTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8
  },
  otherOptionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    opacity: 0.7,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 10,
  }
})