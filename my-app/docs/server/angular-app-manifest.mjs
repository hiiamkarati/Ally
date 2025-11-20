
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Ally/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Ally"
  },
  {
    "renderMode": 2,
    "route": "/Ally/all-tools"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 633, hash: '781e0a7442884f1a91b09328b9713aa8dd4d98ee8a50fa880440d3c4d6f24cb0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1146, hash: '909840eb7d425072ed1ba3fa20058724a549f7692315a28ea3071c052dec2727', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 136685, hash: '3171c2a78465c0f4660e45a9b1ea030a9df825c94d69b0573158a991f72e2ca5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'all-tools/index.html': {size: 46129, hash: '90b76aa161be72315b2ee35facc93013924a84b1f96f10d2123a6df2ec020910', text: () => import('./assets-chunks/all-tools_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
