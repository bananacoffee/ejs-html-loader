'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ejsHtmlLoader;

var _loaderUtils = require('loader-utils');

var _render = require('./render');

function ejsHtmlLoader(src) {
  this.cacheable();
  var rendered = '';

  try {
    rendered = renderTemplate(this, src);
  } catch (e) {
    emitError(this, e.message);
  }

  return rendered;
}

function renderTemplate(ctx, src) {
  var data = getData(ctx);
  return (0, _render.render)(ctx, src, data);
}

function getData(ctx) {
  return Object.assign({}, (0, _loaderUtils.getOptions)(ctx), getResourceQuery(ctx));
}

function getResourceQuery(ctx) {
  return (0, _loaderUtils.parseQuery)(ctx.resourceQuery || "?");
}

function emitError(ctx, msg) {
  ctx.emitError('ejs3-html-loader\n' + msg);
}
module.exports = exports.default;