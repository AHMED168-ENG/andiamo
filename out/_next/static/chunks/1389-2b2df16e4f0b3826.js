"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1389],{57705:function(e,t,l){var a=l(85893),r=l(67294),i=l(11163),n=l(66720);let s=e=>{let{children:t}=e,l=(0,i.useRouter)(),[s,o]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{if(!l.isReady)return;let e=JSON.parse(localStorage.getItem("zoneid"));(null==e?void 0:e.length)>0?o(!0):l.push("/")},[l.isReady]),s)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.ZP,{}),t]}):null};s.propTypes={},t.Z=s},42974:function(e,t,l){l.d(t,{Z:function(){return R}});var a=l(85893),r=l(67294),i=l(88767),n=l(30422);l(9945);var s=l(11163),o=l(25617),d=l(7036),u=l(86886),v=l(26447),c=l(82473),f=l(55540),g=l(16338),h=l(18651),p=l(61929),m=l(25137),x=l(48082);l(72679);let _=e=>{var t,l,r,i,n,s;let{searchValue:o,count:_,foodOrRestaurant:j,setFoodOrRestaurant:y,data:b,isLoading:S,offset:Z,page_limit:w,setOffset:E,global:N,handleFilter:F,handleClearAll:R,isNetworkCalling:B,popularFoodisLoading:O,restaurantIsLoading:L,page:M,restaurantType:Y,totalData:P}=e;return(0,p.Z)(),(0,a.jsx)(d.Xw,{spacing:2,sx:{minHeight:"53vh",marginTop:M||Y?"0px":"20px"},children:(0,a.jsxs)(u.ZP,{container:!0,gap:"15px",children:[(0,a.jsx)(u.ZP,{item:!0,xs:12,sm:12,md:12,align:"center",children:!M&&!Y&&(0,a.jsx)(c.Z,{foodOrRestaurant:j,setFoodOrRestaurant:y})}),(0,a.jsxs)(u.ZP,{item:!0,xs:12,sm:12,md:12,container:!0,spacing:2,paddingTop:"1rem",children:[("products"===j||M)&&(0,a.jsx)(a.Fragment,{children:S||B?(0,a.jsxs)(v.Z,{width:"100%",minHeight:"500px",children:[" ",(0,a.jsx)(m.P,{align:"center"})]}):(0,a.jsxs)(a.Fragment,{children:[(null==b?void 0:null===(l=b.data)||void 0===l?void 0:null===(t=l.products)||void 0===t?void 0:t.length)>0&&(0,a.jsx)(f.Z,{product_list:null==b?void 0:b.data,offset:Z,page_limit:w,setOffset:E}),(null==b?void 0:null===(i=b.data)||void 0===i?void 0:null===(r=i.products)||void 0===r?void 0:r.length)===0&&(0,a.jsx)(h.Z,{label:"No food found",image:x.ZP})]})}),"restaurants"===j&&(0,a.jsx)(a.Fragment,{children:S||B?(0,a.jsxs)(v.Z,{width:"100%",minHeight:"500px",children:[" ",(0,a.jsx)(m.P,{align:"center"})]}):(0,a.jsxs)(a.Fragment,{children:[b&&!S&&(0,a.jsx)(g.Z,{resData:b,offset:Z,page_limit:w,setOffset:E,global:N,restaurantType:Y}),(null==b?void 0:null===(s=b.data)||void 0===s?void 0:null===(n=s.restaurants)||void 0===n?void 0:n.length)===0&&(0,a.jsx)(h.Z,{label:"No restaurant found",image:x.HV})]})})]})]})})};_.propTypes={};var j=l(81982),y=l(30381),b=l.n(y);let S=(e,t,l)=>{var a,r,i,n,s,o,d;let u="products"===l?null==t?void 0:null===(a=t.data)||void 0===a?void 0:a.products:null==t?void 0:null===(r=t.data)||void 0===r?void 0:r.restaurants;return u&&u.length>0&&(""!==e.rating&&(u=u.filter(t=>Number(t.avg_rating)>=Number(e.rating))),(null==e?void 0:null===(i=e.filterBy)||void 0===i?void 0:i.popular)&&(u=null==u?void 0:u.sort((e,t)=>Number(t.order_count)-Number(e.order_count)).slice(0,16)),(null==e?void 0:null===(n=e.filterBy)||void 0===n?void 0:n.most_reviewed)&&(u=null===(d=u.slice(0,16))||void 0===d?void 0:d.sort((e,t)=>Number(t.rating_count)-Number(e.rating_count)).slice(0,16)),(null==e?void 0:null===(s=e.filterBy)||void 0===s?void 0:s.new)&&(u=u.map(e=>({...e,created_at:b()(e&&e.created_at||null,"YYYY-MM-DD hh:mm A")})).sort((e,t)=>t.created_at-e.created_at).map(e=>{var t;return{...e,created_at:null===(t=e.created_at)||void 0===t?void 0:t.format("YYYY-MM-DD hh:mm A")}}).slice(0,16)),(null==e?void 0:null===(o=e.filterByCuisine)||void 0===o?void 0:o.length)>0&&(u=null==u?void 0:u.filter(t=>{var l;return null===(l=t.cuisine)||void 0===l?void 0:l.find(t=>{var l;return null==e?void 0:null===(l=e.filterByCuisine)||void 0===l?void 0:l.includes(null==t?void 0:t.name)})})),!e.filterBy.veg&&e.filterBy.nonVeg&&(u=u.filter(e=>0===e.veg)),!e.filterBy.nonVeg&&e.filterBy.veg&&(u=u.filter(e=>1===e.veg)),e.filterBy.currentlyAvailable&&(u=u.filter(e=>"products"===l?(0,j._e)(e.available_time_starts,e.available_time_ends):(null==e?void 0:e.active)&&(null==e?void 0:e.open)===1)),"products"===l&&""!==e.price&&(u=u.filter(t=>Math.floor(t.price)>=Math.floor(e.price[0])&&Math.floor(t.price)<=Math.floor(e.price[1])))),u};var Z=l(46089),w=l(22400);l(40795);var E=l(57849);l(90806);var N=l(36732),F=l(19076),R=e=>{let{product_type:t,configData:l,query:u,page:v,restaurantType:c,tags:f}=e,g=(0,o.I0)(),{global:h}=(0,o.v9)(e=>e.globalSettings),p=(0,s.useRouter)(),[m,x]=(0,r.useState)("all"),{searchTagData:j,selectedValue:y,selectedName:b}=(0,o.v9)(e=>e.searchTags),[R,B]=(0,r.useState)(15),[O,L]=(0,r.useState)(1),[M,Y]=(0,r.useState)(""),{filterData:P,foodOrRestaurant:T}=(0,o.v9)(e=>e.searchFilterStore),[z,A]=(0,r.useState)(!1),[C,D]=(0,r.useState)({}),[k,H]=(0,r.useState)({}),[V,I]=(0,r.useState)(null),Q=j.filter(e=>!0===e.isActive),q="products"===T?"products-search":"restaurant-search",W=e=>{var t,l,a;c?(g((0,N.fL)("restaurants")),D({...e,data:{...e,restaurants:e.data,total_size:null==e?void 0:null===(l=e.data)||void 0===l?void 0:l.length}}),H({...e,data:{...e,restaurants:e.data,total_size:null==e?void 0:null===(a=e.data)||void 0===a?void 0:a.length}})):(v&&g((0,N.fL)("restaurants")),D(e),H(e)),I(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.total_size)},{isLoading:X,data:G,isError:J,error:K,refetch:U,isRefetching:$}=(0,i.useQuery)([q,T,M,O,R],()=>n.qO.productSearch(T,M,O,R,P),{retry:1,enabled:!1,onSuccess:W,onError:w.R}),{isLoading:ee,data:et,refetch:el}=(0,i.useQuery)(["popular-food",O,R,m],()=>n.qO.products(v,O,R,m),{enabled:!1,onSuccess:W}),{isLoading:ea,data:er,refetch:ei}=(0,i.useQuery)(["restaurant-list",c],()=>E.G.typeWiseRestaurantList({restaurantType:c,type:m}),{enabled:!1,onSuccess:W,onError:w.R});if((0,r.useEffect)(()=>{void 0!==c&&ei()},[c,O]),(0,r.useEffect)(()=>{void 0!==v&&el()},[v,O]),(0,r.useEffect)(()=>{u||v||c?Y(u):f?Y(null):p.push("/home")},[u,f]),(0,r.useEffect)(()=>{(null==Q?void 0:Q.length)!==0||u||v||c||M||p.push("/home")},[j]),(0,r.useEffect)(()=>{M?U():f&&v?U():f&&(null==Q?void 0:Q.length)>0&&U()},[M,P,f,O]),(0,r.useEffect)(()=>{L(1),void 0!==M&&U()},[T]),J)return(0,a.jsx)("h1",{children:K.messages});(0,r.useEffect)(()=>{es()},[z]);let en=async()=>{await U()},es=()=>{let e=S(P,k,T);D({...k,data:"products"===T?{...null==C?void 0:C.data,products:e,total_size:null==e?void 0:e.length}:{...C.data,restaurants:e,total_size:null==e?void 0:e.length}})};return(0,r.useEffect)(()=>{let e="most-reviewed"===v?"rating":v,t="latest"===c?"new_arrivals":c,l=j.map(l=>l.value===(e||t)?{...l,isActive:!0}:l);g((0,F.WK)(l))},[v,c]),(0,r.useEffect)(()=>{L(1)},[j,b,M]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Z.Z,{title:"".concat(M||"Searching..."," on ").concat(null==l?void 0:l.business_name)}),(0,a.jsx)(d.Xw,{mb:"5rem",sx:{minHeight:"70vh"},children:C&&(0,a.jsx)(_,{searchValue:M,foodOrRestaurant:T,setFoodOrRestaurant:N.fL,isLoading:X,isNetworkCalling:$,data:C,page_limit:R,offset:O,setOffset:L,global:h,handleFilter:()=>{A(e=>!e)},handleClearAll:en,page:"most-reviewed"===v?"most_reviewed":v,popularFoodisLoading:ee,restaurantType:c,restaurantIsLoading:ea,totalData:V})})]})}}}]);