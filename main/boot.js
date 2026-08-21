import fs from 'fs';
import path from 'path';
import os from 'os';

const LEVI_HOME = path.join(os.homedir(), '.leviathan');
const CONFIG_PATH = path.join(LEVI_HOME, 'config.json');

const defaultConfig = {
  version: '1.0.0',
  model: 'GLM-5.2',
  mode: 'abyssal',
  createdAt: new Date().toISOString(),
};

export function boot() {
  if (!fs.existsSync(LEVI_HOME)) {
    fs.mkdirSync(LEVI_HOME, { recursive: true });
  }

  if (!fs.existsSync(CONFIG_PATH)) {
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(defaultConfig, null, 2));
  }

  return { home: LEVI_HOME, configPath: CONFIG_PATH };
}

export function getConfig() {
  const raw = fs.readFileSync(CONFIG_PATH, 'utf-8');
  return JSON.parse(raw);
}
