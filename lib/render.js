'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;

var _ejs = require('ejs');

function render(ctx, src, data) {
  var filename = ctx.resourcePath;
  var delimiter = data.delimiter;
  var context = data.context;

  var tpl = (0, _ejs.compile)(src, { filename: filename, delimiter: delimiter, context: context });

  return tpl(data);
}