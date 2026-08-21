import React from 'react';
import { Box, Text } from 'ink';
import { colors } from '../theme.js';
import Mascot from './Mascot.js';

export default function WelcomePanel({ greeting, model, workingDir }) {
  return React.createElement(
    Box,
    {
      flexDirection: 'column',
      flexGrow: 1,
      flexBasis: 0,
      paddingX: 1,
      paddingTop: 1,
      alignItems: 'center',
    },
    React.createElement(Text, { bold: true, color: colors.white }, greeting),
    React.createElement(Box, { marginTop: 1 }, React.createElement(Mascot)),
    React.createElement(Box, { marginTop: 1 }),
    React.createElement(
      Box,
      { flexDirection: 'column', alignItems: 'center' },
      React.createElement(Text, { color: colors.dim }, 'Leviathan · Awakened · Deep Memory'),
      React.createElement(Text, { color: colors.dim }, workingDir)
    )
  );
}
