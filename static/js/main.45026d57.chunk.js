(this.webpackJsonpemployed=this.webpackJsonpemployed||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),c=a(12),i=a(13),m=a(16),s=a(15);var d=function(e){return r.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)};var u=function(e){var t=e.filteredEmployee;return r.a.createElement("tbody",null,void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.login,a=e.name,n=e.picture,l=e.phone,o=e.email,c=e.dob;return r.a.createElement("tr",{key:t.uuid},r.a.createElement("td",{"data-th":"image"},r.a.createElement("img",{src:n.medium})),r.a.createElement("td",{"data-th":"name"},a.first," ",a.last),r.a.createElement("td",{"data-th":"phone"},l),r.a.createElement("td",{"data-th":"email"},o),r.a.createElement("td",{"data-th":"dob"},c.date))})):r.a.createElement(r.a.Fragment,null))};var h=function(e){var t=e.heading,a=e.filteredEmployee,n=e.handleSort;return r.a.createElement("div",null,r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,t.map((function(e){var t=e.name,a=e.width;return r.a.createElement("th",{className:"col",key:t,style:{width:a},onClick:function(){n(t.toLowerCase())}},r.a.createElement("span",{className:"pointer"}),t)})))),r.a.createElement(u,{filteredEmployee:a})))};var E=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:function(t){return e.searchEmployees(t)},name:"name",className:"form-control text-center",type:"text",placeholder:"Search Employee's",id:"search"})))};var p=function(e){return r.a.createElement("div",{className:"card-centered"},r.a.createElement("div",{className:"card-body text-center"},"Employee Registry"))},f=a(14),v=a.n(f),y=function(){return v.a.get("https://randomuser.me/api/?results=50&nat=us")},g=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={result:[{}],name:"",filteredEmployee:[{}],order:"descend"},e.heading=[{name:"image",width:"20%"},{name:"name",width:"20%"},{name:"email",width:"20%"},{name:"phone",width:"20%"},{name:"dob",width:"20%"}],e.handleInputChange=function(t){e.setState({name:t.target.value})},e.handleSort=function(t){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"})},e.searchEmployees=function(t){var a=t.target.value,n=e.state.result.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(a.toLowerCase())}));e.setState({filteredEmployee:n})},e.handleFormSubmit=function(t){t.preventDefault(),e.searchEmployees()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;y().then((function(t){return e.setState({result:t.data.results,filteredEmployee:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(p,null),r.a.createElement(E,{searchEmployees:this.searchEmployees,handleInputChange:this.handleInputChange}),r.a.createElement(h,{heading:this.heading,filteredEmployee:this.state.filteredEmployee,handleSort:this.handleSort}))}}]),a}(n.Component);var w=function(){return r.a.createElement("div",null,r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(39);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.45026d57.chunk.js.map