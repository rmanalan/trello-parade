(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(40)},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),s=a(19),i=a(20),o=a(23),u=a(21),d=a(24),m=a(3),p=a.n(m);var h=function(e){var t=e.lists,a=e.onChange;return r.a.createElement("div",{className:"list-selector"},r.a.createElement("select",{name:"selected-list",onChange:a},r.a.createElement("option",{value:""},"Select a list to present..."),t.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})))};var v=function(e){var t=this,a=e.cards,n=e.cardOnDisplay,c=e.onSelect;return r.a.createElement("ul",{className:"parade-queue"},a.map(function(e){return r.a.createElement("li",{key:e.id,className:"card ".concat(n&&e.id===n.id?"selected-card":"")},r.a.createElement("a",{href:"#".concat(e.id),onClick:c.bind(t,e)},e.name))}))};var f=function(e){var t=e.cards,a=e.onSelect,n=e.cardOnDisplay;return r.a.createElement("div",{className:"parade-route box"},r.a.createElement(v,{cards:t,onSelect:a,cardOnDisplay:n}))},w=a(22),y=a.n(w),E=/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/([\0-\uFFFF]+)$/im,b=/^https:\/\/trello-attachments\.s3\.amazonaws\.com\/(.+).(mov|mp4|ogv|webm|m3u8|mpd)$/;function g(e){var t;return(t=new URL(e).searchParams.get("v"))||(t=(t=e.match(E)[4])?t.split("=").slice(-1)[0]:null),t}function O(){return r.a.createElement("div",{className:"row center-xs middle-xs presenting-live"},r.a.createElement("div",{className:"col-xs-6"},r.a.createElement("div",{className:"box"},"No video attached. Presenting live!")))}var S=function(e){var t,a,n=e.card,c=p.a.find(n.attachments,function(e){return E.test(e.url)});if(c&&(t=g(c.url)),!t){var l=E.test(n.desc)?n.desc.match(E)[0]:null;t=l?g(l):null}return t||(a=p.a.find(n.attachments,function(e){return b.test(e.url)})),console.log(t,a),r.a.createElement(r.a.Fragment,null,t&&!a?r.a.createElement("iframe",{className:"vid",title:n.name,src:"https://www.youtube.com/embed/".concat(t,"?autoplay=1"),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen",allowFullScreen:!0}):!t&&a?r.a.createElement(y.a,{url:a.url,playing:!0,controls:!0,width:"100%",height:"100%"}):r.a.createElement(O,null))},D=(a(39),window.TrelloPowerUp.iframe()),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={lists:[],selectedList:null,cards:[],cardOnDisplay:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;D.lists("all").then(function(t){return e.setState({lists:t})})}},{key:"onListSelect",value:function(e){if(e.currentTarget.value){var t=Object(m.find)(this.state.lists,{id:e.currentTarget.value});this.setState({selectedList:e.currentTarget.value,cards:t.cards})}else this.setState({selectedList:null,cards:[],cardsOnDisplay:null})}},{key:"onCardSelect",value:function(e){this.setState({cardOnDisplay:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app row"},r.a.createElement("div",{className:"card-on-display col-xs-9"},this.state.cardOnDisplay?r.a.createElement(S,{card:this.state.cardOnDisplay}):null),r.a.createElement("div",{className:"sidebar col-xs-3"},r.a.createElement(h,{lists:this.state.lists,cardOnDisplay:this.state.cardOnDisplay,onChange:this.onListSelect.bind(this)}),r.a.createElement(f,{cards:this.state.cards,onSelect:this.onCardSelect.bind(this),cardOnDisplay:this.state.cardOnDisplay})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.cffae0d0.chunk.js.map