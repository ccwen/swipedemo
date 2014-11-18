var kde=Require("ksana-document").kde;
var kse=Require("ksana-document").kse;
var bootstrap=Require("bootstrap");
var Swipe=Require("swipe");

var main = React.createClass({
  getInitialState:function(){
    return {};
  },
  next:function() {
    this.refs.Swipe.swipe.next();
  },
  prev:function() {
    this.refs.Swipe.swipe.prev();
  },
  render: function() {
    return (
      <div className="main">
       <Swipe ref="Swipe" startSlide="1">
        <div>1111abcsafsafsadf<br/>
        adsfsafsadfsadfadfabcsafsafsadf<br/>
        adsfsafsadfsadfadfabcsafsafsadf<br/>
        adsfsafsadfsadfadfabcsafsafsadf<br/>
        adsfsafsadfsadfadf</div>
        <div>abcsafsafsadf<br/>
        adsfsafsadfsadfadfabcsafsafsadf<br/>
        adsfsafsadfsadfadfabcsafsafsadf<br/>
        adsfsafsadfsadfadfabcsafsafsadf<br/>
        adsfsafsadfsadfadf</div>
       </Swipe>
       <button onClick={this.next}>prev</button>
       <button onClick={this.next}>next</button>
      </div>
      );
    }
});
module.exports=main;