/*
 * index.js
 * Copyright 2017 Lucas Neves <lcneves@gmail.com>
 *
 * Liberty theme for Livre's Livre3D engine.
 * Uses three.js and react-canvas.
 */

'use strict';

require('babel-polyfill');

const livre3d = require('livre3d');

const stylesheets = [
  require('./style/defaults.js')
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
livre3d.init({ theme: theme });

