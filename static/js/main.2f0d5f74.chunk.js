(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),s=n.n(c),o=n(9),u=n(5),i=n(6),l=n(8),d=n(7),m=n(10),p=n(1),f=n.n(p),h=n(2),E=(n(18),function(e){var t=e.userData;return r.a.createElement("span",{className:"User"},t.name)}),w=function(e){var t=e.itemData;return r.a.createElement("tr",{className:"TodoItem"},r.a.createElement("td",{className:"row1"},r.a.createElement("input",{type:"checkbox",checked:t.completed})),r.a.createElement("td",{className:"row2"},t.title),r.a.createElement("td",{className:"row3"},r.a.createElement(E,{userData:t.user})))},v=function(e){var t=e.todo.map(function(e){return r.a.createElement(w,{itemData:e})});return r.a.createElement("table",{className:"TodoList"},r.a.createElement("tr",null,r.a.createElement("td",{className:"row1"},"Name"),r.a.createElement("td",{className:"row2"},"Task"),r.a.createElement("td",{className:"row3"},"Status")),t)},b=[],j=function(){var e=Object(h.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/todos");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(h.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),N=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={todos:[],isLoaded:!1,isLoading:!1},n.handleClick=function(){n.setState({isLoading:!0}),setTimeout(function(){n.setState({todos:b,isLoaded:!0,isLoading:!1})},350)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return t=e.sent,e.next=5,k();case 5:n=e.sent,b=t.map(function(e){return Object(o.a)({},e,{user:n.find(function(t){return t.id===e.userId})})});case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("main",{class:"App-container"},this.state.isLoaded?r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"List of todos"),r.a.createElement(v,{todo:this.state.todos})):r.a.createElement("button",{className:"App__load-button",onClick:this.handleClick},this.state.isLoading?"Fetching...":"Get data"))}}]),t}(r.a.Component);s.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.2f0d5f74.chunk.js.map