webpackJsonp([35783957827783],{111:function(e,t){"use strict";function n(e,t,d){if("string"!=typeof t){if(s){var f=c(t);f&&f!==s&&n(e,f,d)}var p=l(t);o&&(p=p.concat(o(t)));for(var m=0;m<p.length;++m){var g=p[m];if(!(r[g]||a[g]||d&&d[g])){var h=u(t,g);try{i(e,g,h)}catch(e){}}}return e}return e}var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i=Object.defineProperty,l=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,s=c&&c(Object);e.exports=n},69:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function a(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function i(e){if(d===clearTimeout)return clearTimeout(e);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function l(){g&&p&&(g=!1,p.length?m=p.concat(m):h=-1,m.length&&o())}function o(){if(!g){var e=a(l);g=!0;for(var t=m.length;t;){for(p=m,m=[];++h<t;)p&&p[h].run();h=-1,t=m.length}p=null,g=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var s,d,f=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(e){d=r}}();var p,m=[],g=!1,h=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new u(e,t)),1!==m.length||g||a(o)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},475:function(e,t,n){e.exports=n.p+"static/BG-700x400.8f2ffd6f.png"},476:function(e,t,n){e.exports=n.p+"static/BG-700x400.e8e3b5a5.jpg"},477:function(e,t,n){e.exports=n.p+"static/BG-700x400.e01ecdaa.png"},478:function(e,t,n){e.exports=n.p+"static/BG-700x400.5c45f26f.png"},479:function(e,t,n){e.exports=n.p+"static/BG-700x400.c062214e.png"},480:function(e,t,n){e.exports=n.p+"static/BG-700x400.d3b7b65f.png"},481:function(e,t,n){e.exports=n.p+"static/BG-700x400.2f85ea08.png"},482:function(e,t,n){e.exports=n.p+"static/BG-700x400.de246f52.png"},209:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),i=r(a),l=function(){return i.default.createElement("div",{className:"about"},i.default.createElement("h1",null,"About Me"),i.default.createElement("p",null,"Hi there, I'm Rick Boshae, a recent college grad living in Los Angeles, California. In a nutshell, you can say I am an aspiring Software Engineer with the spirit of an entrepreneur. I find everything about creating software amazing. The design, development, maintenance, and testing wrapped together to ship an awesome product. My favorite part of the entire process is exchanging ideas with other engineers. With each project I strive to explore new tech while creating something akin to magic."),i.default.createElement("h3",null,"Areas of Interest"),i.default.createElement("p",null,"I have a variety of interests but I tend to work on projects involving AI, Machine Learning, Graphics, VR, Networking, Databases, Android, and Web Applications."))};t.default=l,e.exports=t.default},210:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),i=r(a),l=function(){return i.default.createElement("div",null,i.default.createElement("h1",null,"Contact"),i.default.createElement("div",{id:"contactMessage"},i.default.createElement("p",null,"If you think I might be a good fit at your company or are interested in speaking with me feel free to send me an email."),i.default.createElement("h3",null,"Email"),i.default.createElement("p",null,"rwboshae (at) gmail (dot) com")))};t.default=l,e.exports=t.default},211:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),i=r(a),l=function(){return i.default.createElement("div",null,i.default.createElement("h1",null,"Education"),i.default.createElement("div",null,i.default.createElement("h3",{style:{display:"inline-block",marginRight:"1rem"}},"University of California, Riverside"),i.default.createElement("div",{style:{float:"right"}},i.default.createElement("b",null,"2016-2018"))),i.default.createElement("div",{style:{marginBottom:"0"}},i.default.createElement("h4",null,"B.S. Computer Science, GPA 3.77")),i.default.createElement("div",null,i.default.createElement("h3",{style:{display:"inline-block",marginRight:"1rem"}},"Santa Monica College"),i.default.createElement("div",{style:{float:"right"}},i.default.createElement("b",null,"Transfer 2016"))),i.default.createElement("div",{style:{marginBottom:"0"}},i.default.createElement("h4",null,"Computer Science")),i.default.createElement("div",null,i.default.createElement("h3",{style:{display:"inline-block",marginRight:"1rem"}},"Moorpark College"),i.default.createElement("div",{style:{float:"right"}},i.default.createElement("b",null,"Transfer 2016"))),i.default.createElement("div",{style:{marginBottom:"0"}},i.default.createElement("h4",null,"Mathematics")))};t.default=l,e.exports=t.default},212:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),i=r(a),l=function(){return i.default.createElement("div",null,i.default.createElement("h1",null,"Technical Skills"),i.default.createElement("h3",null,"Software"),i.default.createElement("p",null,"Android Studio, Git, GitHub, MATLAB, XCode"),i.default.createElement("h3",null,"Programming"),i.default.createElement("p",null,"C, C++, C#, CSS, HTML, Java, JavaScript, JSON, jQuery, PostgreSQL, Python, React, SQL"))};t.default=l,e.exports=t.default},214:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o,u=n(2),c=r(u),s=n(70),d=(r(s),o={boxShadow:"0 4px 8px 0 regba(0, 0, 0, 0.2)",width:"16rem",height:"18rem",margin:"auto",textAlign:"left",boxSizing:"border-box",border:"solid 5px"},o.boxShadow="5px 10px #888888",o),f={fontSize:"15px",textAlign:"center",marginBottom:"0"},p=function(e){function t(){return a(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return c.default.createElement("div",{className:"columns project-item"},c.default.createElement("div",{className:"item-wrap"},c.default.createElement("div",{style:d},c.default.createElement("div",{style:{position:"relative",zIndex:"1",margin:"auto",color:"white",fontSize:"1.75rem",paddingTop:"1rem",textAlign:"center",height:"45%",verticalAlign:"center"}},c.default.createElement("div",{className:"bg",style:{position:"absolute",zIndex:"-1",top:"0",bottom:"0",left:"0",right:"0",backgroundImage:"linear-gradient(\n                    rgba(0, 0, 0, 0.55),\n                    rgba(0, 0, 0, 0)\n                  ), url("+this.props.project.pictureLink+")",width:"100%",height:"100%",backgroundSize:"cover"}}),c.default.createElement("h3",null,this.props.project.title)),c.default.createElement("div",{style:{paddingTop:".11rem",paddingLeft:".5rem",paddingRight:".5rem"}},c.default.createElement("p",{style:f},this.props.project.languages),c.default.createElement("p",null,this.props.project.descirption)))))},t}(c.default.Component);t.default=p,e.exports=t.default},215:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=n(2),u=r(o),c=n(70),s=(r(c),n(47)),d=(r(s),n(214)),f=r(d),p=n(477),m=r(p),g=n(475),h=r(g),y=n(476),v=r(y),b=n(481),E=r(b),w=n(478),x=r(w),S=n(479),T=r(S),M=n(482),j=r(M),_=n(480),k=r(_),C=function(e){function t(){a(this,t);var n=i(this,e.call(this));return n.state={projects:[]},n}return l(t,e),t.prototype.getProjects=function(){this.setState({projects:[{title:"Huddle: Team Management",descirption:"Huddle is a Kanban web application written in React, HTML, CSS, and JavaScript.",languages:["React","HTML","CSS","JavaScript"],pictureLink:m.default,lastUpdate:"Nov 25, 2017"},{title:"Breakout",descirption:"I recreated the good ol' Atari game Breakout. Every bit of this project was wired by hand and coded from scratch. My favorite part of the project was reverse engineering the Nintendo controller.",languages:["C","Embedded Systems"],pictureLink:h.default,lastUpdate:"June 2017"},{title:"Feature Optimizer",descirption:"I wrote a search algorithm in C++ to eliminate irrelevant features in a nearest neight classifier. I used Forward Selection and Backward Selection techniques.",languages:["C++"],tags:["Machine Learning"],pictureLink:v.default,lastUpdate:"Nov 2016"},{title:"Sliding Puzzle Solver",descirption:"Implemented A* search, the wisest search algorithm, to create an artificially intelligent program that can solve a 3x3 puzzle.",languages:["C++"],tags:["AI"],pictureLink:k.default,lastUpdate:"Feb 21, 2016"},{title:"Simple Ray Tracer",descirption:"A simple ray tracer written in C++",languages:["C++"],tags:["Graphics"],pictureLink:T.default,lastUpdate:"Dec 21, 2017"},{title:"MiniGL",descirption:"A simplified 3D rendering pipeline written in C++.",languages:["C++"],tags:["Graphics"],pictureLink:E.default,lastUpdate:"Nov 28, 2017"},{title:"rshell",descirption:"A shell terminal writtin in C++",languages:["C++"],tags:["OS"],pictureLink:j.default,lastUpdate:"Dec 2, 2017"},{title:"Personal Website 1.0",descirption:"My personal website written in HTML, CSS, JavaScript.",languages:["Bootstrap","HTML","CSS","JavaScript","jQuery"],tags:["WebDev"],pictureLink:x.default,lastUpdate:"Jan 3, 2017"},{title:"Personal Website 2.0",descirption:"My personal website written revamped with Gatsby",languages:["HTML","CSS","JavaScript","Reactjs"],tags:["WebDev"],pictureLink:"",lastUpdate:"Jul 26, 2018"}]})},t.prototype.componentWillMount=function(){this.getProjects()},t.prototype.render=function(){var e=this,t=void 0;this.state.projects&&(t=this.state.projects.map(function(t){return u.default.createElement("td",{key:t.title,style:{paddingLeft:".25rem",paddingRight:".25rem"}},u.default.createElement(f.default,{onMouseEnter:e.fadeBackground,onMouseLeave:e.resetBackground,project:t}))}));var n=t.reduce(function(e,t,n){var r=Math.floor(n/3);return n%3==0?e[r]=[t]:e[r].push(t),e},[]);console.log("Hello",n);var r=void 0;return n&&(r=n.map(function(e,t){return u.default.createElement("tr",{key:t},e)})),console.log("Table",r),console.log("After Map"),console.log(t),u.default.createElement("section",{id:"projects"},u.default.createElement("h1",null,"Projects"),u.default.createElement("table",{id:"projectTable"},u.default.createElement("thead",null),u.default.createElement("tbody",null,r)))},t}(u.default.Component);t.default=C,e.exports=t.default},219:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),i=r(a),l=n(47),o=(r(l),n(209)),u=r(o),c=n(215),s=r(c),d=n(212),f=r(d),p=n(211),m=r(p),g=n(210),h=r(g),y=function(){return i.default.createElement("div",{className:"main"},i.default.createElement(u.default,null),i.default.createElement(s.default,null),i.default.createElement(f.default,null),i.default.createElement(m.default,null),i.default.createElement(h.default,null))};t.default=y,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-6a82fc9911f97723969f.js.map