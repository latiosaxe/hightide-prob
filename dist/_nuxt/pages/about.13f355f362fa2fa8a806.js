webpackJsonp([5],{GRg3:function(t,e,i){"use strict";e.a={props:["title","link","image","footnote"]}},HI3z:function(t,e,i){"use strict";var o=function(){var t=this.$createElement;this._self._c;return this._m(0)},r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"global_loader"},[e("img",{attrs:{src:i("O8Lb")}})])}];o._withStripped=!0;var s={render:o,staticRenderFns:r};e.a=s},O8Lb:function(t,e,i){t.exports=i.p+"img/palm.f89d376.svg"},PWRz:function(t,e,i){"use strict";var o=i("HI3z"),r=i("VU/8")(null,o.a,!1,null,null,null);r.options.__file="components/Loading.vue",e.a=r.exports},YGHj:function(t,e,i){"use strict";var o=i("jL1K"),r=i("PWRz");e.a={components:{FeaturedWork:o.a,Loading:r.a},data:function(){return{isMobile:!1}},mounted:function(){var t=this;document.querySelector("video").play(),this.isMobile=Boolean(navigator.userAgent.match(/Mobi/)),window.addEventListener("resize",function(){t.isMobile=window.innerWidth<500})},computed:{section:function(){return{page_about_heroes_txt:this.$store.getters.content.page_about[0].body.filter(function(t){return"heroes_texts"===t.slice_type}).map(function(t){return t.items})[0].map(function(t){return t.hero[0].text}),page_about_heroe_video:this.$store.getters.content.page_about[0].body.filter(function(t){return"hero_video"===t.slice_type})[0].items.map(function(t){return t.hero_video.url}),recognition:this.$store.getters.content.basic_link.map(function(t,e){return{title:t.title[0].text,section:t.section,link:t.link,index:e}}).filter(function(t){return"recognition"===t.section}),brands:this.$store.getters.content.brand,capacities:this.$store.getters.content.capacity.map(function(t,e){return{title:t.title[0].text,html:t.description[0].text,index:e}}),careers:this.$store.getters.content.careers.map(function(t,e){return{title:t.position[0].text,html:t.description[0].text,index:e,link:t.link.url?t.link.url:""}}),our_difference:this.$store.getters.content.our_difference.map(function(t,e){return{title:t.title[0].text,html:t.description[0].text,index:e}}),work:this.$store.getters.content.work.filter(function(t){return"Featured"!==t.featured}),work_featured:this.$store.getters.content.work.filter(function(t){return"Featured"===t.featured})}}}}},hSk2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("YGHj"),r=i("lZJo"),s=i("VU/8")(o.a,r.a,!1,null,null,null);s.options.__file="pages/about.vue",e.default=s.exports},jL1K:function(t,e,i){"use strict";var o=i("GRg3"),r=i("wDSu"),s=i("VU/8")(o.a,r.a,!1,null,null,null);s.options.__file="components/FeaturedWork.vue",e.a=s.exports},lZJo:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"site__about"},[t.section?i("div",{},[i("b-container",[t.section.page_about_heroes_txt?i("HeroText",{attrs:{"hero-text":t.section.page_about_heroes_txt[0]}}):t._e()],1),t.section.work_featured&&t.section.work_featured.length>0?i("FeaturedWork",{staticClass:"margin-bottom-60",attrs:{image:t.section.work_featured[0].image.url}}):t._e(),i("b-container",{staticClass:"margin-bottom-60"},[i("b-row",{staticClass:"margin-bottom-20"},[i("b-col",[i("p",{staticClass:"site__about__title"},[t._v("Our Difference")])])],1),i("ToggleTextList",{staticClass:"item-border-top margin-bottom-60",attrs:{list:t.section.our_difference,name:"our_difference",columns:2,collapsible:!1}}),i("b-row",{staticClass:"margin-bottom-20"},[i("b-col",{staticClass:"col-hero"},[t.section.work_featured&&t.section.work_featured.length>0?i("FeaturedWork",{attrs:{image:t.section.work_featured[0].image.url}}):t._e()],1),i("b-col",{staticClass:"col-hero"},[t.section.work_featured&&t.section.work_featured.length>0?i("FeaturedWork",{attrs:{image:t.section.work_featured[0].image.url}}):t._e()],1)],1)],1),i("b-container",[t.section.page_about_heroes_txt?i("HeroText",{attrs:{"hero-text":t.section.page_about_heroes_txt[1]}}):t._e(),i("b-row",{staticClass:"margin-bottom-20"},[i("b-col",[i("p",{},[t._v("Clients")])])],1),i("div",{staticClass:"site__grid_logos"},[i("b-container",t._l(Math.ceil(t.section.brands.length/3),function(e){return i("b-row",{key:"brand"+e,staticClass:"margin-bottom-80"},t._l(t.section.brands.slice(3*(e-1),3*e),function(t){return i("b-col",{key:"brand_image"+e+t.name[0].text},[i("img",{attrs:{src:t.logo.url,alt:t.name[0].text}})])}))}))],1)],1),t.section.work_featured&&t.section.work_featured.length>0?i("FeaturedWork",{staticClass:"margin-bottom-60",attrs:{image:t.section.work_featured[0].image.url}}):t._e(),i("b-container",[i("b-row",{staticClass:"site__home__capabilities"},[i("b-col",{staticClass:"col_underline"},[i("p",{staticClass:"head site__home__title"},[t._v("What We Do")])])],1),i("ToggleTextList",{staticClass:"item-border-top margin-bottom-60",class:{"not-displayed":!t.isMobile},attrs:{list:t.section.capacities,name:"capacities_mobile",columns:1,collapsible:!0}}),i("ToggleTextList",{staticClass:"item-border-top margin-bottom-60",class:{"not-displayed":t.isMobile},attrs:{list:t.section.capacities,name:"capacities_desktop",columns:2,collapsible:!1}}),i("video",{staticClass:"margin-bottom-60",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},t._l(t.section.page_about_heroe_video,function(t,e){return i("source",{key:e+"_video",attrs:{src:t}})})),i("ButtonArrowList",{staticClass:"margin-bottom-60",attrs:{title:"Recognition",list:t.section.recognition,columns:2}}),t.section.work_featured&&t.section.work_featured.length>0?i("FeaturedWork",{staticClass:"margin-bottom-60",attrs:{image:t.section.work_featured[0].image.url}}):t._e(),i("b-row",{staticClass:"margin-bottom-20"},[i("b-col",[i("p",{staticClass:"site__home__title"},[t._v("Careers")])])],1),i("div",{staticClass:"site__careers margin-bottom-60"},[i("div",{staticClass:"single"},[i("ToggleTextList",{attrs:{list:t.section.careers,name:"careers",columns:1}})],1)])],1)],1):i("div",[i("Loading")],1)])};o._withStripped=!0;var r={render:o,staticRenderFns:[]};e.a=r},wDSu:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"featured__work"},[i("b-container",[t.link&&t.title?i("b-row",{staticClass:"margin-bottom-20"},[i("b-col",[i("p",{staticClass:"site__home__title"},[t._v("Featured Work")])]),i("b-col",{staticClass:"text-right"},[i("ButtonArrow",{attrs:{text:t.title,link:t.link}})],1)],1):t._e()],1),i("div",{staticClass:"featured__work__hero_image",style:{"background-image":"url("+t.image+")"}}),i("span",{staticClass:"featured__work__footnote"},[t._v(t._s(t.footnote))])],1)};o._withStripped=!0;var r={render:o,staticRenderFns:[]};e.a=r}});