(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(4),r=n.n(o),s=n(1),l=(n(10),n(11),function(e,t){return fetch("".concat("https://mate-api.herokuapp.com").concat(e),t).then((function(e){if(!e.ok)throw Error;return e.json()})).then((function(e){return e.data}))}),u=n(2),m=n.n(u),i=(m.a.shape({comments:m.a.array,title:m.a.string,body:m.a.string,id:m.a.number,userId:m.a.number}),n(14),function(e){var t=e.selectedPost,n=e.post,a=e.handleClick;return c.a.createElement("li",{className:"PostsList__item"},c.a.createElement("div",null,c.a.createElement("b",null,"[User #",n.userId,"]:"," "),n.title),t.id!==n.id?c.a.createElement("button",{onClick:function(){a(n)},type:"button",className:"PostsList__button button"},"Open"):c.a.createElement("button",{onClick:function(){a({})},type:"button",className:"PostsList__button button"},"Close"))}),d=function(e){var t=e.userId,n=e.handleClick,o=e.selectedPost,r=e.setPost,u=Object(a.useState)([]),m=Object(s.a)(u,2),d=m[0],f=m[1];return Object(a.useEffect)((function(){0!==t?function(e){return l("/posts?userId=".concat(e))}(t).then((function(e){f(e.map((function(e){return{comments:[],id:e.id,userId:e.userId,title:e.title,body:e.body}})))})):l("/posts").then((function(e){return e=e.filter((function(e){return e.userId<=10&&e.userId}))})).then(f)}),[t]),c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),c.a.createElement("ul",{className:"PostsList__list"},d.map((function(e){return c.a.createElement(i,{setPost:r,selectedPost:o,handleClick:n,key:e.id,post:e})}))))},f=(n(15),function(e){var t=e.postId,n=e.addComment,o=Object(a.useState)(""),r=Object(s.a)(o,2),l=r[0],u=r[1],m=Object(a.useState)(""),i=Object(s.a)(m,2),d=i[0],f=i[1],p=Object(a.useState)(""),b=Object(s.a)(p,2),E=b[0],h=b[1];return c.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault();var a={postId:t,name:l,email:d,body:E};n(a,a.postId),u(""),f(""),h("")}},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{required:!0,type:"text",name:"name",value:l,placeholder:"Your name",className:"NewCommentForm__input",onChange:function(e){return u(e.target.value)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{required:!0,type:"text",name:"email",value:d,placeholder:"Your email",className:"NewCommentForm__input",onChange:function(e){return f(e.target.value)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{required:!0,name:"body",value:E,placeholder:"Type comment here",className:"NewCommentForm__input",onChange:function(e){return h(e.target.value)}})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),p=(n(16),function(e,t){return n="/comments?postId=".concat(t),a=e,l(n,{method:"POST",body:JSON.stringify(a)});var n,a}),b=function(e){return t="/comments/".concat(e),l(t,{method:"DELETE"});var t},E=function(e){var t=e.post,n=Object(a.useState)([]),o=Object(s.a)(n,2),r=o[0],u=o[1],m=Object(a.useState)(!0),i=Object(s.a)(m,2),d=i[0],E=i[1];Object(a.useEffect)((function(){h(t.id)}),[t.id]);var h=function(e){(function(e){return l("/comments?postId=".concat(e))})(e).then((function(e){var t=e.filter((function(e){if(e.body.trim())return e}));u(t)}))};return c.a.createElement("div",{className:"PostDetails"},c.a.createElement("h2",null,"Post details:"),c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,t.body)),c.a.createElement("section",{className:"PostDetails__comments"},0===r.length&&"There is no comment to display",r.length>0&&d&&c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",className:"button",onClick:function(){E(!1)}},"Hide"," ",r.length," ","comments"),c.a.createElement("ul",{className:"PostDetails__list"},r.map((function(e){return c.a.createElement("li",{key:e.id,className:"PostDetails__list-item"},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return n=e.id,a=t.id,void b(n).then((function(){h(a)}));var n,a}},"X"),c.a.createElement("br",null),c.a.createElement("p",null,e.body,c.a.createElement("br",null),c.a.createElement("span",null,"by:\xa0",c.a.createElement("b",null,e.name))))})))),r.length>0&&!1===d&&c.a.createElement("button",{type:"button",className:"button",onClick:function(){E(!0)}},"Show"," ",r.length," ","comments")),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(f,{postId:t.id,addComment:function(e,t){p(e,t).then((function(){h(t)}))}}))))},h=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(0),u=Object(s.a)(r,2),m=u[0],i=u[1],f=Object(a.useState)({}),p=Object(s.a)(f,2),b=p[0],h=p[1];Object(a.useEffect)((function(){l("/users").then((function(e){var t=e.filter((function(e){return e.id<=10}));o(t.map((function(e){return{name:e.name,id:e.id}})))}))}),[]);return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",value:m,onChange:function(e){i(+e.currentTarget.value)}},c.a.createElement("option",{value:"0"},"All users"),n.map((function(e){var t=e.name,n=e.id;return c.a.createElement("option",{key:n,value:n},t)}))))),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(d,{setPost:h,selectedPost:b,handleClick:function(e){h(e)},userId:m})),b.id&&c.a.createElement("div",{className:"App__content"},c.a.createElement(E,{post:b}))))};r.a.render(c.a.createElement(h,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.19151fb3.chunk.js.map