(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"8b24":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show?s("q-page",{staticClass:"flex justify-center q-pt-xl"},[s("div",{staticClass:"column justify-between no-wrap custom_contained full-width"},[s("search-form"),t.error?s("div",{staticClass:"flex flex-center text-h4"},[t._v("No characters to show")]):s("card-list",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],staticClass:"q-mt-xl",attrs:{list:t.results}}),s("div",{staticClass:"flex flex-center"},[s("q-circular-progress",{directives:[{name:"show",rawName:"v-show",value:!t.showList,expression:"!showList"}],attrs:{indeterminate:"",size:"70px",thickness:.22,color:"primary"}})],1),s("div",{staticClass:"q-pa-lg flex flex-center"},[s("q-pagination",{attrs:{max:t.info.pages,"max-pages":7,"direction-links":"","active-color":"teal-8"},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}})],1)],1)]):t._e()},a=[],i=s("ded3"),n=s.n(i),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column q-pt-lg custom_contained",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendData()}}},[s("q-input",{attrs:{outlined:"","bottom-slots":"",label:"Search..."},scopedSlots:t._u([{key:"append",fn:function(){return[t.filter.search?s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){return t.cleanField()}}}):t._e(),s("q-icon",{staticClass:"cursor-pointer q-px-sm",attrs:{name:"search"},on:{click:function(e){return t.sendData()}}})]},proxy:!0}]),model:{value:t.filter.search,callback:function(e){t.$set(t.filter,"search",e)},expression:"filter.search"}}),s("div",{staticClass:"row items-center q-gutter-md"},[s("div",[t._v("Filter by :")]),s("q-select",{staticClass:"custom_select",attrs:{outlined:"",options:t.statusList,dense:t.dense,label:"Status"},scopedSlots:t._u([t.filter.status?{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){e.stopPropagation(),t.filter.status=""}}})]},proxy:!0}:null],null,!0),model:{value:t.filter.status,callback:function(e){t.$set(t.filter,"status",e)},expression:"filter.status"}}),s("q-select",{staticClass:"custom_select",attrs:{outlined:"",options:t.genderList,dense:t.dense,label:"Gender"},scopedSlots:t._u([t.filter.gender?{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){e.stopPropagation(),t.filter.gender=""}}})]},proxy:!0}:null],null,!0),model:{value:t.filter.gender,callback:function(e){t.$set(t.filter,"gender",e)},expression:"filter.gender"}})],1)],1)},l=[],o=s("2f62"),u={data(){return{dense:!0,error:{state:!1,msg:""},filter:{search:"",status:"",gender:""},genderList:["Female","Male","Genderless","Unknown"],statusList:["Alive","Dead","unknown"],time:1500}},methods:n()(n()({},Object(o["b"])({getFilterCharacterList:"getFilterCharacterList",getCharactersList:"getCharactersList"})),{},{async sendData(){if(Object.values(this.filter).some((t=>""!==t))){await this.getFilterCharacterList(this.filter)}else this.getCharactersList()},cleanField(){this.filter.search="",this.error.state=!1,this.error.msg=""}})},d=u,h=s("2877"),f=s("27f9"),p=s("0016"),m=s("ddd8"),g=s("eebe"),C=s.n(g),v=Object(h["a"])(d,c,l,!1,null,null,null),x=v.exports;C()(v,"components",{QInput:f["a"],QIcon:p["a"],QSelect:m["a"]});var w=s("c995"),_={name:"PageIndex",data(){return{current:1,show:!1,showList:!0,baseUrl:"https://rickandmortyapi.com/api/character/",customUrl:""}},computed:n()({},Object(o["d"])({info:"info",results:"results",currentPage:"currentPage",filterResults:"filterResults",error:"error"})),watch:{current(t){this.filterResults?this.getFilterCharacterList(t):(this.getData(),this.setCurrentPage(t))}},components:{"search-form":x,"card-list":w["a"]},beforeMount(){this.show=!1,!this.results.length||this.filterResults?this.getData():this.current=this.currentPage,this.show=!0},methods:n()(n()(n()({},Object(o["b"])({getCharactersList:"getCharactersList",getFilterCharacterList:"getFilterCharacterList"})),Object(o["c"])({setCurrentPage:"SETCURRENTPAGE"})),{},{getData(){this.showList=!1;new Promise(((t,e)=>{this.getCharactersList(this.current).then((()=>t()))})).then((()=>{this.showList=!0}))}})},b=_,q=s("9989"),k=s("58ea"),y=s("3b16"),L=Object(h["a"])(b,r,a,!1,null,null,null);e["default"]=L.exports;C()(L,"components",{QPage:q["a"],QCircularProgress:k["a"],QPagination:y["a"]})},c995:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-center q-pt-lg custom_contained q-py-none"},[s("div",{staticClass:"flex justify-center q-gutter-xs-md q-gutter-lg full-width"},t._l(t.list,(function(e){return s("q-card",{key:e.id,staticClass:"custom_card shadow-4"},[s("router-link",{attrs:{to:"/character/"+e.id}},[s("q-img",{staticClass:"custom_card-img bg-secundary ",attrs:{src:e.image,"spinner-color":"primary"}}),s("q-card-section",{staticClass:"q-py-sm text-h6 custom_card-text"},[t._v("\n          "+t._s(e.name)+"\n        ")]),s("q-card-section",{staticClass:"q-pt-none custom_card-text"},[s("div",[s("span",{staticClass:"text-bold"},[t._v("Status: ")]),t._v(t._s(e.status))]),s("div",[s("span",{staticClass:"text-bold",attrs:{icon:"favorite"}},[t._v("Origin: ")]),t._v(t._s(e.origin.name))])])],1)],1)})),1)])},a=[],i={data(){return{}},props:["list"]},n=i,c=s("2877"),l=s("f09f"),o=s("068f"),u=s("a370"),d=s("eebe"),h=s.n(d),f=Object(c["a"])(n,r,a,!1,null,null,null);e["a"]=f.exports;h()(f,"components",{QCard:l["a"],QImg:o["a"],QCardSection:u["a"]})}}]);