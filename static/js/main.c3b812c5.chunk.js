(this["webpackJsonppodcast-player"]=this["webpackJsonppodcast-player"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),a=c(6),o=c.n(a),i=(c(12),c(2)),u=c(3),d=c.n(u),j=c(4),l=function(e){var t=e.setSelectedPodcast,c=Object(r.useState)(""),s=Object(i.a)(c,2),a=s[0],o=s[1],u=Object(r.useState)([]),l=Object(i.a)(u,2),p=l[0],b=l[1],h=function(){var e=Object(j.a)(d.a.mark((function e(t){var c,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={headers:{"X-ListenAPI-Key":"3f347278118440098f5c6acd0c3546ad"}},e.next=4,fetch("".concat("https://listen-api.listennotes.com/api/v2","/search?q=").concat(a,"&sort_by_date=0&type=podcast"),c);case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,b(r.results);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Search for a podcast"}),Object(n.jsxs)("form",{children:[Object(n.jsx)("input",{type:"text",placeholder:"Search for a podcast",value:a,onChange:function(e){return o(e.target.value)}}),Object(n.jsx)("button",{onClick:h,children:"Search"})]}),Object(n.jsx)("ul",{children:p.map((function(e){var c=e.id,r=e.title_original;return Object(n.jsx)("li",{onClick:function(){return t(c)},children:r},c)}))})]})},p=function(e){var t=e.id,c=Object(r.useState)({}),s=Object(i.a)(c,2),a=s[0],o=s[1],u=Object(r.useState)(),l=Object(i.a)(u,2),p=l[0],b=l[1];Object(r.useEffect)(Object(j.a)(d.a.mark((function e(){var c,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={headers:{"X-ListenAPI-Key":"3f347278118440098f5c6acd0c3546ad"}},e.next=3,fetch("".concat("https://listen-api.listennotes.com/api/v2","/podcasts/").concat(t),c);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,o(r);case 8:case"end":return e.stop()}}),e)}))),[t]);return a.episodes?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("ul",{children:a.episodes.map((function(e){var t=e.audio,c=e.id,r=e.title;return Object(n.jsx)("li",{onClick:function(){return b(t)},children:r},c)}))}),p&&Object(n.jsxs)("audio",{controls:!0,src:p,children:["Your browser does not support the",Object(n.jsx)("code",{children:"audio"})," element."]})]}):Object(n.jsx)(n.Fragment,{children:"The podcast list is loading"})},b=function(){var e=Object(r.useState)(),t=Object(i.a)(e,2),c=t[0],s=t[1];return c?Object(n.jsx)(p,{id:c}):Object(n.jsx)(l,{setSelectedPodcast:s})};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c3b812c5.chunk.js.map