const express = require('express')
const next = require('next')
const path = require('path')
const { parse } = require('url')
const compression = require('compression')

const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 8080

const app = next({dir: '.', dev })
const handle = app.getRequestHandler()

// Routes
const getRoutes = require('./config/routes')

const routes = getRoutes()
app.prepare().then(() => {
  const server = express()
  
  server.use(compression())
  server.get('/service-worker.js', (req, res) => {
    app.serveStatic(req, res, path.join(__dirname, '.next', req.url))
  })
  server.use(express.static(__dirname, { dotfiles: 'allow' }))

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query = {} } = parsedUrl
    const route = routes[pathname]
    if (route) {
      return app.render(req, res, route.page, query)
    }
    return handle(req, res)
  })

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})