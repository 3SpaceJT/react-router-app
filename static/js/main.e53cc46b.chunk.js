(this["webpackJsonpspa-adam"]=this["webpackJsonpspa-adam"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/poznanTrainStation.9884956f.jpg"},,,,,,function(e,a,t){e.exports=t.p+"static/media/poznan1.010f8a32.jpg"},function(e,a,t){e.exports=t.p+"static/media/poznan2.ad6e495b.jpg"},function(e,a,t){e.exports=t.p+"static/media/poznanCathedral.69d9f9ce.jpg"},,,function(e,a,t){e.exports=t(42)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),i=t.n(c),l=(t(30),t(8)),o=t(9),m=t(11),u=t(10),s=(t(31),t(3)),p=t(20),d=t.n(p),E=t(21),h=t.n(E),f=t(22),g=t.n(f),v=t(14),y=t.n(v),z=(t(32),t(6)),k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"gradient"}),r.a.createElement(z.e,null,r.a.createElement(z.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:h.a,alt:"Poznan Old Squer"})}}),r.a.createElement(z.c,{path:"/products",render:function(){return r.a.createElement("img",{src:d.a,alt:"Poznan Cathedral"})}}),r.a.createElement(z.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:g.a,alt:"Poznan Cathedral"})}}),r.a.createElement(z.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:y.a,alt:"Poznan Train Station"})}}),r.a.createElement(z.c,{render:function(){return r.a.createElement("img",{src:y.a,alt:"Poznan Train Station"})}})))},b=(t(38),[{name:"start",path:"/",exact:!0},{name:"produkt",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel administratora",path:"/admin"}]),j=function(){var e=b.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(s.c,{to:e.path,exact:!!e.exact&&e.exact},e.name))}));return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},x=(t(39),function(e){var a=e.title,t=e.author,n=e.text;return r.a.createElement("article",null,r.a.createElement("h3",null,a),r.a.createElement("h4",null,"Autor: ",t),r.a.createElement("p",null,n))}),w=[{id:1,title:"Zagadki Starego Rynku w Poznaniu",author:"Adam Granops",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In sed, quia unde sunt inventore quos perspiciatis minima totam asperiores. Pariatur dicta veniam dolore aspernatur saepe quis exercitationem distinctio placeat autem."},{id:2,title:"Nowa Podziemna Trasa na Pozna\u0144skiej Cytadeli",author:"Zenon Bagi\u0144ski",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In sed, quia unde sunt inventore quos perspiciatis minima totam asperiores. Pariatur dicta veniam dolore aspernatur saepe quis exercitationem distinctio placeat autem."},{id:3,title:"Nowe odkrycie archeologiczne na Ostrowie Tumskim",author:"Waldemar Kolasi\u0144ski",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In sed, quia unde sunt inventore quos perspiciatis minima totam asperiores. Pariatur dicta veniam dolore aspernatur saepe quis exercitationem distinctio placeat autem."}],O=function(){var e=w.map((function(e){return r.a.createElement(x,Object.assign({key:e.id},e))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"home"},r.a.createElement("h1",null,"Najnowsze Artyku\u0142y dotycz\u0105ce Poznania"),e))},N=(t(40),[{id:1,name:"Szlakiem dawnego Poznania"},{id:2,name:"Obiekty sakralne Starego Rynku"},{id:3,name:"Wodny szlak Warty"}]),P=function(){var e=N.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(s.b,{to:"/product/".concat(e.id)},e.name))}));return r.a.createElement("div",{className:"trips"},r.a.createElement("h1",null,"Lista proponowanych wycieczek"),r.a.createElement("ul",null,e))},S=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,e.id))},q=function(e){var a=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Opis Wycieczki"),r.a.createElement(S,{id:a.params.id}),r.a.createElement(s.b,{to:"/products"}," Powr\xf3t "))},C=(t(41),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={value:"",name:""},e.handleChange=function(a){"name"===a.target.className?e.setState({name:a.target.value}):e.setState({value:a.target.value})},e.handleSubmit=function(a){a.preventDefault(),e.setState({value:"",name:""})},e}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Napisz do nas"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt nobis, optio ad pariatur quibusdam quis amet quae voluptatum mollitia praesentium repudiandae repellat maiores veritatis corporis iusto maxime nostrum magni!"),r.a.createElement("textarea",{className:"name",value:this.state.name,onChange:this.handleChange,placeholder:"Twoje imi\u0119"}),r.a.createElement("textarea",{className:"message",value:this.state.value,onChange:this.handleChange,placeholder:"Napisz do nas:)"}),r.a.createElement("button",null,"Wyslij")),r.a.createElement(z.a,{when:this.state.value||this.state.name,message:"Rozpocz\u0105\u0142e\u015b wype\u0142nianie formularza. Czy na pewno chcesz opu\u015bci\u0107 stron\u0119?"})))}}]),t}(n.Component)),F=function(){return r.a.createElement(z.c,{render:function(){return r.a.createElement("h1",null,"Witamy w panelu administratora")}})},A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Error "))},T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Panel Logowania"))},W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.e,null,r.a.createElement(z.c,{path:"/",exact:!0,component:O}),r.a.createElement(z.c,{path:"/products",component:P}),r.a.createElement(z.c,{path:"/product/:id",component:q}),r.a.createElement(z.c,{path:"/contact",component:C}),r.a.createElement(z.c,{path:"/admin",component:F}),r.a.createElement(z.c,{path:"/login",component:T}),r.a.createElement(z.c,{path:"",component:A})))},L=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Nasze Wycieczki"),r.a.createElement("p",null,"Tel : 600 700 800"))}}]),t}(n.Component),I=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(k,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(j,null)),r.a.createElement("section",{className:"page"},r.a.createElement(W,null))),r.a.createElement("footer",null,r.a.createElement(L,null))))}}]),t}(n.Component);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.e53cc46b.chunk.js.map