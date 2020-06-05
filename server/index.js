require('newrelic');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(express.static(`${__dirname}/../public`));

// const mediaProxy = createProxyMiddleware(
//   {
//     target: 'http://3.23.132.230:8000',
//     changeOrigin: true,
//   },
// );

// const sidebarProxy = createProxyMiddleware({
//   target: 'http://52.14.114.30:1992',
//   changeOrigin: true,
// });

// const announcementsProxy = createProxyMiddleware(
//   {
//     target: 'http://3.17.138.9:8080',
//     changeOrigin: true,
//   },
// );

const reviewsProxy = createProxyMiddleware(
  {
    target: 'http://http://18.224.107.83:4200',
    changeOrigin: true,
  },
);


// proxy to reviews service
app.use('/api/reviews/:id', reviewsProxy);
app.use('/api/games/:id', reviewsProxy);
app.get('/api/users/:id', reviewsProxy);



module.exports = app;
