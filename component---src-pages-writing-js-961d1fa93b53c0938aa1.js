(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{176:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),i=n.n(o),l=n(2),c=n(25),d=l.c.li.withConfig({displayName:"PostLink__ListItem",componentId:"sc-1pdrypq-0"})(["padding-left:10px;font-weight:500;span{font-size:0.8em;color:#9a9a9a;}a{text-decoration:none;color:",";&:hover{text-decoration:underline;}}"],function(e){return e.theme.contentColor}),u=function(e){var t=e.post;return a.a.createElement(d,null,a.a.createElement(c.Link,{to:t.fields.slug},t.frontmatter.title),a.a.createElement("span",null," - ",t.frontmatter.date))};u.propTypes={post:i.a.object};var p=u;n.d(t,"query",function(){return s});t.default=function(e){var t=e.data.allMarkdownRemark.edges.filter(function(e){return!!e.node.frontmatter.date}).map(function(e){return a.a.createElement(p,{key:e.node.id,post:e.node})});return a.a.createElement("div",null,a.a.createElement("h1",null,"Things I've Written"),t)};var s="963766000"}}]);
//# sourceMappingURL=component---src-pages-writing-js-961d1fa93b53c0938aa1.js.map