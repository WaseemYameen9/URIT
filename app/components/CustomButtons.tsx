import { Colors } from '../constants/Colors'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface CustomButtonsProps {
	label: string
	onPress: () => void
}

export const PrimaryButton = ({ label, onPress }: CustomButtonsProps) => {
	return (
		<TouchableOpacity style={[styles.customButton, styles.primaryButton]} onPress={onPress}>
			<Text style={[styles.customButtonText, styles.primaryText]}>{label}</Text>
		</TouchableOpacity>
	)
}

export const SecondaryButton = ({ label, onPress }: CustomButtonsProps) => {
	return (
		<TouchableOpacity style={[styles.customButton, styles.secondaryButton]} onPress={onPress}>
			<Text style={[styles.customButtonText, styles.secondaryText]}>{label}</Text>
		</TouchableOpacity>
	)
}


const styles = StyleSheet.create({
	customButton: {
		paddingVertical: 10,
		paddingHorizontal: 14,
		borderRadius: 4,
		alignItems: 'center',
		gap: 10,
		flexDirection: 'row',
		alignContent: 'center',
		justifyContent: 'center'
	},
	customButtonText: {
		fontWeight: '600',
	},
	primaryButton: {
		backgroundColor: Colors.light.secondary,
	},
	primaryText: {
		color: Colors.dark.text,
	},
	secondaryButton: {
		backgroundColor: Colors.dark.icon,
	},
	secondaryText: {
		color: Colors.light.text,
	}
})
