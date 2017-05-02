/*
 * index.js
 * Copyright 2017 Lucas Neves <lcneves@gmail.com>
 *
 * Entry point for the Livre3D theme Liberty.
 *
 */

'use strict';

module.exports = function (options) {

  // These options were passed by the theme.
  const theme = require('./theme.js');

  require('livre-engine')({
    theme: theme
  });
};

