(this.webpackJsonpmiles=this.webpackJsonpmiles||[]).push([[3],{100:function(e,t,a){},101:function(e,t,a){"use strict";t.a=a.p+"static/media/review.56631672.svg"},102:function(e,t,a){},103:function(e,t,a){},106:function(e,t,a){"use strict";var n=a(0),c=a.n(n),s=a.p+"static/media/badge-time-icon.9d1a20d5.svg",i=a.p+"static/media/date-icon.a20c961c.svg",r=a(1),l=a(3),o=a(5),d=a.n(o),m=a(6),j=c.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.variant,s=e.pill,i=e.className,o=e.as,j=void 0===o?"span":o,u=Object(l.a)(e,["bsPrefix","variant","pill","className","as"]),b=Object(m.a)(a,"badge");return c.a.createElement(j,Object(r.a)({ref:t},u,{className:d()(i,b,s&&b+"-pill",n&&b+"-"+n)}))}));j.displayName="Badge",j.defaultProps={pill:!1};var u=j,b=(a(103),a(2));t.a=function(e){var t=e.type,a=e.text,n=e.theme;return Object(b.jsxs)(u,{className:"badge d-flex align-items-center ".concat(n),children:[t&&Object(b.jsx)("div",{className:"icon-container mr-2",children:Object(b.jsx)("img",{src:"date"===t?i:s,alt:"time icon",className:"w-100"})}),Object(b.jsx)("div",{className:"info-container",children:Object(b.jsx)("span",{children:a})})]})}},107:function(e,t,a){"use strict";var n=a(1),c=a(3),s=a(5),i=a.n(s),r=a(0),l=a.n(r),o=a(6),d=a(32),m=a(82),j=a(36),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,r=e.variant,d=e.as,m=void 0===d?"img":d,j=Object(c.a)(e,["bsPrefix","className","variant","as"]),u=Object(o.a)(a,"card-img");return l.a.createElement(m,Object(n.a)({ref:t,className:i()(r?u+"-"+r:u,s)},j))}));u.displayName="CardImg",u.defaultProps={variant:null};var b=u,f=Object(m.a)("h5"),v=Object(m.a)("h6"),p=Object(d.a)("card-body"),x=Object(d.a)("card-title",{Component:f}),h=Object(d.a)("card-subtitle",{Component:v}),O=Object(d.a)("card-link",{Component:"a"}),g=Object(d.a)("card-text",{Component:"p"}),N=Object(d.a)("card-header"),y=Object(d.a)("card-footer"),w=Object(d.a)("card-img-overlay"),C=l.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,d=e.bg,m=e.text,u=e.border,b=e.body,f=e.children,v=e.as,x=void 0===v?"div":v,h=Object(c.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(o.a)(a,"card"),g=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return l.a.createElement(j.a.Provider,{value:g},l.a.createElement(x,Object(n.a)({ref:t},h,{className:i()(s,O,d&&"bg-"+d,m&&"text-"+m,u&&"border-"+u)}),b?l.a.createElement(p,null,f):f))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=b,C.Title=x,C.Subtitle=h,C.Body=p,C.Link=O,C.Text=g,C.Header=N,C.Footer=y,C.ImgOverlay=w;t.a=C},108:function(e,t,a){"use strict";var n=a(0),c=a.n(n),s=a(1),i=a(3),r=a(5),l=a.n(r),o=a(6),d=a(86);function m(e,t,a){var n=(e-t)/(a-t)*100;return Math.round(1e3*n)/1e3}function j(e,t){var a,n=e.min,r=e.now,o=e.max,d=e.label,j=e.srOnly,u=e.striped,b=e.animated,f=e.className,v=e.style,p=e.variant,x=e.bsPrefix,h=Object(i.a)(e,["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"]);return c.a.createElement("div",Object(s.a)({ref:t},h,{role:"progressbar",className:l()(f,x+"-bar",(a={},a["bg-"+p]=p,a[x+"-bar-animated"]=b,a[x+"-bar-striped"]=b||u,a)),style:Object(s.a)({width:m(r,n,o)+"%"},v),"aria-valuenow":r,"aria-valuemin":n,"aria-valuemax":o}),j?c.a.createElement("span",{className:"sr-only"},d):d)}var u=c.a.forwardRef((function(e,t){var a=e.isChild,r=Object(i.a)(e,["isChild"]);if(r.bsPrefix=Object(o.a)(r.bsPrefix,"progress"),a)return j(r,t);var m=r.min,u=r.now,b=r.max,f=r.label,v=r.srOnly,p=r.striped,x=r.animated,h=r.bsPrefix,O=r.variant,g=r.className,N=r.children,y=Object(i.a)(r,["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"]);return c.a.createElement("div",Object(s.a)({ref:t},y,{className:l()(g,h)}),N?Object(d.b)(N,(function(e){return Object(n.cloneElement)(e,{isChild:!0})})):j({min:m,now:u,max:b,label:f,srOnly:v,striped:p,animated:x,bsPrefix:h,variant:O},t))}));u.displayName="ProgressBar",u.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1};var b=u,f=(a(88),a(81)),v=(a(102),a(2));t.a=function(){var e=[{startRate:"5",value:80},{startRate:"4",value:40},{startRate:"3",value:5},{startRate:"2",value:2},{startRate:"1",value:20}];return Object(v.jsx)("div",{className:"five-stars-with-progress-container",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-lg-4 col-md-6 col-8  ml-auto",children:null===e||void 0===e?void 0:e.map((function(e,t){return Object(v.jsxs)("div",{className:"progress-container",children:[Object(v.jsxs)("div",{className:"mx-3",children:[" ",Object(v.jsx)("span",{children:e.startRate})]}),Object(v.jsx)(b,{variant:"success",now:e.value},t)]},t)}))}),Object(v.jsxs)("div",{className:"col-lg-2 col-md-6 col-4 ",children:[Object(v.jsx)("span",{className:"d-inline-block five-star-with-progress-rating w-100",children:"4.5"}),Object(v.jsx)("div",{className:"w-100",children:Object(v.jsx)("div",{className:"star-icon-wrapper d-flex align-items-center justify-content-center",children:e.map((function(e,t){return Object(v.jsx)("div",{children:Object(v.jsx)(f.a,{theme:"green"})},t)}))})}),Object(v.jsx)("span",{className:"d-inline-block five-star-with-progress-text w-100",children:"125 Reviews"})]})]})})}},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},134:function(e,t,a){"use strict";var n=a(1),c=a(3),s=a(5),i=a.n(s),r=a(0),l=a.n(r),o=a(19),d=a(6),m=a(10),j=l.a.createContext(null);j.displayName="AccordionContext";var u=j;var b=l.a.forwardRef((function(e,t){var a=e.as,s=void 0===a?"button":a,i=e.children,o=e.eventKey,d=e.onClick,j=Object(c.a)(e,["as","children","eventKey","onClick"]),b=function(e,t){var a=Object(r.useContext)(u),n=Object(r.useContext)(m.a);return function(c){n&&n(e===a?null:e,c),t&&t(c)}}(o,d);return"button"===s&&(j.type="button"),l.a.createElement(s,Object(n.a)({ref:t,onClick:b},j),i)})),f=a(39),v=l.a.forwardRef((function(e,t){var a=e.children,s=e.eventKey,i=Object(c.a)(e,["children","eventKey"]),o=Object(r.useContext)(u);return l.a.createElement(m.a.Provider,{value:null},l.a.createElement(f.a,Object(n.a)({ref:t,in:o===s},i),l.a.createElement("div",null,l.a.Children.only(a))))}));v.displayName="AccordionCollapse";var p=v,x=l.a.forwardRef((function(e,t){var a=Object(o.a)(e,{activeKey:"onSelect"}),s=a.as,r=void 0===s?"div":s,j=a.activeKey,b=a.bsPrefix,f=a.children,v=a.className,p=a.onSelect,x=Object(c.a)(a,["as","activeKey","bsPrefix","children","className","onSelect"]),h=i()(v,Object(d.a)(b,"accordion"));return l.a.createElement(u.Provider,{value:j||null},l.a.createElement(m.a.Provider,{value:p||null},l.a.createElement(r,Object(n.a)({ref:t},x,{className:h}),f)))}));x.displayName="Accordion",x.Toggle=b,x.Collapse=p;t.a=x},31:function(e,t,a){"use strict";a.d(t,"a",(function(){return v})),a.d(t,"b",(function(){return h}));var n=a(68),c=a(7),s=a(0),i=a.n(s),r=a(9),l=(a(4),a(1)),o=a(3),d=a(8);i.a.Component;i.a.Component;var m=function(e,t){return"function"===typeof e?e(t):e},j=function(e,t){return"string"===typeof e?Object(r.c)(e,null,null,t):e},u=function(e){return e},b=i.a.forwardRef;"undefined"===typeof b&&(b=u);var f=b((function(e,t){var a=e.innerRef,n=e.navigate,c=e.onClick,s=Object(o.a)(e,["innerRef","navigate","onClick"]),r=s.target,d=Object(l.a)({},s,{onClick:function(e){try{c&&c(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||r&&"_self"!==r||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),n())}});return d.ref=u!==b&&t||a,i.a.createElement("a",d)}));var v=b((function(e,t){var a=e.component,c=void 0===a?f:a,s=e.replace,r=e.to,v=e.innerRef,p=Object(o.a)(e,["component","replace","to","innerRef"]);return i.a.createElement(n.e.Consumer,null,(function(e){e||Object(d.a)(!1);var a=e.history,n=j(m(r,e.location),e.location),o=n?a.createHref(n):"",f=Object(l.a)({},p,{href:o,navigate:function(){var t=m(r,e.location);(s?a.replace:a.push)(t)}});return u!==b?f.ref=t||v:f.innerRef=v,i.a.createElement(c,f)}))})),p=function(e){return e},x=i.a.forwardRef;"undefined"===typeof x&&(x=p);var h=x((function(e,t){var a=e["aria-current"],c=void 0===a?"page":a,s=e.activeClassName,r=void 0===s?"active":s,u=e.activeStyle,b=e.className,f=e.exact,h=e.isActive,O=e.location,g=e.sensitive,N=e.strict,y=e.style,w=e.to,C=e.innerRef,k=Object(o.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.a.createElement(n.e.Consumer,null,(function(e){e||Object(d.a)(!1);var a=O||e.location,s=j(m(w,a),a),o=s.pathname,P=o&&o.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),R=P?Object(n.f)(a.pathname,{path:P,exact:f,sensitive:g,strict:N}):null,E=!!(h?h(R,a):R),S=E?function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return e})).join(" ")}(b,r):b,I=E?Object(l.a)({},y,{},u):y,M=Object(l.a)({"aria-current":E&&c||null,className:S,style:I,to:s},k);return p!==x?M.ref=t||C:M.innerRef=C,i.a.createElement(v,M)}))}))},73:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(88),s=a(91),i=a(92),r=a(93),l=a(94),o=a(95),d=a.p+"static/media/danger.3237505b.svg",m=a(107),j=a.p+"static/media/location-map.8a8462a3.png",u=a.p+"static/media/map-icon.c9ea1260.svg",b=a.p+"static/media/time-icon.dcd9b402.svg",f=a.p+"static/media/phone-icon.2c751c95.svg",v=(a(119),a(2)),p=function(){var e=[{icon:u,info:"6180 Old Dobbin Ln, Columbia, MD 21045, United States"},{icon:b,info:"Open Now: 6:00am - 5:00pm"},{icon:f,info:"+14104234120"}];return Object(v.jsx)("div",{className:" m-auto pb-3 map-container",children:Object(v.jsx)(m.a,{className:"",children:Object(v.jsxs)(m.a.Body,{children:[Object(v.jsx)(m.a.Img,{variant:"top",src:j}),e.map((function(e,t){return Object(v.jsx)(m.a.Text,{className:"d-flex align-items-start mb-3 mt-3",children:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("span",{className:"icon-container d-block mr-3",children:Object(v.jsx)("img",{src:e.icon,className:"w-100"})}),e.info]})},t)}))]})})})},x=(a(120),function(e){var t=e.icon,a=e.theme,n=e.message,c=e.isMobileScreen;return Object(v.jsx)("div",{className:"alert-wrapper",children:Object(v.jsxs)("div",{className:"alert alert-light d-flex align-items-center justify-content-around pl-auto",children:[Object(v.jsx)("img",{src:t,alt:"".concat(a," alert icon"),className:"d-inline-block ".concat(a)}),Object(v.jsx)("p",{className:"m-0 ".concat(c?"":"mx-3"),children:n})]})})}),h=a(84),O=a(99),g=(a(121),a(101)),N=a(31),y=function(e){var t=e.isMobileScreen,a=[{reviewIcon:g.a,reviewerName:"Peter Andrews",message:"Attracts staff and students from IU with very nice courts forall round use."}];return Object(v.jsxs)("div",{className:"review-container",children:[a.map((function(e,n){return Object(v.jsx)("div",{children:Object(v.jsx)(O.a,{isMobileScreen:t,review:e,length:a.length})},n)})),Object(v.jsx)("div",{className:"row view-all-link ",children:Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)("div",{className:"link text-right w-100",children:Object(v.jsx)("p",{className:"".concat(t?"text-center":"text-right"),children:Object(v.jsx)(N.a,{to:"/react-app/reviews",children:"view all"})})})})})]})},w=a(108),C=a(106),k=a(80),P=(a(122),function(e){var t=e.isMobileScreen,a=[{name:"Footwork Patterns",type:"Groups",for:"Kids | 4-7",description:"Improve with other players in a similar skill set and a fun envoronment.",time:"4:00pm - 5:00pm",date:"23 Aug - 13 Sep",notes:""},{name:"Match fitness",type:"Private",for:"Adults | 18+",description:"Get one on one private instruction. Improve faster working on specific skills.",time:"4:00pm - 5:00pm",date:"23 Aug - 13 Sep",notes:""},{name:"Match fitness",type:"Private",for:"Adults | 18+",description:"Get one on one private instruction. Improve faster working on specific skills.",time:"4:00pm - 5:00pm",date:"23 Aug - 13 Sep",notes:"Still time left to register"},{name:"Match fitness",type:"Private",for:"Adults | 18+",description:"Get one on one private instruction. Improve faster working on specific skills.",time:"4:00pm - 5:00pm",date:"23 Aug - 13 Sep",notes:"Class is in session, book now"}];return Object(v.jsxs)("div",{className:"feature-container card-container",children:[null===a||void 0===a?void 0:a.map((function(e,a){return Object(v.jsx)(m.a,{className:"".concat(t?"mb-2":"mb-3"," text-left p-2"),children:Object(v.jsx)(m.a.Body,{children:Object(v.jsxs)("div",{className:"row feature-info-container d-flex",children:[Object(v.jsxs)("div",{className:"col-12 col-lg-7 col-md-7 title-info",children:[Object(v.jsxs)("div",{className:"row flex-wrap",children:[Object(v.jsx)(m.a.Title,{className:"mr-2 mb-0",children:e.name}),e.notes&&Object(v.jsx)(C.a,{type:"",text:e.notes,theme:"orange"})]}),Object(v.jsx)("div",{className:"col-12 p-0",children:Object(v.jsxs)(m.a.Text,{children:[Object(v.jsx)("span",{className:"feature-type",children:e.type}),"-",Object(v.jsx)("span",{className:"feature-type green",children:e.for})]})})]}),Object(v.jsx)("div",{className:"col-12 col-lg-5 col-md-5 date-and-time-info",children:Object(v.jsxs)("div",{className:"time-date-container row ".concat(t?"justify-content-between":"justify-content-end"),children:[Object(v.jsx)(C.a,{type:"time",text:e.time,theme:"gray"}),Object(v.jsx)(C.a,{type:"date",text:e.date,theme:"gray"})]})}),Object(v.jsx)("div",{className:"col-lg-9 col-12 col-md-9 description-info",children:Object(v.jsx)(m.a.Text,{className:"feature-description",children:e.description})}),Object(v.jsx)("div",{className:"col-lg-3 col-12 text-right feature-button p-0",children:Object(v.jsx)(k.a,{text:"View",theme:"green",share:!1})})]})})},a)})),Object(v.jsx)("div",{className:"row view-all-link ",children:Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)("div",{className:"link text-right w-100",children:Object(v.jsx)("p",{className:"".concat(t?"text-center":"text-right"),children:Object(v.jsx)(N.a,{to:"./",children:" view all"})})})})})]})}),R=a(22),E=a(134),S=a(29),I=a(30),M=(a(123),function(e){var t=e.data,a=Object(n.useState)(!1),c=Object(R.a)(a,2),s=c[0],i=c[1];return Object(v.jsx)(E.a,{children:Object(v.jsxs)(m.a,{children:[Object(v.jsxs)(E.a.Toggle,{as:m.a.Header,eventKey:"".concat(t.id),"data-event":t.id,className:"d-flex align-items-center px-0",onClick:function(e){i(!s)},children:[Object(v.jsx)("span",{children:s?Object(v.jsx)(I.a,{icon:S.c,className:" mr-2"}):Object(v.jsx)(I.a,{icon:S.d,className:" mr-2"})}),Object(v.jsxs)("h3",{className:"my-0",children:[t.question,Object(v.jsx)(I.a,{icon:S.e,className:"ml-2 question-icon"})]})]}),Object(v.jsx)(E.a.Collapse,{eventKey:"".concat(t.id),children:Object(v.jsx)(m.a.Body,{children:t.answer})})]})},t.id)}),A=(a(124),function(e){var t=e.isMobileScreen,a=[{id:1,question:"What are the rules in place related to Corvid-19 regulations",answer:"The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "},{id:2,question:"What are the rules in place related to Corvid-19 regulations",answer:"The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "},{id:3,question:"How quickly can I get a new slot",answer:"The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "},{id:4,question:"How many students are permitted in a class",answer:"The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "}];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"card-container pb-3 ",children:null===a||void 0===a?void 0:a.map((function(e,t){return Object(v.jsx)(M,{data:e},t)}))}),Object(v.jsx)("div",{className:"row view-all-link ",children:Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)("div",{className:"link text-right w-100",children:Object(v.jsx)("p",{className:"".concat(t?"text-center":"text-right"),children:Object(v.jsx)(N.a,{to:"/faq",children:"view all"})})})})})]})});a(125),t.default=function(e){var t=e.isMobileScreen,a=[{icon:s.a,name:"5 Courts"},{icon:i.a,name:"Gym"},{icon:o.a,name:"Cycling"},{icon:r.a,name:"Swimming"},{icon:l.a,name:"Cafe"}];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("section",{className:"row  section-separator mb-5",children:[Object(v.jsxs)("div",{className:"col-12 col-md-12 col-lg-6 ".concat(t?"":"section-separator-right"),children:[Object(v.jsx)(c.a,{ratingNumber:"4.5",peopleNumber:"122"}),Object(v.jsx)("p",{className:"section-separator pb-4",children:"Clubhouse Woodridge Tennis Academy offers amazing recently re-surfaced Tournament Ready courts servicing North Beach, Glenwood, Riversdale and Central Dakota. We also boast hosting the World #11 favorite training ground and wordl class cafeteria for the hungry little ones."}),Object(v.jsxs)("div",{className:"",children:[Object(v.jsx)("div",{className:"pb-4 activity-icons d-flex align-items-center justify-content-around",children:a.map((function(e,t){return Object(v.jsx)("div",{className:" d-flex align-items-center justify-content-center flex-column",children:Object(v.jsx)(h.a,{theme:"normal",icon:e.icon,name:e.name})},t)}))}),Object(v.jsx)(x,{isMobileScreen:t,icon:d,theme:"white",message:"Currently undergoing renovations."})]})]}),Object(v.jsxs)("div",{className:"col-12 col-md-12 col-lg-6",children:[Object(v.jsx)("h2",{className:"sub-heading text-left text-center ".concat(t?"mb-3":"mb-4"),children:"Map"}),Object(v.jsx)(p,{})]})]}),Object(v.jsxs)("section",{className:"row section-separator pb-3 mb-5",children:[Object(v.jsx)("div",{className:"col-12 col-md-12 col-lg-12",children:Object(v.jsx)(w.a,{})}),Object(v.jsxs)("div",{className:"col-12 col-md-12 col-lg-12",children:[Object(v.jsx)("h2",{className:"sub-heading text-left mb-3",children:"Reviews"}),Object(v.jsx)(y,{isMobileScreen:t})]})]}),Object(v.jsx)("section",{className:"row section-separator p-0 pb-5 mb-5",children:Object(v.jsxs)("div",{className:"col-12 col-md-12 col-lg-12",children:[Object(v.jsx)("h2",{className:"sub-heading text-left mb-3",children:"Featured"}),Object(v.jsx)("div",{className:"review-container",children:Object(v.jsx)("div",{className:"row no-gutters align-items-start",children:Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)(P,{isMobileScreen:t})})})})]})}),Object(v.jsx)("section",{className:"row section-separator  pb-5 mb-5",children:Object(v.jsxs)("div",{className:"col-12 col-md-12 col-lg-12",children:[Object(v.jsx)("h2",{className:"sub-heading text-left mb-3",children:"FAQ"}),Object(v.jsx)("div",{className:"faq-container",children:Object(v.jsx)("div",{className:"row no-gutters align-items-start",children:Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)(A,{isMobileScreen:t})})})})]})})]})}},80:function(e,t,a){"use strict";var n=a(0),c=a.n(n),s=a(1),i=a(3),r=a(5),l=a.n(r),o=a(6),d=a(33),m=c.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.variant,r=e.size,m=e.active,j=e.className,u=e.block,b=e.type,f=e.as,v=Object(i.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),p=Object(o.a)(a,"btn"),x=l()(j,p,m&&"active",n&&p+"-"+n,u&&p+"-block",r&&p+"-"+r);if(v.href)return c.a.createElement(d.a,Object(s.a)({},v,{as:f,ref:t,className:l()(x,v.disabled&&"disabled")}));t&&(v.ref=t),b?v.type=b:f||(v.type="button");var h=f||"button";return c.a.createElement(h,Object(s.a)({},v,{className:x}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1};var j=m,u=a.p+"static/media/share-icon.dfe15492.svg",b=(a(83),a(2));t.a=function(e){var t=e.text,a=e.theme,n=e.share;return Object(b.jsxs)(j,{variant:"primary ",className:"".concat(a,"-btn ml-auto btn ").concat(a," ").concat(n?"share-btn":""),children:[n&&Object(b.jsx)("span",{className:"mr-2",children:Object(b.jsx)("img",{src:u})}),t]})}},81:function(e,t,a){"use strict";a(0);var n=a(29),c=a(30),s=(a(87),a(2));t.a=function(e){var t=e.theme;return Object(s.jsx)(c.a,{icon:n.g,className:"".concat(t," star-icon")})}},82:function(e,t,a){"use strict";var n=a(1),c=a(0),s=a.n(c),i=a(5),r=a.n(i);t.a=function(e){return s.a.forwardRef((function(t,a){return s.a.createElement("div",Object(n.a)({},t,{ref:a,className:r()(t.className,e)}))}))}},83:function(e,t,a){},84:function(e,t,a){"use strict";var n=a(22),c=a(0),s=(a(85),a(2));t.a=function(e){var t=e.icon,a=e.name,i=e.theme,r=e.selecting,l=Object(c.useState)(!1),o=Object(n.a)(l,2),d=o[0],m=o[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"".concat(d?"selected":""," ").concat(r?"radial":"","  d-flex align-items-center justify-content-center"),onClick:function(e){r&&m(!d)},children:Object(s.jsx)("div",{className:"icon-wrapper d-flex align-items-center justify-content-center  ".concat(i," "),children:Object(s.jsx)("img",{src:t,alt:"{".concat(a," w-100")})})}),a&&Object(s.jsx)("p",{className:"icon-description",children:a})]})}},85:function(e,t,a){},86:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return i}));var n=a(0),c=a.n(n);function s(e,t){var a=0;return c.a.Children.map(e,(function(e){return c.a.isValidElement(e)?t(e,a++):e}))}function i(e,t){var a=0;c.a.Children.forEach(e,(function(e){c.a.isValidElement(e)&&t(e,a++)}))}},87:function(e,t,a){},88:function(e,t,a){"use strict";a(0);var n=a(29),c=a(81),s=(a(98),a(2));t.a=function(e){var t=e.ratingNumber,a=e.peopleNumber,i=[{starIcon:n.g,value:1},{starIcon:n.g,value:1},{starIcon:n.g,value:1},{starIcon:n.g,value:1},{starIcon:n.g,value:1}];return Object(s.jsxs)("div",{className:"five-stars-container",children:[a&&Object(s.jsx)("span",{className:"d-inline-block five-star-rating",children:t}),Object(s.jsx)("div",{className:"star-icon-wrapper d-flex align-items-center justify-content-center mx-2",children:i.map((function(e,t){return Object(s.jsx)("div",{children:Object(s.jsx)(c.a,{theme:"dark-blue"})},t)}))}),t&&Object(s.jsxs)("span",{className:"d-inline-block five-star-text",children:["(",a,")"]})]})}},91:function(e,t,a){"use strict";t.a=a.p+"static/media/5courts.307b5f25.svg"},92:function(e,t,a){"use strict";t.a=a.p+"static/media/gym.878146bf.svg"},93:function(e,t,a){"use strict";t.a=a.p+"static/media/swim.f38b9b64.svg"},94:function(e,t,a){"use strict";t.a=a.p+"static/media/cafe.2cbb52bc.svg"},95:function(e,t,a){"use strict";t.a=a.p+"static/media/cycling.7a1fa62e.svg"},98:function(e,t,a){},99:function(e,t,a){"use strict";a(0);var n=a(84),c=a(29),s=a(81),i=(a(100),a(2));t.a=function(e){var t=e.isMobileScreen,a=e.review,r=e.length,l=[{starIcon:c.g,value:1},{starIcon:c.g,value:1},{starIcon:c.g,value:1},{starIcon:c.g,value:1},{starIcon:c.g,value:1}];return Object(i.jsxs)("div",{className:"row no-gutters align-items-start reviews py-3 section-separator ".concat(r>1?"section-separator-top":""),children:[Object(i.jsx)("div",{className:" col-2 col-lg-1 col-md-1 d-flex align-items-start justify-content-center flex-column",children:Object(i.jsx)(n.a,{icon:a.reviewIcon,name:"",theme:"green"})}),Object(i.jsxs)("div",{className:"col-10 col-md-8 col-lg-8",children:[Object(i.jsx)("p",{className:" text-left mb-0",children:'"'.concat(a.message,'"')}),Object(i.jsx)("span",{className:"".concat(t?"mb-3":"","  w-100 reviewer-secondary-text  text-left d-inline-block mt-2"),children:a.reviewerName})]}),t&&Object(i.jsx)("div",{className:"col-2"}),Object(i.jsxs)("div",{className:"col-10 col-md-2 col-lg-2 d-flex  flex-column justify-content-end ".concat(t?" align-items-start":" align-items-end"),children:[Object(i.jsx)("span",{className:" d-flex  flex-row justify-content-end",children:l.map((function(e,t){return Object(i.jsx)("span",{children:Object(i.jsx)(s.a,{theme:"green"})},t)}))}),Object(i.jsx)("span",{className:"".concat(t?" text-left":"text-right","w-100 reviewer-secondary-text date d-inline-block mt-2"),children:a.date})]})]})}}}]);
//# sourceMappingURL=3.a8d440e0.chunk.js.map