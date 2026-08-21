import React from 'react';
import { Box, Text } from 'ink';
import { colors, OUTER_WIDTH, buildTitleBorder } from './theme.js';
import WelcomePanel from './components/WelcomePanel.js';
import TipsPanel from './components/TipsPanel.js';
import HintLine from './components/HintLine.js';
import InputPrompt from './components/InputPrompt.js';
import Footer from './components/Footer.js';

export default function App({ workingDir, greeting }) {
  return React.createElement(
    Box,
    { flexDirection: 'column', padding: 1 },
    React.createElement(
      Text,
      { color: colors.accent, bold: true },
      buildTitleBorder('Leviathan v1', OUTER_WIDTH)
    ),
    React.createElement(
      Box,
      {
        flexDirection: 'row',
        width: OUTER_WIDTH,
        borderStyle: 'round',
        borderColor: colors.accent,
        borderTop: false,
      },
      React.createElement(WelcomePanel, {
        greeting: greeting,
        model: 'Leviathan',
        workingDir: workingDir,
      }),
      React.createElement(TipsPanel, {
        tip: 'Ask Claude to create a new app or clone a repository',
        activity: 'No recent activity',
      })
    ),
    React.createElement(
      Box,
      { marginTop: 1 },
      React.createElement(HintLine, { text: '/model to try Abbysal' })
    ),
    React.createElement(InputPrompt, {
      placeholder: 'ALT to send ENTER to space lines.',
      onSubmit: () => {},
    }),
    React.createElement(Footer, { text: '? for shortcuts' })
  );
}
