import './css/app.scss';

import ReleaseList from './components/release-list.jsx';

import React from 'react';
import {render} from 'react-dom';
import ReactDOMServer from 'react-dom/server';

// this is totally low rent, can improve later :)
const pagePreamble = '<!doctype html>\
<html class="no-js" lang="en" dir="ltr">\
  <head>\
    <meta charset="utf-8">\
    <meta http-equiv="x-ua-compatible" content="ie=edge">\
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\
    <link rel="stylesheet" type="text/css" href="./css/fontello/css/fontawesome-musicstores.css">  \
    <link rel="stylesheet" type="text/css" href="./styles.css">  \
    <title>Cartoon Beats Reality</title>\
  </head>\
  <body>\
    <div class="cbrMixerLogo-padding">\
      <div class="cbrMixerLogo-image fadeIn"></div>\
    </div>';

const pageEndle = '</section>\
    <div class="row footer">\
      <div class="small-12 columns">&nbsp;</div>\
    </div>\
    <script>\
    (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){\
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\
    })(window,document,"script","https://www.google-analytics.com/analytics.js","ga");\
    ga("create", "UA-7996229-1", "auto");\
    ga("send", "pageview");\
    </script>\
  </body>\
</html>';

module.exports = function render(locals, callback) {
  var html = ReactDOMServer.renderToStaticMarkup(React.createElement(ReleaseList, locals))
  callback(null, pagePreamble + html + pageEndle)
}
