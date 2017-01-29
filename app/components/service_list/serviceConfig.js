// @flow

export type ServiceConfig = {
  name: string,
  path: string,
  github: string
}

const config : Array<ServiceConfig> = [
  {
    name: 'smartly-v1',
    path: 'smartly-v1',
    github: 'git@github.com:smartlyio/smartly-v1.git'
  },
  {
    name: 'pena',
    path: 'pena',
    github: 'git@github.com:smartlyio/pena.git'
  }
];

export default config;
