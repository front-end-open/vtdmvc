import{d as e,c as l,o as t,a as o,b as c,e as a,u as n,t as s,n as r,f as u,g as i,r as d,h as p,i as f,w as v,v as m,j as h,k as g,F as y,l as k,m as b,p as w,q as C,s as A,x as T,y as x,z as L}from"./vendor.b0c9c25c.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&l(e)})).observe(document,{childList:!0,subtree:!0})}function l(e){if(e.ep)return;e.ep=!0;const l=function(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerpolicy&&(l.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?l.credentials="include":"anonymous"===e.crossorigin?l.credentials="omit":l.credentials="same-origin",l}(e);fetch(e.href,l)}}();const O={class:"view"},j=["checked"],q=a("input",{type:"text",class:"edit"},null,-1),D=e({props:{todos:{type:Object,required:!0}},emits:["deleteTodo","confirmAll"],setup(e,{emit:i}){const d=e,p=l((()=>d.todos));return t((()=>console.log(d.todos))),(e,l)=>(o(),c("li",{class:r(["todo",{completed:n(p).completed}])},[a("div",O,[a("input",{type:"checkbox",class:"toggle",checked:n(p).completed,onChange:l[0]||(l[0]=e=>function(e){if(e.target.checked)return p.value.completed=!0,u((()=>i("confirmAll")));p.value.completed=!1,u((()=>i("confirmAll")))}(e))},null,40,j),a("label",null,s(n(p).content),1),a("button",{class:"destroy",onClick:l[1]||(l[1]=e=>{return l=n(p).id,void i("deleteTodo",l);var l})})]),q],2))}});var K=(e,l)=>{for(const[t,o]of l)e[t]=o;return e};const N={class:"header"},S=["onKeyup"],I={class:"main"},P=["checked"],V=(e=>(w("data-v-64ef0475"),e=e(),C(),e))((()=>a("label",{for:"toggle-all"},null,-1))),_={class:"todo-list"},z={key:0,class:"footer"},E={class:"todo-count"},F=A(" items left "),G={class:"filters"};var M=K(e({props:{title:String},setup(e){let{todo:t}=i(d({todo:""})),u=d({curr:"all"}),w=p(!1),C=p(!1),A=p([]),x=l((()=>{switch(u.curr){case"all":return A.value;case"active":return A.value.filter((e=>!e.completed));case"completed":return A.value.filter((e=>e.completed))}}));function L(e){e.target.checked?(w.value=!0,C.value=!0,A.value=A.value.map((e=>({id:e.id,content:e.content,completed:!0})))):(w.value=!1,C.value=!1,A.value=A.value.map((e=>({id:e.id,content:e.content,completed:!1}))))}function O(){if(!t.value)return console.log("添加待办项目不能为空");A.value.unshift({id:(new Date).getTime(),content:t.value,completed:!1}),t.value=""}function j(e){switch(console.log(u.curr),e.target.dataset.type){case"all":case"active":case"completed":u.curr=e.target.dataset.type}}function q(){A.value.filter((e=>e.completed)).length===A.value.length?C.value=!0:C.value=!1,A.value.find((e=>!0===e.completed))?w.value=!0:w.value=!1}return(l,i)=>{const d=f("todofocus");return o(),c(y,null,[a("header",N,[a("h1",null,s(e.title),1),v(a("input",{"onUpdate:modelValue":i[0]||(i[0]=e=>h(t)?t.value=e:t=e),autocomplete:"off",placeholder:"What needs to be done?",class:"new-todo",onKeyup:g(O,["enter"])},null,40,S),[[m,n(t)],[d,!0]])]),a("section",I,[a("input",{id:"toggle-all",onChange:L,checked:n(C),type:"checkbox",class:"toggle-all"},null,40,P),V,a("ul",_,[(o(!0),c(y,null,k(n(x),(e=>(o(),T(D,{todos:e,key:e.id,onConfirmAll:q,onDeleteTodo:i[1]||(i[1]=e=>h(A)?A.value=n(A).filter((l=>l.id!==e)):A=n(A).filter((l=>l.id!==e)))},null,8,["todos"])))),128))])]),n(A).length?(o(),c("footer",z,[a("span",E,[a("strong",null,s(n(A).length),1),F]),a("ul",G,[a("li",null,[a("a",{href:"#/all",class:r({selected:"all"===n(u).curr}),"data-type":"all",onClick:j},"All",2)]),a("li",null,[a("a",{href:"#/active","data-type":"active",class:r({selected:"active"===n(u).curr}),onClick:j},"Active",2)]),a("li",null,[a("a",{href:"#/completed","data-type":"completed",class:r({selected:"completed"===n(u).curr}),onClick:j},"Completed",2)])]),n(w)||n(A).filter((e=>e.completed)).length?(o(),c("button",{key:0,class:"clear-completed",style:{},onClick:i[2]||(i[2]=e=>(A.value=A.value.filter((e=>!e.completed)),void(A.value.length||(t.value="",C.value=!1))))}," Clear completed ")):b("",!0)])):b("",!0)],64)}}}),[["__scopeId","data-v-64ef0475"]]);const U=a("section",{class:"info"},[a("p",null,"written with by pachverb"),a("p",null,[A(" view source code from "),a("code",null,[a("a",{href:"https://github.com/PachVerb"},"Github")])])],-1);const W=L(e({setup:e=>(e,l)=>(o(),c(y,null,[x(M,{title:"TODOS"}),U],64))}));W.directive("todofocus",{mounted(e,l){console.log(111),l.value&&(console.log(111),e.focus())}}),W.mount("#todoapp");
