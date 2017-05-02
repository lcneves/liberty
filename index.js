/*
 * index.js
 * Copyright 2017 Lucas Neves <lcneves@gmail.com>
 *
 * Entry point for the Livre3D theme Liberty.
 *
 */

'use strict';

require('babel-polyfill');

const theme = require('./theme.js');

require('livre3d')({
  theme: theme
});

