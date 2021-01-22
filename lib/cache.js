"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addDependencies = addDependencies;
var cache = {};

function addDependencies(ctx) {
  add(ctx, get(ctx));
}

function get(ctx) {
  return cache[ctx.resourcePath] || [];
}

function add(ctx, deps) {
  deps.forEach(function (name) {
    ctx.addDependency(name);
  });
}