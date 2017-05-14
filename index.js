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

// Constant definitions
const GET_PATH = '/public';

const WORLD_WIDTH = 100;
const CAMERA_HORIZONTAL_FOV = 30;
// At z=0, the screen fits x=WORLD_WIDTH.
const CAMERA_FAR =
    WORLD_WIDTH / (2 * Math.tan(CAMERA_HORIZONTAL_FOV / 2 * Math.PI / 180 ));
const CAMERA_NEAR = 0.25 * CAMERA_FAR;

// Based on the code of http://themetalmuncher.github.io/fov-calc/
function getVerticalFOV(hFov, aspectRatio) {
  var hFovRad = hFov * Math.PI / 180;
  var vFovRad = 2 * Math.atan(Math.tan(hFovRad / 2) / aspectRatio);
  return vFovRad * 180 / Math.PI;
}

class Camera extends THREE.PerspectiveCamera {
  constructor(width, height) {
    const aspectRatio = width / height;

    super(
      getVerticalFOV(CAMERA_HORIZONTAL_FOV, aspectRatio),
      aspectRatio,
      CAMERA_NEAR,
      CAMERA_FAR
    );

    this.position.x = WORLD_WIDTH / 2;
    this.position.y = WORLD_WIDTH / 2 / aspectRatio;
    this.position.z = CAMERA_FAR;
  }

  set aspectRatio(value) {
    this.aspect = value;
    this.fov = getVerticalFOV(CAMERA_HORIZONTAL_FOV, value);
    this.position.y = WORLD_WIDTH / 2 / value;
    this.updateProjectionMatrix();
  }
}

class Scene extends THREE.Scene {
  constructor() {
    super();
    this.background = new THREE.Color(0xffffff);
  }
}

class Body extends livre3d.ObjectLivre {
  constructor(aspectRatio) {
    super();
    this._aspect = aspectRatio;
  }
  
  get boundaries() {
    return {
      left: 0,
      right: WORLD_WIDTH,
      top: WORLD_WIDTH / this._aspect,
      bottom: 0,
      far: 0,
      near: CAMERA_FAR - CAMERA_NEAR
    };
  }

  set aspectRatio(value) {
    this._aspect = value;

    this.traverse(object => {
      if (object instanceof livre3d.ObjectLivre && object !== this) {
        object.setWorldPosition();
      }
    });
  }
}

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



var makeMenu = function () {
  return new Promise(resolve => {
    jsonLoader.load(GET_PATH + '/objects/menu_icon.json',
      (geometry) => { // (geometry, materials) is also possible
        var material = new THREE.MeshPhongMaterial( { color: 0x333333 } );
        var mesh = new THREE.Mesh( geometry, material );
        var icon = new livre3d.ObjectLivre(mesh);
        icon.relativePosition.x = { reference: 'right', distance: 10 };
        icon.relativePosition.y.distance = 5;

        resolve(icon);
      }
    );
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
  Scene: Scene,
  Body: Body,
  Camera: Camera,
  Lights: Lights,
  makeGrid: makeGrid,
  makeLogo: makeLogo,
  makeMenu: makeMenu,
  makeCornersArray: [
    makeTopLeft,
    makeTopRight,
    makeBottomRight,
    makeBottomLeft,
    makeNear
  ]
};

livre3d.init({ theme: theme });

