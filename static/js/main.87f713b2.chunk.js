(this["webpackJsonpxray-deploy"]=this["webpackJsonpxray-deploy"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var s=n(1),r=n.n(s),a=n(8),o=n.n(a),i=(n(13),n(14),n(2)),c=n(3),l=n(6),h=n(5),d=n(4),m=(n(15),function(t){return t.children}),p=(n(16),n(0)),u=function(t){return Object(p.jsx)("div",{className:"Button",children:Object(p.jsx)("button",{onClick:t.clicked,children:t.children})})},f=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(i.a)(this,n),(s=e.call(this,t)).componentDidMount=function(){s.updateWidthHeight(),window.addEventListener("resize",s.updateWidthHeight)},s.getDiameter=function(){var t=s.state,e=t.diameter,n=t.resize,r=s.getMaxResize(n),a=s.matchesWindow(n);return s.state.responsive?window.matchMedia("(min-width: ".concat(r+1,"px)")).matches?a>e?a:e:a:e},s.updateWidthHeight=function(){var t=s.state.beyond;if(null===s.firstImg)return s.setState({centerX:0}),void setTimeout(s.updateWidthHeight,2e3);var e=s.firstImg.naturalWidth,n=s.firstImg.naturalHeight,r=e/n;0===n&&(r=1.61);var a,o,i,c=s.firstImg.clientWidth,l=Math.round(c/r),h=s.getDiameter();i=t?{width:c+h,height:l+h,top:-h/2,left:-h/2}:{width:c,height:l,top:0,left:0},o=Math.round(l/2)+Math.round(h/2),a=Math.round(c/2)+Math.round(h/2),s.setState({width:c,height:l,dim:h,sensor:i,centerX:a,centerY:o})},s.getMaxResize=function(t){for(var e=t[0].screen,n=0;n<t.length;n++)t[n].screen>e&&(e=t[n].screen);return e},s.matchesWindow=function(t){for(var e=t[0].diameter,n=0;n<t.length;n++)window.matchMedia("(max-width: ".concat(t[n].screen,"px)")).matches&&(e=t[n].diameter);return e},s.HoverSensor=function(t){var e,n=t.nativeEvent.layerX,r=t.nativeEvent.layerY,a=s.state,o=a.sensor,i=a.dim,c=a.beyond,l=0,h=o.height,d=0,m=o.width,p=i/2;e=c?i/2:0,r>=l+p&&r<=h-p?(s.zoom.style.top="".concat(r-p-e,"px"),s.lastImg.style.top="".concat(-r+p+e,"px")):r<l+p?(s.zoom.style.top="".concat(l-e,"px"),s.lastImg.style.top="".concat(l+e,"px")):r>h-p&&(s.zoom.style.top="".concat(h-i-e,"px"),s.lastImg.style.top="".concat(-h+i+e,"px")),n>=d+p&&n<=m-p?(s.zoom.style.left="".concat(n-p-e,"px"),s.lastImg.style.left="".concat(-n+p+e,"px")):n<d+p?(s.zoom.style.left="".concat(d-e,"px"),s.lastImg.style.left="".concat(d+e,"px")):n>m-p&&(s.zoom.style.left="".concat(m-i-e,"px"),s.lastImg.style.left="".concat(-m+i+e,"px"))},s.move=function(t){1===s.state.reshow&&(s.setState({reshow:0}),s.updateWidthHeight()),s.state.transform&&s.setState({transform:!1}),s.HoverSensor(t)},s.onLeftPress=function(){var t={nativeEvent:{layerX:s.state.centerX-.3*s.state.width,layerY:s.state.centerY}};s.move(t)},s.onRightPress=function(){var t={nativeEvent:{layerX:s.state.centerX-.25*s.state.width,layerY:s.state.centerY+.3*s.state.height}};s.move(t)},s.onTopPress=function(){var t={nativeEvent:{layerX:s.state.centerX+.4*s.state.width,layerY:s.state.centerY+.15*s.state.height}};s.move(t)},s.onBottomPress=function(){var t={nativeEvent:{layerX:s.state.centerX+.3*s.state.width,layerY:s.state.centerY+.27*s.state.height}};s.move(t)},s.state={transform:!0,images:s.props.images,cursor:s.props.cursor||!1,diameter:s.props.diameter||150,beyond:s.props.beyond||!1,width:null,height:null,dim:null,type:s.props.type||"circle",sensor:{width:null,height:null,top:null,left:null},responsive:s.props.responsive||!0,resize:s.props.resize||[{screen:1199,diameter:200},{screen:991,diameter:150},{screen:767,diameter:100},{screen:575,diameter:50}],centerX:0,centerY:0,reshow:1},s.move=s.move.bind(Object(d.a)(s)),s}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.images,s=e.cursor,r=e.transform,a=e.width,o=e.height,i=e.dim,c=e.sensor,l=e.type,h=s?"x-ray-photo-parent":"x-ray-photo-parent cursor-none",d=r?"x-ray-last-photo transform":"x-ray-last-photo",f=r?"x-ray-last-photo-img transform":"x-ray-last-photo-img",g={width:"".concat(i,"px"),height:"".concat(i,"px")};return Object(p.jsxs)(m,{children:[Object(p.jsxs)("div",{className:h,children:[Object(p.jsx)("img",{ref:function(e){t.firstImg=e},src:n[0],alt:"first-photo",className:"x-ray-first-photo"}),Object(p.jsxs)("div",{ref:function(e){t.zoom=e},className:d,style:g,children:["magnifyingGlass"===l?Object(p.jsx)("div",{className:"magnifyingGlass"}):null,Object(p.jsx)("div",{className:"x-ray-last-photo-img-parent",children:Object(p.jsx)("img",{ref:function(e){t.lastImg=e},style:{width:"".concat(a,"px"),height:"".concat(o,"px")},src:n[1],alt:"last-photo",className:f})})]}),Object(p.jsx)("div",{className:"x-ray-sensor",style:c,onMouseMove:this.move})]}),Object(p.jsxs)("div",{className:"Buttons",children:[Object(p.jsx)(u,{clicked:this.onLeftPress,children:"Top rear"}),Object(p.jsx)(u,{clicked:this.onRightPress,children:"Rear wheels"}),Object(p.jsx)(u,{clicked:this.onBottomPress,children:"Front Wheels"}),Object(p.jsx)(u,{clicked:this.onTopPress,children:"Headlights"})]})]})}}]),n}(s.Component),g=n.p+"static/media/img11.6addca63.png",v=n.p+"static/media/img12.ae8f99fa.png",y=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(p.jsx)(f,{images:[g,v],beyond:!0,diameter:200,cursor:!0,responsive:!0,type:"circle",backgroundColor:"#00AAFF"})}}]),n}(s.Component);var x=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(y,{})})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,s=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),s(t),r(t),a(t),o(t)}))};o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),j()}],[[18,1,2]]]);
//# sourceMappingURL=main.87f713b2.chunk.js.map