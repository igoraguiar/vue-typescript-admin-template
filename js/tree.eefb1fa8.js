(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tree"],{"69dd":function(e,l,t){"use strict";t.r(l);var a=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"app-container"},[t("el-input",{staticStyle:{"margin-bottom":"30px"},attrs:{placeholder:"Filter keyword"},model:{value:e.filterText,callback:function(l){e.filterText=l},expression:"filterText"}}),t("el-tree",{ref:"tree2",staticClass:"filter-tree",attrs:{data:e.data2,props:e.defaultProps,"filter-node-method":e.filterNode,"default-expand-all":""}})],1)},r=[],i=t("d225"),n=t("b0b4"),d=t("308d"),o=t("6bb5"),c=t("4e2b"),b=t("9ab4"),s=t("60a3"),f=function(e){function l(){var e;return Object(i["a"])(this,l),e=Object(d["a"])(this,Object(o["a"])(l).apply(this,arguments)),e.filterText="",e.data2=[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}],e.defaultProps={children:"children",label:"label"},e}return Object(c["a"])(l,e),Object(n["a"])(l,[{key:"onFilterTextChange",value:function(e){this.$refs.tree2.filter(e)}},{key:"filterNode",value:function(e,l){return!e||l.label&&-1!==l.label.indexOf(e)}}]),l}(s["c"]);b["a"]([Object(s["d"])("filterText")],f.prototype,"onFilterTextChange",null),f=b["a"]([s["a"]],f);var u=f,p=u,h=t("0c7c"),v=Object(h["a"])(p,a,r,!1,null,null,null);l["default"]=v.exports}}]);
//# sourceMappingURL=tree.eefb1fa8.js.map