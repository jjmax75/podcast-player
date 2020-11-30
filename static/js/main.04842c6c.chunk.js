(this["webpackJsonppodcast-player"]=this["webpackJsonppodcast-player"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),r=c(6),i=c.n(r),o=(c(12),c(2)),l=c(3),u=c.n(l),d=c(4),j=(c(14),c(15),function(e){var t=e.handleKeyPress,c=Object(s.useState)(""),a=Object(o.a)(c,2),r=a[0],i=a[1];return Object(n.jsx)("form",{children:Object(n.jsx)("input",{className:"search-box",type:"text",placeholder:"Search for a podcast",value:r,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){return t(e)}})})}),b=(c(16),c(17),function(e){var t,c,s=e.podcast,a=e.setSelectedPodcast;return Object(n.jsxs)("li",{className:"result-item",onClick:function(){return a(s.id)},children:[Object(n.jsx)("img",{className:"podcast-thumbnail",src:s.thumbnail}),Object(n.jsxs)("div",{className:"podcast-details",children:[Object(n.jsx)("h3",{className:"podcast-title",children:s.title_original}),Object(n.jsx)("div",{className:"podcast-description",children:(t=s.description_original,c=250,t.length<=c?t:t.slice(0,c-3)+"...")}),Object(n.jsxs)("div",{class:"podcast-meta",children:[Object(n.jsxs)("span",{children:["Published by: ",s.publisher_original," | "]}),s.explicit_content&&Object(n.jsx)("span",{children:"Explicit | "}),Object(n.jsxs)("span",{children:["Last updated: ",new Date(s.latest_pub_date_ms).toLocaleDateString()]})]})]})]},s.id)}),p=function(e){var t=e.podcasts,c=e.setSelectedPodcast;return Object(n.jsx)("ul",{className:"result-list",children:t.map((function(e){return Object(n.jsx)(b,{podcast:e,setSelectedPodcast:c},e.id)}))})},h=function(e){var t=e.setSelectedPodcast,c=Object(s.useState)([]),a=Object(o.a)(c,2),r=a[0],i=a[1],l=function(){var e=Object(d.a)(u.a.mark((function e(t){var c,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={headers:{"X-ListenAPI-Key":"3f347278118440098f5c6acd0c3546ad"}},e.next=4,fetch("".concat("https://listen-api.listennotes.com/api/v2","/search?q=").concat(t.target.value,"&sort_by_date=0&type=podcast"),c);case 4:return n=e.sent,e.next=7,n.json();case 7:s=e.sent,i(s.results);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.length?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)("button",{onClick:function(){return i([])},children:"Back"}),Object(n.jsxs)("h1",{children:["Results (",r.length,")"]})]}),Object(n.jsx)(p,{setSelectedPodcast:t,podcasts:r})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{children:"Welcome!"}),Object(n.jsx)("h1",{children:"Explore top podcasts"}),Object(n.jsx)(j,{handleKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),l(e))}})]})},O=(c(18),c(19),function(e){var t,c=e.podcast,a=Object(s.useState)(!1),r=Object(o.a)(a,2),i=r[0],l=r[1],u=Object(s.useState)(0),d=Object(o.a)(u,2),j=d[0],b=d[1],p=Object(s.useRef)(),h=function(){return setInterval((function(){var e;b((null===p||void 0===p||null===(e=p.current)||void 0===e?void 0:e.currentTime)/(null===c||void 0===c?void 0:c.audio_length_sec)*100)}),1e3)};return Object(n.jsxs)("div",{className:"audio-player",children:[Object(n.jsxs)("audio",{ref:p,src:null===c||void 0===c?void 0:c.audio,children:["Your browser does not support the",Object(n.jsx)("code",{children:"audio"})," element."]}),Object(n.jsxs)("div",{className:"podcast-details",children:[Object(n.jsx)("h3",{children:null===c||void 0===c?void 0:c.title}),(null===c||void 0===c?void 0:c.description)&&Object(n.jsx)("div",{dangerouslySetInnerHTML:{__html:c.description}})]}),Object(n.jsx)("div",{className:"progress",children:Object(n.jsx)("progress",{className:"progress-bar",value:j,min:"0",max:"100"})}),Object(n.jsxs)("div",{className:"controls",children:[Object(n.jsx)("button",{className:"shuffle-button",type:"button",onClick:function(){return p.current.currentTime-=30},children:"- 30 secs"}),Object(n.jsx)("button",{className:"play-button",type:"button",onClick:function(){l((function(){return i?(p.current.pause(),clearInterval(t)):(p.current.play(),t=h()),!i}))},children:i?"Pause":"Play"}),Object(n.jsx)("button",{className:"shuffle-button",type:"button",onClick:function(){return p.current.currentTime+=30},children:"+ 30 secs"})]})]})}),f=function(e){var t=e.id,c=e.setSelectedPodcast,a=Object(s.useState)({}),r=Object(o.a)(a,2),i=r[0],l=r[1],j=Object(s.useState)(),b=Object(o.a)(j,2),p=b[0],h=b[1];Object(s.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var c,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={headers:{"X-ListenAPI-Key":"3f347278118440098f5c6acd0c3546ad"}},e.next=3,fetch("".concat("https://listen-api.listennotes.com/api/v2","/podcasts/").concat(t),c);case 3:return n=e.sent,e.next=6,n.json();case 6:s=e.sent,l(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("button",{className:"back-button",onClick:function(){return c(null)},children:"Back"}),Object(n.jsxs)("div",{className:"main",children:[Object(n.jsx)("img",{src:null===i||void 0===i?void 0:i.image}),Object(n.jsx)(O,{podcast:p})]}),i.episodes?Object(n.jsx)("ul",{className:"podcast-list",children:i.episodes.map((function(e){return Object(n.jsx)("li",{className:"podcast-list-item",onClick:function(){return h(e)},children:e.title},e.id)}))}):Object(n.jsx)("span",{children:"The podcast list is loading"})]})},x=(c(20),function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("img",{src:"./podcast-player/listen-notes.png"})})}),m=(c(21),function(){return Object(n.jsx)("header",{className:"header",children:"Seashell"})}),v=(c(22),function(e){var t=e.children;return Object(n.jsx)("main",{className:"main-content",children:t})}),g=function(){var e=Object(s.useState)(),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m,{}),Object(n.jsx)(v,{children:c?Object(n.jsx)(f,{id:c,setSelectedPodcast:a}):Object(n.jsx)(h,{setSelectedPodcast:a})}),Object(n.jsx)(x,{})]})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.04842c6c.chunk.js.map