"use strict";(self.webpackChunkpersonal_site_react=self.webpackChunkpersonal_site_react||[]).push([[543],{5543:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var n=a(4165),r=a(5861),s=a(5671),c=a(3144),i=a(136),o=a(8557),l=a(7313),u=a(1172),m=a(6573),h=a(1652),g=a(1144),f=a(7009),p=a(5498),d=a(5532),Z=function(e){(0,i.Z)(a,e);var t=(0,o.Z)(a);function a(e){var n;return(0,s.Z)(this,a),(n=t.call(this,e)).state={images:[]},n}return(0,c.Z)(a,[{key:"componentDidMount",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t,a=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=u.parse(window.location.hash),m.Z.get("https://api.instagram.com/v1/users/self/media/recent",{params:{access_token:t.access_token}}).then((function(e){var t=e.data.data;t=t.filter((function(e){return e.tags.includes("showcase")})),a.setState({images:t})})).catch((function(e){console.log("Axios request failed: ".concat(e)),console.log(e.toJSON())}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.createElement(l.Fragment,null,l.createElement("div",{className:"photos"},l.createElement("div",{className:"tag-title"},l.createElement(h.Z,{target:"_blank",href:"https://www.instagram.com/realjohnnysharp/"},"@realjohnnysharp")),l.createElement(g.Z,{container:!0,className:"cards",direction:"row",justify:"center",alignItems:"center",spacing:1},0===this.state.images.length?l.createElement(f.Z,null,"Photos coming soon"):this.state.images.map((function(e){return l.createElement(g.Z,{key:e.id,item:!0,zeroMinWidth:!0},l.createElement(h.Z,{target:"_blank",href:e.link},l.createElement(p.Z,{className:"card",raised:!0,square:!0},l.createElement(d.Z,{className:"card-background",image:e.images.low_resolution.url,style:{height:e.images.low_resolution.height}}))))})))))}}]),a}(l.Component),k=Z}}]);