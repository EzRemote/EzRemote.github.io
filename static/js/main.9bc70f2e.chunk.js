(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,t){},182:function(e,t){},210:function(e,t){},5696:function(e,t,a){e.exports=a(6244)},5701:function(e,t,a){},6137:function(e,t,a){},6148:function(e,t){},6244:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(125),o=a.n(c),i=(a(5701),a(50)),s=a(69),u=a(71),l=a(70),p=a(72),d=a(251),m=a.n(d),h=a(93),f=a.n(h),w=a(252),b=a(126),v=a.n(b),g=a(478),y=a(39),O=a.n(y),j=a(68),k=a(6254),E=a(6255),S=(a(6135),a(6137),a(11)),A=a.n(S),_=a(29),I={aws_appsync_graphqlEndpoint:"https://axlvk4nfzbf5fnfmpqo37uzdey.appsync-api.ap-northeast-2.amazonaws.com/graphql",aws_appsync_region:"ap-northeast-2",aws_appsync_authenticationType:"AMAZON_COGNITO_USER_POOLS",aws_appsync_apiKey:"null"},x=new v.a({url:I.aws_appsync_graphqlEndpoint,region:I.aws_appsync_region,auth:{type:I.aws_appsync_authenticationType,apiKey:I.apiKey,jwtToken:function(){var e=Object(_.a)(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.Auth.currentSession();case 2:return e.abrupt("return",e.sent.getIdToken().getJwtToken());case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}}),P=window.chrome,T=window.location.origin;P&&P.identity&&(T=P.identity.getRedirectURL());var C={Auth:{identityPoolId:"ap-northeast-2:f7fdd6bf-dc3f-40a2-99f4-56351072c3bf",region:"ap-northeast-2",identityPoolRegion:"ap-northeast-2",userPoolId:"ap-northeast-2_dOcKtjnwU",userPoolWebClientId:"5qbr4et22vf5pb8m5k0j7kp9u7",mandatorySignIn:!0,authenticationFlowType:"USER_SRP_AUTH",oauth:{domain:"ezmote.auth.ap-northeast-2.amazoncognito.com",scope:["email","openid","aws.cognito.signin.user.admin","profile"],redirectSignIn:T,redirectSignOut:T,responseType:"code",options:{AdvancedSecurityDataCollectionFlag:!0}}}},N=a(128),R=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_SHOW_DEBUG,U=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_SHOW_DEBUG_TOAST,B=(new function e(){Object(i.a)(this,e),this.info=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];R&&console.log.apply(console,t),U&&Object(N.toast)(JSON.stringify(t))},this.log=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];R&&console.log.apply(console,t),U&&Object(N.toast)(JSON.stringify(t))},this.debug=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];R&&console.log.apply(console,t),U&&Object(N.toast)(JSON.stringify(t))}},r.a.createElement(N.ToastContainer,{autoClose:3e3,hideProgressBar:!0})),F=(a(6148),a(127)),D=a(46),q=a.n(D),M=a(56),W=a.n(M),L=a(480),z=a.n(L),H=a(6222),J=a(204),$=a.n(J),G=a(57),K=a(203),V=a.n(K),Q=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.sub,a=e.query,n=e.children,c=O.a.lowerFirst(t.definitions[0].name.value),o=O.a.lowerFirst(a.definitions[0].name.value);return r.a.createElement(j.Query,{query:a,fetchPolicy:"no-cache"},function(e){return r.a.createElement(j.Subscription,{subscription:t},function(t){return t.loading?n(Object(F.a)({},e,{data:e.data[o]})):n(Object(F.a)({},t,{data:t.data[c]}))})})}}]),t}(n.PureComponent);function Z(e,t,a){return O.a.chain(a).keyBy().mapValues(function(a){if(!e||e[a]!==t[a])return t[a]}).omitBy(O.a.isNil).value()}function X(e){var t="";return O.a.isNumber(e)?((e=Math.floor(e))>3600&&(t+=Math.floor(e/60/60)+":"),t+=Math.floor(e/60)+":",t+=O.a.padStart(e%60,2,"0")):"00:00"}var Y=a(55),ee=["currentTime"],te=.5,ae=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state=Object(F.a)({},Z(null,a.props,ee)),a.handleClose=function(){a.setState({open:!1})},a.handleClick=function(){a.setState({open:!0})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){this.setState(Z(this.state,this.props,ee))}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.totalTime,n=e.title,c=this.state.currentTime;return r.a.createElement(q.a,{container:!0,className:t.root,justify:"center"},r.a.createElement(q.a,{container:!0,direction:"column",item:!0,sm:8},r.a.createElement(q.a,{item:!0}),r.a.createElement(q.a,{item:!0,container:!0,direction:"column"},r.a.createElement(q.a,{item:!0},r.a.createElement(W.a,{disabled:this.adShowing,onClick:this.props.onBackward},r.a.createElement(G.b,null)),this.stopped?r.a.createElement(W.a,{onClick:this.props.onResume},r.a.createElement(G.e,{fontSize:"large"})):r.a.createElement(W.a,{onClick:this.props.onPause},r.a.createElement(G.d,{fontSize:"large"})),this.adShowing?r.a.createElement(W.a,{onClick:this.props.onSkipAd},r.a.createElement(G.a,null)):r.a.createElement(W.a,{onClick:this.props.onForward},r.a.createElement(G.a,null))),r.a.createElement(q.a,{item:!0},r.a.createElement(W.a,{onClick:this.props.onPrev},r.a.createElement(G.g,null)),r.a.createElement(W.a,{onClick:this.props.onNext},r.a.createElement(G.f,null)))),r.a.createElement(q.a,{container:!0,item:!0,direction:"column"},r.a.createElement(q.a,{item:!0,container:!0,justify:"space-between"},r.a.createElement($.a,{variant:"subtitle2"},X(c)),r.a.createElement($.a,{variant:"subtitle2"},X(a))),r.a.createElement(q.a,{item:!0},r.a.createElement(z.a,{variant:"determinate",value:c/a*100}))),r.a.createElement(q.a,{item:!0,justify:"flex-end"},r.a.createElement(W.a,null,r.a.createElement(G.c,null))),r.a.createElement(q.a,{item:!0},r.a.createElement($.a,{variant:"subtitle1"},n))))}},{key:"stopped",get:function(){return"paused"===this.props.state}},{key:"adShowing",get:function(){return"1"===this.props.adState}}]),t}(n.PureComponent),ne=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={watch:a.props.watch||{}},a.setupTimer=function(){var e=a.state.watch;"playing"===e.state||"willplay"===e.state?a.setInterval(function(){a.setState(Object(Y.a)(function(e){e.watch.timestamp+=te}))}):a.clearInterval()},a.setInterval=function(e){a.clearInterval(),a.intervalId=setInterval(e,1e3*te)},a.clearInterval=function(){a.intervalId&&clearInterval(a.intervalId),a.intervalId=null},a.handlePause=Object(_.a)(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState(Object(Y.a)(function(e){e.watch.state="paused"})),a.props.onPause();case 2:case"end":return e.stop()}},e,this)})),a.handleResume=Object(_.a)(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState(Object(Y.a)(function(e){e.watch.state="willplay"})),a.props.onResume();case 2:case"end":return e.stop()}},e,this)})),a.handleBackward=Object(_.a)(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState(Object(Y.a)(function(e){e.watch.timestamp-=10})),a.props.onBackward();case 2:case"end":return e.stop()}},e,this)})),a.handleForward=Object(_.a)(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState(Object(Y.a)(function(e){e.watch.timestamp+=10})),a.props.onForward();case 2:case"end":return e.stop()}},e,this)})),a.handlePrev=Object(_.a)(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState(Object(Y.a)(function(e){e.watch.title="..."})),a.props.onPrev();case 2:case"end":return e.stop()}},e,this)})),a.handleNext=Object(_.a)(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState(Object(Y.a)(function(e){e.watch.title="..."})),a.props.onNext();case 2:case"end":return e.stop()}},e,this)})),a.handleSkipAd=Object(_.a)(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState(Object(Y.a)(function(e){e.watch.title="..."})),a.props.onSkipAd();case 2:case"end":return e.stop()}},e,this)})),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setupTimer()}},{key:"componentDidUpdate",value:function(e,t){this.props.watch?this.props.watch.updatedAt!==t.watch.updatedAt&&(this.setState({watch:this.props.watch}),this.clearInterval(),this.setupTimer()):O.a.isEmpty(t.watch)||(this.setState({watch:{}}),this.clearInterval())}},{key:"componentWillUnmount",value:function(){this.clearInterval()}},{key:"render",value:function(){var e=this.props.classes,t=this.state.watch;return r.a.createElement(ae,{classes:e,title:t.title,currentTime:t.timestamp,totalTime:t.totalTime,state:t.state,adState:t.adState,onResume:this.handleResume,onPause:this.handlePause,onBackward:this.handleBackward,onForward:this.handleForward,onPrev:this.handlePrev,onNext:this.handleNext,onSkipAd:this.handleSkipAd})}}]),t}(n.Component);ne.defaultProps={watch:{}};var re=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).handlePause=Object(_.a)(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.command({variables:{command:"pause"}});case 1:case"end":return e.stop()}},e,this)})),a.handleResume=Object(_.a)(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.command({variables:{command:"play"}});case 1:case"end":return e.stop()}},e,this)})),a.handleBackward=Object(_.a)(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.command({variables:{command:"backward",amount:10}});case 1:case"end":return e.stop()}},e,this)})),a.handleForward=Object(_.a)(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.command({variables:{command:"forward",amount:10}});case 1:case"end":return e.stop()}},e,this)})),a.handlePrev=Object(_.a)(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.command({variables:{command:"prev",amount:1}});case 1:case"end":return e.stop()}},e,this)})),a.handleNext=Object(_.a)(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.command({variables:{command:"next",amount:1}});case 1:case"end":return e.stop()}},e,this)})),a.handleSkipAd=Object(_.a)(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.command({variables:{command:"skipAd"}});case 1:case"end":return e.stop()}},e,this)})),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(j.Mutation,{mutation:V()("mutation Command($watchId: ID, $command: String!, $amount: Float) {\n  command(watchId: $watchId, command: $command, amount: $amount) {\n    id\n    userId\n    createdAt\n    updatedAt\n    title\n    url\n    state\n    adState\n    timestamp\n    totalTime\n    command\n    amount\n  }\n}\n")},function(a,n){var c=n.data;return e.command=a,console.log(c),r.a.createElement(Q,{sub:V()("subscription SubscribeToUpdateWatch {\n  subscribeToUpdateWatch {\n    id\n    userId\n    createdAt\n    updatedAt\n    title\n    url\n    state\n    adState\n    timestamp\n    totalTime\n    command\n    amount\n  }\n}\n"),query:V()("query GetWatch {\n  getWatch {\n    id\n    userId\n    createdAt\n    updatedAt\n    title\n    url\n    state\n    adState\n    timestamp\n    totalTime\n    command\n    amount\n  }\n}\n")},function(a){var n=a.loading,c=a.error,o=a.data;if(n)return null;if(c)return c;var i=o;return r.a.createElement(ne,{classes:t,watch:i,onResume:e.handleResume,onPause:e.handlePause,onBackward:e.handleBackward,onForward:e.handleForward,onPrev:e.handlePrev,onNext:e.handleNext,onSkipAd:e.handleSkipAd})})})}}]),t}(n.Component),ce=Object(H.withStyles)(function(e){return{root:{textAlign:"center",padding:[[10*e.spacing.unit,2*e.spacing.unit]]}}})(re),oe=a(253),ie=Object(H.createMuiTheme)({palette:{primary:oe.red,secondary:oe.blue},typography:{useNextVariants:!0}}),se=window.chrome,ue=O.a.get(se,"runtime.sendMessage",function(){console.log("No chromeSendMessage")});f.a.configure(I),f.a.configure(C);var le=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,null,r.a.createElement("div",{className:"App"},B,r.a.createElement(ce,null),r.a.createElement(E.a,{path:"/controller",component:ce})))}}]),t}(n.Component),pe=Object(w.withAuthenticator)(function(){return r.a.createElement(m.a,{theme:ie},r.a.createElement(le,null))},!0,[r.a.createElement(w.FederatedSignIn,null)],{}),de=function(){return r.a.createElement(j.ApolloProvider,{client:x},r.a.createElement(g.Rehydrated,null,r.a.createElement(pe,null)))},me=new h.Logger("Alexander_the_auth_watcher");ue("ceajhbhbmjohgamoihofcimhnmfhkmhp",{event:"WEB_LOADED"},function(e){console.log(e)}),me.onHubCapsule=function(e){switch(console.log(e),ue("ceajhbhbmjohgamoihofcimhnmfhkmhp",{event:"AUTH_UPDATED",capsule:e},function(e){console.log(e)}),O.a.get(se,"runtime,reload",function(){})(),e.payload.event){case"signIn":me.info("user signed in");break;case"signUp":me.info("user signed up");break;case"signOut":me.info("user signed out");break;case"signIn_failure":me.info("user sign in failed");break;case"configured":me.info("the Auth module is configured");break;default:me.info(e.payload.event)}},h.Hub.listen("auth",me),o.a.render(r.a.createElement(de,null),document.getElementById("root"))}},[[5696,2,1]]]);
//# sourceMappingURL=main.9bc70f2e.chunk.js.map