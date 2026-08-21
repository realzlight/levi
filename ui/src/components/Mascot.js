import React from 'react';
import {Box, Text} from 'ink';
import path from 'path';
import terminalImage from 'terminal-image';

const mascotPath = path.join(process.cwd(), 'ui', 'src', 'assets', 'mascot.png');

export default function Mascot() {
  const [image, setImage] = React.useState('');

  React.useEffect(() => {
    let alive = true;

    (async () => {
      const out = await terminalImage.file(mascotPath, {width: 10});
      if (alive) setImage(out);
    })();

    return () => {
      alive = false;
    };
  }, []);

  return React.createElement(
    Box,
    {justifyContent: 'center'},
    React.createElement(Text, null, image)
  );
}
