(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return E});var l=e(17),a=e(18),u=e(20),c=e(19),i=e(21),m=e(1),y=e.n(m),h=e(65),v=e(347),f=e(34),b=e(89),p=e(22),E=function(t){function n(){var t,e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),m=0;m<a;m++)i[m]=arguments[m];return(e=Object(u.a)(this,(t=Object(c.a)(n)).call.apply(t,[this].concat(i)))).state={},e.handleChange=function(t){"object"===typeof t&&null!==t&&e.setState({value:t})},e.validate=function(){var t=e.state.value,n=[];if("object"===typeof t&&null!==t){var l=t.username,a=t.password;if("string"===typeof l&&l.length>0){if("string"===typeof a&&a.length>0)return e.setState({errorMessages:n}),!0;n.push("Please insert your password")}else n.push("Please insert your username")}else n.push("Please insert your username and password");return e.setState({errorMessages:n}),!1},e.login=function(t){if(t.preventDefault(),e.validate()){var n=e.state.value;fetch("http://localhost:5000/login",{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(t){return t.json()}).then(function(t){if("object"===typeof t&&null!==t){var l=t.status,a=t.message;if(l)localStorage.setItem(p.a.auth.username,n.username),e.setState({message:a},e.redirect);else{var u=[];u.push(a),e.setState({errorMessages:u})}}})}},e.redirect=function(){e.setState({redirect:!0})},e}return Object(i.a)(n,t),Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=p.a.auth,n=this.props.location.state,e=(void 0===n?{}:n).value,l=[{key:t.username,label:"Username",placeholder:"Username"},{key:t.password,label:"Password",type:"password",placeholder:"Password"}];if("object"===typeof e&&null!==e)this.setState({value:e,list:l});else{var a=localStorage.getItem(t.username);this.setState({value:{username:a},list:l})}}},{key:"renderMessage",value:function(){var t=this.state,n=t.message,e=t.errorMessages;return"string"===typeof n&&n.length>0?y.a.createElement(f.a,{message:n,type:"success",className:"text-center mb-4",showIcon:!0}):Array.isArray(e)&&e.length>0?e.map(function(t,n){return y.a.createElement(f.a,{key:n,type:"error",message:t,className:"text-center mb-3",showIcon:!0})}):null}},{key:"render",value:function(){var t=this.state,n=t.list,e=t.value;return t.redirect?y.a.createElement(h.a,{to:{pathname:"/account",state:{value:e}}}):y.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280},className:"mt-5"},y.a.createElement("h1",{className:"text-center"},y.a.createElement("span",null,"Login"),y.a.createElement("span",null," / "),y.a.createElement(v.a,{to:"signup"},"Sign Up")),this.renderMessage(),y.a.createElement(b.a,{list:n,value:e,submitLabel:"Login",onChange:this.handleChange,onSubmit:this.login}))}}]),n}(y.a.Component)},173:function(t,n,e){t.exports=e(345)},178:function(t,n,e){},22:function(t,n,e){"use strict";n.a={info:{icon:"\ud83c\udfe6",name:"SnakeCoin Wallet",by:"M Junaidi",country:"Malaysia"},modules:[{key:"account",name:"My Account"},{key:"transfer",name:"Transfer"},{key:"history",name:"History"},{key:"logout",name:"Logout"}],auth:{username:"username",password:"password",confirmPassword:"confirmPassword"}}},288:function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return p});var l=e(17),a=e(18),u=e(20),c=e(19),i=e(21),m=e(1),y=e.n(m),h=e(65),v=e(34),f=e(43),b=e(22),p=function(t){function n(){var t,e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),m=0;m<a;m++)i[m]=arguments[m];return(e=Object(u.a)(this,(t=Object(c.a)(n)).call.apply(t,[this].concat(i)))).state={},e}return Object(i.a)(n,t),Object(a.a)(n,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"fetch",value:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}(function(){var t=this,n=localStorage.getItem(b.a.auth.username);if("string"===typeof n&&n.length>0){var e="http://localhost:5000/balance?".concat(n);fetch(e).then(function(t){return t.json()}).catch(function(n){if("object"===typeof n&&null!==n){var e={name:n.name,message:n.message};t.setState({error:e})}else console.error(n)}).then(function(n){if("object"===typeof n&&null!==n){var e=n.name,l=n.balance,a=n.timestamp;t.setState({name:e,balance:l,timestamp:a})}})}else this.setState({redirect:!0})})},{key:"renderError",value:function(){var t=this.state.error;if("object"===typeof t&&null!==t){var n=t.name,e=t.message;if("string"===typeof e&&e.length>0)return y.a.createElement(v.a,{message:n,description:e,type:"error",showIcon:!0})}return null}},{key:"renderData",value:function(){var t=this.state,n=t.name,e=t.balance,l=t.timestamp;return"number"===typeof e?y.a.createElement("div",null,y.a.createElement("h5",null,"Name"),y.a.createElement("h4",null,n),y.a.createElement("h3",null,"Balance"),y.a.createElement("h1",null,e," ","\u20b4"),y.a.createElement("h5",null,"Last transaction on"),y.a.createElement("h4",null,l)):null}},{key:"render",value:function(){return this.state.redirect?y.a.createElement(h.a,{to:{pathname:"/login"}}):y.a.createElement("div",{className:"content"},y.a.createElement(f.a,null,y.a.createElement(f.a.Item,null,"Home"),y.a.createElement(f.a.Item,null,"My Account")),y.a.createElement("div",{className:"main-content"},y.a.createElement("h1",null,"My Account"),this.renderError(),this.renderData()))}}]),n}(y.a.Component)},289:function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return O});var l=e(17),a=e(18),u=e(20),c=e(19),i=e(21),m=e(1),y=e.n(m),h=e(65),v=e(34),f=e(10),b=e(125),p=e(41),E=e(43),j=e(348),k=e(170),S=e(22),O=function(t){function n(){var t,e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),m=0;m<a;m++)i[m]=arguments[m];return(e=Object(u.a)(this,(t=Object(c.a)(n)).call.apply(t,[this].concat(i)))).state={},e.emitEmpty=function(){e.input.focus(),e.setState({to:""})},e.handleChange=function(t){e.setState({to:t.target.value})},e.handleChangeAmount=function(t){var n=t.target.value;e.setState({amount:n})},e.handleSubmit=function(t){t.preventDefault();var n=e.state,l=n.name,a=n.to,u=n.amount;if(e.validate()){var c={from:l,to:a,amount:parseInt(u)};fetch("http://localhost:5000/transfer",{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then(function(t){return t.json()}).then(function(t){if("object"===typeof t&&null!==t){var n=t.status,l=t.message,a=t.timestamp;e.setState({status:n,message:l,timestamp:a},function(){e.fetch()})}})}},e.validate=function(){var t,n=e.state,l=n.to,a=n.amount,u=[],c=!0;"string"===typeof l&&l.length>0||(c=!1,u.push("Please enter the name whom you want to transfer to")),"string"===typeof a&&a.length>0&&(t=parseInt(a)),"number"===typeof t||(c=!1,u.push("Please enter an integer"));var i={messages:u};return e.setState({validation:i}),c},e}return Object(i.a)(n,t),Object(a.a)(n,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"fetch",value:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}(function(){var t=this,n=localStorage.getItem(S.a.auth.username);if("string"===typeof n&&n.length>0){var e="http://localhost:5000/balance?".concat(n);fetch(e).then(function(t){return t.json()}).catch(function(n){if("object"===typeof n&&null!==n){var e={name:n.name,message:n.message};t.setState({error:e})}else console.error(n)}).then(function(n){if("object"===typeof n&&null!==n){var e=n.name,l=n.balance,a=n.timestamp;t.setState({name:e,balance:l,timestamp:a})}})}else this.setState({redirect:!0})})},{key:"renderError",value:function(){var t=this.state.error;if("object"===typeof t&&null!==t){var n=t.name,e=t.message;if("string"===typeof e&&e.length>0)return y.a.createElement(v.a,{message:n,description:e,type:"error",showIcon:!0})}return null}},{key:"renderValidationMessages",value:function(){var t=this.state.validation;if("object"===typeof t&&null!==t){var n=t.messages;if(Array.isArray(n)&&n.length>0)return n.map(function(t,n){return"string"===typeof t&&t.length>0?y.a.createElement(v.a,{key:n,message:t,type:"error",showIcon:!0,className:"mb-3"}):null})}return null}},{key:"renderData",value:function(){var t=this.state,n=t.name,e=t.balance;return"number"===typeof e?y.a.createElement("div",{className:"mb-4"},y.a.createElement("h3",null,"Transfer from"),y.a.createElement("h2",null,n),y.a.createElement("h4",null,"Current balance"),y.a.createElement("h4",null,e," ","\u20b4")):null}},{key:"renderForm",value:function(){var t=this,n=this.state,e=n.to,l=n.amount,a=e?y.a.createElement(f.a,{type:"close-circle",onClick:this.emitEmpty}):null;return y.a.createElement("form",{onSubmit:this.handleSubmit},y.a.createElement("h3",null,"Transfer to"),y.a.createElement(b.a,{placeholder:"To whom?",prefix:y.a.createElement(f.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),suffix:a,value:e,onChange:this.handleChange,ref:function(n){return t.input=n},className:"mb-3"}),y.a.createElement("h3",null,"Amount"),y.a.createElement(b.a,{placeholder:"How much?",suffix:"\u20b4",value:l,type:"number",onChange:this.handleChangeAmount,className:"mb-3"}),y.a.createElement(p.a,{type:"primary",htmlType:"submit",size:"large"},"Transfer now",y.a.createElement(f.a,{type:"arrow-right"})))}},{key:"renderMessage",value:function(){var t=this.state,n=t.status,e=t.message;return n?y.a.createElement(v.a,{message:e,type:"success",showIcon:!0,className:"mb-3"}):"string"===typeof e&&e.length>0?y.a.createElement(v.a,{message:e,type:"warning",showIcon:!0,className:"mb-3"}):void 0}},{key:"render",value:function(){return this.state.redirect?y.a.createElement(h.a,{to:{pathname:"/login"}}):y.a.createElement("div",{className:"content"},y.a.createElement(E.a,null,y.a.createElement(E.a.Item,null,"Home"),y.a.createElement(E.a.Item,null,"My Account")),y.a.createElement("div",{className:"main-content"},y.a.createElement("h1",null,"Transfer"),this.renderMessage(),this.renderError(),this.renderValidationMessages(),y.a.createElement(j.a,null,y.a.createElement(k.a,{xs:24,sm:12,md:12,lg:12},this.renderData()),y.a.createElement(k.a,{xs:24,sm:12,md:12,lg:12},this.renderForm()))))}}]),n}(y.a.Component)},290:function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return j});var l=e(169),a=e(17),u=e(18),c=e(20),i=e(19),m=e(21),y=e(1),h=e.n(y),v=e(65),f=e(34),b=e(349),p=e(43),E=e(22),j=function(t){function n(){var t,e;Object(a.a)(this,n);for(var l=arguments.length,u=new Array(l),m=0;m<l;m++)u[m]=arguments[m];return(e=Object(c.a)(this,(t=Object(i.a)(n)).call.apply(t,[this].concat(u)))).state={},e}return Object(m.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"fetch",value:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}(function(){var t=this,n=localStorage.getItem(E.a.auth.username);if("string"===typeof n&&n.length>0){var e="http://localhost:5000/history?".concat(n);fetch(e).then(function(t){return t.json()}).catch(function(n){if("object"===typeof n&&null!==n){var e={name:n.name,message:n.message};t.setState({error:e})}else console.error(n)}).then(function(n){if("object"===typeof n&&null!==n){var e=n.name,l=n.history,a=n.timestamp;t.setState({name:e,history:l,timestamp:a})}})}else this.setState({redirect:!0})})},{key:"renderError",value:function(){var t=this.state.error;if("object"===typeof t&&null!==t){var n=t.name,e=t.message;if("string"===typeof e&&e.length>0)return h.a.createElement(f.a,{message:n,description:e,type:"error",showIcon:!0})}return null}},{key:"renderData",value:function(){var t=this.state,n=t.name,e=t.timestamp;return h.a.createElement("div",null,h.a.createElement("h5",null,"Name"),h.a.createElement("h4",null,n),h.a.createElement("h5",null,"Last transaction on"),h.a.createElement("h4",null,e),h.a.createElement("div",{className:"mb-5"}),this.renderList())}},{key:"renderList",value:function(){var t=this.state.history;if(Array.isArray(t)&&t.length>0){var n=t.reverse().map(function(t,n){var e=Object(l.a)({},t);return e.key="".concat(n),e});return h.a.createElement(b.a,{dataSource:n,columns:[{key:"from",dataIndex:"from",title:"From"},{key:"to",dataIndex:"to",title:"To"},{key:"amount",dataIndex:"amount",title:"Amount"}]})}return h.a.createElement(f.a,{message:"Empty",type:"info",showIcon:!0})}},{key:"render",value:function(){return this.state.redirect?h.a.createElement(v.a,{to:{pathname:"/login"}}):h.a.createElement("div",{className:"content"},h.a.createElement(p.a,null,h.a.createElement(p.a.Item,null,"Home"),h.a.createElement(p.a.Item,null,"History")),h.a.createElement("div",{className:"main-content"},h.a.createElement("h1",null,"History"),this.renderError(),this.renderData()))}}]),n}(h.a.Component)},338:function(t,n,e){"use strict";e.r(n);var l=e(1),a=e.n(l),u=e(65),c=e(22);n.default=function(t){return localStorage.removeItem(c.a.auth.username),a.a.createElement(u.a,{to:{pathname:"/login"}})}},339:function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return j});var l=e(17),a=e(18),u=e(20),c=e(19),i=e(21),m=e(1),y=e.n(m),h=e(34),v=e(65),f=e(347),b=e(89),p=e(22),E={message:"Free Coins",description:"Sign up and get 20 coins for free as your sign up bonus"},j=function(t){function n(){var t,e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),m=0;m<a;m++)i[m]=arguments[m];return(e=Object(u.a)(this,(t=Object(c.a)(n)).call.apply(t,[this].concat(i)))).state={},e.handleChange=function(t,n){"object"===typeof t&&null!==t&&e.setState({value:t})},e.fetchAddresses=function(){},e.validate=function(){var t=e.state.value,n=[];if("object"===typeof t&&null!==t){var l=t.username,a=t.password,u=t.confirmPassword;if("string"===typeof l&&l.length>0)if("string"===typeof a&&a.length>0)if("string"===typeof u&&u.length>0){if(a===u)return e.setState({errorMessages:n}),!0;n.push("Please confirm your password again.")}else n.push("Please enter password for confirmation");else n.push("Please enter password");else n.push("Please enter username")}else n.push("Unrecognized error. Please try again.");return e.setState({errorMessages:n}),!1},e.signUp=function(){var t=e.state.value;if(e.validate()){fetch("http://localhost:5000/register",{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(t){return t.json()}).then(function(t){if("object"===typeof t&&null!==t){var n=t.status,l=t.message;if(n)e.setState({message:l},e.redirectToLogin);else{var a=[];a.push(l),e.setState({errorMessages:a})}}})}},e.redirectToLogin=function(){e.setState({redirectToLogin:!0})},e.handleSubmit=function(t){t.preventDefault(),e.signUp()},e}return Object(i.a)(n,t),Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=p.a.auth,n={username:localStorage.getItem(t.username)},e=[{key:t.username,label:"Username",placeholder:"Username"},{key:t.password,label:"Password",type:"password",placeholder:"Password"},{key:t.confirmPassword,label:"Confirm Password",type:"password",placeholder:"Confirm Password"}];this.setState({value:n,list:e})}},{key:"renderMessage",value:function(){var t=this.state,n=t.message,e=t.errorMessages;return"string"===typeof n&&n.length>0?y.a.createElement(h.a,{message:n,type:"success",className:"text-center mb-4",showIcon:!0}):Array.isArray(e)&&e.length>0?e.map(function(t,n){return y.a.createElement(h.a,{key:n,type:"error",message:t,className:"text-center mb-3",showIcon:!0})}):null}},{key:"render",value:function(){var t=this.state,n=t.list,e=t.value;return t.redirectToLogin?y.a.createElement(v.a,{to:{pathname:"/login",state:{value:e}}}):y.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280},className:"mt-5"},y.a.createElement("h1",{className:"text-center mb-3"},y.a.createElement(f.a,{to:"login"},"Login"),y.a.createElement("span",null," / "),y.a.createElement("span",null,"Sign Up")),y.a.createElement(h.a,Object.assign({},E,{type:"info",className:"text-center mb-4",showIcon:!0})),this.renderMessage(),y.a.createElement(b.a,{list:n,value:e,submitLabel:"Sign up",onChange:this.handleChange,onSubmit:this.handleSubmit}))}}]),n}(y.a.Component)},340:function(t,n,e){},343:function(t,n,e){},345:function(t,n,e){"use strict";e.r(n);var l=e(1),a=e.n(l),u=e(7),c=e.n(u),i=(e(178),e(17)),m=e(18),y=e(20),h=e(19),v=e(21),f=e(350),b=e(352),p=e(353),E=e(354),j=e(346),k=e(10),S=e(347),O=e(22),C=function(t){var n=O.a.info,e=n.icon,l=n.name;return a.a.createElement("div",{className:"logo"},e," ",l)},I=function(t){function n(){var t,e;Object(i.a)(this,n);for(var l=arguments.length,a=new Array(l),u=0;u<l;u++)a[u]=arguments[u];return(e=Object(y.a)(this,(t=Object(h.a)(n)).call.apply(t,[this].concat(a)))).state={},e}return Object(v.a)(n,t),Object(m.a)(n,[{key:"componentDidMount",value:function(){}},{key:"renderMenu",value:function(){var t=localStorage.getItem(O.a.auth.username);if("string"===typeof t&&t.length>0){var n=O.a.modules,e=this.props.openDrawer;return a.a.createElement(a.a.Fragment,null,a.a.createElement(j.a,{theme:"light",mode:"horizontal",style:{lineHeight:"63px"}},n.map(function(t,n){return a.a.createElement(j.a.Item,{key:"".concat(n)},a.a.createElement(S.a,{to:"/".concat(t.key)},t.name))})),a.a.createElement(j.a,{theme:"light",mode:"horizontal",style:{lineHeight:"63px"},className:"drawer-toggle"},a.a.createElement(j.a.Item,{key:"toggle",className:"float-right",onClick:e},a.a.createElement(k.a,{type:"bars"}))))}return null}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(C,null),this.renderMenu())}}]),n}(a.a.Component),N=e(119),A=e(351),D=function(t){var n=t.visible,e=t.closeDrawer,l=O.a.modules;return a.a.createElement(A.a,{title:"Menu",placement:"right",closable:!0,onClose:e,visible:n},a.a.createElement(j.a,{mode:"inline",defaultOpenKeys:["nav"]},l.map(function(t,n){var e=t.key,l=t.name;return a.a.createElement(j.a.Item,{key:e,className:""},a.a.createElement(S.a,{to:"/".concat(e)},l))})))},x={account:e(288),transfer:e(289),history:e(290),login:e(119),logout:e(338),signup:e(339)},o=function(t){function n(){var t,e;Object(i.a)(this,n);for(var l=arguments.length,a=new Array(l),u=0;u<l;u++)a[u]=arguments[u];return(e=Object(y.a)(this,(t=Object(h.a)(n)).call.apply(t,[this].concat(a)))).state={},e}return Object(v.a)(n,t),Object(m.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return a.a.createElement("div",{className:"content"},a.a.createElement("h1",null,"Page not found"),a.a.createElement("div",{className:"main-content"},a.a.createElement("p",null,"404 - Page not found")))}}]),n}(a.a.Component),T=function(t){function n(){var t,e;Object(i.a)(this,n);for(var l=arguments.length,a=new Array(l),u=0;u<l;u++)a[u]=arguments[u];return(e=Object(y.a)(this,(t=Object(h.a)(n)).call.apply(t,[this].concat(a)))).state={},e}return Object(v.a)(n,t),Object(m.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.props.match.params.key;if("string"===typeof t){var n=x[t];if("object"===typeof n&&null!==n){var e=n.default;if("function"===typeof e||"object"===typeof e&&null!==e)return a.a.createElement(e,this.props)}}return a.a.createElement(o,this.props)}}]),n}(a.a.Component),L=function(t){var n=O.a.info,e=n.name,l=n.by,u=(new Date).getFullYear();return a.a.createElement("div",null,e," \xa9 ",u," ",l)},H=(e(340),e(343),function(t){function n(){var t,e;Object(i.a)(this,n);for(var l=arguments.length,a=new Array(l),u=0;u<l;u++)a[u]=arguments[u];return(e=Object(y.a)(this,(t=Object(h.a)(n)).call.apply(t,[this].concat(a)))).state={},e.openDrawer=function(){e.setState({drawer:!0})},e.closeDrawer=function(){e.setState({drawer:!1})},e}return Object(v.a)(n,t),Object(m.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.state.drawer;return a.a.createElement(b.a,null,a.a.createElement(f.a,null,a.a.createElement(f.a.Header,null,a.a.createElement(I,{openDrawer:this.openDrawer})),a.a.createElement(D,{visible:t,closeDrawer:this.closeDrawer}),a.a.createElement(f.a.Content,null,a.a.createElement(p.a,null,a.a.createElement(E.a,{path:"/:key",component:T}),a.a.createElement(E.a,{path:"/",component:N.default}))),a.a.createElement(f.a.Footer,null,a.a.createElement(L,null))))}}]),n}(a.a.Component)),F=function(t){function n(){return Object(i.a)(this,n),Object(y.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(v.a)(n,t),Object(m.a)(n,[{key:"render",value:function(){return a.a.createElement(H,null)}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},89:function(t,n,e){"use strict";e.d(n,"a",function(){return p});var l=e(17),a=e(18),u=e(20),c=e(19),i=e(21),m=e(1),y=e.n(m),h=e(124),v=e(125),f=e(41),b={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:12}}},p=function(t){function n(){var t,e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),m=0;m<a;m++)i[m]=arguments[m];return(e=Object(u.a)(this,(t=Object(c.a)(n)).call.apply(t,[this].concat(i)))).state={},e.handleChange=function(t,n){var l=e.props,a=l.onChange,u=l.value,c=void 0===u?{}:u;"function"===typeof a&&(c[t]=n,a(c,t))},e}return Object(i.a)(n,t),Object(a.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this,n=this.props,e=n.onSubmit,l=n.list,a=n.className,u=n.submitLabel,c=n.value,i=void 0===c?{}:c;return y.a.createElement(h.a,{onSubmit:e,className:"login-form ".concat(a||"")},Array.isArray(l)&&l.length>0&&l.map(function(n,e){var l=n.key,a=n.label,u=n.placeholder,c=n.type;return y.a.createElement(h.a.Item,Object.assign({key:e},b,{label:a}),y.a.createElement(v.a,{type:c||"text",placeholder:u,value:i[l],onChange:function(n){var e=n.target.value;t.handleChange(l,e)}}))}),y.a.createElement(h.a.Item,{wrapperCol:{span:12,offset:5}},y.a.createElement(f.a,{type:"primary",htmlType:"submit"},u||"Submit")))}}]),n}(y.a.Component)}},[[173,2,1]]]);
//# sourceMappingURL=main.d21127fa.chunk.js.map