// Add the core packages
// const express = require('express');
import path from 'path';
import { Server } from 'http';
import express from 'express';
import react from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFound from './components/NotFound';

// Set up the hostname and port config
const hostname = 'localhost';
const port = 8080;
const router = require('./app/routes');

// Set up express instance
const app = new express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('*', (req,res) => {
  match(
    {routes, location: req.url },
    (err, redirectLocation, renderProps) => {
      if (err) {
        // If there is an error, send the error message
        return res.status(500)
                  .send(err.message);
      }

      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      let markup;
      if (renderProps) {
        markup = renderToString(<RouterContext { ...renderProps } />);
      } else {
        markup = renderToString(<NotFound />);
        res.status(404);
      }

      return res.render('index', { markup });
    },
  );
});
// app.use('/', router);

// Start the server using the port and hostname config and log a message stating that it is running
server.listen(port, hostname, err => {
  if (err) {
    return console.log(err);
  }
  
  console.log(`Server running at http://${hostname}:${port}/`);
});
