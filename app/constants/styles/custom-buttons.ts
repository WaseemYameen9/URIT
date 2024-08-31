import { StyleSheet } from "react-native";

import { Colors } from "../Colors";

const buttonStyles = StyleSheet.create({
  customButton: {
    gap: 10,
    borderRadius: 4,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 14,
    flexDirection: 'row',
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

export default buttonStyles;