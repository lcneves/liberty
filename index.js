/*
 * index.js
 * Copyright 2017 Lucas Neves <lcneves@gmail.com>
 *
 * Liberty theme for Livre's Livre3D engine.
 * Uses three.js and react-canvas.
 */

'use strict';

require('babel-polyfill');

const w3d = require('w3d');

const stylesheets = [
  require('./style/defaults.js'),
  require('./style/liberty.js')
];

const lights = [
  { type: 'ambient' },
  { type: 'directional' }
];

const templates = require('./lib/templates.js');

const theme = {
  stylesheets: stylesheets,
  lights: lights,
  background: 0xffffff,
  worldWidth: 100,
  hfov: 30,
  nearFarRatio: 0.25,
  templates: templates
};

// All set, let's initialize the engine!
w3d.init({ theme: theme });

