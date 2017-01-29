import { expect } from 'chai';
import sinon from 'sinon';

import { getConfig, setConfig, __RewireAPI__ as appConfigRewireAPI } from './app_config';

const appConfigStr = `{
  "base_path": "some/path/"
}`;


appConfigRewireAPI.__Rewire__('remote', {
  app: {
    getPath: () => '/path/to/user/data'
  }
});

let configFileFound = true;
const writeFileSyncSpy = sinon.spy();

appConfigRewireAPI.__Rewire__('fs', {
  readFileSync: (path) => {
    // Return config if the correct path is given
    if (path === '/path/to/user/data/config.json') {
      return appConfigStr;
    } else {
      throw Error(`ENOENT: invalid path given, expected /path/to/user/data/config.json but got ${path}`);
    }
  },
  writeFileSync: writeFileSyncSpy,
  existsSync: () => configFileFound,
});

describe('loading config', () => {
  it('loads the config from appData folder', () => {
    configFileFound = true;

    const appConfig = getConfig();
    expect(appConfig.base_path).to.eql("some/path/");
  });

  it('returns null if config was not found', () => {
    configFileFound = false;

    const appConfig = getConfig();
    expect(appConfig).to.eql(null);
  });
});

describe('saving config', () => {
  it('saves configuration to appData folder', () => {
    setConfig({base_path: '/foo/bar/'});
    expect(writeFileSyncSpy.callCount).to.eql(1);
    expect(writeFileSyncSpy.firstCall.args).to.eql([
      '/path/to/user/data/config.json',
      `{"base_path":"/foo/bar/"}`,
      { encoding: 'utf-8' }
    ]);
  });
});
