import {getOptions, parseQuery} from 'loader-utils';
import {render} from './render';

export default function ejsHtmlLoader(src) {
  this.cacheable();
  let rendered = '';

  try {
    rendered = renderTemplate(this, src);
  } catch (e) {
    emitError(this, e.message);
  }

  return rendered;
}

function renderTemplate(ctx, src) {
  let data = getData(ctx);
  return render(ctx, src, data);
}

function getData(ctx) {
  return Object.assign({}, getOptions(ctx), getResourceQuery(ctx));
}

function getResourceQuery(ctx) {
  return parseQuery(ctx.resourceQuery || "?");
}

function emitError(ctx, msg) {
  ctx.emitError(`ejs3-html-loader\n${msg}`);
}
