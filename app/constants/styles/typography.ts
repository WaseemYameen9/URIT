import { TextStyle } from 'react-native';
import { Colors } from '../Colors';

interface Typography {
  display: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  body1: TextStyle;
  body2: TextStyle;
  body3: TextStyle;
  label0: TextStyle;
  label1: TextStyle;
  label2: TextStyle;
  label3: TextStyle;
  link: TextStyle
}

export const Typography: Typography = {
  display: {
    fontSize: 31,
    lineHeight: 36,
  },
  h1: {
    fontSize: 25,
    lineHeight: 36,
  },
  h2: {
    fontSize: 20,
    lineHeight: 30,
  },
  h3: {
    fontSize: 48,
    lineHeight: 56,
  },
  h4: {
    fontSize: 14,
    lineHeight: 24,
  },
  body1: {
    fontSize: 18,
    lineHeight: 28,
  },
  body2: {
    fontSize: 12,
    lineHeight: 16,
  },
  body3: {
    fontSize: 11,
    lineHeight: 14,
  },
  label0: {
    fontSize: 12,
    lineHeight: 12,
  },
  label1: {
    fontSize: 14,
    lineHeight: 14,
  },
  label2: {
    fontSize: 16,
    lineHeight: 14,
  },
  label3: {
    fontSize: 16,
    lineHeight: 16,
  },
  link: {
    color: Colors.light.secondary,
    fontWeight: '500',
    // textDecorationLine: 'underline',
  }
};
