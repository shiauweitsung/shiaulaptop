(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd3f6"],{"2ad5":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"back-wrap"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[a("div",{staticClass:"loadingio-spinner-ripple-bzo8opf0rpm"},[a("div",{staticClass:"ldio-zifyp9wz5z"},[a("div"),a("div")])])]),a("h2",{staticClass:"back-title"},[t._v("產品列表")]),a("button",{staticClass:"main-btn",attrs:{type:"button","data-toggle":"modal"},on:{click:function(e){t.openModal({},t.productNew=!0)}}},[t._v(" 建立新產品 ")]),a("div",{staticClass:"back-products"},t._l(t.products,(function(e,o){return a("div",{key:o,staticClass:"back-products-item"},[a("div",{staticClass:"back-products-item-img"},[a("img",{attrs:{src:e.image,alt:""}})]),a("div",{staticClass:"back-products-item-info"},[a("p",{staticClass:"back-products-item-info-name"},[t._v(t._s(e.title))]),a("p",[t._v(t._s(e.description))]),a("p",[t._v("US "+t._s(e.price))]),a("p",[t._v(t._s(e.content))])]),a("button",{staticClass:"back-products-item-btn",on:{click:function(a){return t.editshow(e)}}},[a("svg",{attrs:{id:"Layer_1","enable-background":"new 0 0 512 512",height:"24",viewBox:"0 0 512 512",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{fill:"white",d:"m272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871c-11.049-3.53-21.784-7.986-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698c-5.337-10.313-9.792-21.046-13.323-32.097h-10.87c-25.988 0-47.133-21.144-47.133-47.133v-32.134c0-25.989 21.145-47.133 47.134-47.133h10.87c3.531-11.05 7.986-21.784 13.323-32.097l-7.704-7.703c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697c10.313-5.336 21.048-9.792 32.097-13.323v-10.87c0-25.989 21.144-47.133 47.134-47.133h32.133c25.989 0 47.133 21.144 47.133 47.133v10.871c11.049 3.53 21.784 7.986 32.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698c5.337 10.313 9.792 21.046 13.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87c-3.531 11.05-7.986 21.784-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697c-10.313 5.336-21.048 9.792-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zm-106.349-102.83c14.327 8.473 29.747 14.874 45.831 19.025 6.624 1.709 11.252 7.683 11.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148c0-6.841 4.628-12.815 11.252-14.524 16.084-4.151 31.504-10.552 45.831-19.025 5.895-3.486 13.4-2.538 18.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695c-4.842-4.842-5.79-12.348-2.305-18.242 8.473-14.326 14.873-29.746 19.024-45.831 1.71-6.624 7.684-11.251 14.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133h-22.147c-6.841 0-12.814-4.628-14.524-11.251-4.151-16.085-10.552-31.505-19.024-45.831-3.485-5.894-2.537-13.4 2.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695c-4.842 4.843-12.35 5.791-18.243 2.305-14.327-8.473-29.747-14.874-45.831-19.025-6.624-1.709-11.252-7.683-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148c0 6.841-4.628 12.815-11.252 14.524-16.084 4.151-31.504 10.552-45.831 19.025-5.896 3.485-13.401 2.537-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695c4.842 4.842 5.79 12.348 2.305 18.242-8.473 14.326-14.873 29.746-19.024 45.831-1.71 6.624-7.684 11.251-14.524 11.251h-22.148c-9.447.001-17.134 7.687-17.134 17.134v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147c6.841 0 12.814 4.628 14.524 11.251 4.151 16.085 10.552 31.505 19.024 45.831 3.485 5.894 2.537 13.4-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z"}}),a("path",{attrs:{fill:"white",d:"m256 367.4c-61.427 0-111.4-49.974-111.4-111.4s49.973-111.4 111.4-111.4 111.4 49.974 111.4 111.4-49.973 111.4-111.4 111.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z"}})])]),a("transition",{attrs:{name:"fade"}},[e.show?a("div",{staticClass:"back-products-item-btn-edit"},[a("button",{staticClass:"main-btn",on:{click:function(a){t.openModal(e,t.productNew=!1)}}},[t._v(" 修改 ")]),a("button",{staticClass:"main-btn",on:{click:function(a){return t.delProducts(e)}}},[t._v("刪除")])]):t._e()])],1)})),0),a("div",{staticClass:"modal fade",attrs:{id:"modalproducts",tabindex:"-1",role:"dialog","aria-labelledby":"productsLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body modal-products"},[a("form",{attrs:{action:""}},[a("div",{staticClass:"modal-products-img"},[a("div",[a("p",[t._v("上傳圖片網址 :")]),a("input",{ref:"file",attrs:{type:"file"},on:{change:t.updateFiled}}),a("label",{attrs:{for:"imgUrl"}},[t._v("網址 : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.image,expression:"image"}],attrs:{type:"text",id:"imgUrl"},domProps:{value:t.image},on:{input:function(e){e.target.composing||(t.image=e.target.value)}}})]),t.modalproduct.image?a("img",{attrs:{src:t.modalproduct.image,alt:""}}):t._e()]),a("div",{staticClass:"modal-products-title"},[a("label",{attrs:{for:"product-title"}},[t._v("名稱 : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",id:"product-title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),a("div",{staticClass:"modal-products-txt"},[a("div",{staticClass:"modal-products-txt-category"},[a("label",{attrs:{for:"product-category"}},[t._v("分類 : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],attrs:{type:"text",id:"product-category"},domProps:{value:t.category},on:{input:function(e){e.target.composing||(t.category=e.target.value)}}})]),a("div",{staticClass:"modal-products-txt-unit"},[a("label",{attrs:{for:"product-unit"}},[t._v("單位 : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.unit,expression:"unit"}],attrs:{type:"text",id:"product-unit"},domProps:{value:t.unit},on:{input:function(e){e.target.composing||(t.unit=e.target.value)}}})]),a("div",{staticClass:"modal-products-txt-price"},[a("label",{attrs:{for:"product-price"}},[t._v("價錢 : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],attrs:{type:"text",id:"product-price"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})]),a("div",{staticClass:"modal-products-txt-origin"},[a("label",{attrs:{for:"product-origin_price"}},[t._v("原價 : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.origin_price,expression:"origin_price"}],attrs:{type:"text",id:"product-origin_price"},domProps:{value:t.origin_price},on:{input:function(e){e.target.composing||(t.origin_price=e.target.value)}}})])]),a("div",{staticClass:"modal-products-desc"},[a("label",{attrs:{for:"product-description"}},[t._v("介紹 : ")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{cols:"40",rows:"10",type:"text",id:"product-description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),a("div",{staticClass:"modal-products-cont"},[a("label",{attrs:{for:"product-content"}},[t._v("內容 : ")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{cols:"40",rows:"10",type:"text",id:"product-content"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"main-btn",attrs:{type:"button"},on:{click:function(e){return t.updateProduct(t.modalproduct)}}},[t._v(" 完成 ")])])])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"productsLabel"}},[t._v("Modal title")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],c=(a("99af"),a("5530")),s=a("2f62"),r=a("5935"),d=Object(r["a"])({getterType:"backProducts/getMoudleProduct",mutationType:"backProducts/updateMoudle"}),n=d.mapFields,l={name:"backProducts",data:function(){return{productNew:!1}},methods:Object(c["a"])(Object(c["a"])({},Object(s["b"])("backProducts",["getProducts"])),{},{openModal:function(t,e){this.$store.dispatch("backProducts/openModal",{item:t,productNew:e})},editshow:function(t){this.$store.commit("backProducts/EDITSHOW",t)},updateFiled:function(){var t=this,e=this.$refs.file.files[0],a=this,o=new FormData;o.append("file-to-upload",e);var i="".concat("https://vue-course-api.hexschool.io","/api/").concat("shiaurazer","/admin/upload");this.$store.dispatch("updateLoading",!0),this.$http.post(i,o,{header:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log(e),e.data.success&&a.$store.commit("backProducts/UPDATEFILE",e.data.imageUrl),t.$store.dispatch("updateLoading",!1)}))},updateProduct:function(t){this.$store.dispatch("backProducts/updateProduct",t)},delProducts:function(t){this.$store.dispatch("backProducts/delProduct",t)},updateMoudleProduct:function(t){console.log(t),this.$store.commit("backProducts/UPDATEMOUDLEPRODUCT",t.target.value)}}),computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(s["c"])("backProducts",["products","modalproduct"])),Object(s["c"])(["isLoading"])),n(["title","image","unit","category","origin_price","price","description","content"])),created:function(){this.getProducts()}},u=l,p=a("2877"),m=Object(p["a"])(u,o,i,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0bd3f6.423a7a2f.js.map