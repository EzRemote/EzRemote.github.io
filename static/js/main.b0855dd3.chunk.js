(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(e,t){},178:function(e,t){},198:function(e,t){},5690:function(e,t,a){e.exports=a(6219)},5695:function(e,t,a){},6113:function(e,t,a){},6124:function(e,t){},6219:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(106),o=a.n(c),i=(a(5695),a(51)),s=a(70),u=a(72),l=a(71),p=a(73),d=a(245),h=a.n(d),m=a(92),f=a.n(m),w=a(247),b=a(137),v=a.n(b),g=a(472),y=a(37),O=a.n(y),j=a(56),k=a(6229),E=(a(6111),a(6113),a(10)),S=a.n(E),A=a(25),I={aws_appsync_graphqlEndpoint:"https://axlvk4nfzbf5fnfmpqo37uzdey.appsync-api.ap-northeast-2.amazonaws.com/graphql",aws_appsync_region:"ap-northeast-2",aws_appsync_authenticationType:"AMAZON_COGNITO_USER_POOLS",aws_appsync_apiKey:"null"},_=new v.a({url:I.aws_appsync_graphqlEndpoint,region:I.aws_appsync_region,auth:{type:I.aws_appsync_authenticationType,apiKey:I.apiKey,jwtToken:function(){var e=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.Auth.currentSession();case 2:return e.abrupt("return",e.sent.getIdToken().getJwtToken());case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}}),P=window.chrome,T=window.location.origin;P&&P.identity&&(T=P.identity.getRedirectURL());var x={Auth:{identityPoolId:"ap-northeast-2:f7fdd6bf-dc3f-40a2-99f4-56351072c3bf",region:"ap-northeast-2",identityPoolRegion:"ap-northeast-2",userPoolId:"ap-northeast-2_dOcKtjnwU",userPoolWebClientId:"5qbr4et22vf5pb8m5k0j7kp9u7",mandatorySignIn:!0,authenticationFlowType:"USER_SRP_AUTH",oauth:{domain:"ezmote.auth.ap-northeast-2.amazoncognito.com",scope:["email","openid","aws.cognito.signin.user.admin","profile"],redirectSignIn:T,redirectSignOut:T,responseType:"code",options:{AdvancedSecurityDataCollectionFlag:!0}}}},C=a(156),N=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_SHOW_DEBUG,R=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_SHOW_DEBUG_TOAST,U=(new function e(){Object(i.a)(this,e),this.info=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];N&&console.log.apply(console,t),R&&Object(C.toast)(JSON.stringify(t))},this.log=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];N&&console.log.apply(console,t),R&&Object(C.toast)(JSON.stringify(t))},this.debug=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];N&&console.log.apply(console,t),R&&Object(C.toast)(JSON.stringify(t))}},r.a.createElement(C.ToastContainer,{autoClose:3e3,hideProgressBar:!0})),B=(a(6124),a(138)),D=a(47),F=a.n(D),q=a(58),W=a.n(q),M=a(474),L=a.n(M),$=a(6198),z=a(230),H=a.n(z),J=a(59),G=a(123),K=a.n(G),V=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.sub,a=e.query,n=e.variables,c=e.children,o=O.a.lowerFirst(t.definitions[0].name.value),i=O.a.lowerFirst(a.definitions[0].name.value);return console.log(n),r.a.createElement(j.Query,{query:a,fetchPolicy:"no-cache",variables:n},function(e){return r.a.createElement(j.Subscription,{subscription:t,variables:n},function(t){return t.loading?(console.log({queryResult:e}),c(Object(B.a)({},e,{data:e.data[i]}))):(console.log({subResult:t}),c(Object(B.a)({},t,{data:t.data[o]})))})})}}]),t}(n.PureComponent);function Q(e,t,a){return O.a.chain(a).keyBy().mapValues(function(a){if(!e||e[a]!==t[a])return t[a]}).omitBy(O.a.isNil).value()}function Z(e){var t="";return O.a.isNumber(e)?((e=Math.floor(e))>3600&&(t+=Math.floor(e/60/60)+":"),t+=Math.floor(e/60)+":",t+=O.a.padStart(e%60,2,"0")):"00:00"}var X=a(57),Y=["currentTime"],ee=.5,te=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state=Object(B.a)({},Q(null,a.props,Y)),a.handleClose=function(){a.setState({open:!1})},a.handleClick=function(){a.setState({open:!0})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){this.setState(Q(this.state,this.props,Y))}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.totalTime,n=e.title,c=this.state.currentTime;return r.a.createElement(F.a,{container:!0,className:t.root,justify:"center"},r.a.createElement(F.a,{container:!0,direction:"column",item:!0,sm:8},r.a.createElement(F.a,{item:!0}),r.a.createElement(F.a,{item:!0,container:!0,direction:"column"},r.a.createElement(F.a,{item:!0},r.a.createElement(W.a,{disabled:this.adShowing,onClick:this.props.onBackward},r.a.createElement(J.b,null)),this.stopped?r.a.createElement(W.a,{onClick:this.props.onResume},r.a.createElement(J.e,{fontSize:"large"})):r.a.createElement(W.a,{onClick:this.props.onPause},r.a.createElement(J.d,{fontSize:"large"})),this.adShowing?r.a.createElement(W.a,{onClick:this.props.onSkipAd},r.a.createElement(J.a,null)):r.a.createElement(W.a,{onClick:this.props.onForward},r.a.createElement(J.a,null))),r.a.createElement(F.a,{item:!0},r.a.createElement(W.a,{onClick:this.props.onPrev},r.a.createElement(J.g,null)),r.a.createElement(W.a,{onClick:this.props.onNext},r.a.createElement(J.f,null)))),r.a.createElement(F.a,{container:!0,item:!0,direction:"column"},r.a.createElement(F.a,{item:!0,container:!0,justify:"space-between"},r.a.createElement(H.a,{variant:"subtitle2"},Z(c)),r.a.createElement(H.a,{variant:"subtitle2"},Z(a))),r.a.createElement(F.a,{item:!0},r.a.createElement(L.a,{variant:"determinate",value:c/a*100}))),r.a.createElement(F.a,{item:!0},r.a.createElement(W.a,null,r.a.createElement(J.c,null))),r.a.createElement(F.a,{item:!0},r.a.createElement(H.a,{variant:"subtitle1"},n))))}},{key:"stopped",get:function(){return"paused"===this.props.state}},{key:"adShowing",get:function(){return"1"===this.props.adState}}]),t}(n.PureComponent),ae=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={watch:a.props.watch||{}},a.setupTimer=function(){var e=a.state.watch;"playing"===e.state||"willplay"===e.state?a.setInterval(function(){a.setState(Object(X.a)(function(e){e.watch.timestamp+=ee}))}):a.clearInterval()},a.setInterval=function(e){a.clearInterval(),a.intervalId=setInterval(e,1e3*ee)},a.clearInterval=function(){a.intervalId&&clearInterval(a.intervalId),a.intervalId=null},a.handlePause=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState(Object(X.a)(function(e){e.watch.state="paused"})),a.props.onPause();case 2:case"end":return e.stop()}},e,this)})),a.handleResume=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState(Object(X.a)(function(e){e.watch.state="willplay"})),a.props.onResume();case 2:case"end":return e.stop()}},e,this)})),a.handleBackward=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState(Object(X.a)(function(e){e.watch.timestamp-=10})),a.props.onBackward();case 2:case"end":return e.stop()}},e,this)})),a.handleForward=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState(Object(X.a)(function(e){e.watch.timestamp+=10})),a.props.onForward();case 2:case"end":return e.stop()}},e,this)})),a.handlePrev=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState(Object(X.a)(function(e){e.watch.title="..."})),a.props.onPrev();case 2:case"end":return e.stop()}},e,this)})),a.handleNext=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState(Object(X.a)(function(e){e.watch.title="..."})),a.props.onNext();case 2:case"end":return e.stop()}},e,this)})),a.handleSkipAd=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState(Object(X.a)(function(e){e.watch.title="..."})),a.props.onSkipAd();case 2:case"end":return e.stop()}},e,this)})),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setupTimer()}},{key:"componentDidUpdate",value:function(e,t){this.props.watch?this.props.watch.updatedAt!==t.watch.updatedAt&&(this.setState({watch:this.props.watch}),this.clearInterval(),this.setupTimer()):O.a.isEmpty(t.watch)||(this.setState({watch:{}}),this.clearInterval())}},{key:"componentWillUnmount",value:function(){this.clearInterval()}},{key:"render",value:function(){var e=this.props.classes,t=this.state.watch;return r.a.createElement(te,{classes:e,title:t.title,currentTime:t.timestamp,totalTime:t.totalTime,state:t.state,adState:t.adState,onResume:this.handleResume,onPause:this.handlePause,onBackward:this.handleBackward,onForward:this.handleForward,onPrev:this.handlePrev,onNext:this.handleNext,onSkipAd:this.handleSkipAd})}}]),t}(n.Component);ae.defaultProps={watch:{}};var ne=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).handlePause=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.command({variables:{command:"pause"}});case 1:case"end":return e.stop()}},e,this)})),a.handleResume=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.command({variables:{command:"play"}});case 1:case"end":return e.stop()}},e,this)})),a.handleBackward=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.command({variables:{command:"backward",amount:10}});case 1:case"end":return e.stop()}},e,this)})),a.handleForward=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.command({variables:{command:"forward",amount:10}});case 1:case"end":return e.stop()}},e,this)})),a.handlePrev=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.command({variables:{command:"prev",amount:1}});case 1:case"end":return e.stop()}},e,this)})),a.handleNext=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.command({variables:{command:"next",amount:1}});case 1:case"end":return e.stop()}},e,this)})),a.handleSkipAd=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.command({variables:{command:"skipAd"}});case 1:case"end":return e.stop()}},e,this)})),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.watchId;return r.a.createElement(j.Mutation,{mutation:K()("mutation Command($watchId: ID, $command: String!, $amount: Float) {\n  command(watchId: $watchId, command: $command, amount: $amount) {\n    id\n    userId\n    createdAt\n    updatedAt\n    title\n    url\n    state\n    adState\n    timestamp\n    totalTime\n    command\n    amount\n  }\n}\n")},function(t,c){var o=c.data;return e.command=t,console.log(o),r.a.createElement(V,{sub:K()("subscription SubscribeToUpdateWatch($id: ID!) {\n  subscribeToUpdateWatch(id: $id) {\n    id\n    userId\n    createdAt\n    updatedAt\n    title\n    url\n    state\n    adState\n    timestamp\n    totalTime\n    command\n    amount\n  }\n}\n"),query:K()("query GetWatch {\n  getWatch {\n    id\n    userId\n    createdAt\n    updatedAt\n    title\n    url\n    state\n    adState\n    timestamp\n    totalTime\n    command\n    amount\n  }\n}\n"),variables:{id:n}},function(t){var n=t.loading,c=t.error,o=t.data;if(n)return null;if(c)return c;var i=o;return r.a.createElement(ae,{classes:a,watch:i,onResume:e.handleResume,onPause:e.handlePause,onBackward:e.handleBackward,onForward:e.handleForward,onPrev:e.handlePrev,onNext:e.handleNext,onSkipAd:e.handleSkipAd})})})}}]),t}(n.Component),re=Object($.withStyles)(function(e){return{root:{textAlign:"center",padding:[[10*e.spacing.unit,2*e.spacing.unit]]}}})(ne),ce=a(248),oe=Object($.createMuiTheme)({palette:{primary:ce.red,secondary:ce.blue},typography:{useNextVariants:!0}}),ie=window.chrome,se=O.a.get(ie,"runtime.sendMessage",function(){console.log("No chromeSendMessage")});f.a.configure(I),f.a.configure(x);var ue=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={watches:null},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(k.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(j.ApolloConsumer,null,function(t){return!e.loaded&&t.query({query:K()("query GetWatches {\n  getWatches {\n    id\n    userId\n    createdAt\n    updatedAt\n    title\n    url\n    state\n    adState\n    timestamp\n    totalTime\n    command\n    amount\n  }\n}\n"),fetchPolicy:"no-cache"}).then(function(t){console.log(t.data),e.setState({watches:t.data.getWatches})}),e.loaded=!0,r.a.createElement("div",null)}),U,this.state.watches&&r.a.createElement(re,{watchId:O.a.get(this.state.watches,"[0].id")})))}}]),t}(n.Component),le=Object(w.withAuthenticator)(function(){return r.a.createElement(h.a,{theme:oe},r.a.createElement(ue,null))},!0,[r.a.createElement(w.FederatedSignIn,null)],{}),pe=function(){return r.a.createElement(j.ApolloProvider,{client:_},r.a.createElement(g.Rehydrated,null,r.a.createElement(le,null)))},de=new m.Logger("Alexander_the_auth_watcher");se("ceajhbhbmjohgamoihofcimhnmfhkmhp",{event:"WEB_LOADED"},function(e){console.log(e)}),de.onHubCapsule=function(e){switch(console.log(e),se("ceajhbhbmjohgamoihofcimhnmfhkmhp",{event:"AUTH_UPDATED",capsule:e},function(e){console.log(e)}),O.a.get(ie,"runtime,reload",function(){})(),e.payload.event){case"signIn":de.info("user signed in");break;case"signUp":de.info("user signed up");break;case"signOut":de.info("user signed out");break;case"signIn_failure":de.info("user sign in failed");break;case"configured":de.info("the Auth module is configured");break;default:de.info(e.payload.event)}},m.Hub.listen("auth",de),o.a.render(r.a.createElement(pe,null),document.getElementById("root"))}},[[5690,2,1]]]);
//# sourceMappingURL=main.b0855dd3.chunk.js.map