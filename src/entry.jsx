import './css/app.scss';

import ReleaseList from './components/release-list.jsx';

import React from 'react';
import {render} from 'react-dom';
import ReactDOMServer from 'react-dom/server';

//render(<ReleaseList/>, document.getElementById('releases'));

module.exports = function render(locals, callback) {
  var html = ReactDOMServer.renderToStaticMarkup(React.createElement(ReleaseList, locals))
  callback(null, '<!DOCTYPE html>' + html)
}

// class HelloCbr extends React.Component {
//    render () {
//       return (
//          <div className="row">
//             <div className="small-12 columns column-info">
//                <div>
//                CBR REACT M8!
//                </div>
//             </div>
//          </div>
//       );
//   }
// }

// render(<HelloCbr/>, document.getElementById('helloCbr'));