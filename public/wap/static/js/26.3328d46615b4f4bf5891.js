webpackJsonp([26],{"HeT/":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={props:{payments:{type:[Array,Object],default:function(){return[]}},user:{type:Object,default:function(){return{}}}},methods:{payment:function(t){this.$emit("pay",t)}}},n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.payments.length?r("div",t._l(t.payments,function(e,n){return r("div",{key:n,staticClass:"payment",on:{click:function(a){t.payment(e.code)}}},[r("img",{staticClass:"payment-img",attrs:{src:e.img}}),t._v(" "),r("div",{staticClass:"payment-left"},[r("h3",[t._v(t._s(e.name))]),t._v(" "),"balancepay"===e.code?r("p",[t._v("当前余额: "+t._s(t.user.balance))]):r("p",[t._v(t._s(e.memo))])]),t._v(" "),r("img",{staticClass:"right-img",attrs:{src:a("oenc")}})])}),0):t._e()},staticRenderFns:[]};var s={components:{payment:a("C7Lr")(r,n,!1,function(t){a("s8Sz")},null,null).exports},data:function(){return{orderId:this.$route.query.order_id,order_amount:"",payments:[],userInfo:{}}},created:function(){this.orderDetail(),this.getPaymentType(),this.getUserInfo()},methods:{orderDetail:function(){var t=this;this.$api.orderDetail({order_id:this.orderId},function(e){t.order_amount=e.data.order_amount})},getPaymentType:function(){var t=this;this.$api.paymentList({},function(e){var a=e.data;for(var r in a)a[r].img="./static/image/"+a[r].code+".png";t.payments=a})},getUserInfo:function(){var t=this;this.$api.userInfo({},function(e){e.status&&(t.userInfo=e.data)})},pay:function(t){var e=this;if("wechatpay"===t)if(this.GLOBAL.isWeiXinBrowser()){var a={ids:this.orderId,payment_code:t,payment_type:1,params:{trade_type:"JSAPI_OFFICIAL"}};this.$api.pay(a,function(t){if(t.status){var a=t.data,r=e;WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:a.appid,timeStamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:a.signType,paySign:a.paySign},function(t){"get_brand_wcpay_request:ok"===t.err_msg&&r.$router.replace({path:"/payresult",query:{order_id:r.orderId}})})}})}else{var r={ids:this.orderId,payment_code:t,payment_type:1,params:{trade_type:"MWEB",return_url:this.GLOBAL.locationHost()+"/#/payresult?order_id="+this.orderId}};this.$api.pay(r,function(t){t.status?window.location.href=t.data.mweb_url:e.$dialog.alert({mes:t.msg})})}else if("alipay"===t){var n={ids:this.orderId,payment_code:t,payment_type:1,params:{trade_type:"WAP",return_url:this.GLOBAL.locationHost()+"/#/payresult?order_id="+this.orderId}};this.$api.pay(n,function(t){t.status&&e.StandardPost(t.data.url,t.data.data)})}else if("balancepay"===t){var s={ids:this.orderId,payment_code:t,payment_type:1};this.$api.pay(s,function(t){t.status&&e.$router.replace({path:"/payresult",query:{order_id:e.orderId}})})}else"offline"===t&&this.$dialog.confirm({title:"线下支付说明",mes:"请联系客服进行线下支付",opts:[{txt:"订单详情",color:!1,callback:function(){e.$router.push({path:"/orderdetail",query:{order_id:e.orderId}})}},{txt:"继续购物",color:!0,callback:function(){e.$router.push("/index")}}]})},StandardPost:function(t,e){var a=document.createElement("form");a.id="aliPay",a.methods="post",a.action=t,a.target="_self";var r=[];for(var n in e)r[n]=document.createElement("input"),r[n].type="hidden",r[n].name=n,r[n].value=e[n],a.appendChild(r[n]);a.addEventListener("submit",function(){},!1),document.body.appendChild(a),a.dispatchEvent(new Event("submit")),a.submit(),document.body.removeChild(a)}},watch:{}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cashierdesk"},[a("yd-cell-group",[a("yd-cell-item",[a("span",{attrs:{slot:"left"},slot:"left"},[t._v("订单编号")]),t._v(" "),a("span",{attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.orderId))])]),t._v(" "),a("yd-cell-item",[a("span",{attrs:{slot:"left"},slot:"left"},[t._v("订单金额")]),t._v(" "),a("span",{attrs:{slot:"right"},slot:"right"},[t._v("￥"+t._s(t.order_amount))])])],1),t._v(" "),a("payment",{attrs:{payments:t.payments,user:t.userInfo},on:{pay:t.pay}})],1)},staticRenderFns:[]},o=a("C7Lr")(s,i,!1,null,null,null);e.default=o.exports},s8Sz:function(t,e){}});
//# sourceMappingURL=26.3328d46615b4f4bf5891.js.map