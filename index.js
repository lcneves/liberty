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

const THREE = require('three');
const fontLoader = new THREE.FontLoader();
const jsonLoader = new THREE.JSONLoader();

const stylesheets = [
  require('./style/defaults.js')
];

const WORLD_WIDTH = 100;
const CAMERA_HORIZONTAL_FOV = 30;



class Lights extends THREE.Object3D {
  constructor() {
    super();

    this.add(new THREE.AmbientLight());
    this.add(new THREE.DirectionalLight({
      position: (1, 1, 1),
      color: 0xffffff
    }));
  }
}

const lights = [
  {
    type: 'ambient'
  },
  {
    type: 'directional'
  }
];

function makeText(text, color, position) {
  return new Promise(resolve => {
    fontLoader.load(GET_PATH + '/fonts/gentilis_regular.typeface.json',
      (font) => {
        var geometry = new THREE.TextGeometry(text, {
          font: font,
          size: 4,
          height: 3,
          curveSegments: 12
        });
        var material = new THREE.MeshPhongMaterial( { color: color } );
        var mesh = new THREE.Mesh( geometry, material );
        var object = new livre3d.ObjectLivre(mesh);
        for (let axis in position) {
          if (position.hasOwnProperty(axis)) {
            object.relativePosition[axis] = position[axis];
          }
        }

        resolve(object);
      }
    );
  });
}

var makeLogo = function () {
  var text = 'Livre';

  var position = {
    x: {
      reference: 'left',
      distance: 10
    },
    y: {
      reference: 'top',
      distance: 5
    }
  };

  var color = 0x00ff00;

  return new Promise(resolve => {
    makeText(text, color, position).then(logo => resolve(logo));
  });
};

var makeTopLeft = function () {
  var text = 'Top Left';

  var position = {
    x: {
      reference: 'left',
      distance: 0
    },
    y: {
      reference: 'top',
      distance: 0
    }
  };

  var color = 0x44ff44;

  return new Promise(resolve => {
    makeText(text, color, position).then(object => resolve(object));
  });
};

var makeTopRight = function () {
  var text = 'Top Right';

  var position = {
    x: {
      reference: 'right',
      distance: 0
    },
    y: {
      reference: 'top',
      distance: 0
    }
  };

  var color = 0xff4444;

  return new Promise(resolve => {
    makeText(text, color, position).then(object => resolve(object));
  });
};

var makeBottomRight = function () {
  var text = 'Bottom Right';

  var position = {
    x: {
      reference: 'right',
      distance: 0
    },
    y: {
      reference: 'bottom',
      distance: 0
    }
  };

  var color = 0x4444ff;

  return new Promise(resolve => {
    makeText(text, color, position).then(object => resolve(object));
  });
};

var makeBottomLeft = function () {
  var text = 'Bottom Left';

  var position = {
    x: {
      reference: 'left',
      distance: 0
    },
    y: {
      reference: 'bottom',
      distance: 0
    }
  };

  var color = 0xff8888;

  return new Promise(resolve => {
    makeText(text, color, position).then(object => resolve(object));
  });
};

var makeNear = function () {
  var text = 'Near';

  var position = {
    x: {
      reference: 'left',
      distance: 45
    },
    y: {
      reference: 'top',
      distance: 30
    },
    z: {
      reference: 'near',
      distance: 0.0001
    }
  };

  var color = 0x666666;

  return new Promise(resolve => {
    makeText(text, color, position).then(object => resolve(object));
  });
};

var makeGrid = function (step) {
  step = step || WORLD_WIDTH / 20;

  return new Promise(resolve => {
    var grid = new livre3d.ObjectLivre();
    var material = new THREE.LineBasicMaterial({ color: 0x0000ff });

    for (let i = 0; i <= WORLD_WIDTH; i += step) {
      let vGeometry = new THREE.Geometry();
      vGeometry.vertices.push(new THREE.Vector3(i, 0, 0));
      vGeometry.vertices.push(new THREE.Vector3(i, WORLD_WIDTH, 0));
      let vLine = new THREE.Line(vGeometry, material);
      grid.add(vLine);

      let hGeometry = new THREE.Geometry();
      hGeometry.vertices.push(new THREE.Vector3(0, i, 0));
      hGeometry.vertices.push(new THREE.Vector3(WORLD_WIDTH, i, 0));
      let hLine = new THREE.Line(hGeometry, material);
      grid.add(hLine);
    }
    resolve(grid);
  });
};


// All set, let's initialize the engine!
const theme = {
  stylesheets: stylesheets,
  background: 0xffffff,
  Scene: Scene,
  Body: Body,
  Camera: Camera,
  Lights: Lights,
  makeGrid: makeGrid,
  makeCornersArray: [
    makeTopLeft,
    makeTopRight,
    makeBottomRight,
    makeBottomLeft,
    makeNear
  ]
};

livre3d.init({ theme: theme });

