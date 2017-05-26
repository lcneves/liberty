'use strict';

module.exports = {
  'resources': {
    'fonts': {
      'sans-serif-regular': {
        'src': '/fonts/droid_sans_regular.typeface.json'
      },
      'sans-serif-bold': {
        'src': '/fonts/droid_sans_bold.typeface.json'
      },
      'serif-regular': {
        'src': '/fonts/droid_serif_regular.typeface.json'
      },
      'serif-bold': {
        'src': '/fonts/droid_serif_bold.typeface.json'
      }
    }
  },

  'defaults': {
    'direction': 'column',
    'wrap': 'nowrap',
    'justify-content': 'start',
    'align-items': 'start',
    'align-self': 'start',
    'padding': 0,
    'margin': 0,
    'width': 'initial',
    'height': 'initial',
    'depth': 'initial',
    'font-family': 'sans-serif',
    'font-size': 1,
    'font-weight': 'regular',
    'color': 0x000000
  },

  'tags': {
    'surface': {
      'display': 'plane'
    },

    'div': {
      'display': 'block'
    },

    'span': {
      'display': 'inline'
    },

    'p': {
      'display': 'block'
    },

    'h1': {
      'display': 'block',
      'font-size': 6
    },

    'h2': {
      'display': 'block',
      'font-size': 5
    },

    'h3': {
      'display': 'block',
      'font-size': 4
    },

    'h4': {
      'display': 'block',
      'font-size': 3
    },

    'h5': {
      'display': 'block',
      'font-size': 2
    },

    'h6': {
      'display': 'block',
      'font-size': 1
    }
  }
};

