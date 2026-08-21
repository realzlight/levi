import React from 'react';
import {Box} from 'ink';
import Image from 'ink-image';

export default function Mascot() {
  return (
    <Box justifyContent="center">
      <Image src="./assets/mascot.png" width={24} />
    </Box>
  );
}
