(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c55e2"],{"3f92":function(t,a,s){"use strict";s.r(a);var r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wrap"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[s("div",{staticClass:"loadingio-spinner-ripple-bzo8opf0rpm"},[s("div",{staticClass:"ldio-zifyp9wz5z"},[s("div"),s("div")])])]),s("div",{staticClass:"content"},[s("div",{staticClass:"cart-cont pt-3"},[t._m(0),s("div",{staticClass:"cart-order"},[s("table",{staticClass:"cart-order-table"},[t._m(1),t._l(t.orderData,(function(a,r){return s("tbody",{key:r},[s("tr",[s("td",{attrs:{colspan:"4"}},[s("div",{staticClass:"cart-order-table-title"},[s("img",{attrs:{src:a.product.image,alt:""}}),s("span",[t._v(t._s(a.product.title))])])]),s("td",{attrs:{align:"center"}},[t._v(t._s(a.qty))]),s("td",{attrs:{align:"center"}},[t._v(t._s(a.final_total))])])])}))],2)]),s("div",{staticClass:"cart-userinfo"},[s("div",{staticClass:"cart-userinfo-txt"},[s("div",[s("p",[t._v("姓名 :")]),s("span",[t._v(t._s(t.orderUser.name))])]),s("div",[s("p",[t._v("電話 :")]),s("span",[t._v(t._s(t.orderUser.tel))])]),s("div",[s("p",[t._v("地址 :")]),s("span",[t._v(t._s(t.orderUser.address))])]),s("div",[s("p",[t._v("備註 :")]),s("span",[t._v(t._s(t.data.message))])]),s("div",{staticClass:"paystate"},[t.isPay?s("div",{staticClass:"ispay"},[t._v("付款完成")]):s("div",{staticClass:"nopay"},[t._v("尚未付款")]),t.isPay?s("div",{staticClass:"payending"},[s("router-link",{attrs:{to:"/products/all"}},[t._v("再去逛逛")])],1):s("div",{staticClass:"paynow",on:{click:function(a){return t.payorder(t.data.id)}}},[t._v(" 點選付款 ")])])])])])])],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cart-cont-step"},[s("div",{staticClass:"cart-cont-step-1"},[t._v("1.確認商品")]),s("div",{staticClass:"cart-cont-step-2"},[t._v("2.填寫資料")]),s("div",{staticClass:"cart-cont-step-3 step_active"},[t._v("3.完成訂購")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("td",{attrs:{colspan:"4"}},[t._v("產品")]),s("td",{attrs:{align:"center"}},[t._v("數量")]),s("td",{attrs:{align:"center"}},[t._v("價格")])])}],i=(s("99af"),s("5530")),c=s("2f62"),d={name:"orderCheck",data:function(){return{data:[],orderData:[],orderUser:{},orderId:""}},methods:{getOrder:function(t){var a=this,s=this,r="".concat("https://vue-course-api.hexschool.io","/api/").concat("shiaurazer","/order/").concat(t);this.$store.dispatch("updateLoading",!0),this.$http.get(r).then((function(t){s.data=t.data.order,s.orderUser=t.data.order.user,s.orderData=t.data.order.products,a.$store.dispatch("products/getCart"),a.$store.dispatch("updateLoading",!1)}))},payorder:function(t){var a=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("shiaurazer","/pay/").concat(t);this.$http.post(s,t).then((function(s){console.log(s),s.data.success&&a.getOrder(t)}))}},computed:Object(i["a"])(Object(i["a"])({},Object(c["c"])(["isLoading"])),{},{isPay:function(){return this.data.is_paid}}),created:function(){this.orderId=this.$route.params.id,this.getOrder(this.orderId)}},n=d,o=s("2877"),p=Object(o["a"])(n,r,e,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0c55e2.7af0461f.js.map