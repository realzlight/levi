import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import { colors, OUTER_WIDTH } from '../theme.js';

export default function InputPrompt({ placeholder, onSubmit }) {
  const [value, setValue] = useState('');

  useInput((input, key) => {
    if (key.return) {
      if (key.meta) {
        if (value.length > 0) {
          onSubmit(value);
          setValue('');
        }
      } else {
        setValue((v) => v + '\n');
      }
      return;
    }

    if (key.backspace || key.delete) {
      setValue((v) => v.slice(0, -1));
      return;
    }

    if (input && !key.ctrl && !key.meta) {
      setValue((v) => v + input);
    }
  });

  const lines = value.length > 0 ? value.split('\n') : [placeholder];
  const isPlaceholder = value.length === 0;

  return React.createElement(
    Box,
    { flexDirection: 'column' },
    React.createElement(Text, { color: colors.white, dimColor: true }, '─'.repeat(OUTER_WIDTH)),
    lines.map((line, i) =>
      React.createElement(
        Box,
        { key: i },
        i === 0
          ? React.createElement(Text, { color: colors.white }, '> ')
          : React.createElement(Text, { color: colors.white }, '  '),
        React.createElement(
          Text,
          { color: colors.white, dimColor: isPlaceholder },
          line
        )
      )
    ),
    React.createElement(Text, { color: colors.white, dimColor: true }, '─'.repeat(OUTER_WIDTH))
  );
}
