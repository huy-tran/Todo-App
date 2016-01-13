var React = require('react');
var ReactDOM = require('react-dom');
var Fluxxor = require('fluxxor');
var AppStores = require('./stores/AppStores');
var AppActions = require('./actions/AppActions');
var Main = require('./ui/Main');

var flux = new Fluxxor.Flux(AppStores, AppActions);

ReactDOM.render(<Main flux={flux} />, document.getElementById('myApp'));
