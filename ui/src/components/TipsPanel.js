import React from 'react';
import { Box, Text } from 'ink';
import { colors } from '../theme.js';

export default function TipsPanel({ tip, activity }) {
  return React.createElement(
    Box,
    {
      flexDirection: 'column',
      flexGrow: 1,
      flexBasis: 0,
      paddingX: 1,
      paddingTop: 1,
      borderStyle: 'round',
      borderColor: colors.accent,
      borderTop: false,
      borderRight: false,
      borderBottom: false,
    },
    React.createElement(Text, { bold: true, color: colors.accent }, 'Tips for getting started'),
    React.createElement(Text, { color: colors.white }, tip),
    React.createElement(Box, {
      borderStyle: 'single',
      borderColor: colors.accent,
      borderTop: false,
      borderLeft: false,
      borderRight: false,
    }),
    React.createElement(
      Box,
      { flexDirection: 'column' },
      React.createElement(Text, { bold: true, color: colors.accent }, 'Recent activity'),
      React.createElement(Text, { color: colors.white, dimColor: true }, activity)
    )
  );
}
