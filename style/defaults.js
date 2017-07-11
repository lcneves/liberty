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
    'depth': 'initial'
  },

  'tags': {
    'body': {
      'font-family': 'sans-serif',
      'font-size': 16,
      'font-height': 1,
      'font-weight': 'regular',
      'color': 0x000000
    },

    'text': {
      'display': 'inline',
      'direction': 'row'
    },

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
      'font-weight': 'bold',
      'font-size': 32,
      'font-height': 8
    },

    'h2': {
      'display': 'block',
      'font-weight': 'bold',
      'font-size': 24,
      'font-height': 6
    },

    'h3': {
      'display': 'block',
      'font-weight': 'bold',
      'font-size': 18.7,
      'font-height': 4.67
    },

    'h4': {
      'display': 'block',
      'font-weight': 'bold',
      'font-size': 16,
      'font-height': 4
    },

    'h5': {
      'display': 'block',
      'font-weight': 'bold',
      'font-size': 13.3,
      'font-height': 3.33

    },

    'h6': {
      'display': 'block',
      'font-weight': 'bold',
      'font-size': 10.7,
      'font-height': 2.67
    }
  }
};

