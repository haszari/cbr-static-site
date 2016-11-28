import React from 'react';
import cbrReleaseInfo from '../data/cartoonbeats-releases';


class ReleaseItem extends React.Component {
   rowClasses() {
      const classes = ["row", "release"];
      classes.push(`release-${this.props.catalogueNumber}`);
      classes.push(this.props.leftText ? "release-leftText" : "release-rightText");
      return classes.join(' ');
   }

   slantStyle() {
      let styles = {
         position: 'absolute',
         left: 0,
         right: 0,
         top: 0,
         // big overhang so don't see gap on wide monitor
         bottom: '-100px', 
         zIndex: -1,
         backgroundColor: '#343232',
         transform: 'skewY(+1.5deg)'
      };
      if (this.props.leftText) {
         styles.backgroundColor = '#141212';
         styles.transform = 'skewY(-1.5deg)';
      }
      // last one has less overhang as it butts up to flat footer 
      if (this.props.lastItem) 
         styles.bottom = '-25px';

      if (this.props.colours) {
         if (this.props.colours.background) {
            styles.backgroundColor = this.props.colours.background;
         }
      }

      return styles;
   }

   renderRemixers() {
      let remixersString = "";
      let remixers = this.props.remixers;
      if (remixers && remixers.length) {
         remixersString = remixers.pop();

         if (remixers.length) 
            remixersString = `${remixers.pop()} & ${remixersString}`;

         while (remixers.length)
            remixersString = `${remixers.pop()}, ${remixersString}`;

         remixersString = (<div><i>+ remixes by</i> {remixersString}</div>);
      }
      
      return remixersString;
   }

   renderListenList() {
      if (!this.props.listenLinks) 
         return '';
      let listenLinks = this.props.listenLinks;
      let amazon = listenLinks.amazon ? 
         (<a key="amazon" href={listenLinks.amazon}><span className="icon-amazon"></span></a>) : '';
      let appleMusic = listenLinks.appleMusic ? 
         (<a key="appleMusic" href={listenLinks.appleMusic}><span className="icon-apple"></span></a>) : '';
      let googlePlay = listenLinks.googlePlay ? 
         (<a key="googlePlay" href={listenLinks.googlePlay}><span className="icon-google"></span></a>) : '';
      let spotify = listenLinks.spotify ? 
         (<a key="spotify" href={listenLinks.spotify}><span className="icon-spotify"></span></a>) : '';

      return [
         spotify,
         appleMusic,
         googlePlay,
         amazon
      ];
   }

   render () {
      return (
         <div className={this.rowClasses()}>
            <div className="slant" style={this.slantStyle()} />
            <div className="small-5 columns column-info">
               <div className="release-title">
               {this.props.title}
               </div>
               <div className="release-artists">
                  {this.props.artist}
               </div>
               <div className="release-remixers">
                  {this.renderRemixers()}
               </div>
               <div className="release-listenLinks">
                  {this.renderListenList()}
               </div>
            </div>
            <div className="small-7 columns column-coverart">
               <img className="release-coverart" src={this.props.image}>
               </img>
            </div>
         </div>
      );
   }
};

export default class ReleaseList extends React.Component {
   render () {
      const lastIndex = cbrReleaseInfo.length-1;
      const releaseList = cbrReleaseInfo.map((release, i) =>
         <ReleaseItem {... release} leftText={(i % 2) == 0} lastItem={i==lastIndex} key={release.catalogueNumber} />
      );
      return <div>{releaseList}</div>;
  }
}
