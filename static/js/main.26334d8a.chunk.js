(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{186:function(e,t){},193:function(e,t){},217:function(e,t){},5710:function(e,t,n){e.exports=n(6269)},5715:function(e,t,n){},6150:function(e,t,n){},6172:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},6173:function(e,t){},6269:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(133),c=n.n(o),i=(n(5715),n(44)),l=n(55),s=n(57),u=n(56),m=n(58),p=n(255),d=n.n(p),h=n(64),f=n.n(h),w=n(257),v=n(134),g=n.n(v),b=n(486),y=n(63),E=n.n(y),k=n(45),O=n(6286),j=n(6288),I=(n(6148),n(6150),n(25)),_=n.n(I),A=n(51),T={aws_appsync_graphqlEndpoint:"https://axlvk4nfzbf5fnfmpqo37uzdey.appsync-api.ap-northeast-2.amazonaws.com/graphql",aws_appsync_region:"ap-northeast-2",aws_appsync_authenticationType:"AMAZON_COGNITO_USER_POOLS",aws_appsync_apiKey:"null"},C=new g.a({url:T.aws_appsync_graphqlEndpoint,region:T.aws_appsync_region,auth:{type:T.aws_appsync_authenticationType,apiKey:T.apiKey,jwtToken:function(){var e=Object(A.a)(_.a.mark(function e(){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.Auth.currentSession();case 2:return e.abrupt("return",e.sent.getIdToken().getJwtToken());case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}}),S=window.chrome,x=window.location.origin;S&&S.identity&&(x=S.identity.getRedirectURL());var U={Auth:{identityPoolId:"ap-northeast-2:f7fdd6bf-dc3f-40a2-99f4-56351072c3bf",region:"ap-northeast-2",identityPoolRegion:"ap-northeast-2",userPoolId:"ap-northeast-2_dOcKtjnwU",userPoolWebClientId:"5qbr4et22vf5pb8m5k0j7kp9u7",mandatorySignIn:!0,authenticationFlowType:"USER_SRP_AUTH",oauth:{domain:"ezmote.auth.ap-northeast-2.amazoncognito.com",scope:["email","openid","aws.cognito.signin.user.admin","profile"],redirectSignIn:x,redirectSignOut:x,responseType:"code",options:{AdvancedSecurityDataCollectionFlag:!0}}}},N=n(6287),B=n(135),P=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_SHOW_DEBUG,D=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_SHOW_DEBUG_TOAST,R=(new function e(){Object(i.a)(this,e),this.info=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];P&&console.log.apply(console,t),D&&Object(B.toast)(JSON.stringify(t))},this.log=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];P&&console.log.apply(console,t),D&&Object(B.toast)(JSON.stringify(t))},this.debug=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];P&&console.log.apply(console,t),D&&Object(B.toast)(JSON.stringify(t))}},r.a.createElement(B.ToastContainer,{autoClose:3e3,hideProgressBar:!0})),W=window.chrome,F=(a.Component,n(492),n(47)),L=n.n(F),M="mutation Command($command: String!, $amount: Float) {\n  command(command: $command, amount: $amount) {\n    id\n    userId\n    createdAt\n    updatedAt\n    title\n    url\n    state\n    timestamp\n    command\n    amount\n  }\n}\n",q="query GetWatch {\n  getWatch {\n    id\n    userId\n    createdAt\n    updatedAt\n    title\n    url\n    state\n    timestamp\n    command\n    amount\n  }\n}\n",z=(n(6171),n(256)),H=n(6285);function J(e){var t="";return(e=Math.floor(e))>3600&&(t+=Math.floor(e/60/60)+":"),t+=Math.floor(e/60)+":",t+=E.a.padStart(e%60,2,"0")}var G=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).setInterval=function(e){n.clearInterval(),n.intervalId=setInterval(e,1e3)},n.clearInterval=function(){n.intervalId&&clearInterval(n.intervalId),n.intervalId=null},n.handleClickBackward=Object(A.a)(_.a.mark(function e(){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.client.mutate({mutation:L()(M),variables:{command:"backward",amount:5}});case 2:case"end":return e.stop()}},e,this)})),n.handleClickForward=Object(A.a)(_.a.mark(function e(){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.client.mutate({mutation:L()(M),variables:{command:"forward",amount:5}});case 2:case"end":return e.stop()}},e,this)})),n.handleClickNext=Object(A.a)(_.a.mark(function e(){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.client.mutate({mutation:L()(M),variables:{command:"next",amount:1}});case 2:case"end":return e.stop()}},e,this)})),n.state={watch:e.watch},n.setupTimer(),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.props.watch.updatedAt!==t.watch.updatedAt&&(console.log("componentDidUpdate:",this.props.watch),this.setState({watch:this.props.watch}),this.clearInterval(),this.setupTimer())}},{key:"componentWillUnmount",value:function(){this.clearInterval()}},{key:"setupTimer",value:function(){var e=this,t=this.state.watch;"playing"===t.state||"willplay"===t.state?this.setInterval(function(){e.state.watch.timestamp+=1,e.setState({watch:e.state.watch})}):this.clearInterval()}},{key:"render",value:function(){var e=this.state.watch;return e&&r.a.createElement(H.a,null,r.a.createElement(H.a,null,r.a.createElement("h4",null,"Watching: ",e.title," (",e.state,") ",J(e.timestamp))),r.a.createElement(H.a,null,r.a.createElement(N.a,{onClick:this.handleClickBackward},"backward"),r.a.createElement(N.a,{onClick:this.handleClickForward},"forward"),r.a.createElement(N.a,{onClick:this.handleClickNext},"next")))}}]),t}(a.Component),K=(a.Component,n(6172),n(6173),n(495)),V=n(76),$=n.n(V),Q=n(77),Z=n(99),X=n.n(Z),Y=n(178),ee=n.n(Y),te=n(6247);function ne(e,t,n){return E.a.chain(n).keyBy().mapValues(function(n){if(!e||e[n]!==t[n])return t[n]}).omitBy(E.a.isNil).value()}var ae=["currentTime"],re=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state=Object(K.a)({},ne(null,n.props,ae)),n.handleClose=function(){n.setState({open:!1})},n.handleClick=function(){n.setState({open:!0})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){this.setState(ne(this.state,this.props,ae))}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.totalTime,a=e.title,o=this.state.currentTime;return r.a.createElement("div",{className:t.root},r.a.createElement($.a,{container:!0},r.a.createElement($.a,{item:!0}),r.a.createElement($.a,{item:!0,container:!0,direction:"column"},r.a.createElement($.a,{item:!0},r.a.createElement(X.a,{onClick:this.props.onBackward},r.a.createElement(Q.b,null)),r.a.createElement(X.a,null,this.sttoped?r.a.createElement(Q.e,{fontSize:"large"}):r.a.createElement(Q.d,{fontSize:"large"})),r.a.createElement(X.a,null,r.a.createElement(Q.a,null))),r.a.createElement($.a,{item:!0},r.a.createElement(X.a,null,r.a.createElement(Q.g,null)),r.a.createElement(X.a,null,r.a.createElement(Q.f,null)))),r.a.createElement($.a,{container:!0,item:!0},r.a.createElement($.a,{item:!0,container:!0},r.a.createElement(ee.a,{variant:"subtitle2"},J(o)),r.a.createElement(ee.a,{variant:"subtitle2"},J(n)),r.a.createElement(X.a,null,r.a.createElement(Q.c,null))))),r.a.createElement(ee.a,{variant:"subtitle1"},a))}},{key:"sttoped",get:function(){return"paused"===this.props.state}}]),t}(a.PureComponent),oe=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).setInterval=function(e){n.clearInterval(),n.intervalId=setInterval(e,1e3)},n.clearInterval=function(){n.intervalId&&clearInterval(n.intervalId),n.intervalId=null},n.handleBackward=Object(A.a)(_.a.mark(function e(){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(n.command),n.command({variables:{command:"backward",amount:10}});case 2:case"end":return e.stop()}},e,this)})),n.handleForward=Object(A.a)(_.a.mark(function e(){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.command({variables:{command:"forward",amount:10}});case 1:case"end":return e.stop()}},e,this)})),n.handlePrev=Object(A.a)(_.a.mark(function e(){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.command({variables:{command:"prev",amount:1}});case 1:case"end":return e.stop()}},e,this)})),n.handleNext=Object(A.a)(_.a.mark(function e(){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.command({variables:{command:"next",amount:1}});case 1:case"end":return e.stop()}},e,this)})),n.state={watch:e.watch},n.setupTimer(),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.props.watch.updatedAt!==t.watch.updatedAt&&(console.log("componentDidUpdate:",this.props.watch),this.setState({watch:this.props.watch}),this.clearInterval(),this.setupTimer())}},{key:"componentWillUnmount",value:function(){this.clearInterval()}},{key:"setupTimer",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(k.Mutation,{mutation:L()(M)},function(n,a){var o=a.data;return e.command=n,console.log(o),r.a.createElement(k.Query,{query:L()(q)},function(n){var a=n.loading,o=(n.error,n.data);if(a)return null;var c=o.getWatch;return r.a.createElement(re,{classes:t,title:c.title,currentTime:c.timestamp,totalTime:c.totalTime,state:c.state,onBackward:e.handleBackward,onForward:e.handleForward,onPrev:e.handlePrev,onNext:e.handleNext})})})}}]),t}(a.Component),ce=Object(te.withStyles)(function(e){return{root:{textAlign:"center",paddingTop:20*e.spacing.unit}}})(oe),ie=n(259),le=Object(te.createMuiTheme)({palette:{primary:ie.red,secondary:ie.blue},typography:{useNextVariants:!0}}),se=window.chrome,ue=E.a.get(se,"runtime.sendMessage",function(){console.log("No chromeSendMessage")});f.a.configure(T),f.a.configure(U);var me=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,null,r.a.createElement("div",{className:"App"},R,r.a.createElement(j.a,{path:"/controller",component:ce})))}}]),t}(a.Component),pe=Object(w.withAuthenticator)(function(){return r.a.createElement(d.a,{theme:le},r.a.createElement(me,null))},!0,[r.a.createElement(w.FederatedSignIn,null)],{}),de=function(){return r.a.createElement(k.ApolloProvider,{client:C},r.a.createElement(b.Rehydrated,null,r.a.createElement(pe,null)))},he=new h.Logger("Alexander_the_auth_watcher");ue("ceajhbhbmjohgamoihofcimhnmfhkmhp",{event:"WEB_LOADED"},function(e){console.log(e)}),he.onHubCapsule=function(e){switch(console.log(e),ue("ceajhbhbmjohgamoihofcimhnmfhkmhp",{event:"AUTH_UPDATED",capsule:e},function(e){console.log(e)}),E.a.get(se,"runtime,reload",function(){})(),e.payload.event){case"signIn":he.info("user signed in");break;case"signUp":he.info("user signed up");break;case"signOut":he.info("user signed out");break;case"signIn_failure":he.info("user sign in failed");break;case"configured":he.info("the Auth module is configured");break;default:he.info(e.payload.event)}},h.Hub.listen("auth",he),c.a.render(r.a.createElement(de,null),document.getElementById("root"))}},[[5710,2,1]]]);
//# sourceMappingURL=main.26334d8a.chunk.js.map