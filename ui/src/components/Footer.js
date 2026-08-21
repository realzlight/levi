import React from 'react';
import { Text } from 'ink';
import { colors } from '../theme.js';

export default function Footer({ text }) {
  return React.createElement(Text, { color: colors.white, dimColor: true }, text);
}
