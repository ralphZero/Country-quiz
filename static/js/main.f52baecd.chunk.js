(this["webpackJsonpcountry-quiz-master"]=this["webpackJsonpcountry-quiz-master"]||[]).push([[0],{15:function(t,e,n){t.exports={container:"Question_container__2UBTM",logo:"Question_logo__2S69c"}},2:function(t,e,n){t.exports={container:"Start_container__1ok4d",flexContainer:"Start_flexContainer__2ML__",logo:"Start_logo__1bxp7",logoSlide:"Start_logoSlide__3OQ7e",slideUp:"Start_slideUp__3nlXP",result:"Start_result__rhDPf",scoreText:"Start_scoreText__2G2zZ",resultText:"Start_resultText__3CxL-",score:"Start_score__grmxP",btn:"Start_btn__17BjI",btnNoMargin:"Start_btnNoMargin__WV49V",btnFade:"Start_btnFade__3La1n",fadeDown:"Start_fadeDown__15N2_"}},26:function(t,e,n){t.exports={container:"AnswerItem_container__1vbFJ"}},35:function(t,e,n){},6:function(t,e,n){t.exports={questionContainer:"QuestionItem_questionContainer__XIzZN",answerContainer:"QuestionItem_answerContainer__3GcYF",flag:"QuestionItem_flag__2s_A3",nextContainer:"QuestionItem_nextContainer__1lba4",button:"QuestionItem_button__3-Gx-"}},60:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(0),s=n.n(r),o=n(7),c=n.n(o),i=(n(35),n(8)),l=n(9),u=n(12),d=n(11),h=n(15),p=n.n(h),b=n.p+"static/media/adventure.182b6171.svg",j=n(26),f=n.n(j),g=function(t){var e=t.id,n=t.letter,r=t.text,s=t.onSelected;return Object(a.jsxs)("div",{className:f.a.container+" show","data-eid":e,onClick:function(t){s(t.currentTarget,e)},children:[Object(a.jsx)("span",{children:n}),Object(a.jsx)("span",{children:r})]})},_=n(6),O=n.n(_),m=function(t){var e=t.data,n=t.onCompleted,r=t.onNext;function s(t,a){for(var r=t.parentElement.children,s=t.parentElement.nextSibling.firstChild,o=0;o<r.length;o++){var c=r[o];c.classList.add("no-hover"),c.classList.remove("show")}if(a===parseInt(e.answer)){for(var i=0;i<r.length;i++){var l=r[i];parseInt(l.dataset.eid)===a&&l.classList.add("is-good")}n("success"),s.style.display="block"}else{for(var u=0;u<r.length;u++){var d=r[u];parseInt(d.dataset.eid)===a&&d.classList.add("is-bad"),parseInt(d.dataset.eid)===e.answer&&d.classList.add("is-good")}setTimeout((function(){n("failed")}),1500)}}var o=e.answers.map((function(t,e){return Object(a.jsx)(g,{letter:["A","B","C","D"][e],text:t.name,id:t.id,onSelected:s},t.id)})),c=e.hasFlag?Object(a.jsx)("img",{className:O.a.flag,src:e.question.flag,alt:"flag"}):null,i=e.hasFlag?Object(a.jsx)("span",{children:"Which country does this flag belong to ?"}):Object(a.jsx)("span",{children:e.question.capital+" is the capital of"});return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:O.a.questionContainer,children:[c,i]}),Object(a.jsx)("div",{className:O.a.answerContainer,children:o}),Object(a.jsx)("div",{className:O.a.nextContainer,children:Object(a.jsx)("button",{onClick:function(t){return function(t){for(var e=t.parentElement.previousSibling.children,n=0;n<e.length;n++){var a=e[n];a.classList.remove("no-hover","is-good","is-bad","show"),a.style.display="none"}r(),t.style.display="none";for(var s=0;s<e.length;s++){var o=e[s];o.style.display="flex",o.classList.add("show")}}(t.currentTarget)},style:{display:"none"},className:O.a.button,children:"Next"})})]})},x=n(5),v=function(t){return{type:"UPDATE_STATUS",value:t}},S=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).handleCompleted=function(e){if("success"===e){var n=t.props.score,a=parseInt(n)+1;t.props.updateScore(a)}else t.props.updateStatus(2)},t.handleNext=function(){t.props.generateQuestion()},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:p.a.container,children:[Object(a.jsx)("img",{className:p.a.logo,src:b,alt:"logo"}),Object(a.jsx)(m,{data:this.props.data,onCompleted:this.handleCompleted,onNext:this.handleNext})]})}}]),n}(r.Component),y=Object(x.b)((function(t){return console.log(t),{data:t.currQuestion,score:t.score}}),(function(t){return{updateScore:function(e){t({type:"UPDATE_SCORE",score:e})},updateStatus:function(e){t(v(e))},generateQuestion:function(){t({type:"GENERATE_QUESTION"})}}}))(S),N=n(2),T=n.n(N),C=function(t){var e=t.onStart;return Object(a.jsxs)("div",{className:T.a.container,children:[Object(a.jsx)("img",{className:T.a.logo,src:b,alt:"logo"}),Object(a.jsx)("button",{className:T.a.btn,onClick:function(t){!function(t){var n=t.currentTarget;t.currentTarget.previousElementSibling.classList.add(T.a.logoSlide),n.classList.add(T.a.btnFade),setTimeout((function(){e(1)}),1500)}(t)},children:"Start"})]})},E=n.p+"static/media/background.41dbc550.png",I=n(28),w=n.n(I),A=n.p+"static/media/winners.d76bfdf8.svg",D=function(t){var e=t.result,n=t.onRestart;return console.log(e),Object(a.jsxs)("div",{className:T.a.flexContainer+" show",children:[Object(a.jsx)("img",{src:A,alt:"logo"}),Object(a.jsx)("h1",{className:T.a.result,children:"Results"}),Object(a.jsxs)("div",{className:T.a.resultText,children:[Object(a.jsx)("span",{className:T.a.scoreText,children:"You got "}),Object(a.jsx)("span",{className:T.a.score,children:e}),Object(a.jsx)("span",{className:T.a.scoreText,children:" correct answers"})]}),Object(a.jsx)("button",{className:T.a.btn+" "+T.a.btnNoMargin,onClick:function(t){!function(t){var e=t.currentTarget;t.currentTarget.previousElementSibling.classList.add(T.a.logoSlide),e.classList.add(T.a.btnFade),setTimeout((function(){n(1)}),1500)}(t)},children:"Try again"})]})},Q=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).handleOnStart=function(e){t.props.changeStatus(e)},t.handleRestart=function(){t.props.resetQuiz(0,1)},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=new Image;t.src=E,t.onload=function(e){document.querySelector("#root").style.backgroundImage=t.src},null===localStorage.getItem("data")?(w.a.get("https://restcountries.eu/rest/v2/all?fields=name;capital;flag").then((function(t){localStorage.setItem("data",JSON.stringify(t.data))})),this.props.addData(JSON.parse(localStorage.getItem("data")))):this.props.addData(JSON.parse(localStorage.getItem("data")))}},{key:"render",value:function(){var t=1===this.props.started?Object(a.jsx)(y,{}):0===this.props.started?Object(a.jsx)(C,{onStart:this.handleOnStart}):Object(a.jsx)(D,{result:this.props.score,onRestart:this.handleRestart});return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("span",{style:{height:10}}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{children:"country quiz"}),t]}),Object(a.jsx)("footer",{children:"Ralph Placide @ Devchallenges.io"})]})}}]),n}(r.Component),L=Object(x.b)((function(t){return{started:t.started,currQuestion:t.currQuestion,score:t.score}}),(function(t){return{addData:function(e){t(function(t){return{type:"ADD_DATA",data:t}}(e)),t({type:"GENERATE_QUESTION"})},changeStatus:function(e){t(v(e))},resetQuiz:function(e,n){t(function(t){return{type:"RESET_SCORE",score:t}}(e)),t(v(n))}}}))(Q),M=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),s(t),o(t)}))},R=n(10),F=n(4),k=n(29),U={started:0,data:[],currQuestion:null,score:0};function q(t){for(var e=[],n=Object(k.a)(t.data),a=0;a<5;a++){var r=Math.floor(Math.random()*n.length-5),s=n.splice(r,1)[0];if(""===s.capital){var o=Math.floor(Math.random()*n.length-5);s=n.splice(o,1)[0]}s.id=a,e.push(s)}var c=[].concat(e),i=c.slice(1,2),l=function(t){for(var e,n,a=t.length;0<a;)n=Math.floor(Math.random()*a),e=t[a-=1],t[a]=t[n],t[n]=e;return t}(c.slice(1,c.length)),u=Math.floor(10*Math.random())%2!==0;return{answer:i[0].id,question:i[0],answers:l,hasFlag:u}}var P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;return"ADD_DATA"===e.type?Object(F.a)(Object(F.a)({},t),{},{data:e.data}):"UPDATE_STATUS"===e.type?Object(F.a)(Object(F.a)({},t),{},{started:e.value}):"GENERATE_QUESTION"===e.type?Object(F.a)(Object(F.a)({},t),{},{currQuestion:q(t)}):"UPDATE_SCORE"===e.type||"RESET_SCORE"===e.type?Object(F.a)(Object(F.a)({},t),{},{score:e.score}):t},z=Object(R.b)(P);c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(x.a,{store:z,children:Object(a.jsx)(L,{})})}),document.getElementById("root")),M()}},[[60,1,2]]]);
//# sourceMappingURL=main.f52baecd.chunk.js.map