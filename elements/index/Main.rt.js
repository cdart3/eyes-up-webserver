'use strict';
var React = require('react/addons');
var _ = require('lodash');
module.exports = function () {
    return React.createElement('div', { 'className': 'test' }, React.createElement('p', {}, ' Hello World!'));
};