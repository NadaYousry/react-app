(this["webpackJsonpmiles-website"]=this["webpackJsonpmiles-website"]||[]).push([[3],{101:function(e,t,a){"use strict";var n=a(0),c=a.n(n),s=a.p+"static/media/badge-time-icon.9d1a20d5.svg",i=a.p+"static/media/date-icon.a20c961c.svg",r=a(1),l=a(3),o=a(5),d=a.n(o),m=a(6),j=c.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.variant,s=e.pill,i=e.className,o=e.as,j=void 0===o?"span":o,b=Object(l.a)(e,["bsPrefix","variant","pill","className","as"]),u=Object(m.a)(a,"badge");return c.a.createElement(j,Object(r.a)({ref:t},b,{className:d()(i,u,s&&u+"-pill",n&&u+"-"+n)}))}));j.displayName="Badge",j.defaultProps={pill:!1};var b=j,u=(a(98),a(2));t.a=function(e){var t=e.type,a=e.text,n=e.theme;return Object(u.jsxs)(b,{className:"badge d-flex align-items-center ".concat(n),children:[t&&Object(u.jsx)("div",{className:"icon-container mr-2",children:Object(u.jsx)("img",{src:"date"===t?i:s,alt:"time icon",className:"w-100"})}),Object(u.jsx)("div",{className:"info-container",children:Object(u.jsx)("span",{children:a})})]})}},102:function(e,t,a){"use strict";var n=a(1),c=a(3),s=a(5),i=a.n(s),r=a(0),l=a.n(r),o=a(6),d=a(32),m=a(82),j=a(36),b=l.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,r=e.variant,d=e.as,m=void 0===d?"img":d,j=Object(c.a)(e,["bsPrefix","className","variant","as"]),b=Object(o.a)(a,"card-img");return l.a.createElement(m,Object(n.a)({ref:t,className:i()(r?b+"-"+r:b,s)},j))}));b.displayName="CardImg",b.defaultProps={variant:null};var u=b,v=Object(m.a)("h5"),f=Object(m.a)("h6"),p=Object(d.a)("card-body"),x=Object(d.a)("card-title",{Component:v}),h=Object(d.a)("card-subtitle",{Component:f}),O=Object(d.a)("card-link",{Component:"a"}),g=Object(d.a)("card-text",{Component:"p"}),N=Object(d.a)("card-header"),w=Object(d.a)("card-footer"),y=Object(d.a)("card-img-overlay"),C=l.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,d=e.bg,m=e.text,b=e.border,u=e.body,v=e.children,f=e.as,x=void 0===f?"div":f,h=Object(c.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(o.a)(a,"card"),g=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return l.a.createElement(j.a.Provider,{value:g},l.a.createElement(x,Object(n.a)({ref:t},h,{className:i()(s,O,d&&"bg-"+d,m&&"text-"+m,b&&"border-"+b)}),u?l.a.createElement(p,null,v):v))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=u,C.Title=x,C.Subtitle=h,C.Body=p,C.Link=O,C.Text=g,C.Header=N,C.Footer=w,C.ImgOverlay=y;t.a=C},103:function(e,t,a){"use strict";var n=a(0),c=a.n(n),s=a(1),i=a(3),r=a(5),l=a.n(r),o=a(6),d=a(84);function m(e,t,a){var n=(e-t)/(a-t)*100;return Math.round(1e3*n)/1e3}function j(e,t){var a,n=e.min,r=e.now,o=e.max,d=e.label,j=e.srOnly,b=e.striped,u=e.animated,v=e.className,f=e.style,p=e.variant,x=e.bsPrefix,h=Object(i.a)(e,["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"]);return c.a.createElement("div",Object(s.a)({ref:t},h,{role:"progressbar",className:l()(v,x+"-bar",(a={},a["bg-"+p]=p,a[x+"-bar-animated"]=u,a[x+"-bar-striped"]=u||b,a)),style:Object(s.a)({width:m(r,n,o)+"%"},f),"aria-valuenow":r,"aria-valuemin":n,"aria-valuemax":o}),j?c.a.createElement("span",{className:"sr-only"},d):d)}var b=c.a.forwardRef((function(e,t){var a=e.isChild,r=Object(i.a)(e,["isChild"]);if(r.bsPrefix=Object(o.a)(r.bsPrefix,"progress"),a)return j(r,t);var m=r.min,b=r.now,u=r.max,v=r.label,f=r.srOnly,p=r.striped,x=r.animated,h=r.bsPrefix,O=r.variant,g=r.className,N=r.children,w=Object(i.a)(r,["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"]);return c.a.createElement("div",Object(s.a)({ref:t},w,{className:l()(g,h)}),N?Object(d.b)(N,(function(e){return Object(n.cloneElement)(e,{isChild:!0})})):j({min:m,now:b,max:u,label:v,srOnly:f,striped:p,animated:x,bsPrefix:h,variant:O},t))}));b.displayName="ProgressBar",b.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1};var u=b,v=(a(86),a(81)),f=(a(97),a(2));t.a=function(){var e=[{startRate:"5",value:80},{startRate:"4",value:40},{startRate:"3",value:5},{startRate:"2",value:2},{startRate:"1",value:20}];return Object(f.jsx)("div",{className:"five-stars-with-progress-container",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-lg-4 col-md-6 col-8  ml-auto",children:null===e||void 0===e?void 0:e.map((function(e,t){return Object(f.jsxs)("div",{className:"progress-container",children:[Object(f.jsxs)("div",{className:"mx-3",children:[" ",Object(f.jsx)("span",{children:e.startRate})]}),Object(f.jsx)(u,{variant:"success",now:e.value},t)]},t)}))}),Object(f.jsxs)("div",{className:"col-lg-2 col-md-6 col-4 ",children:[Object(f.jsx)("span",{className:"d-inline-block five-star-with-progress-rating w-100",children:"4.5"}),Object(f.jsx)("div",{className:"w-100",children:Object(f.jsx)("div",{className:"star-icon-wrapper d-flex align-items-center justify-content-center",children:e.map((function(e,t){return Object(f.jsx)("div",{children:Object(f.jsx)(v.a,{theme:"green"})},t)}))})}),Object(f.jsx)("span",{className:"d-inline-block five-star-with-progress-text w-100",children:"125 Reviews"})]})]})})}},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},125:function(e,t,a){"use strict";var n=a(1),c=a(3),s=a(5),i=a.n(s),r=a(0),l=a.n(r),o=a(19),d=a(6),m=a(10),j=l.a.createContext(null);j.displayName="AccordionContext";var b=j;var u=l.a.forwardRef((function(e,t){var a=e.as,s=void 0===a?"button":a,i=e.children,o=e.eventKey,d=e.onClick,j=Object(c.a)(e,["as","children","eventKey","onClick"]),u=function(e,t){var a=Object(r.useContext)(b),n=Object(r.useContext)(m.a);return function(c){n&&n(e===a?null:e,c),t&&t(c)}}(o,d);return"button"===s&&(j.type="button"),l.a.createElement(s,Object(n.a)({ref:t,onClick:u},j),i)})),v=a(39),f=l.a.forwardRef((function(e,t){var a=e.children,s=e.eventKey,i=Object(c.a)(e,["children","eventKey"]),o=Object(r.useContext)(b);return l.a.createElement(m.a.Provider,{value:null},l.a.createElement(v.a,Object(n.a)({ref:t,in:o===s},i),l.a.createElement("div",null,l.a.Children.only(a))))}));f.displayName="AccordionCollapse";var p=f,x=l.a.forwardRef((function(e,t){var a=Object(o.a)(e,{activeKey:"onSelect"}),s=a.as,r=void 0===s?"div":s,j=a.activeKey,u=a.bsPrefix,v=a.children,f=a.className,p=a.onSelect,x=Object(c.a)(a,["as","activeKey","bsPrefix","children","className","onSelect"]),h=i()(f,Object(d.a)(u,"accordion"));return l.a.createElement(b.Provider,{value:j||null},l.a.createElement(m.a.Provider,{value:p||null},l.a.createElement(r,Object(n.a)({ref:t},x,{className:h}),v)))}));x.displayName="Accordion",x.Toggle=u,x.Collapse=p;t.a=x},31:function(e,t,a){"use strict";a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return h}));var n=a(68),c=a(7),s=a(0),i=a.n(s),r=a(9),l=(a(4),a(1)),o=a(3),d=a(8);i.a.Component;i.a.Component;var m=function(e,t){return"function"===typeof e?e(t):e},j=function(e,t){return"string"===typeof e?Object(r.c)(e,null,null,t):e},b=function(e){return e},u=i.a.forwardRef;"undefined"===typeof u&&(u=b);var v=u((function(e,t){var a=e.innerRef,n=e.navigate,c=e.onClick,s=Object(o.a)(e,["innerRef","navigate","onClick"]),r=s.target,d=Object(l.a)({},s,{onClick:function(e){try{c&&c(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||r&&"_self"!==r||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),n())}});return d.ref=b!==u&&t||a,i.a.createElement("a",d)}));var f=u((function(e,t){var a=e.component,c=void 0===a?v:a,s=e.replace,r=e.to,f=e.innerRef,p=Object(o.a)(e,["component","replace","to","innerRef"]);return i.a.createElement(n.e.Consumer,null,(function(e){e||Object(d.a)(!1);var a=e.history,n=j(m(r,e.location),e.location),o=n?a.createHref(n):"",v=Object(l.a)({},p,{href:o,navigate:function(){var t=m(r,e.location);(s?a.replace:a.push)(t)}});return b!==u?v.ref=t||f:v.innerRef=f,i.a.createElement(c,v)}))})),p=function(e){return e},x=i.a.forwardRef;"undefined"===typeof x&&(x=p);var h=x((function(e,t){var a=e["aria-current"],c=void 0===a?"page":a,s=e.activeClassName,r=void 0===s?"active":s,b=e.activeStyle,u=e.className,v=e.exact,h=e.isActive,O=e.location,g=e.sensitive,N=e.strict,w=e.style,y=e.to,C=e.innerRef,k=Object(o.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.a.createElement(n.e.Consumer,null,(function(e){e||Object(d.a)(!1);var a=O||e.location,s=j(m(y,a),a),o=s.pathname,P=o&&o.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),R=P?Object(n.f)(a.pathname,{path:P,exact:v,sensitive:g,strict:N}):null,E=!!(h?h(R,a):R),S=E?function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return e})).join(" ")}(u,r):u,I=E?Object(l.a)({},w,{},b):w,M=Object(l.a)({"aria-current":E&&c||null,className:S,style:I,to:s},k);return p!==x?M.ref=t||C:M.innerRef=C,i.a.createElement(f,M)}))}))},73:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(86),s=a.p+"static/media/5courts.307b5f25.svg",i=a.p+"static/media/gym.878146bf.svg",r=a.p+"static/media/swim.f38b9b64.svg",l=a.p+"static/media/cafe.2cbb52bc.svg",o=a.p+"static/media/cycling.7a1fa62e.svg",d=a.p+"static/media/danger.3237505b.svg",m=a(102),j=a.p+"static/media/location-map.8a8462a3.png",b=a.p+"static/media/map-icon.c9ea1260.svg",u=a.p+"static/media/time-icon.dcd9b402.svg",v=a.p+"static/media/phone-icon.2c751c95.svg",f=(a(110),a(2)),p=function(){var e=[{icon:b,info:"6180 Old Dobbin Ln, Columbia, MD 21045, United States"},{icon:u,info:"Open Now: 6:00am - 5:00pm"},{icon:v,info:"+14104234120"}];return Object(f.jsx)("div",{className:" m-auto pb-3 map-container",children:Object(f.jsx)(m.a,{className:"",children:Object(f.jsxs)(m.a.Body,{children:[Object(f.jsx)(m.a.Img,{variant:"top",src:j}),e.map((function(e,t){return Object(f.jsx)(m.a.Text,{className:"d-flex align-items-start mb-3 mt-3",children:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("span",{className:"icon-container d-block mr-3",children:Object(f.jsx)("img",{src:e.icon,className:"w-100"})}),e.info]})},t)}))]})})})},x=(a(111),function(e){var t=e.icon,a=e.theme,n=e.message,c=e.isMobileScreen;return Object(f.jsx)("div",{className:"alert-wrapper",children:Object(f.jsxs)("div",{className:"alert alert-light d-flex align-items-center justify-content-around pl-auto",children:[Object(f.jsx)("img",{src:t,alt:"".concat(a," alert icon"),className:"d-inline-block ".concat(a)}),Object(f.jsx)("p",{className:"m-0 ".concat(c?"":"mx-3"),children:n})]})})}),h=a(87),O=a(94),g=(a(112),a(96)),N=a(31),w=function(e){var t=e.isMobileScreen,a=[{reviewIcon:g.a,reviewerName:"Peter Andrews",message:"Attracts staff and students from IU with very nice courts forall round use."}];return Object(f.jsxs)("div",{className:"review-container",children:[a.map((function(e,n){return Object(f.jsx)("div",{children:Object(f.jsx)(O.a,{isMobileScreen:t,review:e,length:a.length})},n)})),Object(f.jsx)("div",{className:"row view-all-link ",children:Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)("div",{className:"link text-right w-100",children:Object(f.jsx)("p",{className:"".concat(t?"text-center":"text-right"),children:Object(f.jsx)(N.a,{to:"./reviews",children:"view all"})})})})})]})},y=a(103),C=a(101),k=a(80),P=(a(113),function(e){var t=e.isMobileScreen,a=[{name:"Footwork Patterns",type:"Groups",for:"Kids | 4-7",description:"Improve with other players in a similar skill set and a fun envoronment.",time:"4:00pm - 5:00pm",date:"23 Aug - 13 Sep",notes:""},{name:"Match fitness",type:"Private",for:"Adults | 18+",description:"Get one on one private instruction. Improve faster working on specific skills.",time:"4:00pm - 5:00pm",date:"23 Aug - 13 Sep",notes:""},{name:"Match fitness",type:"Private",for:"Adults | 18+",description:"Get one on one private instruction. Improve faster working on specific skills.",time:"4:00pm - 5:00pm",date:"23 Aug - 13 Sep",notes:"Still time left to register"},{name:"Match fitness",type:"Private",for:"Adults | 18+",description:"Get one on one private instruction. Improve faster working on specific skills.",time:"4:00pm - 5:00pm",date:"23 Aug - 13 Sep",notes:"Class is in session, book now"}];return Object(f.jsxs)("div",{className:"feature-container card-container",children:[null===a||void 0===a?void 0:a.map((function(e,a){return Object(f.jsx)(m.a,{className:"".concat(t?"mb-2":"mb-3"," text-left p-2"),children:Object(f.jsx)(m.a.Body,{children:Object(f.jsxs)("div",{className:"row feature-info-container d-flex",children:[Object(f.jsxs)("div",{className:"col-12 col-lg-7 col-md-7 title-info",children:[Object(f.jsxs)("div",{className:"row flex-wrap",children:[Object(f.jsx)(m.a.Title,{className:"mr-2 mb-0",children:e.name}),e.notes&&Object(f.jsx)(C.a,{type:"",text:e.notes,theme:"orange"})]}),Object(f.jsx)("div",{className:"col-12 p-0",children:Object(f.jsxs)(m.a.Text,{children:[Object(f.jsx)("span",{className:"feature-type",children:e.type}),"-",Object(f.jsx)("span",{className:"feature-type green",children:e.for})]})})]}),Object(f.jsx)("div",{className:"col-12 col-lg-5 col-md-5 date-and-time-info",children:Object(f.jsxs)("div",{className:"time-date-container row ".concat(t?"justify-content-between":"justify-content-end"),children:[Object(f.jsx)(C.a,{type:"time",text:e.time,theme:"gray"}),Object(f.jsx)(C.a,{type:"date",text:e.date,theme:"gray"})]})}),Object(f.jsx)("div",{className:"col-lg-9 col-12 col-md-9 description-info",children:Object(f.jsx)(m.a.Text,{className:"feature-description",children:e.description})}),Object(f.jsx)("div",{className:"col-lg-3 col-12 text-right feature-button p-0",children:Object(f.jsx)(k.a,{text:"View",theme:"green",share:!1})})]})})},a)})),Object(f.jsx)("div",{className:"row view-all-link ",children:Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)("div",{className:"link text-right w-100",children:Object(f.jsx)("p",{className:"".concat(t?"text-center":"text-right"),children:Object(f.jsx)(N.a,{to:"./",children:" view all"})})})})})]})}),R=a(22),E=a(125),S=a(29),I=a(30),M=(a(114),function(e){var t=e.data,a=Object(n.useState)(!1),c=Object(R.a)(a,2),s=c[0],i=c[1];return Object(f.jsx)(E.a,{children:Object(f.jsxs)(m.a,{children:[Object(f.jsxs)(E.a.Toggle,{as:m.a.Header,eventKey:"".concat(t.id),"data-event":t.id,className:"d-flex align-items-center px-0",onClick:function(e){i(!s)},children:[Object(f.jsx)("span",{children:s?Object(f.jsx)(I.a,{icon:S.c,className:" mr-2"}):Object(f.jsx)(I.a,{icon:S.d,className:" mr-2"})}),Object(f.jsxs)("h3",{className:"my-0",children:[t.question,Object(f.jsx)(I.a,{icon:S.e,className:"ml-2 question-icon"})]})]}),Object(f.jsx)(E.a.Collapse,{eventKey:"".concat(t.id),children:Object(f.jsx)(m.a.Body,{children:t.answer})})]})},t.id)}),A=(a(115),function(e){var t=e.isMobileScreen,a=[{id:1,question:"What are the rules in place related to Corvid-19 regulations",answer:"The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "},{id:2,question:"What are the rules in place related to Corvid-19 regulations",answer:"The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "},{id:3,question:"How quickly can I get a new slot",answer:"The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "},{id:4,question:"How many students are permitted in a class",answer:"The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "}];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"card-container pb-3 ",children:null===a||void 0===a?void 0:a.map((function(e,t){return Object(f.jsx)(M,{data:e},t)}))}),Object(f.jsx)("div",{className:"row view-all-link ",children:Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)("div",{className:"link text-right w-100",children:Object(f.jsx)("p",{className:"".concat(t?"text-center":"text-right"),children:Object(f.jsx)(N.a,{to:"/faq",children:"view all"})})})})})]})});a(116),t.default=function(e){var t=e.isMobileScreen,a=[{icon:s,name:"5 Courts"},{icon:i,name:"Gym"},{icon:o,name:"Cycling"},{icon:r,name:"Swimming"},{icon:l,name:"Cafe"}];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("section",{className:"row  section-separator mb-5",children:[Object(f.jsxs)("div",{className:"col-12 col-md-12 col-lg-6 ".concat(t?"":"section-separator-right"),children:[Object(f.jsx)(c.a,{ratingNumber:"4.5",peopleNumber:"122"}),Object(f.jsx)("p",{className:"section-separator pb-4",children:"Clubhouse Woodridge Tennis Academy offers amazing recently re-surfaced Tournament Ready courts servicing North Beach, Glenwood, Riversdale and Central Dakota. We also boast hosting the World #11 favorite training ground and wordl class cafeteria for the hungry little ones."}),Object(f.jsxs)("div",{className:"",children:[Object(f.jsx)("div",{className:"pb-4 activity-icons d-flex align-items-center justify-content-around",children:a.map((function(e,t){return Object(f.jsx)("div",{className:" d-flex align-items-center justify-content-center flex-column",children:Object(f.jsx)(h.a,{theme:"normal",icon:e.icon,name:e.name})},t)}))}),Object(f.jsx)(x,{isMobileScreen:t,icon:d,theme:"white",message:"Currently undergoing renovations."})]})]}),Object(f.jsxs)("div",{className:"col-12 col-md-12 col-lg-6",children:[Object(f.jsx)("h2",{className:"sub-heading text-left text-center ".concat(t?"mb-3":"mb-4"),children:"Map"}),Object(f.jsx)(p,{})]})]}),Object(f.jsxs)("section",{className:"row section-separator pb-3 mb-5",children:[Object(f.jsx)("div",{className:"col-12 col-md-12 col-lg-12",children:Object(f.jsx)(y.a,{})}),Object(f.jsxs)("div",{className:"col-12 col-md-12 col-lg-12",children:[Object(f.jsx)("h2",{className:"sub-heading text-left mb-3",children:"Reviews"}),Object(f.jsx)(w,{isMobileScreen:t})]})]}),Object(f.jsx)("section",{className:"row section-separator p-0 pb-5 mb-5",children:Object(f.jsxs)("div",{className:"col-12 col-md-12 col-lg-12",children:[Object(f.jsx)("h2",{className:"sub-heading text-left mb-3",children:"Featured"}),Object(f.jsx)("div",{className:"review-container",children:Object(f.jsx)("div",{className:"row no-gutters align-items-start",children:Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)(P,{isMobileScreen:t})})})})]})}),Object(f.jsx)("section",{className:"row section-separator  pb-5 mb-5",children:Object(f.jsxs)("div",{className:"col-12 col-md-12 col-lg-12",children:[Object(f.jsx)("h2",{className:"sub-heading text-left mb-3",children:"FAQ"}),Object(f.jsx)("div",{className:"faq-container",children:Object(f.jsx)("div",{className:"row no-gutters align-items-start",children:Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)(A,{isMobileScreen:t})})})})]})})]})}},80:function(e,t,a){"use strict";var n=a(0),c=a.n(n),s=a(1),i=a(3),r=a(5),l=a.n(r),o=a(6),d=a(33),m=c.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.variant,r=e.size,m=e.active,j=e.className,b=e.block,u=e.type,v=e.as,f=Object(i.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),p=Object(o.a)(a,"btn"),x=l()(j,p,m&&"active",n&&p+"-"+n,b&&p+"-block",r&&p+"-"+r);if(f.href)return c.a.createElement(d.a,Object(s.a)({},f,{as:v,ref:t,className:l()(x,f.disabled&&"disabled")}));t&&(f.ref=t),u?f.type=u:v||(f.type="button");var h=v||"button";return c.a.createElement(h,Object(s.a)({},f,{className:x}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1};var j=m,b=a.p+"static/media/share-icon.dfe15492.svg",u=(a(83),a(2));t.a=function(e){var t=e.text,a=e.theme,n=e.share;return Object(u.jsxs)(j,{variant:"primary ",className:"".concat(a,"-btn ml-auto btn ").concat(a," ").concat(n?"share-btn":""),children:[n&&Object(u.jsx)("span",{className:"mr-2",children:Object(u.jsx)("img",{src:b})}),t]})}},81:function(e,t,a){"use strict";a(0);var n=a(29),c=a(30),s=(a(85),a(2));t.a=function(e){var t=e.theme;return Object(s.jsx)(c.a,{icon:n.g,className:"".concat(t," star-icon")})}},82:function(e,t,a){"use strict";var n=a(1),c=a(0),s=a.n(c),i=a(5),r=a.n(i);t.a=function(e){return s.a.forwardRef((function(t,a){return s.a.createElement("div",Object(n.a)({},t,{ref:a,className:r()(t.className,e)}))}))}},83:function(e,t,a){},84:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return i}));var n=a(0),c=a.n(n);function s(e,t){var a=0;return c.a.Children.map(e,(function(e){return c.a.isValidElement(e)?t(e,a++):e}))}function i(e,t){var a=0;c.a.Children.forEach(e,(function(e){c.a.isValidElement(e)&&t(e,a++)}))}},85:function(e,t,a){},86:function(e,t,a){"use strict";a(0);var n=a(29),c=a(81),s=(a(92),a(2));t.a=function(e){var t=e.ratingNumber,a=e.peopleNumber,i=[{starIcon:n.g,value:1},{starIcon:n.g,value:1},{starIcon:n.g,value:1},{starIcon:n.g,value:1},{starIcon:n.g,value:1}];return Object(s.jsxs)("div",{className:"five-stars-container",children:[a&&Object(s.jsx)("span",{className:"d-inline-block five-star-rating",children:t}),Object(s.jsx)("div",{className:"star-icon-wrapper d-flex align-items-center justify-content-center mx-2",children:i.map((function(e,t){return Object(s.jsx)("div",{children:Object(s.jsx)(c.a,{theme:"dark-blue"})},t)}))}),t&&Object(s.jsxs)("span",{className:"d-inline-block five-star-text",children:["(",a,")"]})]})}},87:function(e,t,a){"use strict";a(0),a(93);var n=a(2);t.a=function(e){var t=e.icon,a=e.name,c=e.theme;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"icon-wrapper d-flex align-items-center justify-content-center ".concat(c),children:Object(n.jsx)("img",{src:t,alt:"{".concat(a," w-100")})}),a&&Object(n.jsx)("p",{className:"icon-description",children:a})]})}},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){"use strict";a(0);var n=a(87),c=a(29),s=a(81),i=(a(95),a(2));t.a=function(e){var t=e.isMobileScreen,a=e.review,r=e.length,l=[{starIcon:c.g,value:1},{starIcon:c.g,value:1},{starIcon:c.g,value:1},{starIcon:c.g,value:1},{starIcon:c.g,value:1}];return Object(i.jsxs)("div",{className:"row no-gutters align-items-start reviews py-3 section-separator ".concat(r>1?"section-separator-top":""),children:[Object(i.jsx)("div",{className:" col-2 col-lg-1 col-md-1 d-flex align-items-start justify-content-center flex-column",children:Object(i.jsx)(n.a,{icon:a.reviewIcon,name:"",theme:"green"})}),Object(i.jsxs)("div",{className:"col-10 col-md-8 col-lg-8",children:[Object(i.jsx)("p",{className:" text-left mb-0",children:'"'.concat(a.message,'"')}),Object(i.jsx)("span",{className:"".concat(t?"mb-3":"","  w-100 reviewer-secondary-text  text-left d-inline-block mt-2"),children:a.reviewerName})]}),t&&Object(i.jsx)("div",{className:"col-2"}),Object(i.jsxs)("div",{className:"col-10 col-md-2 col-lg-2 d-flex  flex-column justify-content-end ".concat(t?" align-items-start":" align-items-end"),children:[Object(i.jsx)("span",{className:" d-flex  flex-row justify-content-end",children:l.map((function(e,t){return Object(i.jsx)("span",{children:Object(i.jsx)(s.a,{theme:"green"})},t)}))}),Object(i.jsx)("span",{className:"".concat(t?" text-left":"text-right","w-100 reviewer-secondary-text date d-inline-block mt-2"),children:a.date})]})]})}},95:function(e,t,a){},96:function(e,t,a){"use strict";t.a=a.p+"static/media/review.56631672.svg"},97:function(e,t,a){},98:function(e,t,a){}}]);
//# sourceMappingURL=3.6e6df37f.chunk.js.map