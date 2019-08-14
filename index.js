'use strict';

module.exports = {
  extends: 'tslint:latest',
  rules: {
    'interface-name': [true, 'never-prefix'],
    'max-line-length': [true, 140],
    'trailing-comma': [true, {
      multiline: 'always',
      singleline: 'never'
    }]
  }
};
