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
      'display': 'block',
      'margin': '0 1em 0'
    },

    'h1': {
      'display': 'block',
      'font-weight': 'bold',
      'font-size': 32,
      'font-height': 8,
      'margin': '0 1em 0'
    },

    'h2': {
      'display': 'block',
      'font-weight': 'bold',
      'font-size': 24,
      'font-height': 6,
      'margin': '0 1em 0'
    },

    'h3': {
      'display': 'block',
      'font-weight': 'bold',
      'font-size': 18.7,
      'font-height': 4.67,
      'margin': '0 1em 0'
    },

    'h4': {
      'display': 'block',
      'font-weight': 'bold',
      'font-size': 16,
      'font-height': 4,
      'margin': '0 1em 0'
    },

    'h5': {
      'display': 'block',
      'font-weight': 'bold',
      'font-size': 13.3,
      'font-height': 3.33,
      'margin': '0 1em 0'

    },

    'h6': {
      'display': 'block',
      'font-weight': 'bold',
      'font-size': 10.7,
      'font-height': 2.67,
      'margin': '0 1em 0'
    }
  }
};

