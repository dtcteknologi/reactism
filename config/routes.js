const routes = require('next-routes')

module.exports = routes()
  .add({ name: 'home', pattern: '/', page: '/home' })
  .add({ name: 'about', pattern: '/about', page: '/about' })
