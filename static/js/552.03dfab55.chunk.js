/*! For license information please see 552.03dfab55.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunktiktok=self.webpackChunktiktok||[]).push([[552],{2552:function(e,t,n){n.d(t,{Z:function(){return S}});var o=n(1413),r=n(3433),s=n(4165),i=n(5861),l=n(9439),a=n(2791),c=n(4771),h=n(1087),u=n(3911),p=n(3154),d=n(3866),f=n(8854),v=n(7718),m=n(6038),g=n(5986),w=n(4944),y=n(3346),T=n(184);var b=function(e){var t,n=e.data,r=(0,a.useState)(n),c=(0,l.Z)(r,2),b=c[0],x=c[1],Z=null===(t=(0,y.PR)())||void 0===t?void 0:t.data;(0,a.useEffect)((function(){x(b)}),[b]);var E=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,d.Z)(b);case 4:t=e.sent,x((function(e){return(0,o.Z)((0,o.Z)({},e),t)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(e){Z||e.preventDefault()},L=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(window.location+"@".concat(b.user.userName,"/video/").concat(b.id));case 2:alert("Link Copied");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,T.jsxs)("div",{className:p.Z["video-content"],children:[(0,T.jsx)("div",{className:p.Z["video-container"],children:(0,T.jsx)(h.rU,{to:g.Z.videoLink(b),state:{videoDetail:!0,video:b,prevPath:window.location.pathname,openModel:!0},children:(0,T.jsx)("div",{className:p.Z["wrapper-video"],children:(0,T.jsx)(f.Z,{className:p.Z.video,data:b})})})}),(0,T.jsx)("div",{className:p.Z.action,children:(0,T.jsxs)(w.Z,{children:[(0,T.jsxs)("button",{className:p.Z["action-btn"],onClick:function(){return E(b)},children:[(0,T.jsxs)("span",{className:p.Z["icon-btn"],children:[(0,T.jsx)(u.h_,{className:b.liked?p.Z.liked:""}),"   "]}),(0,T.jsx)("b",{children:b.likesCount})]}),(0,T.jsx)(h.rU,{to:g.Z.videoLink(b),state:{videoDetail:!0,video:b,prevPath:window.location.pathname,openModel:!0},onClick:S,children:(0,T.jsxs)("button",{className:p.Z["action-btn"],children:[(0,T.jsx)("span",{className:p.Z["icon-btn"],children:(0,T.jsx)(u.qt,{})}),(0,T.jsx)("b",{children:b.commentsCount})]})}),(0,T.jsx)(v.Z,{items:m.Z5,offset:[150,0],onChange:function(e){if("Copy link"===e.title)L()},children:(0,T.jsxs)("button",{className:p.Z["action-btn"],onClick:S,children:[(0,T.jsx)("span",{className:p.Z["icon-btn"],children:(0,T.jsx)(u.aA,{})}),(0,T.jsxs)("b",{children:[b.sharesCount,"0"]})]})})]})})]})},x=n(4333),Z=n(3066),E=n(8967);var S=function(e){var t=e.type,n=(0,a.useState)([]),h=(0,l.Z)(n,2),u=h[0],d=h[1],f=(0,a.useState)(!0),v=(0,l.Z)(f,2),m=v[0],g=v[1],w=(0,a.useState)(2),y=(0,l.Z)(w,2),S=y[0],L=y[1];(0,a.useEffect)((function(){function e(){return(e=(0,i.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.t5(t,1);case 2:(n=e.sent).length<15&&g(!1),d(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]);var D=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.t5(t,S);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,d([].concat((0,r.Z)(u),(0,r.Z)(t))),0===t.length&&g(!1),L((function(e){return e+1}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,T.jsx)(T.Fragment,{children:(0,T.jsx)(c.Z,{dataLength:u.length,next:j,hasMore:m,loader:(0,T.jsx)(E.Z,{}),endMessage:(0,T.jsx)("h4",{children:"Yay! You have seen it all"}),style:{overflow:"inherit"},children:u.map((function(e,t){return(0,T.jsxs)("div",{className:p.Z.wrapper,children:[(0,T.jsx)(x.Z,(0,o.Z)({},e)),(0,T.jsx)(b,{data:e})]},t)}))})})}},4771:function(e,t,n){var o=n(2791),r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)};var s=function(){return s=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)};var i="Pixel",l="Percent",a={unit:l,value:.8};function c(e){return"number"===typeof e?{unit:l,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:i,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:l,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),a):(console.warn("scrollThreshold should be string or number"),a)}var h=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){n.lastScrollTop||(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(e){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(e)}),0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},n.throttledOnScrollListener=function(e,t,n,o){var r,s=!1,i=0;function l(){r&&clearTimeout(r)}function a(){var a=this,c=Date.now()-i,h=arguments;function u(){i=Date.now(),n.apply(a,h)}s||(o&&!r&&u(),l(),void 0===o&&c>e?u():!0!==t&&(r=setTimeout(o?function(){r=void 0}:u,void 0===o?e-c:e)))}return"boolean"!==typeof t&&(o=n,n=t,t=void 0),a.cancel=function(){l(),s=!0},a}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?s(s({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=c(t);return o.unit===i?e.scrollTop<=o.value+n-e.scrollHeight+1:e.scrollTop<=o.value/100+n-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=c(t);return o.unit===i?e.scrollTop+n>=e.scrollHeight-o.value:e.scrollTop+n>=o.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=s({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),r=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return o.createElement("div",{style:r,className:"infinite-scroll-component__outerdiv"},o.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&o.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},o.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(o.Component);t.Z=h}}]);
//# sourceMappingURL=552.03dfab55.chunk.js.map