/* eslint-disable global-require, no-param-reassign, max-len */
(function nextJs(moduleExports) {
  // Set up the proxy.
  moduleExports.init = (server, app) => {
    const handle = app.getRequestHandler()

    // Serve Static
    server.get(/^\/(_next|static)\/.+$/, (req, res) => handle(req, res))

    // Dynamic Routes
    server.get('/recommendations/edit/:id', (req, res) => app.render(req, res, '/recommendations/edit', { slug: req.params.id }))

    server.get('/recommendations/add', (req, res) => app.render(req, res, '/recommendations/add'))

    server.get('/labels/edit/:entityId/:fieldName', (req, res) => app.render(req, res, '/labels/edit', { slug: req.params.slug }))

    server.get('*', (req, res) => handle(req, res))
  }
}(module.exports))
