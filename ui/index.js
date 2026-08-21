import React from 'react';
import { render } from 'ink';
import { execa } from 'execa';
import os from 'os';
import path from 'path';
import App from './src/App.js';
import { getGreeting } from './src/greetings.js';

async function clearScreen() {
  const cmd = process.platform === 'win32' ? 'cls' : 'clear';
  try {
    const { stdout } = await execa(cmd, { shell: true });
    process.stdout.write(stdout);
  } catch {
    console.clear();
  }
}

function getWorkingDirLabel() {
  const home = os.homedir();
  const cwd = process.cwd();
  if (cwd === home) return '~';
  if (cwd.startsWith(home + path.sep)) {
    return '~' + cwd.slice(home.length);
  }
  return cwd;
}

const name = 'realzlight';

await clearScreen();
render(
  React.createElement(App, {
    workingDir: getWorkingDirLabel(),
    greeting: getGreeting(name),
  })
);
