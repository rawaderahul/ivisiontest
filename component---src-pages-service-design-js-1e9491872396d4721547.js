(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{148:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(158),o=a(167),r=a(164),l=a(169),c=a.n(l);t.default=function(){return i.a.createElement(o.a,null,i.a.createElement(r.a,{title:"UI/UX Design",keywords:["gatsby","application","react"]}),i.a.createElement(c.a,null,i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"pagebanner pagebannerLess"},i.a.createElement("div",{className:"pagebannerMax"},i.a.createElement("h1",{className:"white"}," UI / UX Design "),i.a.createElement("h3",{className:"white mb-3"},"UI/UX Both Work Closely Together"),i.a.createElement("div",null,i.a.createElement("img",{src:"images/tools/photoshop.png",alt:"Photoshop",title:"Photoshop",width:"40",className:"mr-1"}),i.a.createElement("img",{src:"images/tools/Illustrator.png",alt:"Illustrator",title:"Illustrator",width:"40",className:"mr-1"}),i.a.createElement("img",{src:"images/tools/wire_sw.png",alt:"WireframesSoftware",title:"WireframesSoftware",width:"40",className:"mr-1"})))),i.a.createElement("div",{className:"whatWeSection pb-5"},i.a.createElement("div",{className:"container container-less"},i.a.createElement("div",{class:"row mt-3"},i.a.createElement("div",{className:"col-12"},i.a.createElement("nav",{"aria-label":"breadcrumb "},i.a.createElement("ol",{class:"breadcrumb"},i.a.createElement("li",{class:"breadcrumb-item"},i.a.createElement(s.a,{to:"/services/"},"Services")),i.a.createElement("li",{class:"breadcrumb-item active","aria-current":"page"},"UI & UX Design"))))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"bg-white shadow-1 brb4 p-5 "},i.a.createElement("div",{className:"row mb-3"},i.a.createElement("div",{className:"col-12"},i.a.createElement("strong",null,"Tools:- "),"Photoshop / Illustrator / Wireframes software")),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12 font-large"},i.a.createElement("p",null,"With our Design Thinking technology, rich experience, and a deep understanding of the industry we have achieved new heights across various industries."),i.a.createElement("p",null,"iVision Studio considers designing modern and updated websites for its clients as a backbone of its business. We are familiar with vast techniques and tools to design attractive and professional websites. We work with a team of excellent and proficient website designers, who are experienced in using UX/UI design to design modern websites for you.")))))))))))}},158:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),i=a.n(n),s=a(4),o=a.n(s),r=a(33),l=a.n(r);a.d(t,"a",function(){return l.a});a(159);var c=i.a.createContext({}),d=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},159:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},160:function(e,t,a){"use strict";function n(e){try{return h.insertRule(e,h.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function i(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",i,!0),n("."+s+" { opacity: 0; }"),window.removeEventListener("orientationchange",i,!0),window.document.removeEventListener("visibilitychange",i))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=function(e,t,a,n,i){var s=Math.log(n),o=(Math.log(i)-s)/(a-t);return Math.exp(s+o*(e-t))},t.animation=function(e){if(!h)return"";var t="@keyframes "+(f+u)+"{"+e+"}",a=p[e];return a?""+f+a:(h.insertRule(t,h.cssRules.length),p[e]=u,""+f+u++)},t.hideAll=i,t.default=function(e){var a=e.ssrFadeout;t.fadeOutEnabled=a};var s=t.namespace="react-reveal",o=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),r=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=o=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),m=(t.ie10=!1,t.collapseend=void 0),u=1,p={},h=!1,f=s+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=r="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=o=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),o&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=o=!1),o&&window.setTimeout(c,1500),r||(t.collapseend=m=document.createEvent("Event"),m.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(h=v.sheet,window.addEventListener("scroll",i,!0),window.addEventListener("orientationchange",i,!0),window.document.addEventListener("visibilitychange",i))}},162:function(e){e.exports={data:{site:{siteMetadata:{title:"iVision Web Studio"}}}}},163:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),s=a(4),o=a.n(s),r=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},164:function(e,t,a){"use strict";var n=a(165),i=a(0),s=a.n(i),o=a(4),r=a.n(o),l=a(161),c=a.n(l);function d(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,r=e.title,l=n.data.site,d=t||l.siteMetadata.description;return s.a.createElement(c.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:r},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.array,keywords:r.a.arrayOf(r.a.string),title:r.a.string.isRequired},t.a=d},165:function(e){e.exports={data:{site:{siteMetadata:{title:"iVision Web Studio",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},166:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.default=function(e,t,a,n){return"in"in e&&(e.when=e.in),s.default.Children.count(n)<2?s.default.createElement(o.default,i({},e,{inEffect:t,outEffect:a,children:n})):(n=s.default.Children.map(n,function(n){return s.default.createElement(o.default,i({},e,{inEffect:t,outEffect:a,children:n}))}),"Fragment"in s.default?s.default.createElement(s.default.Fragment,null,n):s.default.createElement("span",null,n))};var s=n(a(0)),o=n(a(168));e.exports=t.default},167:function(e,t,a){"use strict";var n=a(162),i=a(0),s=a.n(i),o=a(4),r=a.n(o),l=a(158),c=a(161),d=a.n(c),m=a(7),u=a.n(m),p=(a(74),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={visible:!1},t.handleToggle=function(){t.setState({visible:!t.state.visible})},t}return u()(t,e),t.prototype.render=function(){return s.a.createElement("header",null,s.a.createElement("div",{className:"top-line"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-10 col-md-10 font-15"},s.a.createElement("span",{className:"mr-3"},s.a.createElement("i",{className:"fas fa-phone phoneFont mr-1"}),"USA ",s.a.createElement("a",{href:"tel:+1 860-9670120",className:"black"}," +1 860-9670120")," ",s.a.createElement("i",{className:"fas fa-phone phoneFont mr-1 ml-2"}),"IND ",s.a.createElement("a",{href:"tel:+91 9767-024642",className:"black"},"+91 9767-024642")),s.a.createElement("span",null," ",s.a.createElement("i",{className:"fas fa-envelope font-12 mr-1"}),s.a.createElement("a",{href:"mailto:contact@ivisionstudio.in",className:"black"},"contact@ivisionstudio.in")," ")),s.a.createElement("div",{className:"col-lg-2 col-md-2 font-14 d-flex justify-content-end"},s.a.createElement("span",{className:"mr-2"}," ",s.a.createElement("a",{href:"https://www.facebook.com/ivision.webstudio.9",target:"_blank",className:"socialIcon"},s.a.createElement("i",{className:"fab fa-facebook-f black font-14"}))),s.a.createElement("span",{className:"mr-2"}," ",s.a.createElement("a",{href:"https://www.instagram.com/ivisionwebstudio/",className:"socialIcon",target:"_blank"},s.a.createElement("i",{className:"fab fa-instagram black font-14"}))),s.a.createElement("span",{className:"mr-2"}," ",s.a.createElement("a",{href:"https://in.linkedin.com/company/ivision-studio",className:"socialIcon",target:"_blank"},s.a.createElement("i",{className:"fab fa-linkedin-in black font-14"}))))))),s.a.createElement("div",{className:"mainNavBar"},s.a.createElement("div",{className:"container"},s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light pl-0 pr-0"},s.a.createElement(l.a,{to:"/",className:"navbar-brand",href:"#"},s.a.createElement("img",{src:"../images/ivision_logo.png"})),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":this.state.visible,"aria-label":"Toggle navigation",onClick:this.handleToggle},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:this.state.visible?"collapse navbar-collapse show":"collapse navbar-collapse",id:"navbarNavAltMarkup"},s.a.createElement("div",{className:"navbar-nav"},s.a.createElement(l.a,{to:"/",className:"nav-item nav-link  mr-3"},"Home ",s.a.createElement("span",{className:"sr-only"},"(current)")),s.a.createElement(l.a,{to:"/about-us/",className:"nav-item nav-link mr-3"},"About Us"),s.a.createElement(l.a,{to:"/services/",className:"nav-item nav-link mr-3"},"Services"),s.a.createElement(l.a,{to:"/career/",className:"nav-item nav-link mr-3"},"Career"),s.a.createElement(l.a,{to:"/team/",className:"nav-item nav-link mr-3"},"Team"),s.a.createElement(l.a,{to:"/contact/",className:"nav-item nav-link "},"Contact")))))))},t}(s.a.Component));p.propTypes={siteTitle:r.a.string},p.defaultProps={siteTitle:""};var h=p,f=(a(143),function(){return s.a.createElement("div",{className:"footer"},s.a.createElement("div",{className:"d-flex justify-content-center mb-3 footerNav"},s.a.createElement("p",{className:"ml-3 mr-3 mb-0"},s.a.createElement(l.a,{to:"/"},"Home ")),s.a.createElement("p",{className:"ml-3 mr-3 mb-0"},s.a.createElement(l.a,{to:"/about-us/"},"About Us")),s.a.createElement("p",{className:"ml-3 mr-3 mb-0"},s.a.createElement(l.a,{to:"/team/"},"Team")),s.a.createElement("p",{className:"ml-3 mr-3 mb-0"},s.a.createElement(l.a,{to:"/services/"},"Services")),s.a.createElement("p",{className:"ml-3 mr-3 mb-0"},s.a.createElement(l.a,{to:"/career/"},"Career")),s.a.createElement("p",{className:"ml-3 mr-3 mb-0"},s.a.createElement(l.a,{to:"/contact/"},"Contact"))),s.a.createElement("div",{className:"d-flex justify-content-center mb-3 footerContact"},s.a.createElement("div",{className:"mainPhone d-flex"},s.a.createElement("div",{className:"phone1"},s.a.createElement("i",{className:"fas fa-phone phoneFont mr-1"})," USA ",s.a.createElement("a",{href:"tel:+1 860-9670120",className:"black mr-3"}," +1 860-9670120")),s.a.createElement("div",{className:"phone2"},s.a.createElement("i",{className:"fas fa-phone phoneFont mr-1 ml-1"}),"IND ",s.a.createElement("a",{href:"tel:+91 9767-024642",className:"black mr-3"},"+91 9767-024642"))),s.a.createElement("div",{className:"mainEmailSocial d-flex"},s.a.createElement("div",{className:"email"},s.a.createElement("i",{className:"fas fa-envelope mr-1"}),s.a.createElement("a",{href:"mailto:contact@ivisionstudio.in",className:"black mr-3"},"contact@ivisionstudio.in")),s.a.createElement("div",{className:"social d-flex"},s.a.createElement(l.a,{to:"https://www.facebook.com/",target:"_blank",className:"socialIcon mr-2"},s.a.createElement("i",{className:"fab fa-facebook-f black font-14"})),s.a.createElement(l.a,{to:"https://www.instagram.com/",className:"socialIcon mr-2",target:"_blank"},s.a.createElement("i",{className:"fab fa-instagram black font-14"})),s.a.createElement(l.a,{to:"https://in.linkedin.com/",className:"socialIcon mr-2",target:"_blank"},s.a.createElement("i",{className:"fab fa-linkedin-in black font-14"}))))),s.a.createElement("hr",{className:"mb-3"}),s.a.createElement("div",{className:"text-center footerCopy"},"Copyright ©2019 All rights reserved | Website Design by ",s.a.createElement("a",{href:"http://ivisionstudio.in/"},"iVision Web Studio")))}),v=function(e){var t=e.children;return s.a.createElement(l.b,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,null,s.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.3.1/css/all.css",integrity:"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU",crossorigin:"anonymous"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto",rel:"stylesheet"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Muli:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i",rel:"stylesheet"}),s.a.createElement("link",{rel:"icon",type:"image/png",href:"images/favicon.png"}),s.a.createElement("link",{rel:"stylesheet",type:"text/css",charset:"UTF-8",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"}),s.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"})),s.a.createElement("div",{className:"wrapper"},s.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("main",null,t),s.a.createElement(f,null)))},data:n})};v.propTypes={children:r.a.node.isRequired};t.a=v},168:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,i=!1,s=void 0;try{for(var o,r=e[Symbol.iterator]();!(n=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){i=!0,s=e}finally{try{!n&&r.return&&r.return()}finally{if(i)throw s}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),c=(n=l)&&n.__esModule?n:{default:n},d=a(4),m=a(160),u=(0,d.shape)({make:d.func,duration:d.number.isRequired,delay:d.number.isRequired,forever:d.bool,count:d.number.isRequired,style:d.object.isRequired,reverse:d.bool}),p={collapse:d.bool,collapseEl:d.element,cascade:d.bool,wait:d.number,force:d.bool,disabled:d.bool,appear:d.bool,enter:d.bool,exit:d.bool,fraction:d.number,refProp:d.string,innerRef:d.func,onReveal:d.func,unmountOnExit:d.bool,mountOnEnter:d.bool,inEffect:u.isRequired,outEffect:(0,d.oneOfType)([u,(0,d.oneOf)([!1])]).isRequired,ssrReveal:d.bool,collapseOnly:d.bool,ssrFadeout:d.bool},h={transitionGroup:d.object},f=function(e){function t(e,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a));return n.isOn=void 0===e.when||!!e.when,n.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:n.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},n.savedChild=!1,n.isShown=!1,m.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.default.Component),r(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?o({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!m.observerMode&&this.props.collapse&&window.document.dispatchEvent(m.collapseend)))}},{key:"animationEnd",value:function(e,t,a){var n=this,i=a.forever,s=a.count,o=a.delay,r=a.duration;if(!i){this.animationEndTimeout=window.setTimeout(function(){n&&n.el&&(n.animationEndTimeout=void 0,e.call(n))},o+(r+(t?r:0)*s))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,a){var n=a.duration+(t.cascade?a.duration:0),i=this.isOn?this.getDimensionValue():0,s=void 0,o=void 0;if(t.collapseOnly)s=a.duration/3,o=a.delay;else{var r=n>>2,l=r>>1;s=r,o=a.delay+(this.isOn?0:n-r-l),e.style.animationDuration=n-r+(this.isOn?l:-l)+"ms",e.style.animationDelay=a.delay+(this.isOn?r-l:0)+"ms"}return e.collapse={height:i,transition:"height "+s+"ms ease "+o+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,a=e[t?"outEffect":"inEffect"],n="style"in a&&a.style.animationName||void 0,i=void 0;e.collapseOnly?i={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&a.make&&(n=a.make),i={hasAppeared:!0,hasExited:!1,collapse:void 0,style:o({},a.style,{animationDuration:a.duration+"ms",animationDelay:a.delay+"ms",animationIterationCount:a.forever?"infinite":a.count,opacity:1,animationName:n}),className:a.className}),this.setState(e.collapse?this.collapse(i,e,a):i),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,a)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),m.ssr&&(0,m.disableSsr)()}},{key:"handleObserve",value:function(e,t){s(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&m.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];m.globalHide||(0,m.hideAll)(),this&&this.el&&(e||(e=this.props),m.ssr&&(0,m.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):a||this.inViewport(e)||e.force?this.animate(e):m.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var a=this.context.transitionGroup,n=a&&!a.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!n||m.ssr&&!m.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):m.ssr&&(m.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,a=void 0;a="string"==typeof e?e.split("").map(function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):c.default.Children.toArray(e);var n=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],s=n.duration,r=n.reverse,l=a.length,d=2*s;this.props.collapse&&(d=parseInt(this.state.style.animationDuration,10),s=d/2);var u=r?l:0;return a.map(function(e){return"object"===(void 0===e?"undefined":i(e))&&e?c.default.cloneElement(e,{style:o({},e.props.style,t.state.style,{animationDuration:Math.round((0,m.cascade)(r?u--:u++,0,l,s,d))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===i(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var a=!1,n=t.props,i=n.style,s=n.className,r=n.children,l=this.props.disabled?s:(this.props.outEffect?m.namespace:"")+(this.state.className?" "+this.state.className:"")+(s?" "+s:"")||void 0,d=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&r&&this.state.style.animationName?(a=this.cascade(r),d=o({},i,{opacity:1})):d=this.props.disabled?i:o({},i,this.state.style);var u=o({},this.props.props,function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({className:l,style:d},this.props.refProp,this.saveRef)),p=c.default.cloneElement(t,u,e?a||r:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:o({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:p}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:p}):p}},{key:"makeHandler",value:function(e){var t=this,a=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,m.raf)(a),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var a=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),i=Math.min(a,window.innerHeight)*(m.globalHide?e.fraction:0);return n>i-window.innerHeight&&n<a-i}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){m.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!m.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}();f.propTypes=p,f.defaultProps={fraction:.2,refProp:"ref"},f.contextTypes=h,f.displayName="RevealBase",t.default=f,e.exports=t.default},169:function(e,t,a){"use strict";function n(e,t){var a=t.distance,n=t.left,i=t.right,s=t.up,o=t.down,l=t.top,c=t.bottom,d=t.big,u=t.mirror,p=t.opposite,h=(a?a.toString():0)+((n?1:0)|(i?2:0)|(l||o?4:0)|(c||s?8:0)|(u?16:0)|(p?32:0)|(e?64:0)|(d?128:0));if(m.hasOwnProperty(h))return m[h];var f=n||i||s||o||l||c,v=void 0,b=void 0;if(f){if(!u!=!(e&&p)){var y=[i,n,c,l,o,s];n=y[0],i=y[1],l=y[2],c=y[3],s=y[4],o=y[5]}var E=a||(d?"2000px":"100%");v=n?"-"+E:i?E:"0",b=o||l?"-"+E:s||c?E:"0"}return m[h]=(0,r.animation)((e?"to":"from")+" {opacity: 0;"+(f?" transform: translate3d("+v+", "+b+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),m[h]}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e.children,i=(e.out,e.forever),s=e.timeout,o=e.duration,l=void 0===o?r.defaults.duration:o,d=e.delay,m=void 0===d?r.defaults.delay:d,u=e.count,p=void 0===u?r.defaults.count:u,h=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["children","out","forever","timeout","duration","delay","count"]),f={make:n,duration:void 0===s?l:s,delay:m,forever:i,count:p,style:{animationFillMode:"both"},reverse:h.left};return t?(0,c.default)(h,f,f,a):f}Object.defineProperty(t,"__esModule",{value:!0});var s,o=a(4),r=a(160),l=a(166),c=(s=l)&&s.__esModule?s:{default:s},d={out:o.bool,left:o.bool,right:o.bool,top:o.bool,bottom:o.bool,big:o.bool,mirror:o.bool,opposite:o.bool,duration:o.number,timeout:o.number,distance:o.string,delay:o.number,count:o.number,forever:o.bool},m={};i.propTypes=d,t.default=i,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-service-design-js-1e9491872396d4721547.js.map