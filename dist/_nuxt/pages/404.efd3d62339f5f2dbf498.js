webpackJsonp([8],{"1MQc":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("A0gU"),a=r("Bm4a"),n=r("VU/8")(s.a,a.a,!1,null,null,null);n.options.__file="pages/404.vue",e.default=n.exports},A0gU:function(t,e,r){"use strict";var s=r("nfdy");e.a={props:["error"],layout:"default",data:function(){return{message:"",errorImageSrc:""}},mounted:function(){console.log("store:",this.$store.getters.content),this.errorImageSrc=this.$store.getters.content.error_messages[0].error_image.url,this.message=s.a.formatContent(this.$store.getters.content.error_messages[0].message,!0)}}},Bm4a:function(t,e,r){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"site__error container"},[e("script",{attrs:{type:"text/javascript"}},[this._v("\n    console.log('path:', window.location.pathname );\n    if (window.location.pathname !== '/404') {\n      window.location.href = '/404';\n    }\n  ")]),e("HeroText",{attrs:{"hero-text":this.message}}),e("div",{staticClass:"error_image_container"},[e("img",{staticClass:"error_image",attrs:{alt:this.message,src:this.errorImageSrc}})])],1)};s._withStripped=!0;var a={render:s,staticRenderFns:[]};e.a=a}});