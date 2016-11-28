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
      let styles = {};
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
      const releaseList = cbrReleaseInfo.map((release, i) =>
         <ReleaseItem {... release} leftText={(i % 2) == 0} key={release.catalogueNumber} />
      );
      return <div>{releaseList}</div>;
  }
}
