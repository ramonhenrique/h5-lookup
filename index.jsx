var React = require('react/addons');

window.React = React;

var Flux = require('flux');

var dispatcher = new Flux.Dispatcher();

var view = require('./src/lookup.jsx').createViewReference(dispatcher);

React.render(React.createElement(view.Class), document.getElementById('app'));
