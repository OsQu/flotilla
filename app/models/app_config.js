// @flow

import { remote } from 'electron';
import fs from 'fs';

export type AppConfig = {
  base_path: string
}

function getConfigFilePath() : string {
  const appDataPath = remote.app.getPath('userData');
  return `${appDataPath}/config.json`;
}

export function getConfig() : ?AppConfig {
  if (fs.existsSync(getConfigFilePath())) {
    const configData = fs.readFileSync(getConfigFilePath(), { encoding: 'utf-8' });
    const config = JSON.parse(configData);

    return {
      base_path: config.base_path
    };
  } else {
    return null;
  }
}

export function setConfig(config : AppConfig) : void {
  fs.writeFileSync(getConfigFilePath(), JSON.stringify(config), { encoding: 'utf-8' });
}
