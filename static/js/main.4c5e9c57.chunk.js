(this["webpackJsonphomework-react1"]=this["webpackJsonphomework-react1"]||[]).push([[0],{14:function(n,e,t){},15:function(n,e,t){},17:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t.n(a),c=t(9),i=t.n(c),u=(t(14),t(15),t(3)),o=t(4),s=t(6),b=t(5),l=t(2),h=t.n(l),j=t(0),m=function(n){var e=n.number,t=n.changeRandomNumber;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Component C"}),Object(j.jsx)("button",{type:"button",onClick:function(){return t(Math.floor(1e3*Math.random()))},className:h.a.btn,children:"Get Random Number"}),Object(j.jsx)("h4",{className:h.a.number,children:e})]})},d=function(n){var e=n.number,t=n.changeRandomNumber;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Component B"}),Object(j.jsx)(m,{number:e,changeRandomNumber:t})]})},O=function(n){var e=n.number,t=n.changeRandomNumber;return Object(j.jsxs)("div",{className:h.a.innerContainer,children:[Object(j.jsx)("h2",{children:"Component A"}),Object(j.jsx)(d,{number:e,changeRandomNumber:t})]})},p=function(n){Object(s.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=e.call.apply(e,[this].concat(r))).state={randomNumber:null},n.changeRandomNumber=function(e){n.setState({randomNumber:e})},n}return Object(o.a)(t,[{key:"render",value:function(){return Object(j.jsx)("div",{className:h.a.container,children:Object(j.jsx)(O,{number:this.state.randomNumber,changeRandomNumber:this.changeRandomNumber})})}}]),t}(a.Component),x=t(7),f=t.n(x),v=function(n){Object(s.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=e.call.apply(e,[this].concat(r))).state={inputValue:""},n.changeInputValue=function(e){n.setState({inputValue:e.target.value})},n.clearInputValue=function(){n.setState({inputValue:""})},n}return Object(o.a)(t,[{key:"render",value:function(){return Object(j.jsx)("div",{className:f.a.container,children:Object(j.jsxs)("div",{className:f.a.innerContainer,children:[Object(j.jsx)("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0442\u0435\u043a\u0441\u0442...",value:this.state.inputValue,onChange:this.changeInputValue,maxLength:25}),this.state.inputValue&&Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:this.state.inputValue}),Object(j.jsx)("button",{className:f.a.btn,onClick:this.clearInputValue,children:"Clear"})]})]})})}}]),t}(a.Component);var g=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(v,{}),Object(j.jsx)(p,{})]})},_=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),a(n),r(n),c(n),i(n)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),_()},2:function(n,e,t){n.exports={container:"Task2_container__1BfCr",innerContainer:"Task2_innerContainer__Ag1VZ",btn:"Task2_btn__olyKl",number:"Task2_number__5drEB"}},7:function(n,e,t){n.exports={container:"Task1_container__3hSXz",innerContainer:"Task1_innerContainer__3bHFZ",btn:"Task1_btn__2w9kN"}}},[[17,1,2]]]);
//# sourceMappingURL=main.4c5e9c57.chunk.js.map