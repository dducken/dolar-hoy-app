(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{47:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(17),l=c.n(s),i=c(4),r=c(18),j=c.n(r),d=(c(47),c(0)),b=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),l=Object(i.a)(s,2),r=l[0],b=l[1],o=Object(a.useState)(0),h=Object(i.a)(o,2),u=h[0],O=h[1],m=Object(a.useState)(0),p=Object(i.a)(m,2);p[0],p[1];Object(a.useEffect)((function(){0===c.length&&j.a.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales").then((function(e){n(e.data[1])})).catch((function(e){console.log(e)}))})),setInterval((function(){b((new Date).toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/,"$1"))}),1e3);return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"cover-img"}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:"nav-list",children:[Object(d.jsx)("li",{className:"language-btn",children:r.slice(0,5)}),Object(d.jsxs)("li",{children:["made by ",Object(d.jsx)("a",{href:"https://github.com/dducken",target:"_blank",rel:"noreferrer",className:"link",children:"Ducken"})]})]})}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("div",{className:"title",children:Object(d.jsx)("span",{id:"title",children:"D\xf3lar blue hoy"})})}),Object(d.jsxs)("div",{className:"t-body",children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"length",children:"Compra"}),Object(d.jsx)("input",{type:"text",id:"len",value:c.casa?c.casa.compra.slice(0,3):0,disabled:!0})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"length",children:"Venta"}),Object(d.jsx)("input",{type:"text",id:"len",value:c.casa?c.casa.venta.slice(0,3):0,disabled:!0})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"length",children:"Calcular"}),Object(d.jsx)("input",{type:"number",id:"calc",min:"0",placeholder:"USD",onChange:function(e){return function(e){var t=e.target.value*c.casa.compra.slice(0,3);O(t)}(e)}}),"=",Object(d.jsx)("input",{type:"text",id:"calc",placeholder:"ARS",disabled:!0,value:u>0?u:""})]})]})]})]})},o=function(){return Object(d.jsx)(b,{})},h=function(){return Object(d.jsx)(o,{})};l.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.dba64844.chunk.js.map