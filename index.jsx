var React = require('react/addons');

window.React = React;

var Flux = require('flux');

var dispatcher = new Flux.Dispatcher();

window.ZscanApp = require('./stores/lookup.js');
window.zscanapp = ZscanApp.createStoreReference(dispatcher);

var view = require('./views/lookup.jsx').createViewReference(dispatcher);

React.render(React.createElement(view.Class), document.getElementById('app'));
