(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(e,t){},178:function(e,t){},198:function(e,t){},5690:function(e,t,n){e.exports=n(6219)},5695:function(e,t,n){},6113:function(e,t,n){},6124:function(e,t){},6219:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(106),c=n.n(o),i=(n(5695),n(51)),s=n(70),u=n(72),l=n(71),d=n(73),p=n(245),h=n.n(p),m=n(92),f=n.n(m),w=n(247),b=n(137),v=n.n(b),g=n(472),y=n(37),O=n.n(y),j=n(56),k=n(6229),E=(n(6111),n(6113),n(10)),S=n.n(E),A=n(25),I={aws_appsync_graphqlEndpoint:"https://axlvk4nfzbf5fnfmpqo37uzdey.appsync-api.ap-northeast-2.amazonaws.com/graphql",aws_appsync_region:"ap-northeast-2",aws_appsync_authenticationType:"AMAZON_COGNITO_USER_POOLS",aws_appsync_apiKey:"null"},_=new v.a({url:I.aws_appsync_graphqlEndpoint,region:I.aws_appsync_region,auth:{type:I.aws_appsync_authenticationType,apiKey:I.apiKey,jwtToken:function(){var e=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.Auth.currentSession();case 2:return e.abrupt("return",e.sent.getIdToken().getJwtToken());case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}}),C=window.chrome,P=window.location.origin;C&&C.identity&&(P=C.identity.getRedirectURL());var T={Auth:{identityPoolId:"ap-northeast-2:f7fdd6bf-dc3f-40a2-99f4-56351072c3bf",region:"ap-northeast-2",identityPoolRegion:"ap-northeast-2",userPoolId:"ap-northeast-2_dOcKtjnwU",userPoolWebClientId:"5qbr4et22vf5pb8m5k0j7kp9u7",mandatorySignIn:!0,authenticationFlowType:"USER_SRP_AUTH",oauth:{domain:"ezmote.auth.ap-northeast-2.amazoncognito.com",scope:["email","openid","aws.cognito.signin.user.admin","profile"],redirectSignIn:P,redirectSignOut:P,responseType:"code",options:{AdvancedSecurityDataCollectionFlag:!0}}}},x=n(156),N=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_SHOW_DEBUG,R=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_SHOW_DEBUG_TOAST,U=(new function e(){Object(i.a)(this,e),this.info=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];N&&console.log.apply(console,t),R&&Object(x.toast)(JSON.stringify(t))},this.log=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];N&&console.log.apply(console,t),R&&Object(x.toast)(JSON.stringify(t))},this.debug=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];N&&console.log.apply(console,t),R&&Object(x.toast)(JSON.stringify(t))}},r.a.createElement(x.ToastContainer,{autoClose:3e3,hideProgressBar:!0})),B=(n(6124),n(138)),D=n(47),F=n.n(D),q=n(58),W=n.n(q),M=n(474),L=n.n(M),$=n(6198),z=n(230),H=n.n(z),J=n(59),G=n(123),K=n.n(G),V=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.sub,n=e.query,a=e.variables,o=e.children,c=O.a.lowerFirst(t.definitions[0].name.value),i=O.a.lowerFirst(n.definitions[0].name.value);return console.log(a),r.a.createElement(j.Query,{query:n,fetchPolicy:"no-cache",variables:a},function(e){return r.a.createElement(j.Subscription,{subscription:t,variables:a},function(t){return t.loading?(console.log({queryResult:e}),o(Object(B.a)({},e,{data:e.data[i]}))):(console.log({subResult:t}),o(Object(B.a)({},t,{data:t.data[c]})))})})}}]),t}(a.PureComponent);function Q(e,t,n){return O.a.chain(n).keyBy().mapValues(function(n){if(!e||e[n]!==t[n])return t[n]}).omitBy(O.a.isNil).value()}function Z(e){var t="";return O.a.isNumber(e)?((e=Math.floor(e))>3600&&(t+=Math.floor(e/60/60)+":"),t+=Math.floor(e/60)+":",t+=O.a.padStart(e%60,2,"0")):"00:00"}var X=n(57),Y=["currentTime"],ee=.5,te=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state=Object(B.a)({},Q(null,n.props,Y)),n.handleClose=function(){n.setState({open:!1})},n.handleClick=function(){n.setState({open:!0})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){this.setState(Q(this.state,this.props,Y))}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.totalTime,a=e.title,o=this.state.currentTime;return r.a.createElement(F.a,{container:!0,className:t.root,justify:"center"},r.a.createElement(F.a,{container:!0,direction:"column",item:!0,sm:8},r.a.createElement(F.a,{item:!0}),r.a.createElement(F.a,{item:!0,container:!0,direction:"column"},r.a.createElement(F.a,{item:!0},r.a.createElement(W.a,{disabled:this.adShowing,onClick:this.props.onBackward},r.a.createElement(J.b,null)),this.stopped?r.a.createElement(W.a,{onClick:this.props.onResume},r.a.createElement(J.e,{fontSize:"large"})):r.a.createElement(W.a,{onClick:this.props.onPause},r.a.createElement(J.d,{fontSize:"large"})),this.adShowing?r.a.createElement(W.a,{onClick:this.props.onSkipAd},r.a.createElement(J.a,null)):r.a.createElement(W.a,{onClick:this.props.onForward},r.a.createElement(J.a,null))),r.a.createElement(F.a,{item:!0},r.a.createElement(W.a,{onClick:this.props.onPrev},r.a.createElement(J.g,null)),r.a.createElement(W.a,{onClick:this.props.onNext},r.a.createElement(J.f,null)))),r.a.createElement(F.a,{container:!0,item:!0,direction:"column"},r.a.createElement(F.a,{item:!0,container:!0,justify:"space-between"},r.a.createElement(H.a,{variant:"subtitle2"},Z(o)),r.a.createElement(H.a,{variant:"subtitle2"},Z(n))),r.a.createElement(F.a,{item:!0},r.a.createElement(L.a,{variant:"determinate",value:o/n*100}))),r.a.createElement(F.a,{item:!0},r.a.createElement(W.a,null,r.a.createElement(J.c,null))),r.a.createElement(F.a,{item:!0},r.a.createElement(H.a,{variant:"subtitle1"},a))))}},{key:"stopped",get:function(){return"paused"===this.props.state}},{key:"adShowing",get:function(){return"1"===this.props.adState}}]),t}(a.PureComponent),ne=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={watch:n.props.watch||{}},n.setupTimer=function(){var e=n.state.watch;"playing"===e.state||"willplay"===e.state?n.setInterval(function(){n.setState(Object(X.a)(function(e){e.watch.timestamp+=ee}))}):n.clearInterval()},n.setInterval=function(e){n.clearInterval(),n.intervalId=setInterval(e,1e3*ee)},n.clearInterval=function(){n.intervalId&&clearInterval(n.intervalId),n.intervalId=null},n.handlePause=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.setState(Object(X.a)(function(e){e.watch.state="paused"})),n.props.onPause();case 2:case"end":return e.stop()}},e,this)})),n.handleResume=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.setState(Object(X.a)(function(e){e.watch.state="willplay"})),n.props.onResume();case 2:case"end":return e.stop()}},e,this)})),n.handleBackward=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.setState(Object(X.a)(function(e){e.watch.timestamp-=10})),n.props.onBackward();case 2:case"end":return e.stop()}},e,this)})),n.handleForward=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.setState(Object(X.a)(function(e){e.watch.timestamp+=10})),n.props.onForward();case 2:case"end":return e.stop()}},e,this)})),n.handlePrev=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.setState(Object(X.a)(function(e){e.watch.title="..."})),n.props.onPrev();case 2:case"end":return e.stop()}},e,this)})),n.handleNext=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.setState(Object(X.a)(function(e){e.watch.title="..."})),n.props.onNext();case 2:case"end":return e.stop()}},e,this)})),n.handleSkipAd=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.setState(Object(X.a)(function(e){e.watch.title="..."})),n.props.onSkipAd();case 2:case"end":return e.stop()}},e,this)})),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setupTimer()}},{key:"componentDidUpdate",value:function(e,t){this.props.watch?this.props.watch.updatedAt!==t.watch.updatedAt&&(this.setState({watch:this.props.watch}),this.clearInterval(),this.setupTimer()):O.a.isEmpty(t.watch)||(this.setState({watch:{}}),this.clearInterval())}},{key:"componentWillUnmount",value:function(){this.clearInterval()}},{key:"render",value:function(){var e=this.props.classes,t=this.state.watch;return r.a.createElement(te,{classes:e,title:t.title,currentTime:t.timestamp,totalTime:t.totalTime,state:t.state,adState:t.adState,onResume:this.handleResume,onPause:this.handlePause,onBackward:this.handleBackward,onForward:this.handleForward,onPrev:this.handlePrev,onNext:this.handleNext,onSkipAd:this.handleSkipAd})}}]),t}(a.Component);ne.defaultProps={watch:{}};var ae=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).sendCommand=function(e){e.watchId=n.props.watchId,n.command({variables:e})},n.handlePause=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.sendCommand({command:"pause"});case 1:case"end":return e.stop()}},e,this)})),n.handleResume=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.sendCommand({command:"play"});case 1:case"end":return e.stop()}},e,this)})),n.handleBackward=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.sendCommand({command:"backward",amount:10});case 1:case"end":return e.stop()}},e,this)})),n.handleForward=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.sendCommand({command:"forward",amount:10});case 1:case"end":return e.stop()}},e,this)})),n.handlePrev=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.sendCommand({command:"prev",amount:1});case 1:case"end":return e.stop()}},e,this)})),n.handleNext=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.sendCommand({command:"next",amount:1});case 1:case"end":return e.stop()}},e,this)})),n.handleSkipAd=Object(A.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.sendCommand({command:"skipAd"});case 1:case"end":return e.stop()}},e,this)})),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.watchId;return r.a.createElement(j.Mutation,{mutation:K()("mutation Command($watchId: ID, $command: String!, $amount: Float) {\n  command(watchId: $watchId, command: $command, amount: $amount) {\n    id\n    userId\n    createdAt\n    updatedAt\n    title\n    url\n    state\n    adState\n    timestamp\n    totalTime\n    command\n    amount\n  }\n}\n")},function(t,o){var c=o.data;return e.command=t,console.log(c),r.a.createElement(V,{sub:K()("subscription SubscribeToUpdateWatch($id: ID!) {\n  subscribeToUpdateWatch(id: $id) {\n    id\n    userId\n    createdAt\n    updatedAt\n    title\n    url\n    state\n    adState\n    timestamp\n    totalTime\n    command\n    amount\n  }\n}\n"),query:K()("query GetWatch {\n  getWatch {\n    id\n    userId\n    createdAt\n    updatedAt\n    title\n    url\n    state\n    adState\n    timestamp\n    totalTime\n    command\n    amount\n  }\n}\n"),variables:{id:a}},function(t){var a=t.loading,o=t.error,c=t.data;if(a)return null;if(o)return o;var i=c;return r.a.createElement(ne,{classes:n,watch:i,onResume:e.handleResume,onPause:e.handlePause,onBackward:e.handleBackward,onForward:e.handleForward,onPrev:e.handlePrev,onNext:e.handleNext,onSkipAd:e.handleSkipAd})})})}}]),t}(a.Component),re=Object($.withStyles)(function(e){return{root:{textAlign:"center",padding:[[10*e.spacing.unit,2*e.spacing.unit]]}}})(ae),oe=n(248),ce=Object($.createMuiTheme)({palette:{primary:oe.red,secondary:oe.blue},typography:{useNextVariants:!0}}),ie=window.chrome,se=O.a.get(ie,"runtime.sendMessage",function(){console.log("No chromeSendMessage")});f.a.configure(I),f.a.configure(T);var ue=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={watches:null},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(k.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(j.ApolloConsumer,null,function(t){return!e.loaded&&t.query({query:K()("query GetWatches {\n  getWatches {\n    id\n    userId\n    createdAt\n    updatedAt\n    title\n    url\n    state\n    adState\n    timestamp\n    totalTime\n    command\n    amount\n  }\n}\n"),fetchPolicy:"no-cache"}).then(function(t){console.log(t.data),e.setState({watches:t.data.getWatches})}),e.loaded=!0,r.a.createElement("div",null)}),U,this.state.watches&&r.a.createElement(re,{watchId:O.a.get(this.state.watches,"[0].id")})))}}]),t}(a.Component),le=Object(w.withAuthenticator)(function(){return r.a.createElement(h.a,{theme:ce},r.a.createElement(ue,null))},!0,[r.a.createElement(w.FederatedSignIn,null)],{}),de=function(){return r.a.createElement(j.ApolloProvider,{client:_},r.a.createElement(g.Rehydrated,null,r.a.createElement(le,null)))},pe=new m.Logger("Alexander_the_auth_watcher");se("ceajhbhbmjohgamoihofcimhnmfhkmhp",{event:"WEB_LOADED"},function(e){console.log(e)}),pe.onHubCapsule=function(e){switch(console.log(e),se("ceajhbhbmjohgamoihofcimhnmfhkmhp",{event:"AUTH_UPDATED",capsule:e},function(e){console.log(e)}),O.a.get(ie,"runtime,reload",function(){})(),e.payload.event){case"signIn":pe.info("user signed in");break;case"signUp":pe.info("user signed up");break;case"signOut":pe.info("user signed out");break;case"signIn_failure":pe.info("user sign in failed");break;case"configured":pe.info("the Auth module is configured");break;default:pe.info(e.payload.event)}},m.Hub.listen("auth",pe),c.a.render(r.a.createElement(de,null),document.getElementById("root"))}},[[5690,2,1]]]);
//# sourceMappingURL=main.2daea982.chunk.js.map