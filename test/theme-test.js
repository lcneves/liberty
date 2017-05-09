/*
 * theme-test.js
 * Copyright 2017 Lucas Neves <lcneves@gmail.com>
 *
 * Mocha unit test for themes to work with the Livre3D engine.
 * Part of the Livre project.
 */

const assert = require('assert'),
      THREE = require('three'),
      theme = require('../theme.js');

describe('theme', function () {
  it('should export a "Scene" function', function () {
    assert(typeof theme.Scene === 'function');
  });

  describe('Scene', function () {
    it('should create an instance of THREE.Scene', function () {
      var scene = new theme.Scene;
      assert(scene instanceof THREE.Scene);
    });
  });

  describe('makeMenu', function () {
    it('should be instance of THREE.Mesh', function () {
      theme.makeMenu().then(icon => assert(icon instanceof THREE.Scene));
    });
  });
});
