(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),l=a(4),i=a(5),s=a(7),u=a(6),c=a(8),h=a(1),p=a.n(h),m=function(e){var t=e.title,a=void 0===t?"no Title Provided":t,n=e.author,r=void 0===n?"No Author":n,l=e.pages,i=void 0===l?0:l,s=e.freeBookmark;return o.a.createElement("section",null,o.a.createElement("h2",null,a),o.a.createElement("p",null,"by: ",r),o.a.createElement("p",null,"Pages: ",i," page"),o.a.createElement("p",null,"Free Bookmark Today: ",s?"yes!":"no!"))},d=function(){return o.a.createElement("div",null,o.a.createElement("p",null,"The library is hiring. Go to www.library.com/jobs for more."))},g=function(){return o.a.createElement("div",null,o.a.createElement("p",null,"The library is not hiring. Check back later for more info."))},f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={open:!0,freeBookmark:!1,hiring:!0,data:[],loading:!1},a.toggleOpenClosed=function(){a.setState(function(e){return{open:!e.open}})},a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1").then(function(e){return e.json()}).then(function(t){return e.setState({data:t,loading:!1})})}},{key:"componentDidUpdate",value:function(){console.log("The component just updated")}},{key:"render",value:function(){var e=this;console.log(this.state);var t=this.props.books;return o.a.createElement("div",null,this.state.hiring?o.a.createElement(d,null):o.a.createElement(g,null),this.state.loading?"loading...":o.a.createElement("div",null,this.state.data.map(function(e){return o.a.createElement("div",{key:e.id},o.a.createElement("h3",null,"Library Product of the Week!"),o.a.createElement("h4",null,e.name),o.a.createElement("img",{alt:e.name,src:e.image,height:100}))})),o.a.createElement("h1",null,"The library is ",this.state.open?"open":"closed"),o.a.createElement("button",{onClick:this.toggleOpenClosed},"Change"),t.map(function(t,a){return o.a.createElement(m,{key:a,title:t.title,author:t.author,pages:t.pages,freeBookmark:e.state.freeBookmark})}))}}]),t}(o.a.Component);f.defaultProps={books:[{title:"Tahoe Tales",author:"Chet Whitley",pages:1e3}]},m.propTypes={title:p.a.string,author:p.a.string,pages:p.a.number,freeBookmark:p.a.bool};var k=f;Object(r.render)(o.a.createElement(k,{books:[{title:"Hunger",author:"Roxane Gay",pages:320},{title:"The Sun Also Rises",author:"Ernest Hemingway",pages:260},{title:"White Teeth",author:"Zadie Smith",pages:480},{title:"Cat's Cardle",author:"Kurt Vonnegut",pages:304}]}),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.72a33690.chunk.js.map