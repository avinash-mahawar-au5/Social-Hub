/*! For license information please see 7.d6fa0606.chunk.js.LICENSE.txt */
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{76:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(3),s=n.n(i),r=n(77),l=n.n(r);function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var m="undefined"!==typeof window&&window.navigator.userAgent.toLowerCase(),d=m&&m.indexOf("msie 9.0")>0,h=function(e){var t="rodal-dialog rodal-"+(("enter"===e.animationType?e.enterAnimation:e.leaveAnimation)||e.animation)+"-"+e.animationType,n=e.showCloseButton?o.a.createElement("span",{className:"rodal-close",onClick:e.onClose,onKeyPress:function(t){e.onClose&&13===t.which&&e.onClose(t)},tabIndex:0}):null,a=e.width,i=e.height,s=e.measure,r=e.duration,l=p({},{width:a+s,height:i+s,animationDuration:r+"ms",WebkitAnimationDuration:r+"ms"},{},e.customStyles);return o.a.createElement("div",{style:l,className:t},e.children,n)},b=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return c(u(t=e.call.apply(e,[this].concat(a))||this),"state",{isShow:!1,animationType:"leave"}),c(u(t),"onKeyUp",(function(e){t.props.closeOnEsc&&27===e.keyCode&&t.props.onClose(e)})),c(u(t),"animationEnd",(function(e){var n=t.state.animationType,a=t.props,o=a.closeOnEsc,i=a.onAnimationEnd;"leave"===n?t.setState({isShow:!1}):o&&t.el.focus(),e.target===t.el&&i&&i()})),t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.componentDidMount=function(){this.props.visible&&this.enter()},i.componentDidUpdate=function(e){this.props.visible&&!e.visible&&this.enter(),!this.props.visible&&e.visible&&this.leave()},i.enter=function(){this.setState({isShow:!0,animationType:"enter"})},i.leave=function(){this.setState(d?{isShow:!1}:{animationType:"leave"})},i.render=function(){var e=this,t=this.props,n=t.closeMaskOnClick,a=t.onClose,i=t.customMaskStyles,s=t.showMask,r=t.duration,u=t.className,c=t.children,m=this.state,d=m.isShow,b=m.animationType,f=s?o.a.createElement("div",{className:"rodal-mask",style:i,onClick:n?a:void 0}):null,y={display:d?"":"none",animationDuration:r+"ms",WebkitAnimationDuration:r+"ms"};return o.a.createElement("div",{style:y,className:l()("rodal","rodal-fade-"+b,u),onAnimationEnd:this.animationEnd,tabIndex:"-1",ref:function(t){e.el=t},onKeyUp:this.onKeyUp},f,o.a.createElement(h,p({},this.props,{animationType:b}),c))},a}(o.a.Component);c(b,"propTypes",{width:s.a.number,height:s.a.number,measure:s.a.string,visible:s.a.bool,showMask:s.a.bool,closeOnEsc:s.a.bool,closeMaskOnClick:s.a.bool,showCloseButton:s.a.bool,animation:s.a.string,enterAnimation:s.a.string,leaveAnimation:s.a.string,duration:s.a.number,className:s.a.string,customStyles:s.a.object,customMaskStyles:s.a.object,onClose:s.a.func.isRequired,onAnimationEnd:s.a.func}),c(b,"defaultProps",{width:400,height:240,measure:"px",visible:!1,showMask:!0,closeOnEsc:!1,closeMaskOnClick:!0,showCloseButton:!0,animation:"zoom",enterAnimation:"",leaveAnimation:"",duration:300,className:"",customStyles:{},customMaskStyles:{}}),t.a=b},77:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var s=o.apply(null,a);s&&e.push(s)}else if("object"===i)for(var r in a)n.call(a,r)&&a[r]&&e.push(r)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},78:function(e,t,n){"use strict";var a=n(21),o=n(22),i=n(32),s=n(30),r=n(29),l=n(0),u=n.n(l),c=n(31),p=n(13),m=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).state={youtubeInput:!1,randomPhrasesTextarea:["What are you thinking?","It's a beautiful day isn't it","Tell us a story, i know you're not boring \u266a","In many ways, still miss good old days."],selectedPlaceholderPhrase:null},o.handleNewPost=o.handleNewPost.bind(Object(i.a)(o)),o.getRandomQuote=o.getRandomQuote.bind(Object(i.a)(o)),o.toggleYoutubeInput=o.toggleYoutubeInput.bind(Object(i.a)(o)),o}return Object(o.a)(n,[{key:"componentWillUnmount",value:function(){}},{key:"componentDidMount",value:function(){this.getRandomQuote()}},{key:"toggleYoutubeInput",value:function(){this.setState((function(e){return{youtubeInput:!e.youtubeInput}}))}},{key:"getRandomQuote",value:function(){var e=Math.floor(Math.random()*this.state.randomPhrasesTextarea.length);this.setState({selectedPlaceholderPhrase:this.state.randomPhrasesTextarea[e]})}},{key:"handleNewPost",value:function(e){e.preventDefault(),this.props.newPost({username:this.props.profileId,message:e.target.message.value,extra:{value:e.target.extra.value,extraType:"youtube"}}),e.target.message.value="",e.target.extra.value=""}},{key:"render",value:function(){return u.a.createElement("div",{className:"d-flex"},u.a.createElement("div",{className:"mr-4 d-none d-md-block"},u.a.createElement("img",{alt:"",src:this.props.logged.profilePic,className:"d-block mx-auto rounded-circle border",style:{width:"75px"}})),u.a.createElement("div",{className:"mt-2 w-100"},u.a.createElement("form",{onSubmit:this.handleNewPost},u.a.createElement("div",{className:"form-group"},u.a.createElement("textarea",{id:"message",name:"message",className:"form-control border-top-0 border-left-0 border-right-0 border-brand rounded-0 profile__body__textarea__input",required:!0,placeholder:this.state.selectedPlaceholderPhrase})),u.a.createElement("div",{className:"form-group"},u.a.createElement("input",{name:"extra",id:"extra",className:"form-control mt-2 "+(this.state.youtubeInput?"d-flex":"d-none"),placeholder:"https://www.youtube.com/watch?v=dO368WjwyFs"})),u.a.createElement("div",{className:"form-group"},u.a.createElement("button",{type:"submit",className:"btn btn-brand rounded-pill float-right text-white"},u.a.createElement("i",{className:"fas fa-paper-plane"})," Submit"),u.a.createElement("button",{type:"button",onClick:this.toggleYoutubeInput,className:"btn btn-brand-secondary text-white rounded-pill float-right px-3 mx-2"},u.a.createElement("i",{className:"fab fa-youtube"})," Youtube")))))}}]),n}(l.Component);t.a=Object(c.b)((function(e){return{logged:e.app.logged,profile:e.profile}}),(function(e){return{newPost:function(t){return e(Object(p.n)(t))}}}))(m)},80:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(21),o=n(22),i=n(30),s=n(29),r=n(0),l=n.n(r),u=n(31),c=n(78),p=n(76),m=n(4),d=(n(80),function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement(p.a,{visible:this.props.isVisible,onClose:this.props.togglePostModal,animation:"slideUp",customStyles:{height:"fit-content"}},l.a.createElement(c.a,{profileId:this.props.profileId,onSuccess:this.props.togglePostModal}))}}]),n}(r.Component));t.default=Object(u.b)((function(e){return{profileId:e.app.logged.username,isVisible:e.app.postModal.isVisible}}),(function(e){return{togglePostModal:function(){return e(Object(m.w)())}}}))(d)}}]);
//# sourceMappingURL=7.d6fa0606.chunk.js.map