(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{15:function(e,n,t){},19:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(1),i=t.n(a),r=t(8),l=t.n(r),o=t(2),u=(t(15),t(16),t(21)),s=t(7),j=t.n(s),f=t(3),m=t.n(f),v=function(e){var n=e.num,t=e.onClick,a=e.active,i=e.win,r=e.over,l=e.onRightClick,o=e.flag;return Object(c.jsx)("button",{onContextMenu:l,onClick:t,type:"button",id:"".concat(n),className:"".concat(m.a.cell," ").concat(a?m.a.activeCell:""," \n        ").concat(o&&!a||i&&!a?m.a.flaggedCell:""),disabled:(i||r||o)&&!0,children:Object(c.jsx)("div",{className:m.a.content,children:n})})},b=t(6),d=function(e,n){for(var t=0;t!==n;){var c=Math.floor(Math.random()*e.length),a=Math.floor(Math.random()*e.length);0===e[c][a].num&&(e[c][a].num="\ud83d\udca3",t+=1)}},h=function(e,n){for(var t=[],c=0;c<e*e;c++)t.push({num:0,active:!1,flag:!1});var a=b.chunk(t,e);9===e?d(a,10):16===e?d(a,40):23===e&&d(a,99),function(e,n){for(var t=b.cloneDeep(e),c=0,a="\ud83d\udca3";c<t.length;){for(var i=0;i<t[c].length;)t[c][i].num!==a?i+=1:t[c][i].num===a&&(c-1>=0&&(i-1>=0&&t[c-1][i-1].num!==a&&(t[c-1][i-1].num+=1),i+1<t[c].length&&t[c-1][i+1].num!==a&&(t[c-1][i+1].num+=1),t[c-1][i].num!==a&&(t[c-1][i].num+=1)),c+1<t.length&&(i-1>=0&&t[c+1][i-1].num!==a&&(t[c+1][i-1].num+=1),i+1<t[c].length&&t[c+1][i+1].num!==a&&(t[c+1][i+1].num+=1),t[c+1][i].num!==a&&(t[c+1][i].num+=1)),i-1>=0&&t[c][i-1].num!==a&&(t[c][i-1].num+=1),i+1<t[c].length&&t[c][i+1].num!==a&&(t[c][i+1].num+=1),i+=1);c+=1}n(t)}(a,n)},g=t(6),p=t(4),O=t.n(p),x=function(e){var n=e.win,t=e.lose,a=e.onClick,i=e.counter;return Object(c.jsxs)("div",{className:O.a.wrapper,children:[Object(c.jsx)("div",{className:O.a.counter,children:i}),Object(c.jsxs)("button",{type:"button",className:O.a.button,onClick:a,children:[n&&Object(c.jsx)("span",{className:"img",role:"img","aria-label":"new game",children:"\ud83d\ude0e"}),t&&Object(c.jsx)("span",{className:"img",role:"img","aria-label":"new game",children:"\ud83d\ude08"}),!n&&!t&&Object(c.jsx)("span",{className:"img",role:"img","aria-label":"new game",children:"\ud83d\ude0a"})]}),Object(c.jsx)("span",{children:" Timer "})]})},C=t(6),_=function(e){var n=e.difficulty,t=Object(a.useState)(),i=Object(o.a)(t,2),r=i[0],l=i[1],s=Object(a.useState)(!1),f=Object(o.a)(s,2),m=f[0],b=f[1],d=Object(a.useState)(!1),p=Object(o.a)(d,2),O=p[0],_=p[1],w=Object(a.useState)(10),k=Object(o.a)(w,2),N=k[0],y=k[1];Object(a.useEffect)((function(){h(n,l),9===n?y(10):16===n?y(40):23===n&&y(99)}),[n]);var M=function(e,t){var c=C.cloneDeep(r);c[e][t].active=!0,"\ud83d\udca3"===c[e][t].num&&(c.map((function(e){return e.map((function(e){return"string"===typeof e.num&&(e.active=!0),e})),e})),b(!0)),function(e,n){for(var t=g.cloneDeep(e),c=0,a=0;a<t.length;){for(var i=0;i<t[a].length;)0===t[a][i].num&&t[a][i].active&&(a-1>=0&&(i-1>=0&&!t[a-1][i-1].active&&(t[a-1][i-1].active=!0,c=1),i+1<t[a].length&&!t[a-1][i+1].active&&(t[a-1][i+1].active=!0,c=1),t[a-1][i].active||(t[a-1][i].active=!0)),a+1<t.length&&(i-1>=0&&!t[a+1][i-1].active&&(t[a+1][i-1].active=!0,c=1),i+1<t[a].length&&!t[a+1][i+1].active&&(t[a+1][i+1].active=!0,c=1),t[a+1][i].active||(t[a+1][i].active=!0)),i-1>=0&&!t[a][i-1].active&&(t[a][i-1].active=!0),i+1<t[a].length&&!t[a][i+1].active&&(t[a][i+1].active=!0)),i+=1;1===c?(a=0,i=0,c=0):a+=1}n(t)}(c,l),function(e,n,t){var c=0;e.forEach((function(e){e.forEach((function(e){!1===e.active&&(c+=1)}))})),9===n&&10===c&&t(!0),16===n&&40===c&&t(!0),23===n&&99===c&&t(!0)}(c,n,_)};return Object(c.jsxs)("div",{className:j.a.wrapper,children:[Object(c.jsx)(x,{win:O,lose:m,onClick:function(){h(n,l),_(!1),b(!1)},counter:N}),Object(c.jsx)("div",{className:j.a.grid,children:r&&r.map((function(e,n){return Object(c.jsx)("div",{children:e.map((function(e,t){return Object(c.jsx)(v,{onClick:function(){return M(n,t)},onRightClick:function(e){return function(e,n,t){e.preventDefault();var c=C.cloneDeep(r);c[n][t].active||(c[n][t].flag=!c[n][t].flag,l(c))}(e,n,t)},num:e.num,active:e.active,win:O,over:m,flag:e.flag},Object(u.a)())}))},Object(u.a)())}))})]})},w=t(9),k=t.n(w),N=function(e){var n=e.onClick,t=e.text,a=e.children;return Object(c.jsxs)("button",{className:k.a.button,type:"button",onClick:n,children:[t,a]})},y=function(){var e=Object(a.useState)(9),n=Object(o.a)(e,2),t=n[0],i=n[1];return Object(c.jsx)("section",{children:Object(c.jsx)("div",{className:"container container-fluid",children:Object(c.jsx)("div",{className:"row center-xs",children:Object(c.jsxs)("div",{className:"col-xs-12",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(N,{onClick:function(){return i(9)},text:"Easy"}),Object(c.jsx)(N,{onClick:function(){return i(16)},text:"Medium"}),Object(c.jsx)(N,{onClick:function(){return i(23)},text:"Hard"})]}),Object(c.jsx)(_,{difficulty:t})]})})})})},M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),i(e),r(e)}))};l.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),M()},3:function(e,n,t){e.exports={cell:"Cell_cell__CECM6",activeCell:"Cell_activeCell__2fu_1",flaggedCell:"Cell_flaggedCell__EW_Zj"}},4:function(e,n,t){e.exports={wrapper:"Header_wrapper__2oe6w",button:"Header_button__3wAQ2",counter:"Header_counter__awrC8"}},7:function(e,n,t){e.exports={wrapper:"Grid_wrapper__1DZ7v",grid:"Grid_grid__11VyL"}},9:function(e,n,t){e.exports={button:"Button_button__3mRBz"}}},[[19,1,2]]]);
//# sourceMappingURL=main.b61399dd.chunk.js.map