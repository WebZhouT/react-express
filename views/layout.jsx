import React from 'react';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          Demo
        </title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="root">
          {children}
        </div>
        <script type="text/javascript" src="scripts/bundle.js"></script>
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
};
