(this.webpackJsonplab8=this.webpackJsonplab8||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),i=n(8),r=n.n(i),s=(n(13),n(2)),a=n(7),d=n(3),u=(n(14),n.p+"static/media/x.6ab2d915.svg"),l=n(0);function j(t){var e=t.todo,n=t.onToggle,c=t.onEdit,i=t.onDelete,r=e.id,s=e.task,a=e.done,j=Object(o.useState)(s),b=Object(d.a)(j,2),f=b[0],O=b[1],h=Object(o.useRef)(null),g=["todo-item"].concat(a?"done":"");Object(o.useEffect)((function(){h.current.style.height="0px";var t=h.current.scrollHeight;h.current.style.height="".concat(t,"px")}),[f]);return Object(l.jsxs)("li",{className:g.join(" "),children:[Object(l.jsx)("input",{type:"checkbox",checked:a,onChange:function(){return n(r)}}),Object(l.jsx)("textarea",{type:"text",ref:h,value:f,onChange:function(t){return O(t.target.value)},onBlur:function(){0===f.trim().length?i(r):c(r,f)},onKeyPress:function(t){"enter"===t.key.toLowerCase()&&t.target.blur()}}),Object(l.jsx)("button",{type:"button",onClick:function(){return i(r)},children:Object(l.jsx)("img",{src:u,alt:"Delete"})})]})}n(16);function b(t){var e=t.addHandler,n=Object(o.useState)(""),c=Object(d.a)(n,2),i=c[0],r=c[1],s=Object(o.useRef)(i);Object(o.useEffect)((function(){s.current.style.height="0px";var t=s.current.scrollHeight;s.current.style.height="".concat(t,"px")}),[i]);var a=function(){0!==i.trim().length&&e(i)};return Object(l.jsxs)("div",{className:"todo-add-form",children:[Object(l.jsx)("div",{className:"new-todo-wrapper",children:Object(l.jsx)("textarea",{type:"text",ref:s,name:"new-todo",placeholder:"New Task",onChange:function(t){r(t.target.value)},value:i,onKeyPress:function(t){"enter"===t.key.toLowerCase()&&(a(),r(""))},onKeyUp:function(t){"escape"===t.key.toLowerCase()&&t.target.blur()}})}),Object(l.jsx)("button",{type:"button",onClick:function(){a(),r("")},children:"Add"})]})}n(17);function f(t){var e=t.listTitle,n=t.editTodoList,c=Object(o.useState)(e),i=Object(d.a)(c,2),r=i[0],s=i[1],a=Object(o.useRef)(null);Object(o.useEffect)((function(){a.current.style.height="0px";var t=a.current.scrollHeight;a.current.style.height="".concat(t,"px")}),[r]);return Object(l.jsx)("div",{className:"todo-list-title",children:Object(l.jsx)("textarea",{type:"text",ref:a,value:r,onChange:function(t){return s(t.target.value)},onBlur:function(){0!==r.trim().length&&n(r)},onKeyPress:function(t){"enter"===t.key.toLowerCase()&&t.target.blur()}})})}n(18);function O(t){var e=t.todos,n=t.listTitle,o=t.addNewTodo,c=t.toggleTodo,i=t.editTodo,r=t.deleteTodo,s=t.deletTodoList,a=t.editTodoList;return Object(l.jsxs)("div",{className:"todo-list-container",children:[Object(l.jsx)(f,{listTitle:n,editTodoList:a}),Object(l.jsx)(b,{addHandler:o}),Object(l.jsx)("ul",{className:"todo-list",children:e.map((function(t){var e=t.id,n=t.task,o=t.done;return Object(l.jsx)(j,{todo:{id:e,task:n,done:o},onToggle:c,onEdit:i,onDelete:r},e)}))}),Object(l.jsx)("button",{type:"button",className:"delete-list",onClick:s,children:"Delete"})]})}n(19);var h=n.p+"static/media/plus-square.1896372c.svg";function g(t){var e=t.addNewTodoList;return Object(l.jsx)("div",{className:"add-todo-list-container",children:Object(l.jsx)("button",{type:"button",className:"add-todo-list",onClick:e,children:Object(l.jsx)("img",{src:h,alt:"add-todo-list"})})})}n(20);var x=n.p+"static/media/list-check.e904d766.svg";function m(t){var e=t.children;return Object(l.jsx)("nav",{children:Object(l.jsxs)("div",{className:"nav-wrapper",style:{background:"teal"},children:[Object(l.jsx)("div",{className:"logo-container",children:Object(l.jsx)("img",{className:"logo",src:x,alt:"DonVadimon"})}),Object(l.jsx)("div",{className:"nav-text",children:"Add new List"}),e]})})}n(21);function v(){return Object(l.jsxs)("div",{className:"no-tasks-message-container",children:[Object(l.jsx)("h1",{children:"You have no tasks"}),Object(l.jsx)("h2",{children:"Make some using button in navigation"})]})}n(22);function p(){var t=Object(o.useState)([]),e=Object(d.a)(t,2),n=e[0],c=e[1];Object(o.useEffect)((function(){var t=JSON.parse(localStorage.getItem("todoLists")||"[]");c(t)}),[]),Object(o.useEffect)((function(){localStorage.setItem("todoLists",JSON.stringify(n))}),[n]);var i=function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))},r=function(t,e){c((function(n){return n.map((function(n){return t===n.id?Object(s.a)(Object(s.a)({},n),{},{title:e.trim()}):n}))}))},u=function(t,e){var n={id:Date.now(),task:e,done:!1};c((function(e){return e.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{todos:[].concat(Object(a.a)(e.todos),[n])}):e}))}))},j=function(t,e){c((function(n){return n.map((function(n){return t===n.id?Object(s.a)(Object(s.a)({},n),{},{todos:n.todos.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{done:!t.done}):t}))}):n}))}))},b=function(t,e){c((function(n){return n.map((function(n){return t===n.id?Object(s.a)(Object(s.a)({},n),{},{todos:n.todos.filter((function(t){return t.id!==e}))}):n}))}))},f=function(t,e,n){0!==n.trim().length&&c((function(o){return o.map((function(o){return t===o.id?Object(s.a)(Object(s.a)({},o),{},{todos:o.todos.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{task:n.trim()}):t}))}):o}))}))};return Object(l.jsxs)("div",{className:"todo-desk-container",children:[Object(l.jsx)(m,{children:Object(l.jsx)(g,{addNewTodoList:function(){var t={id:Date.now(),todos:[],title:"Some tasks"};c((function(e){return[].concat(Object(a.a)(e),[t])}))}})}),Object(l.jsx)("div",{className:"todo-desk",children:0!==n.length?n.map((function(t){return Object(l.jsx)(O,{todos:t.todos,listTitle:t.title,addNewTodo:u.bind(null,t.id),toggleTodo:j.bind(null,t.id),editTodo:f.bind(null,t.id),deleteTodo:b.bind(null,t.id),deletTodoList:i.bind(null,t.id),editTodoList:r.bind(null,t.id)},t.id)})):Object(l.jsx)(v,{})})]})}var k=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(p,{})})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),o(t),c(t),i(t),r(t)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),y()}],[[23,1,2]]]);
//# sourceMappingURL=main.92347dc4.chunk.js.map