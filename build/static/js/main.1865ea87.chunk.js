(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{24:function(e,t,n){e.exports={Drawer:"Drawer_Drawer__k9oZ1",close:"Drawer_close__157sK",active:"Drawer_active__2oACK"}},27:function(e,t,n){e.exports={MenuToggle:"MenuToggle_MenuToggle__21_pH",open:"MenuToggle_open__3GTM9"}},30:function(e,t,n){e.exports={Quiz:"Quiz_Quiz__2THIz",QuizWrapper:"Quiz_QuizWrapper__2wTef"}},31:function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__Dpsgu",Question:"ActiveQuiz_Question__18iOr"}},32:function(e,t,n){e.exports={AnswerItem:"AnswerItem_AnswerItem__3PJVi",success:"AnswerItem_success__30eEE",error:"AnswerItem_error___hrWf"}},33:function(e,t,n){e.exports={FinishedQuiz:"FinishedQuiz_FinishedQuiz__D-CkC",success:"FinishedQuiz_success__jBBc5",error:"FinishedQuiz_error__KSdom"}},34:function(e,t,n){e.exports={Button:"Button_Button__3gFiX",error:"Button_error__2nDvg",success:"Button_success__cnhtV",primary:"Button_primary__28VL_"}},35:function(e,t,n){e.exports={Loader:"Loader_Loader__3cxM3","lds-roller":"Loader_lds-roller__3wpSi"}},36:function(e,t,n){e.exports={QuizList:"QuizList_QuizList__EsJjC",info:"QuizList_info__3LJU_"}},37:function(e,t,n){e.exports={Input:"Input_Input__SNRl4",invalid:"Input_invalid__1ZOur"}},38:function(e,t,n){e.exports={QuizCreator:"QuizCreator_QuizCreator__2CeNk",info:"QuizCreator_info__dZ-uy"}},39:function(e,t,n){e.exports={Auth:"Auth_Auth__7JmWy",AuthForm:"Auth_AuthForm__2fbR6"}},48:function(e,t,n){e.exports={Layout:"Layout_Layout__2BpO9"}},49:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},51:function(e,t,n){e.exports={AnswersList:"AnswersList_AnswersList__EwYQd"}},52:function(e,t,n){e.exports={Select:"Select_Select__26ooE"}},59:function(e,t,n){},60:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(21),i=n.n(s),o=(n(59),n(5)),c=n(6),u=n(8),l=n(7),d=(n(60),n(48)),h=n.n(d),j=n(27),p=n.n(j),b=n(0),f=function(e){var t=[p.a.MenuToggle,"fa"];return e.isOpen?(t.push("fa-times"),t.push(p.a.open)):t.push("fa-bars"),Object(b.jsx)("i",{className:t.join(" "),onClick:e.onToggle})},v=n(24),O=n.n(v),m=n(49),x=n.n(m),g=function(e){return Object(b.jsx)("div",{className:x.a.Backdrop,onClick:e.onClick})},_=n(16),w=n(9),C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).clickHandler=function(){e.props.closeMenuHandler()},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=[{to:"/",label:"\u0421\u043f\u0438\u0441\u043e\u043a",exact:!0},{to:"/auth",label:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",exact:!0}];this.props.isAuthenticate&&(t=[{to:"/quiz-creator",label:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442",exact:!0},{to:"/",label:"\u0421\u043f\u0438\u0441\u043e\u043a",exact:!0},{to:"/logout",label:"\u0412\u044b\u0439\u0442\u0438",exact:!0}]);var n=[O.a.Drawer];return this.props.isOpen||n.push(O.a.close),Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)("nav",{className:n.join(" "),children:Object(b.jsx)("ul",{children:t.map((function(t,n){return Object(b.jsx)("li",{children:Object(b.jsx)(_.c,{to:t.to,exact:t.exact,onClick:e.clickHandler,activeClassName:O.a.active,children:t.label})},n)}))})}),this.props.isOpen?Object(b.jsx)(g,{onClick:this.props.closeMenuHandler}):null]})}}]),n}(a.a.Component);var z=Object(w.b)((function(e){return{isAuthenticate:!!e.auth.token}}))(C),y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={menu:!1},e.toggleHandler=function(){e.setState({menu:!e.state.menu})},e.closeMenuHandler=function(){e.setState({menu:!1})},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:h.a.Layout,children:[Object(b.jsx)(z,{isOpen:this.state.menu,closeMenuHandler:this.closeMenuHandler}),Object(b.jsx)(f,{onToggle:this.toggleHandler,isOpen:this.state.menu}),Object(b.jsx)("main",{children:this.props.children})]})}}]),n}(a.a.Component),k=n(30),q=n.n(k),A=n(31),S=n.n(A),Q=n(51),I=n.n(Q),N=n(32),T=n.n(N),E=function(e){var t=[T.a.AnswerItem];return null!==e.state&&t.push(T.a[e.state]),Object(b.jsx)("li",{className:t.join(" "),onClick:function(){e.onAnswerClick(e.answer.id)},children:e.answer.text})},F=function(e){return Object(b.jsx)("ul",{className:I.a.AnswersList,children:e.answers.map((function(t,n){return Object(b.jsx)(E,{answer:t,onAnswerClick:e.onAnswerClick,state:e.state?e.state[t.id]:null},n)}))})},H=function(e){return Object(b.jsxs)("div",{className:S.a.ActiveQuiz,children:[Object(b.jsxs)("p",{className:S.a.Question,children:[Object(b.jsxs)("span",{children:[Object(b.jsxs)("strong",{children:[e.answerNumber,"."]}),"\xa0",e.question]}),Object(b.jsxs)("small",{children:[e.answerNumber," \u0438\u0437 ",e.quizLength]})]}),Object(b.jsx)(F,{answers:e.answers,onAnswerClick:e.onAnswerClick,state:e.state})]})},L=n(33),D=n.n(L),M=n(34),B=n.n(M),U=function(e){var t=[B.a.Button,B.a[e.type]];return Object(b.jsx)("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled,children:e.children})},V=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.results).reduce((function(t,n){return"success"===e.props.results[n]&&t++,t}),0);return Object(b.jsxs)("div",{className:D.a.FinishedQuiz,children:[Object(b.jsx)("h1",{children:"Finished"}),Object(b.jsx)("ul",{children:this.props.quiz.map((function(t,n){var r=["fa","error"===e.props.results[t.id]?"fa-times":"fa-check",D.a[e.props.results[t.id]]];return Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:n+1}),".\xa0",t.question,Object(b.jsx)("i",{className:r.join(" ")})]},n)}))}),Object(b.jsxs)("p",{children:["\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e ",t," \u0438\u0437 ",this.props.quiz.length]}),Object(b.jsx)(U,{onClick:this.props.retryHandler,type:"primary",children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"}),Object(b.jsx)(_.b,{to:"/",children:Object(b.jsx)(U,{type:"success",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0441\u043f\u0438\u0441\u043a\u0443 \u0442\u0435\u0441\u0442\u043e\u0432"})})]})}}]),n}(a.a.Component),R=n(35),Z=n.n(R),W=function(e){return Object(b.jsx)("div",{className:Z.a.Loader,children:Object(b.jsxs)("div",{className:Z.a["lds-roller"],children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})})},J=n(15),P=n.n(J),X=n(17),G=n(22),K=n.n(G),Y=K.a.create({baseURL:"https://react-quiz-54cb1-default-rtdb.europe-west1.firebasedatabase.app/"}),$="FETCH-QUIZES-START",ee="FETCH-QUIZES-SUCCESS",te="FETCH-QUIZES-ERROR",ne="FETCH-QUIZ-BY-ID-SUCCESS",re="RETRY-HANDLER",ae="SET-ANSWER-STATE-AND-RESULTS",se="SET-IS-FINISHED",ie="NEXT-QUESTION",oe="TO-QUIZ-BEGINNING",ce="ADD-QUESTION",ue="AUTH-SUCCESS",le="AUTH-LOGOUT",de="CHANGE-ANSWERS-COUNT";function he(e){return function(t,n){var r=n().quiz;if(r.answerState){var a=Object.keys(r.answerState)[0];if("success"===r.answerState[a])return}var s=r.quiz[r.activeQuestion],i=r.results;if(s.rightAnswerId===e){i[s.id]||(i[s.id]="success"),t(ve(e,"success",i));var o=window.setTimeout((function(){r.activeQuestion+1===r.quiz.length?t({type:se,value:!0}):t(function(e){return{type:ie,value:e}}(r.activeQuestion+1)),window.clearTimeout(o)}),1e3)}else i[s.id]="error",t(ve(e,"error",i))}}function je(){return{type:$}}function pe(e){return{type:ee,quizes:e}}function be(e){return{type:ne,quiz:e}}function fe(e){return{type:te,error:e}}function ve(e,t,n){return{type:ae,answerId:e,value:t,results:n}}var Oe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"isQuizFinished",value:function(){return this.props.activeQuestion+1===this.props.quiz.length}},{key:"componentDidMount",value:function(){this.props.fetchQuizById(this.props.match.params.id)}},{key:"componentWillUnmount",value:function(){this.props.retryHandler()}},{key:"render",value:function(){return Object(b.jsx)("div",{className:q.a.Quiz,children:Object(b.jsx)("div",{className:q.a.QuizWrapper,children:this.props.loading||0===this.props.quiz.length?Object(b.jsx)(W,{}):this.props.isFinished?Object(b.jsx)(V,{results:this.props.results,quiz:this.props.quiz,retryHandler:this.props.retryHandler}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"\u041e\u0442\u0432\u0435\u0442\u044c\u0442\u0435 \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"}),Object(b.jsx)(H,{answers:this.props.quiz[this.props.activeQuestion].answers,question:this.props.quiz[this.props.activeQuestion].question,onAnswerClick:this.props.answerClickHandler,quizLength:this.props.quiz.length,answerNumber:this.props.activeQuestion+1,state:this.props.answerState})]})})})}}]),n}(a.a.Component);var me=Object(w.b)((function(e){return{activeQuestion:e.quiz.activeQuestion,answerState:e.quiz.answerState,isFinished:e.quiz.isFinished,results:e.quiz.results,quiz:e.quiz.quiz,loading:e.quiz.loading}}),(function(e){return{fetchQuizById:function(t){return e((n=t,function(){var e=Object(X.a)(P.a.mark((function e(t){var r,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(je()),e.prev=1,e.next=4,Y.get("/quizes/".concat(n,".json"));case 4:r=e.sent,a=r.data,t(be(a)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),t(fe(e.t0)),console.log(e.t0);case 13:case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()));var n},retryHandler:function(){return e({type:re})},answerClickHandler:function(t){return e(he(t))}}}))(Oe),xe=n(36),ge=n.n(xe),_e=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"renderQuizList",value:function(){return this.props.quizes.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(_.c,{to:"/quiz/"+e.id,children:e.name})},e.id)}))}},{key:"componentDidMount",value:function(){this.props.fetchQuizes()}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:ge.a.QuizList,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"}),this.props.loading&&0===this.props.quizes.length?Object(b.jsx)(W,{}):Object(b.jsx)("ul",{children:this.renderQuizList()})]}),this.props.isAuth?null:Object(b.jsx)("div",{className:ge.a.info,children:Object(b.jsx)("p",{children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0442\u0435\u0441\u0442"})})]})}}]),n}(a.a.Component),we=Object(w.b)((function(e){return console.log(e),{quizes:e.quiz.quizes,loading:e.quiz.loading,isAuth:!!e.auth.token}}),(function(e){return{fetchQuizes:function(){return e(function(){var e=Object(X.a)(P.a.mark((function e(t){var n,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(je()),e.prev=1,e.next=4,Y.get("/quizes.json");case 4:n=e.sent,r=[],Object.keys(n.data).forEach((function(e,t){r.push({id:e,name:"\u0422\u0435\u0441\u0442 \u2116".concat(t+1)})})),t(pe(r)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),t(fe(e.t0)),console.log(e.t0);case 14:case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())}}}))(_e),Ce=n(2),ze=n(37),ye=n.n(ze);function ke(e){var t=e.valid,n=e.shouldValidate,r=e.touched;return!t&&n&&r}var qe=function(e){var t=[ye.a.Input],n=e.type||"text",r="".concat(n,"-").concat(Math.random());return ke(e)&&t.push(ye.a.invalid),Object(b.jsxs)("div",{className:t.join(" "),children:[Object(b.jsx)("label",{htmlFor:r,children:e.label}),Object(b.jsx)("input",{type:n,id:r,value:e.value,onChange:e.onChange}),ke(e)?Object(b.jsx)("span",{children:e.errorMessage}):null]})},Ae=n(38),Se=n.n(Ae);function Qe(e,t){return Object(Ce.a)(Object(Ce.a)({},e),{},{validation:Object(Ce.a)({},t),valid:!t,shouldValidate:!!t,touched:!1,value:""})}function Ie(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),n}function Ne(e){var t=!0;for(var n in e)e.hasOwnProperty(n)&&(t=e[n].valid&&t);return t}var Te=function(e){return e.children},Ee=n(52),Fe=n.n(Ee),He=function(e){var t="".concat(e.label,"-").concat(Math.random());return Object(b.jsxs)("div",{className:Fe.a.Select,children:[Object(b.jsx)("label",{htmlFor:t,children:e.label}),Object(b.jsx)("select",{id:t,value:e.value,onChange:e.onChange,children:e.options.map((function(e,t){return Object(b.jsx)("option",{value:e.value,children:e.text},e.value+t)}))})]})};function Le(e){for(var t,n={question:Qe({label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0432\u043e\u043f\u0440\u043e\u0441\u0430",errorMessage:"invalid question text"},{required:!0})},r=1;r<=e;r++)n["option".concat(r)]=Qe({label:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 ".concat(t=r),errorMessage:"Invalid answer text",id:t},{required:!0});return n}var De=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={isFormValid:!1,rightAnswerId:1,answersCount:4,formControlls:Le(e.answersCount||4)},e.onSubmitHandler=function(e){e.preventDefault()},e.createQuestionHandler=function(t){t.preventDefault();var n={id:e.props.quiz.length+1,rightAnswerId:e.state.rightAnswerId,answers:[]};Object.keys(e.state.formControlls).forEach((function(t){"question"===t?n[t]=e.state.formControlls[t].value:n.answers.push({text:e.state.formControlls[t].value,id:e.state.formControlls[t].id})})),e.props.addQuestion(n),e.setState({isFormValid:!1,rightAnswerId:1,formControlls:Le(e.state.answersCount)})},e.createQuizHandler=function(t){t.preventDefault(),e.props.addQuiz(),e.setState({isFormValid:!1,rightAnswerId:1,formControlls:Le(e.state.answersCount)})},e.changeInputHandler=function(t,n){var r=Object(Ce.a)({},e.state.formControlls),a=Object(Ce.a)({},r[n]);a.value=t.target.value,a.touched=!0,a.valid=Ie(a.value,a.validation),r[n]=a,e.setState({formControlls:r,isFormValid:Ne(r)})},e.changeRightAnswer=function(t){e.setState({rightAnswerId:Number(t.target.value)})},e.changeAnswersCount=function(t){e.setState({answersCount:t.target.value,formControlls:Le(t.target.value)})},e}return Object(c.a)(n,[{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControlls).map((function(t,n){var r=e.state.formControlls[t];return Object(b.jsxs)(Te,{children:[Object(b.jsx)(qe,{value:r.value,label:r.label,shouldValidate:!!r.validation,touched:r.touched,errorMessage:r.errorMessage,valid:r.valid,onChange:function(n){return e.changeInputHandler(n,t)}}),0===n?Object(b.jsx)("hr",{}):null]},n)}))}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:Se.a.QuizCreator,children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"QuizCreator"}),Object(b.jsxs)("form",{onSubmit:function(t){return e.onSubmitHandler(t)},children:[this.renderInputs(),Object(b.jsx)(He,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0442\u0432\u0435\u0442\u043e\u0432",value:e.state.answersCount,onChange:function(t){return e.changeAnswersCount(t)},options:[{text:2,value:2},{text:3,value:3},{text:4,value:4}]}),function(){for(var t=[],n=1;n<=e.state.answersCount;n++)t.push({text:n,value:n});return Object(b.jsx)(He,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442",value:e.state.rightAnswerId,onChange:function(t){return e.changeRightAnswer(t)},options:t})}(),Object(b.jsx)(U,{type:"primary",onClick:function(t){return e.createQuestionHandler(t)},disabled:!this.state.isFormValid,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"}),Object(b.jsx)(U,{type:"success",onClick:function(t){return e.createQuizHandler(t)},disabled:0===this.props.quiz.length,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442"})]}),this.state.isFormValid?Object(b.jsx)("div",{className:Se.a.info,children:Object(b.jsx)("p",{children:'\u041d\u0430\u0436\u043c\u0438\u0442\u0435 "\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441", \u043f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442!'})}):null]})})}}]),n}(a.a.Component);var Me=Object(w.b)((function(e){return{quiz:e.create.quiz}}),(function(e){return{addQuestion:function(t){return e(function(e){return{type:ce,item:e}}(t))},addQuiz:function(){return e(function(){var e=Object(X.a)(P.a.mark((function e(t,n){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.post("/quizes.json",n().create.quiz);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}}}))(De),Be=n(39),Ue=n.n(Be);function Ve(e){return{type:ue,token:e}}function Re(e){return function(t){setTimeout((function(){t(Ze)}),e)}}function Ze(){return{type:le}}function We(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}var Je=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={isFormValid:!1,formControlls:{email:{value:"",type:"email",label:"Email",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email",valid:!1,touched:!1,validation:{required:!0,email:!0}},password:{value:"",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",valid:!1,touched:!1,validation:{required:!0,minLength:6}}}},e.loginHenadler=function(){e.props.auth(e.state.formControlls.email.value,e.state.formControlls.password.value,!0)},e.registerHenadler=function(){e.props.auth(e.state.formControlls.email.value,e.state.formControlls.password.value,!1)},e.submitHandler=function(e){e.preventDefault()},e.validateControl=function(e,t){if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),t.email&&(n=We(e)),t.minLength&&(n=e.length>=6&&n),n},e.onChangeHandler=function(t,n){var r=Object(Ce.a)({},e.state.formControlls),a=Object(Ce.a)({},r[n]);a.value=t.target.value,a.touched=!0,a.valid=e.validateControl(a.value,a.validation),r[n]=a;var s=!0;Object.keys(r).forEach((function(e){s=r[e].valid&&s})),e.setState({formControlls:r,isFormValid:s})},e}return Object(c.a)(n,[{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControlls).map((function(t,n){var r=e.state.formControlls[t];return Object(b.jsx)(qe,{type:r.type,value:r.value,label:r.label,errorMessage:r.errorMessage,valid:r.valid,shouldValidate:!!r.validation,touched:r.touched,onChange:function(n){return e.onChangeHandler(n,t)}},t+n)}))}},{key:"render",value:function(){return Object(b.jsx)("div",{className:Ue.a.Auth,children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Auth"}),Object(b.jsxs)("form",{className:Ue.a.AuthForm,onSubmit:this.submitHandler,children:[this.renderInputs(),Object(b.jsx)(U,{type:"success",onClick:this.loginHenadler,disabled:!this.state.isFormValid,children:"\u0412\u043e\u0439\u0442\u0438"}),Object(b.jsx)(U,{type:"primary",onClick:this.registerHenadler,disabled:!this.state.isFormValid,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})})}}]),n}(a.a.Component);var Pe=Object(w.b)(null,(function(e){return{auth:function(t,n,r){return e(function(e,t,n){return function(){var r=Object(X.a)(P.a.mark((function r(a){var s,i,o,c,u;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat(s="AIzaSyA6nJFe_boANAFY1gFjZTqZeBewLqeaVaA"),n&&(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(s)),r.prev=4,o={email:e,password:t,returnSecureToken:!0},r.next=8,K.a.post(i,o);case 8:c=r.sent,u=c.data,console.log(u),localStorage.setItem("token",u.idToken),localStorage.setItem("localId",u.localId),localStorage.setItem("expirationDate",new Date((new Date).getTime+1e3*u.expiresIn)),a(Ve(u.idToken)),a(Re(1e3*u.expiresIn)),r.next=22;break;case 18:r.prev=18,r.t0=r.catch(4),alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"),console.log(r.t0);case 22:case 23:case"end":return r.stop()}}),r,null,[[4,18]])})));return function(e){return r.apply(this,arguments)}}()}(t,n,r))}}}))(Je),Xe=n(4),Ge=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.logout()}},{key:"render",value:function(){return Object(b.jsx)(Xe.a,{to:"/"})}}]),n}(r.Component);var Ke=Object(w.b)(null,(function(e){return{logout:function(){return e(Ze())}}}))(Ge),Ye=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.autoLogin()}},{key:"render",value:function(){var e=Object(b.jsxs)(Xe.d,{children:[Object(b.jsx)(Xe.b,{path:"/auth",component:Pe}),Object(b.jsx)(Xe.b,{path:"/quiz/:id",component:me}),Object(b.jsx)(Xe.b,{path:"/",exact:!0,component:we})]});return this.props.isAuthenticate&&(e=Object(b.jsxs)(Xe.d,{children:[Object(b.jsx)(Xe.b,{path:"/quiz-creator",component:Me}),Object(b.jsx)(Xe.b,{path:"/quiz/:id",component:me}),Object(b.jsx)(Xe.b,{path:"/",exact:!0,component:we}),Object(b.jsx)(Xe.b,{path:"/logout",component:Ke}),Object(b.jsx)(Xe.a,{to:"/"})]})),Object(b.jsx)(y,{children:e})}}]),n}(r.Component);var $e=Object(w.b)((function(e){return{isAuthenticate:!!e.auth.token}}),(function(e){return{autoLogin:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));n<=new Date?e(Ze()):(e(Ve(t)),e(Re(n.getTime()-(new Date).getTime())))}else e(Ze())}))}}}))(Ye),et=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))},tt=n(19),nt=n(53),rt=n(23),at={quizes:[],loading:!0,error:null,activeQuestion:0,answerState:null,isFinished:!1,results:{},quiz:[]},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!0});case ee:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!1,quizes:t.quizes});case te:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!1,error:t.error});case ne:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!1,quiz:t.quiz});case re:return Object(Ce.a)(Object(Ce.a)({},e),{},{activeQuestion:0,answerState:null,isFinished:!1,results:{}});case ae:return Object(Ce.a)(Object(Ce.a)({},e),{},{answerState:Object(rt.a)({},t.answerId,t.value),results:t.results});case se:return Object(Ce.a)(Object(Ce.a)({},e),{},{isFinished:t.value});case ie:return Object(Ce.a)(Object(Ce.a)({},e),{},{activeQuestion:t.value,answerState:null});case oe:return Object(Ce.a)({},e);default:return e}},it=n(54),ot={quiz:[]},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return Object(Ce.a)(Object(Ce.a)({},e),{},{quiz:[].concat(Object(it.a)(e.quiz),[t.item])});case de:return Object(Ce.a)(Object(Ce.a)({},e),{},{answersCount:t.count});default:return e}},ut={token:null},lt=Object(tt.b)({quiz:st,create:ct,auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:return Object(Ce.a)(Object(Ce.a)({},e),{},{token:t.token});case le:return Object(Ce.a)(Object(Ce.a)({},e),{},{token:null});default:return e}}}),dt="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):tt.c,ht=Object(tt.d)(lt,dt(Object(tt.a)(nt.a))),jt=Object(b.jsx)(w.a,{store:ht,children:Object(b.jsx)(_.a,{children:Object(b.jsx)($e,{})})});i.a.render(jt,document.getElementById("root")),et()}},[[90,1,2]]]);
//# sourceMappingURL=main.1865ea87.chunk.js.map