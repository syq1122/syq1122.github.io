(function(e){function t(t){for(var r,s,i=t[0],l=t[1],c=t[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},o=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/cfptool/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("f0a0")},"2d19":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("9a0f"),a("3375"),a("c3fe"),a("2a28");var r=a("a593"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("keep-alive",[e.$route.meta.keepAlive?a("router-view"):e._e()],1),e.$route.meta.keepAlive?e._e():a("router-view")],1)},o=[],s={name:"App",components:{}},i=s,l=(a("034f"),a("5d22")),c=Object(l["a"])(i,n,o,!1,null,null,null),u=c.exports,d=(a("1e6a"),a("a81e")),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Myheader",{attrs:{title:e.$route.meta.title,params:e.headerParams}}),a("Scroller",[a("div",{staticClass:"HomePage"},[a("cfp-form",{on:{submit:e.onSubmit}},[a("CellGroup",[a("div",[a("field",{attrs:{readonly:"",clickable:"",name:"productValue",value:e.productValue,label:"产品名称",placeholder:"点击选择产品名称",rules:[{required:!0,message:""}]},on:{click:function(t){e.showProductPicker=!0}}}),a("popup",{attrs:{position:"bottom"},model:{value:e.showProductPicker,callback:function(t){e.showProductPicker=t},expression:"showProductPicker"}},[a("picker",{attrs:{"show-toolbar":"",columns:e.products},on:{confirm:e.onProductConfirm,cancel:function(t){e.showProductPicker=!1}}})],1)],1),a("div",[a("field",{attrs:{clearable:"",type:"number",name:"buyAmount",label:"购买金额",placeholder:"购买金额",rules:[{required:!0,message:""}]},model:{value:e.buyAmount,callback:function(t){e.buyAmount=t},expression:"buyAmount"}})],1),a("div",[a("field",{attrs:{readonly:"",clickable:"",name:"startDatecalendar",value:e.startDatevalue,label:"购买日期",placeholder:"点击选择购买日期"},on:{click:function(t){e.showStartDateCalendar=!0}}}),a("popup",{attrs:{position:"bottom"},model:{value:e.showStartDateCalendar,callback:function(t){e.showStartDateCalendar=t},expression:"showStartDateCalendar"}},[a("datetime-picker",{attrs:{title:"点击选择购买日期",type:"date"},on:{confirm:e.onStartDateConfirm,cancel:function(t){e.showStartDateCalendar=!1}}})],1)],1),a("div",[a("field",{attrs:{readonly:"",clickable:"",name:"depositTerm",value:e.depositTerm,label:"购买期限",placeholder:"点击选择购买期限",rules:[{required:!0,message:""}]},on:{click:function(t){e.showDepositTermPicker=!0}}}),a("popup",{attrs:{position:"bottom"},model:{value:e.showDepositTermPicker,callback:function(t){e.showDepositTermPicker=t},expression:"showDepositTermPicker"}},[a("picker",{attrs:{"show-toolbar":"",columns:e.productsInfo[e.productValue].depositTerms},on:{confirm:e.ondepositTermConfirm,cancel:function(t){e.showDepositTermPicker=!1}}})],1)],1)]),a("div",{staticStyle:{margin:"16px"}},[a("cfp-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1)],1)],1)])],1)},f=[],h=(a("51d7"),a("4bb4"),a("a2e8")),m=(a("d63b"),a("c876")),v=(a("47d5"),a("34d9")),b=(a("a5db"),a("8512")),g=(a("5cca"),a("2c99")),D=(a("de55"),a("7dd2")),w=(a("7698"),a("19f8")),C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"headerBox"},[a("myHeader",{attrs:{"left-text":e.backShow?"返回":"",title:e.title,"left-arrow":e.backShow},on:{"click-left":e.goBack}})],1)},y=[],k=(a("65ba"),a("6a22"),a("80cf"),a("9fb8"),a("e3b9")),S={components:{myHeader:k["a"]},props:{title:{type:String,default:""},params:{type:Object,default:function(){return{leftShow:!0,rightShow:!0}}},backRouter:{type:Object,default:function(){return null}},backStep:{type:Number,default:-1}},data:function(){return{}},computed:{backShow:function(){return void 0===this.params.leftShow||this.params.leftShow},customerShow:function(){return void 0===this.params.rightShow||this.params.rightShow}},created:function(){},methods:{goBack:function(){this.backRouter?this.$router.replace(this.backRouter):this.$router.go(this.backStep)}}},_=S,A=(a("d24b"),Object(l["a"])(_,C,y,!1,null,"d681b58c",null)),M=A.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"scrollerBox"},[e._t("default")],2)},P=[],T={data:function(){return{}},created:function(){},mounted:function(){}},B=T,x=(a("ddf0"),Object(l["a"])(B,O,P,!1,null,"0800b97a",null)),F=x.exports,R=function(e,t){return new Date(e)-new Date(t)<0},L=function(e,t){return new Date(e)-new Date(t)>=0},E=function(e,t,a){return new Date(e)-new Date(t)>=0&&new Date(e)-new Date(a)<0},$=function(e,t){var a=Date.parse(e),r=Date.parse(t);if(a>r)return 0;if(a==r)return 1;var n=(r-a)/864e5;return n},j={components:{Myheader:M,cfpForm:w["a"],cfpButton:D["a"],CellGroup:g["a"],Scroller:F,Field:b["a"],popup:v["a"],picker:m["a"],DatetimePicker:h["a"]},data:function(){return{headerParams:{leftShow:!1},aheadDrawRate:.003,minDate:new Date,maxDate:new Date,startDatevalue:"",showStartDateCalendar:!1,buyAmount:"",products:["定期宝","定期宝1号尊享版","鼎惠存","原惠发","新婚宝","惠农宝"],showProductPicker:!1,showDepositTermPicker:!1,productValue:"定期宝",depositTerm:"3年",productsInfo:{"定期宝":{lineOfDate:"2018/12/15",rateLineB:{A:.003,B:.0169,C:.0195,D:.026,E:.03,F:.0385},rateLineA:{A:.0035,B:.0169,C:.0195,D:.026,E:.03,F:.03575},depositTerms:["3年"],getCurrentRate:function(e,t){console.log(e,t);var a=R(e,this.lineOfDate);return console.log(this.lineOfDate,a),a&&"3年"===t?this.rateLineA.F:this.rateLineB.F}},"定期宝1号尊享版":{rate:.0418,depositTerms:["5年"],getCurrentRate:function(){return.0418}},"原惠发":{lineOfDate:"2020/04/04",rateLineA:{A:.0165,B:.0195,C:.0225,D:.0315,E:.04125},rateLineB:{A:.0165,B:.0195,C:.0225,D:.0315,E:.0385},depositTerms:["3个月","6个月","1年","2年","3年"],getCurrentRate:function(e,t){console.log(e,t);var a=R(e,this.lineOfDate);console.log(this.lineOfDate,a);var r=a?this.rateLineA:this.rateLineB;switch(t){case"3个月":return r.A;case"6个月":return r.B;case"1年":return r.C;case"2年":return r.D;case"3年":return r.E;default:return 0}}},"新婚宝":{lineOfDate:"2020/04/04",rateLineA:{A:.0165,B:.0195,C:.0225,D:.0315,E:.04125},rateLineB:{A:.0165,B:.0195,C:.0225,D:.0315,E:.0385},depositTerms:["3个月","6个月","1年","2年","3年"],getCurrentRate:function(e,t){console.log(e,t);var a=R(e,this.lineOfDate);console.log(this.lineOfDate,a);var r=a?this.rateLineA:this.rateLineB;switch(t){case"3个月":return r.A;case"6个月":return r.B;case"1年":return r.C;case"2年":return r.D;case"3年":return r.E;default:return 0}}},"惠农宝":{lineOfDates:["2015/11/10","2018/04/18","2018/05/26","2020/04/04","2020/12/22"],rateLineA:{A:.0143,B:.0169,C:.0195,D:.0273,E:.033,F:.036},rateLineB:{A:.0143,B:.0169,C:.02025,D:.02835,E:.03575,F:.0375},rateLineC:{A:.0165,B:.0195,C:.0225,D:.0315,E:.04125,F:.0375},rateLineD:{A:.0165,B:.0195,C:.0225,D:.0315,E:.0385,F:.0375},rateLineE:{A:.0154,B:.0182,C:.021,D:.0294,E:.0385,F:.0375},depositTerms:["3个月","6个月","1年","2年","3年","5年"],getCurrentRate:function(e,t){var a;if(console.log(e,t),E(e,this.lineOfDates[0],this.lineOfDates[1]))a=this.rateLineA;else if(E(e,this.lineOfDates[1],this.lineOfDates[2]))a=this.rateLineB;else if(E(e,this.lineOfDates[2],this.lineOfDates[3]))a=this.rateLineC;else if(E(e,this.lineOfDates[3],this.lineOfDates[4]))a=this.rateLineD;else{if(!L(e,this.lineOfDates[4]))return 0;a=this.rateLineE}switch(console.log("rateLine",a),t){case"3个月":return a.A;case"6个月":return a.B;case"1年":return a.C;case"2年":return a.D;case"3年":return a.E;case"5年":return a.F;default:return 0}}}}}},computed:{minDateValue:function(){var e=this.minDate.getFullYear(),t=this.minDate.getMonth(),a=this.minDate.getDate();return new Date(e-10,t,a)},maxDateValue:function(){var e=this.maxDate.getFullYear(),t=this.maxDate.getMonth(),a=this.maxDate.getDate();return new Date(e+10,t,a)},defaultDate:function(){return new Date(this.startDatevalue)}},activated:function(){this.$route.meta.load&&(this.$route.meta.load=!1)},methods:{formatDate:function(e){return"".concat(e.getFullYear(),"/").concat(e.getMonth()+1,"/").concat(e.getDate())},backListener:function(){window.history&&window.history.pushState&&(history.pushState(null,null,document.URL),window.addEventListener("popstate",this.goBack,!1))},goBack:function(){history.pushState(null,null,document.URL)},onProductConfirm:function(e){this.productValue=e,this.showProductPicker=!1,this.depositTerm=this.productsInfo[e].depositTerms[0]},ondepositTermConfirm:function(e){this.depositTerm=e,this.showDepositTermPicker=!1},onStartDateConfirm:function(e){console.log(e),this.startDatevalue=this.formatDate(e),this.showStartDateCalendar=!1},onSubmit:function(e){console.log("submit",e);var t=e.buyAmount,a=e.productValue,r=e.startDatecalendar,n=e.depositTerm,o=this.productsInfo[a].getCurrentRate(r,n);console.log("当前的利率是",o,t);var s={currentRate:o,buyAmount:t,productValue:a,aheadDrawRate:this.aheadDrawRate,depositTerm:this.depositTerm,days:parseInt($(r,"2021/01/01"))};console.log("addChargeMap",s),sessionStorage.setItem("AddChargeMap",JSON.stringify(s)),this.$router.push({name:"RateDetail"})}},beforeRouteLeave:function(e,t,a){e.meta.load=!0,a()}},N=j,V=(a("7861"),Object(l["a"])(N,p,f,!1,null,"2035953d",null)),I=V.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Myheader",{attrs:{title:e.title,params:e.headerParams}}),a("Scroller",[a("div",{staticClass:"RateDetail"},[a("van-row",{staticClass:"col-item"},[a("van-col",{staticClass:"bolder",attrs:{span:"8"}},[e._v("产品名称：")]),a("van-col",{attrs:{span:"15"}},[e._v(e._s(e.addChargeMap.productValue))])],1),a("van-row",{staticClass:"col-item"},[a("van-col",{staticClass:"bolder",attrs:{span:"8"}},[e._v("支取金额：")]),a("van-col",{attrs:{span:"15"}},[e._v(e._s(e._f("Money")(e.addChargeMap.buyAmount))+" 元")])],1),a("van-row",{staticClass:"col-item"},[a("van-col",{staticClass:"bolder",attrs:{span:"8"}},[e._v("期限：")]),a("van-col",{attrs:{span:"15"}},[e._v(e._s(e.addChargeMap.depositTerm))])],1),a("van-row",{staticClass:"col-item"},[a("van-col",{staticClass:"bolder",attrs:{span:"8"}},[e._v("到期利率：")]),a("van-col",{attrs:{span:"15"}},[e._v(e._s(e._f("Percentage")(e.addChargeMap.currentRate)))])],1),a("van-row",{staticClass:"col-item"},[a("van-col",{staticClass:"bolder",attrs:{span:"8"}},[e._v("持有到期利息：")]),a("van-col",{attrs:{span:"15"}},[a("span",{staticClass:"bolder-money"},[e._v(e._s(e._f("Money")(e.currentRateMoney()))+" 元")])])],1),a("van-row",{staticClass:"col-item"},[a("van-col",{staticClass:"bolder",attrs:{span:"8"}},[e._v("提前支取利率：")]),a("van-col",{attrs:{span:"15"}},[e._v(e._s(e._f("Percentage")(e.addChargeMap.aheadDrawRate)))])],1),a("van-row",{staticClass:"col-item"},[a("van-col",{staticClass:"bolder",attrs:{span:"8"}},[e._v("提前支取利息：")]),a("van-col",{attrs:{span:"15"}},[a("span",{staticClass:"bolder-money"},[e._v(e._s(e._f("Money")(e.aheadDrawRateMoney()))+" 元")])])],1)],1),a("div",{staticClass:"button-box"},[a("cfp-button",{attrs:{round:"",block:"",type:"info"},on:{click:e.pop}},[e._v("确定")])],1)])],1)},q=[],J=(a("4ec5"),a("ed69"),a("f6c3")),Y=(a("05d4"),a("6178"));r["a"].use(Y["a"]),r["a"].use(J["a"]);var G={components:{Myheader:M,Scroller:F,cfpButton:D["a"]},data:function(){return{headerParams:{leftShow:!0},title:"",addChargeMap:{}}},computed:{},activated:function(){this.$route.meta.load&&(this.$route.meta.load=!1),this.addChargeMap=JSON.parse(sessionStorage.getItem("AddChargeMap")),this.title=this.addChargeMap.productValue},methods:{currentRateMoney:function(){return this.addChargeMap.depositTerm?-1!==this.addChargeMap.depositTerm.indexOf("年")?this.addChargeMap.currentRate*Number(this.addChargeMap.buyAmount)*parseFloat(this.addChargeMap.depositTerm):this.addChargeMap.currentRate*Number(this.addChargeMap.buyAmount)*parseFloat(this.addChargeMap.depositTerm)/12:""},aheadDrawRateMoney:function(){return this.addChargeMap.aheadDrawRate*Number(this.addChargeMap.buyAmount)*Number(this.addChargeMap.days)/360},pop:function(){this.$router.go(-1)}},beforeRouteLeave:function(e,t,a){e.meta.load=!0,a()}},U=G,z=(a("ad3e"),Object(l["a"])(U,H,q,!1,null,"4d847e6e",null)),K=z.exports;r["a"].use(d["a"]);var Q=new d["a"]({base:"/cfptool",routes:[{path:"/",name:"HomePageA",component:I,meta:{title:"中原银行缴费通",keepAlive:!0}},{path:"/HomePage",name:"HomePageB",component:I,meta:{title:"中原银行缴费通",keepAlive:!0}},{path:"/RateDetail",name:"RateDetail",component:K,meta:{title:"中原银行缴费通",keepAlive:!0}}]});Q.pathStack=[],Q.beforeEach((function(e,t,a){e.query.routeFrom=t.name,a()}));var W=Q;a("3f4b"),a("7f64"),a("3ced"),a("4d20"),a("8d56"),a("5f89");r["a"].filter("Money",(function(e,t){if(!e)return"0.00";var a=!1;parseFloat(e+"")<0&&(a=!0,e=e.toString(),e=e.replace(/-/g,"")),t=t>0&&t<=20?t:2,e=parseFloat((e+"").replace(/[^\d.-]/g,"")).toFixed(t)+"";for(var r=e.split(".")[0].split("").reverse(),n=e.split(".")[1],o="",s=0;s<r.length;s++)o+=r[s]+((s+1)%3===0&&s+1!==r.length?",":"");return a?"-"+o.split("").reverse().join("")+"."+n:o.split("").reverse().join("")+"."+n})),r["a"].filter("DoubleFloat",(function(e){return e?parseFloat(e).toFixed(2):"0.00"})),r["a"].filter("amount",(function(e){if(void 0!==e){var t=e.indexOf(",");if(t&&(e=e.replace(/,/g,"")),parseFloat(e)<0||isNaN(e)||""===e)return"零元整";e=String(parseFloat(e));var a="",r="仟佰拾万仟佰拾亿仟佰拾万仟佰拾元角分";e+="00";var n=e.indexOf(".");n>=0&&(e=e.substring(0,n)+e.substr(n+1,2)),r=r.substr(r.length-e.length);for(var o=0;o<e.length;o++)a+="零壹贰叁肆伍陆柒捌玖".substr(e.substr(o,1),1)+r.substr(o,1);return a=a.replace(/零角零分$/,"整").replace(/零[仟佰拾]/g,"零").replace(/零{2,}/g,"零").replace(/零([亿|万])/g,"$1").replace(/零+元/,"元").replace(/亿零{0,3}万/,"亿").replace(/^元/,"零元").replace(/零角/,"零").replace(/零分/,""),0===parseFloat(e)?"零元整":parseFloat(e)>0&&parseFloat(e)<100?a.replace(/零元/,"").replace(/零/,""):a}return"零元"}));var X=function(e,t){var a=0,r=e.toString(),n=t.toString();try{a+=r.split(".")[1].length}catch(o){console.log(o)}return Number(r.replace(".",""))*Number(n.replace(".",""))/Math.pow(10,a)};r["a"].filter("Percentage",(function(e){return e?X(parseFloat(e),100)+"%":"0"})),r["a"].config.productionTip=!1,new r["a"]({router:W,render:function(e){return e(u)}}).$mount("#app")},7861:function(e,t,a){"use strict";a("dc93")},ad3e:function(e,t,a){"use strict";a("2d19")},b150:function(e,t,a){},d24b:function(e,t,a){"use strict";a("b150")},dc93:function(e,t,a){},ddf0:function(e,t,a){"use strict";a("f5af")},f0a0:function(e,t,a){},f5af:function(e,t,a){}});