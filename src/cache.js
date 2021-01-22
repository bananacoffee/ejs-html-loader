const cache = {};

export function addDependencies(ctx) {
  add(ctx, get(ctx));
}

function get(ctx) {
  return cache[ctx.resourcePath] || [];
}

function add(ctx, deps) {
  deps.forEach(name => {
    ctx.addDependency(name);
  });
}
