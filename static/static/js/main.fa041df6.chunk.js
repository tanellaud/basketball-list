(this["webpackJsonpbasketball-list"]=this["webpackJsonpbasketball-list"]||[]).push([[0],{132:function(e,t){},133:function(e,t){},140:function(e,t){},142:function(e,t){},180:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(72),s=n.n(i),r=(n(84),n(85),n(77)),l=n(5),o=n(4),u=n(20),j=n(6),b=n(73),d=n.n(b),m=n(74),h=d.a.create({responseType:m.json}),f=function(){return h.get("/api/persons")},O=function(e){return h.post("/api/persons/",e)},v=function(e,t){return h.put("/api/persons/".concat(e),t)},p=n(2),x=function(){var e={id:null,name:"",email:"",active:!1},t=Object(a.useState)(e),n=Object(j.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(!1),r=Object(j.a)(s,2),l=r[0],b=r[1],d=function(e){var t=e.target,n=t.name,a=t.value;i(Object(u.a)(Object(u.a)({},c),{},Object(o.a)({},n,a)))};return Object(p.jsx)("div",{className:"submit-form",children:l?Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{children:"Uus P\xf5rgataja lisatud!"}),Object(p.jsx)("button",{className:"btn btn-success",onClick:function(){i(e),b(!1)},children:"Add"})]}):Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"name",children:"Name"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"name",required:!0,value:c.name,onChange:d,name:"name"})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"email",required:!0,value:c.email,onChange:d,name:"email"})]}),Object(p.jsx)("button",{onClick:function(){var e={name:c.name,email:c.email};O(e).then((function(e){i({id:e.data.id,name:e.data.name,email:e.data.email,active:e.data.active}),b(!0),console.log(e.data)})).catch((function(e){console.log(e)}))},className:"btn btn-success",children:"Submit"})]})})},g=n(191),k=n(75),N=n.n(k),C=n(76),D=n.n(C),F=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)({id:null,name:"",email:"",active:!1}),s=Object(j.a)(i,2),r=s[0],l=s[1];Object(a.useEffect)((function(){o()}),[]);var o=function(){f().then((function(e){var t=D.a.sortBy(e.data,"active",(function(e){return Math.sin(-e)})).reverse();c(t)})).catch((function(e){console.log(e)}))},b=function(e){var t={id:e.id,name:e.name,email:e.email,active:!e.active};v(e.id,t).then((function(t){l(Object(u.a)(Object(u.a)({},r),{},{active:e.active})),o(),console.log(t.data)})).catch((function(e){console.log(e)}))};return Object(p.jsxs)("div",{className:"wrap",children:[Object(p.jsx)("h1",{children:"Korvpalli nimekiri"}),Object(p.jsxs)("h2",{children:["J\xe4rgmine trenn - ",Object(p.jsx)(N.a,{format:"YYYY/MM/DD",children:function(){var e=new Date;return e.setDate(e.getDate()+(11-e.getDay())%7),e}()})," neljap\xe4ev Kell 19:00"]}),Object(p.jsxs)("h2",{children:["Asukoht - ",Object(p.jsx)("a",{href:"https://goo.gl/maps/rHEaeJUEWvF63Vjd9",target:"_blank",children:"Kristiine spordikeskus"})]}),Object(p.jsxs)("h2",{children:["Tulijaid ",Object(p.jsx)("span",{className:"count",children:Object.values(n).filter((function(e){return!0===e.active})).length})]}),Object(p.jsx)("ul",{className:"personsList",children:n&&n.map((function(e,t){return Object(p.jsxs)("li",{onClick:function(){return b(e)},className:"list-group-item "+(!0===e.active?"active":""),children:[e.name,Object(p.jsx)(g.a,{checked:e.active,onChange:function(){return b(e)}})]},t)}))})]})};var S=function(){return Object(p.jsx)(r.a,{children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",component:F}),Object(p.jsx)(l.a,{exact:!0,path:"/add",component:x})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,192)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root")),y()},84:function(e,t,n){},85:function(e,t,n){}},[[180,1,2]]]);