import './css/foundation.css';
import './css/app.css';

import React from 'react';
import {render} from 'react-dom';

class HelloCbr extends React.Component {
   render () {
      return (
         <div className="row">
            <div className="small-12 columns column-info">
               <div>
               CBR REACT M8!
               </div>
            </div>
         </div>
      );
  }
}

render(<HelloCbr/>, document.getElementById('helloCbr'));