(this["webpackJsonpantti-veikkolainen-profile"]=this["webpackJsonpantti-veikkolainen-profile"]||[]).push([[0],{18:function(e,t,s){},23:function(e,t,s){},34:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var i=s(1),c=s.n(i),n=s(4),a=s.n(n),r=(s(23),s(2)),l=(s(34),s(0)),o=function(){return Object(l.jsxs)("div",{className:"responsive-nav",children:[Object(l.jsx)("i",{className:"fa fa-bars",id:"menu-toggle"}),Object(l.jsxs)("div",{id:"menu",className:"menu",children:[Object(l.jsx)("i",{className:"fa fa-times",id:"menu-close"}),Object(l.jsxs)("div",{className:"menu-container",children:[Object(l.jsxs)("div",{className:"container",style:{backgroundColor:"#1c1f20",maxHeight:"calc(100vh - 50px)",overflow:"scroll"},children:[Object(l.jsx)("div",{className:"image",children:Object(l.jsx)(r.Link,{to:"about-me",spy:!0,smooth:!0,children:Object(l.jsx)("img",{src:"assets/images/author-image.jpg",alt:""})})}),Object(l.jsxs)("div",{className:"author-content",children:[Object(l.jsx)("h4",{children:"Antti Veikkolainen"}),Object(l.jsx)("span",{children:"Software Engineer"})]}),Object(l.jsx)("nav",{id:"main-nav",className:"main-nav",role:"navigation",children:Object(l.jsxs)("ul",{className:"main-menu",children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.Link,{to:"aboutme-section",activeClass:"menu-active",spy:!0,smooth:!0,className:"menu-override",children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.Link,{to:"experience-section",activeClass:"menu-active",spy:!0,smooth:!0,className:"menu-override",children:"Experience"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.Link,{to:"myworks-section",activeClass:"menu-active",spy:!0,smooth:!0,className:"menu-override",children:"Projects"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.Link,{to:"education-section",activeClass:"menu-active",spy:!0,smooth:!0,className:"menu-override",children:"Education"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.Link,{to:"contact-section",activeClass:"menu-active",spy:!0,smooth:!0,className:"menu-override",children:"Contact Me"})})]})})]}),Object(l.jsx)("div",{className:"social-network",style:{backgroundColor:"rgb(28, 31, 32)"},children:Object(l.jsxs)("ul",{className:"soial-icons",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"linkedInColor",href:"https://www.linkedin.com/in/anttiveikkolainen/",rel:"noreferrer",target:"_blank",children:Object(l.jsx)("i",{className:"fa fa-linkedin"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"instagramColor",href:"https://www.instagram.com/av3.dev/",rel:"noreferrer",target:"_blank",children:Object(l.jsx)("i",{className:"fa fa-instagram"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"gitHubColor",href:"https://github.com/Av3boy/",rel:"noreferrer",target:"_blank",children:Object(l.jsx)("i",{className:"fa fa-github"})})})]})})]})]})]})},d=s(9),j=function(e,t,s){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(s,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};j.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var s=this,i=200-100*Math.random();this.isDeleting&&(i/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,i=500):(i=this.period,this.isDeleting=!0),setTimeout((function(){s.tick()}),i)};var m=j;function h(){var e=(new Date).getFullYear()-new Date(2e3,8,2).getFullYear();return Math.abs(e)}function b(){var e=(new Date).getFullYear()-new Date(2016,8,7).getFullYear(),t=((new Date).getMonth()-new Date(2016,8,7).getMonth()+12*e)/12-e;return t>.5?Math.abs(e)+".5+":t>.2?Math.abs(e)+"+":Math.abs(e)}s.p,s(36);var x=function(){var e=Object(i.useState)(document.documentElement.clientWidth),t=Object(d.a)(e,2),s=t[0],n=t[1];function a(){return Object(l.jsxs)("ul",{className:"theme-list",children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("b",{children:"From:"})," Jyv\xe4skyl\xe4, Finland"]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("b",{children:"Age:"})," ",h()]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("b",{children:"Studies:"})," CS @ ",Object(l.jsx)("a",{href:"https://www.jamk.fi/fi",children:"JAMK"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("b",{children:"Work:"})," ",Object(l.jsx)("a",{href:"https://www.recastsoftware.com/",children:"Recast Software"})]})]})}function r(){n(document.documentElement.clientWidth)}return c.a.useEffect((function(){var e=document.getElementById("typewritetext");return new m(e,JSON.parse('["Full Stack Developer", "Software Engineer"]'),"2000"),window.addEventListener("resize",r),function(){window.removeEventListener("resize",r)}}),[]),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{id:"aboutme-waypoint"}),Object(l.jsxs)("div",{className:"section-heading about-me-heading",children:[Object(l.jsx)("h2",{children:"About"}),Object(l.jsx)("div",{className:"line-dec"})]}),Object(l.jsx)("div",{className:"left-image-post",children:Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("div",{className:"col-md-5",style:{float:"left",width:"50%",padding:"0 3em 3em 0",zIndex:1},children:Object(l.jsxs)("div",{className:"left-image fade-in-left",children:[Object(l.jsx)("img",{src:"assets/images/about-img.jpg",alt:""}),s>750?Object(l.jsxs)(l.Fragment,{children:[" ",Object(l.jsx)("br",{})," ",Object(l.jsx)("br",{})," ",a()," "]}):Object(l.jsx)(l.Fragment,{})]})}),Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"right-text fade-in-right",children:[Object(l.jsx)("h1",{children:"Antti Veikkolainen"}),Object(l.jsx)("h5",{id:"typewritetext",className:"typewrite",children:Object(l.jsx)("span",{className:"wrap"})}),Object(l.jsxs)("p",{children:[b()," years of experience in Software development with a variety of technologies such as Azure, .NET, React and other Front-End, Back-End technologies."]}),Object(l.jsx)("p",{children:"My career started with the most basic web development and after that I delved into windows desktop software development with .NET Framework. I then expanded my skills with game development using engines such as Unity and Unreal Engine 4. At the start of 2019 I served my mandatory military service where I started VR development using Unreal Engine 4. After my military service I graduted from my Computer Science and highschool dual degree studies. During the worst period of the Covid 19 pandemic I explored the field further and expanded my skill in many fields such as Graphics Development using OpenGL, IOT with arduino, E-commerce using Stripe and more. I brought further my web development knownledge by using technologies such as .NET Core, React, TypeScript and CICD."}),Object(l.jsx)("p",{children:"I am Software Engineering student."}),Object(l.jsx)("p",{children:"Recently I've started writing blogs about technologies I find interesting. My blog site can be found here. (Note: The site is currently down for rewamp)"}),Object(l.jsx)("p",{children:"I want to expand the field with my knownledge and you can see my contributions from my Grepper page. At this time grepper shows that I have helped close to 50000 developers"}),s<=750?a():Object(l.jsx)(l.Fragment,{}),Object(l.jsx)("div",{className:"white-button",children:Object(l.jsx)("button",{onClick:function(){},children:"Download CV"})})]})})]})})]})},u=(s(37),function(e){return Object(l.jsxs)("div",{className:"col-md-6",children:[Object(l.jsx)("img",{src:e.img,style:{width:"100px",height:"100px"}}),Object(l.jsx)("p",{children:e.description})]})}),p=function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"section-heading",style:{padding:0},children:[Object(l.jsx)("h3",{children:"Software development methodologies"}),Object(l.jsx)("div",{className:"line-dec"})]}),Object(l.jsx)("div",{className:"col-md-12",children:Object(l.jsxs)("div",{className:"right-text","data-aos":"fade-left","data-aos-once":!0,children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:["Experienced in ",Object(l.jsx)("a",{href:"https://en.wikipedia.org/wiki/Agile_software_development",children:"Agile"})," and",Object(l.jsx)("a",{href:"https://www.atlassian.com/agile/scrum",children:"Scrum"})," methodology. Work with clients, managers to providing inputs throughout project and coming up with resource requirements, design solutions, development estimates, and so forth and confirm business objectives are met."]}),Object(l.jsx)("p",{children:"During my latest work related project, I became proficient with planning software from design and architectural perspectives. I wrote extensive documentation and improved DTO usage hence making the application more memory efficient."})]})}),Object(l.jsxs)("div",{className:"section-heading skills-heading",children:[Object(l.jsx)("div",{id:"skills-waypoint"}),Object(l.jsx)("h3",{children:"Programming languages"}),Object(l.jsx)("div",{className:"line-dec"})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(u,{img:"".concat(".assets/images/dotnet.svg"),description:Object(l.jsx)("p",{children:"From all the technolgies I'm most proficent with .NET. I started with it and work with projects that are built with it. I have worked with many projects using C#, Entity Framework, .NET Core and others."})}),Object(l.jsx)(u,{img:"".concat(".assets/images/python.svg"),description:Object(l.jsx)("p",{children:"While studying AI, computer vision and other computer learning related technologies Python has been the go to."})}),Object(l.jsx)(u,{img:"".concat(".assets/images/javascript.svg"),description:Object(l.jsx)("p",{children:"This site is built on JavaScript. I have used it since the first day I started learning computer science with the most basic websites. Among JavaScript, Node, TypeScript, NEXT.JS I have created many projects that help me in my daily life."})}),Object(l.jsx)(u,{img:"".concat(".assets/images/cplusplus.svg"),description:Object(l.jsx)("p",{children:"C++ is a fairly new addition to my catalog. I aim to study computer graphics with OpenGL and later expand through parallel programming to CUDA programming and better understand grpahics and related studies."})})]})]})},O=s(3),g=s.n(O),v=s(8),f=(s(39),function(){var e=Object(v.a)(g.a.mark((function e(t){var s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then(w).then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(e){return e.querySelectorAll("item").length})).catch((function(e){return console.log(e),null}));case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());function w(e){if(!e.ok)throw Error(e.status+" - "+e.statusText);return e}var N=function(){var e=Object(i.useState)(25),t=Object(d.a)(e,2),s=(t[0],t[1]);return Object(i.useEffect)((function(){(function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("https://www.c-sharpcorner.com/members/ganesan-c5/rss");case 2:t=e.sent,s(null!==t&&void 0!==t?t:29);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{id:"myworks-waypoint"}),Object(l.jsxs)("div",{className:"section-heading mywork-heading",children:[Object(l.jsx)("h2",{children:"Projects"}),Object(l.jsx)("div",{className:"line-dec"})]}),Object(l.jsxs)("div",{className:"row skills-left-image",children:[Object(l.jsx)("div",{className:"col-md-5",children:Object(l.jsx)("div",{className:"left-image","data-aos":"fade-right","data-aos-once":!0,children:Object(l.jsx)("img",{src:"assets/images/mywork-2.png",alt:""})})}),Object(l.jsx)("div",{className:"col-md-7",children:Object(l.jsx)("div",{className:"right-text","data-aos":"fade-left","data-aos-once":!0,children:Object(l.jsx)("p",{children:"I've worked created various projects from the groud up as well as maintained active projects. I have managed teams as a team leader and acted as a representative."})})})]}),Object(l.jsx)("div",{id:"work-counter-animation",className:"work-counter","data-aos":"fade-right","data-aos-once":!0,children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-lg",children:[Object(l.jsx)("h1",{className:"animateNumber","data-number":"4",children:"0"}),Object(l.jsx)("span",{children:"CLIENTS"})]}),Object(l.jsxs)("div",{className:"col-lg",children:[Object(l.jsx)("h1",{className:"animateNumber","data-number":"7",children:"0"}),Object(l.jsx)("span",{children:"PROJECTS"})]}),Object(l.jsxs)("div",{className:"col-lg",children:[Object(l.jsx)("h1",{className:"animateNumber","data-number":"5",children:"0"}),Object(l.jsx)("span",{children:"TEAMS"})]})]})})}),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col-md-12 mywork-section","data-aos":"fade-left","data-aos-once":!0,children:[Object(l.jsxs)("div",{className:"section-heading mywork-heading",children:[Object(l.jsx)("h2",{children:"Tech Forums"}),Object(l.jsx)("div",{className:"line-dec"})]}),Object(l.jsxs)("ul",{className:"point-list",children:[Object(l.jsx)("li",{style:{display:"list-item"},children:Object(l.jsx)("a",{className:"mywork-link",href:"https://stackoverflow.com/users/12210670/antti-veikkolainen",rel:"noreferrer",target:"_blank",children:Object(l.jsx)("span",{children:"Stackoverflow"})})}),Object(l.jsx)("li",{style:{display:"list-item"},children:Object(l.jsx)("a",{className:"mywork-link",href:"https://docs.microsoft.com/en-us/users/anttiveikkolainen-7739/",rel:"noreferrer",target:"_blank",children:Object(l.jsx)("span",{children:"Microsoft Learn"})})}),Object(l.jsx)("li",{style:{display:"list-item"},children:Object(l.jsx)("a",{className:"mywork-link",href:"https://www.codegrepper.com/profile/antti-veikkolainen",rel:"noreferrer",target:"_blank",children:Object(l.jsx)("span",{children:"Grepper"})})})]})]})})})]})},y=(s(40),function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"section-heading",children:[Object(l.jsx)("h2",{children:"Contact Me"}),Object(l.jsx)("div",{className:"line-dec"})]}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-md-4 mailto-left","data-aos":"fade-right","data-aos-once":!0,children:[Object(l.jsxs)("div",{className:"row",style:{marginBottom:0},children:[Object(l.jsx)("div",{className:"col-md-2 mail-width",children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(l.jsx)("path",{d:"M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"})})}),Object(l.jsx)("div",{className:"col-md-10 mail-width",children:Object(l.jsx)("a",{href:"mailto:antti.veikkolainen00@outlook.com",className:"mailto",children:"Email"})})]}),Object(l.jsxs)("div",{className:"row",style:{marginBottom:0},children:[Object(l.jsx)("div",{className:"col-md-2 mail-width",children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(l.jsx)("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})})}),Object(l.jsx)("div",{className:"col-md-10 mail-width",children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/anttiveikkolainen/",className:"mailto",children:"Linked In"})})]}),Object(l.jsxs)("div",{className:"row",style:{marginBottom:0},children:[Object(l.jsx)("div",{className:"col-md-2 mail-width",children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",children:Object(l.jsx)("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})}),Object(l.jsx)("div",{className:"col-md-10 mail-width",children:Object(l.jsx)("a",{href:"https://github.com/Av3boy",className:"mailto",children:"Github"})})]})]}),Object(l.jsx)("div",{className:"col-md-8","data-aos":"fade-left","data-aos-once":!0,children:Object(l.jsx)("div",{className:"right-content",children:Object(l.jsx)("div",{id:"contact",style:{position:"relative"},children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-md-6",children:Object(l.jsx)("fieldset",{children:Object(l.jsx)("input",{name:"name",type:"text",className:"form-control",id:"name",placeholder:"Your name...",required:""})})}),Object(l.jsx)("div",{className:"col-md-6",children:Object(l.jsx)("fieldset",{children:Object(l.jsx)("input",{name:"email",type:"text",className:"form-control",id:"email",placeholder:"Your email...",required:""})})}),Object(l.jsx)("div",{className:"col-md-12",children:Object(l.jsx)("fieldset",{children:Object(l.jsx)("input",{name:"subject",type:"text",className:"form-control",id:"subject",placeholder:"Subject...",required:""})})}),Object(l.jsx)("div",{className:"col-md-12",children:Object(l.jsx)("fieldset",{children:Object(l.jsx)("textarea",{name:"message",rows:"6",className:"form-control",id:"message",placeholder:"Your message...",required:""})})}),Object(l.jsx)("div",{className:"",style:{position:"absolute",right:0,bottom:0},children:Object(l.jsx)("fieldset",{children:Object(l.jsx)("button",{type:"submit",id:"form-submit",className:"button",onClick:console.log("test"),children:"Send Message"})})})]})})})})]})})]})}),k=(s(41),function(){return Object(l.jsx)("div",{className:"btn-back-to-top",children:Object(l.jsx)("span",{className:"fa fa-arrow-up"})})}),C=(s(18),function(e){return Object(l.jsxs)("li",{"data-aos":"fade-left","data-aos-once":!0,children:[Object(l.jsx)("div",{className:"title",children:e.time}),Object(l.jsxs)("div",{className:"details",children:[Object(l.jsx)("h5",{children:Object(l.jsx)("a",{href:e.companyLink,target:"_blank",rel:"noreferrer",children:e.company})}),Object(l.jsx)("small",{className:"fg-theme",children:e.description}),Object(l.jsx)("ul",{className:"exp-theme-list",children:e.jobtitles.map((function(t){return Object(l.jsxs)("li",{children:[Object(l.jsx)("b",{children:t})," | ",e.time]})}))})]})]})}),S=function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{id:"experience-waypoint"}),Object(l.jsxs)("div",{className:"section-heading experience-heading",children:[Object(l.jsx)("h2",{children:"Experience"}),Object(l.jsx)("div",{className:"line-dec"})]}),Object(l.jsx)(p,{}),Object(l.jsxs)("div",{className:"section-heading skills-heading",children:[Object(l.jsx)("div",{id:"skills-waypoint"}),Object(l.jsx)("h3",{children:"Work experience"}),Object(l.jsx)("div",{className:"line-dec"})]}),Object(l.jsxs)("ul",{className:"timeline mt-4 pr-md-5",children:[Object(l.jsx)(C,{time:"Mar 2022 - Current",company:"Recast Software",companyLink:"https://www.recastsoftware.com/",jobtitles:["Software Engineer"],description:Object(l.jsx)("p",{children:"After Recast Software had acquired Centero Oy, my job is to continue working with Carillon and related products. I have been working with rewamping the project infrastructure and bring new architectural changes to life."})}),Object(l.jsx)(C,{time:"Aug 2020 - Mar 2022",company:"Centero Oy",companyLink:"https://centero.fi/",jobtitles:["Software Developer"],description:Object(l.jsx)("p",{children:"At first, I developed new functionality to the Centero customer portal. After that I started to work on Centero's biggest product, Carillon. My job was to add new functionalities and make existing ones work with Azure Active Directory."})}),Object(l.jsx)(C,{time:"Jan 2019 - Sep 2019",company:"Finnish Defence Forces",companyLink:"https://puolustusvoimat.fi/",jobtitles:["Software Developer"],description:Object(l.jsx)("p",{children:"I served my mandatory military service at H\xe4meenlinna's Armoured Brigade. There my main task was to create a new Attack Simulator and creating a VR simulator for a physical Anti Air Gun."})}),Object(l.jsx)(C,{time:"Jun 2018 - Dec 2018",company:"Movya",companyLink:"https://www.movya.fi/",jobtitles:["Software Developer"],description:Object(l.jsxs)("p",{children:["My main task at Movya was to create a control panel application for downloading, upadating and deleting virtual reality softwares for ",Object(l.jsx)("a",{href:"www.valmet.com",children:"Valmet Oyj"})]})})]})]})},I=function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"section-heading experience-heading",style:{paddingTop:0},children:[Object(l.jsx)("h2",{children:"Education"}),Object(l.jsx)("div",{className:"line-dec"})]}),Object(l.jsxs)("ul",{className:"timeline mt-4 pr-md-5",children:[Object(l.jsx)(C,{time:"Aug 2020 - Current",company:"Jamk",companyLink:"https://www.jamk.fi/fi",jobtitles:["Software Engineer"],description:Object(l.jsx)("p",{children:"Open Computer Science studies at the polytechnical of Jyv\xe4skyl\xe4."})}),Object(l.jsx)(C,{time:"Aug 2016 - Feb 2020",company:"Gradia",companyLink:"https://www.gradia.fi/",jobtitles:["Datanomi","High School"],description:Object(l.jsx)("p",{children:"I graduated from my dual degree studies at the start of 2020. During my studies I attended my mandatory military service. My main studies included .NET development with C#. At high school I studied Maths, Physics, English and Finnish."})})]})]})},E=(s(42),s(43),function(){return Object(i.useEffect)((function(){var e=document.createElement("script");e.src=".assets/js/custom.js",e.async=!0,document.body.appendChild(e),window.AOS.init()}),[]),Object(l.jsxs)("div",{id:"page-wraper",className:"vg-page page-home",style:{backgroundImage:"url(".concat(".assets/images/page-bg.jpg")},children:[Object(l.jsx)(k,{}),Object(l.jsx)(o,{}),Object(l.jsx)("section",{className:"section about-me",id:"aboutme-section",children:Object(l.jsx)(x,{})}),Object(l.jsx)("section",{className:"section",id:"experience-section",children:Object(l.jsx)(S,{})}),Object(l.jsx)("section",{className:"section mywork",id:"myworks-section",children:Object(l.jsx)(N,{})}),Object(l.jsx)("section",{className:"section",id:"education-section",children:Object(l.jsx)(I,{})}),Object(l.jsx)("section",{className:"section contact-me",id:"contact-section",style:{paddingBottom:"2em"},children:Object(l.jsx)(y,{})})]})});s(44);var A=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(E,{})})};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(A,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.6a868c28.chunk.js.map