import React from 'react';
import cbrReleaseInfo from '../data/cartoonbeats-releases';


class ReleaseItem extends React.Component {
   render () {
      return (
         <div className="row release">
            <div className="small-12 columns column-info">
               <div>
               {this.props.catalogueNumber}
               </div>
            </div>
         </div>
      );
   }
};

export default class ReleaseList extends React.Component {
   render () {
      const releaseList = cbrReleaseInfo.map((release) =>
         <ReleaseItem catalogueNumber={release.catalogueNumber} key={release.catalogueNumber}></ReleaseItem>
      );
      return <div>{releaseList}</div>;
  }
}
