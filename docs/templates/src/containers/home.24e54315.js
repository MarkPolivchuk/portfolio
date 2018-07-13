webpackJsonp([0],{142:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var r=a(54),n=l(r),d=a(143),c=l(d),u=a(144),o=l(u);e.exports={Container:n.default,Row:c.default,Col:o.default}},143:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),n=l(r),d=a(1),c=l(d),u=function(e){var t=e.children,a=e.className,l=["flex","flex-wrap"];return a&&l.push(a),n.default.createElement("div",{className:l.join(" ")},t)};u.propTypes={children:c.default.node,className:c.default.string},u.defaultProps={children:null,className:null},t.default=u},144:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),n=l(r),d=a(1),c=l(d),u=["1/2","1/3","2/3","1/4","3/4","1/5","2/5","3/5","4/5","1/6","5/6","full"],o=function(e){var t=e.children,a=e.className,l=e.w,r=e.sm,d=e.md,c=e.lg,u=e.xl,o=["w-"+l,"sm:w-"+(r||l),"md:w-"+(d||r||l),"lg:w-"+(c||d||r||l),"xl:w-"+(u||c||d||r||l)];return a&&o.push(a),n.default.createElement("div",{className:o.join(" ")},t)};o.propTypes={children:c.default.node,className:c.default.string,w:c.default.oneOf(u),sm:c.default.oneOf(u),md:c.default.oneOf(u),lg:c.default.oneOf(u),xl:c.default.oneOf(u)},o.defaultProps={children:null,className:null,w:u[u.length-1],sm:null,md:null,lg:null,xl:null},t.default=o},145:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var r=a(146),n=l(r),d=a(147),c=l(d),u=a(148),o=l(u);e.exports={Badge:n.default,Card:c.default,IconLabel:o.default}},146:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),n=l(r),d=a(1),c=(l(d),function(e){var t=e.color,a=e.children;return n.default.createElement("span",{className:"rounded-full bg-"+t+" px-2 py-1 mr-2 mb-2 text-xs font-medium text-white"},a)});c.propTypes={},t.default=c},147:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),n=l(r),d=a(1),c=l(d),u=function(e){var t=e.children,a=e.className,l=["bg-white","shadow-lg","p-4"];return a&&l.push(a),n.default.createElement("div",{className:l.join(" ")},t)};u.propTypes={children:c.default.node,className:c.default.string},u.defaultProps={children:null,className:null},t.default=u},148:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),n=l(r),d=a(1),c=(l(d),function(e){var t=e.label,a=e.icon;return n.default.createElement("div",{className:"flex items-center text-grey-dark mb-2"},n.default.createElement("i",{className:"fa fa-sm fa-fw fa-"+a}),n.default.createElement("span",{className:"text-xs ml-2"},t))});c.propTypes={},t.default=c},53:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),r=function(e){return e&&e.__esModule?e:{default:e}}(l),n=a(28),d=a(142),c=a(145),u=["JavaScript","HTML","CSS","SQL","Swift","C#","Java"],o=["Node","React","Redux","React-Native","Bootstrap","Tailwind","Mocha","Postgres","Redis"],s=["Git","AWS","Docker","Windows","MacOS"],f=["Adobe Creative Suite","Office","iWork","VS Code","Xcode","Sketch"];t.default=(0,n.withSiteData)(function(){return r.default.createElement("div",null,r.default.createElement(d.Container,{padding:0,className:"bg-white shadow-lg sm:rounded-lg mb-4 pb-2 text-black"},r.default.createElement("div",{className:"bg-cover-img border-b border-grey"},r.default.createElement("img",{src:"/assets/img/cover.jpg",className:"profile-img rounded-full border-white border-4 shadow-md block md:inline-block mx-auto md:mx-8 ",alt:"Profile"})),r.default.createElement("div",{className:"flex my-2 flex-wrap"},r.default.createElement("div",{className:"w-full md:w-48 h-24 md:w-0 md:mx-8"}),r.default.createElement("div",{className:"w-auto flex-1"},r.default.createElement(d.Row,{className:"h-full"},r.default.createElement(d.Col,{md:"3/4",className:"text-center md:text-left mx-4 md:mx-0"},r.default.createElement("div",{className:"flex flex-col justify-center h-full"},r.default.createElement("h1",{className:"text-4xl text-black"},"Mark Polivchuk"),r.default.createElement("p",{className:"text-darker opacity-75 pt-0 text-lg font-thin leading-normal"},"Software Developer / Calgary, AB"))),r.default.createElement(d.Col,{md:"1/4",className:"text-center md:text-left mx-4 md:mx-0 md:pr-4"},r.default.createElement("div",{className:"flex justify-center md:justify-end items-center h-full py-2"},r.default.createElement("a",{href:"https://github.com/MarkPolivchuk",target:"_blank",rel:"noopener noreferrer",alt:"Github"},r.default.createElement("i",{className:"fab fa-2x mx-4 fa-github text-grey-darkest hover:text-black"})),r.default.createElement("a",{href:"https://www.linkedin.com/in/mark-polivchuk-72165873/",target:"_blank",rel:"noopener noreferrer",alt:"LinkedIn"},r.default.createElement("i",{className:"fab fa-2x mx-4 fa-linkedin text-grey-darkest hover:text-black"})),r.default.createElement("a",{href:"https://twitter.com/MarkPolivchuk",target:"_blank",rel:"noopener noreferrer",alt:"Twitter"},r.default.createElement("i",{className:"fab fa-2x mx-4 fa-twitter text-grey-darkest hover:text-black"})))))))),r.default.createElement(d.Container,{padding:0},r.default.createElement(d.Row,{className:"-mx-2"},r.default.createElement(d.Col,{md:"1/3",className:"px-2 mb-4"},r.default.createElement(c.Card,{className:"sm:rounded-lg border-t-4 border-red"},r.default.createElement("h3",{className:"text-black mb-4 flex-1 font-light"},"Education"),r.default.createElement("div",{className:"mb-8 flex align-leading"},r.default.createElement("a",{href:"https://www.ucalgary.ca/",target:"_blank",rel:"noopener noreferrer",alt:"University of Calgary"},r.default.createElement("img",{src:"/assets/img/uofc.jpg",className:"h-12 w-12 rounded inline-block mr-2 border border-grey-light",alt:"University of Calgary"})),r.default.createElement("div",{className:"flex-1 inline-block"},r.default.createElement("p",{className:"font-bold mb-2"},"University of Calgary"),r.default.createElement(c.IconLabel,{label:"Calgary, AB",icon:"map-marker-alt"}),r.default.createElement(c.IconLabel,{label:"Majored in Computer Science",icon:"code-branch"}),r.default.createElement(c.IconLabel,{label:"Minored in Pure Math",icon:"calculator"}),r.default.createElement(c.IconLabel,{label:"Graduated in 2015",icon:"graduation-cap"}))),r.default.createElement("div",{className:"mb-8 flex align-leading"},r.default.createElement("a",{href:"http://schools.cbe.ab.ca/b816/",target:"_blank",rel:"noopener noreferrer",alt:"Western Canada High School"},r.default.createElement("div",{className:"h-12 w-12 flex items-center h-12 w-12 rounded inline-block border border-grey-light mr-2",alt:"Western Canada High School"},r.default.createElement("img",{src:"/assets/img/wchs.png",className:"",alt:"Profile"}))),r.default.createElement("div",{className:"flex-1 inline-block"},r.default.createElement("p",{className:"font-bold mb-1"},"Western Canada High School"),r.default.createElement(c.IconLabel,{label:"Calgary, AB",icon:"map-marker-alt"}),r.default.createElement(c.IconLabel,{label:"Graduated in 2011",icon:"graduation-cap"}))))),r.default.createElement(d.Col,{md:"1/3",className:"px-2 mb-4"},r.default.createElement(c.Card,{className:"sm:rounded-lg border-t-4 border-blue"},r.default.createElement("h3",{className:"text-black mb-4 flex-1 font-light"},"Skills"),r.default.createElement("div",{className:"flex flex-wrap align-start justify-start leading-normal"},u.map(function(e){return r.default.createElement(c.Badge,{color:"green"},e)}),o.map(function(e){return r.default.createElement(c.Badge,{color:"orange"},e)}),s.map(function(e){return r.default.createElement(c.Badge,{color:"purple"},e)}),f.map(function(e){return r.default.createElement(c.Badge,{color:"teal"},e)})))),r.default.createElement(d.Col,{md:"1/3",className:"px-2 mb-4"},r.default.createElement(c.Card,{className:"sm:rounded-lg border-t-4 border-yellow-dark"},r.default.createElement("h3",{className:"text-black mb-4 flex-1 font-light"},"Employment"))))))})}});