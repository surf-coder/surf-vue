import headerBar from './header-bar';

// import common scss
require('../assets/scss/_index.scss');

// import your component and add to this list
const components = [
  headerBar
];

// vue plugin for cirrus components
export default {

  // options is an array of components to be registered
  // e.g. ['c-button', 'c-modal']
  install (Vue, options) {
    if (typeof options === 'undefined') {
      components.forEach(c => Vue.component(c.name, c));
    } else {
      if (!(options instanceof Array)) {
        throw new TypeError('options must be an array');
      }
      components.forEach((c) => {
        // register only components specified in the options
        if (options.indexOf(c.name) !== -1) {
          Vue.component(c.name, c);
        }
      });
    }
  },
};

export {
  headerBar
};
