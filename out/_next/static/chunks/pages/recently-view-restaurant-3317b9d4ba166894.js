(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2258],{33455:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/recently-view-restaurant",function(){return t(47076)}])},98592:function(n,e,t){"use strict";var i=t(85893),r=t(67294),l=t(11057),s=t(90948),u=t(99226),a=t(86886);t(36624),t(11163);var o=t(88767),d=t(57849),c=t(25617),v=t(33709),x=t(26793),g=t(12315),m=t(7036),_=t(2213);e.Z=n=>{var e,t;let{restaurantType:p}=n,{t:f}=(0,x.$)(),{global:j}=(0,c.v9)(n=>n.globalSettings);null==j||null===(e=j.base_urls)||void 0===e||e.restaurant_cover_photo_url;let[h,Z]=(0,r.useState)("all");(0,s.ZP)(l.Z)(n=>{let{theme:e}=n;return{color:"#fff",backgroundColor:"#d80707","&:hover":{backgroundColor:"#ff903f"}}});let[y,b]=r.useState(!1),[w,P]=r.useState("web"),{isLoading:E,data:S,isError:C,error:k,refetch:N}=(0,o.useQuery)(["restaurant-list",p],()=>d.G.typeWiseRestaurantList({restaurantType:p,type:h}));return(0,r.useEffect)(()=>{N()},[h]),(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(a.ZP,{container:!0,item:!0,md:12,lg:12,xs:12,spacing:{xs:2,md:3},sx:{padding:"20px 0px"},children:(0,i.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:12,align:"center",children:(0,i.jsx)(m.Xw,{alignItems:"center",justifyContent:"center",children:(0,i.jsx)(_.Z,{setType:Z,type:h})})})}),(0,i.jsx)(a.ZP,{item:!0,container:!0,spacing:{xs:2,md:2},rowGap:"30px",children:S?(0,i.jsx)(i.Fragment,{children:null==S?void 0:null===(t=S.data)||void 0===t?void 0:t.map(n=>{var e,t,r,l;return(0,i.jsx)(a.ZP,{item:!0,xs:4,sm:3,md:3,children:(0,i.jsx)(v.Z,{image:null==n?void 0:n.logo,name:null==n?void 0:n.name,rating:null==n?void 0:n.avg_rating,restaurantImageUrl:null==j?void 0:null===(e=j.base_urls)||void 0===e?void 0:e.restaurant_image_url,id:null==n?void 0:n.id,active:null==n?void 0:n.active,open:null==n?void 0:n.open,restaurantDiscount:null==n?void 0:n.discount,freeDelivery:null==n?void 0:n.free_delivery,rating_count:null===(t=restaurant)||void 0===t?void 0:t.rating_count,coupons:null===(r=restaurant)||void 0===r?void 0:r.coupons,cuisines:null===(l=restaurant)||void 0===l?void 0:l.cuisine})})})}):(0,i.jsx)(g.Z,{})}),(0,i.jsx)(u.Z,{sx:{display:"flex",justifyContent:"center",padding:"30px 0px 70px 0px"}})]})}},13097:function(n,e,t){"use strict";t.d(e,{Co:function(){return u},Fj:function(){return a}});var i=t(75904),r=t(88767),l=t(22400);let s=async()=>{let{data:n}=await i.Z.get("/api/v1/restaurants/recently-viewed-restaurants");return n},u=()=>(0,r.useQuery)("view-restaurants",()=>s(),{enabled:!0,onError:l.f}),a=n=>(0,r.useQuery)("view-restaurants",()=>s(),{enabled:!1,onError:l.f,retry:1,onSuccess:n})},47076:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSP:function(){return p},default:function(){return f}});var i=t(85893),r=t(67294),l=t(46089),s=t(51126),u=t(66720),a=t(65582),o=t(86886),d=t(7036),c=t(29406);t(98592);var v=t(33709),x=t(13097),g=t(25617);t(38879);var m=t(12315),_=()=>{let n;let{global:e}=(0,g.v9)(n=>n.globalSettings),{data:t,isLoading:l,refetch:s,isRefetching:_}=(0,x.Co)();return n=localStorage.getItem("token"),(0,r.useEffect)(()=>{n&&s()},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.ZP,{}),(0,i.jsx)(a.Z,{maxWidth:"lg",sx:{mb:{xs:"72px",md:"30px"},mt:{xs:"0px",md:"150px"}},children:(0,i.jsxs)(d.iD,{sx:{minHeight:"70vh"},children:[(0,i.jsx)(c.Z,{title:"Recently View Restaurants"}),(0,i.jsxs)(o.ZP,{container:!0,spacing:1,sx:{marginTop:"20px"},children:[(null==t?void 0:t.length)>0&&(null==t?void 0:t.map(n=>{var t;return(0,i.jsx)(o.ZP,{item:!0,xs:4,sm:3,md:1.5,children:(0,i.jsx)(v.Z,{image:null==n?void 0:n.logo,name:null==n?void 0:n.name,rating:null==n?void 0:n.avg_rating,restaurantImageUrl:null==e?void 0:null===(t=e.base_urls)||void 0===t?void 0:t.restaurant_image_url,id:null==n?void 0:n.id,active:null==n?void 0:n.active,open:null==n?void 0:n.open,restaurantDiscount:null==n?void 0:n.discount,freeDelivery:null==n?void 0:n.free_delivery,rating_count:null==n?void 0:n.rating_count,coupons:null==n?void 0:n.coupons,cuisines:null==n?void 0:n.cuisine})},null==n?void 0:n.id)})),l&&(0,i.jsx)(m.Z,{})]})]})})]})},p=!0,f=n=>{var e,t;let{configData:r,landingPageData:u,pathName:a}=n;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z,{title:"".concat((0,s.t)("Recently View Restaurant")," on ").concat(null==r?void 0:r.business_name),ogImage:"".concat(null==r?void 0:null===(e=r.base_urls)||void 0===e?void 0:e.react_landing_page_images,"/").concat(null==u?void 0:null===(t=u.banner_section_full)||void 0===t?void 0:t.banner_section_img_full),pathName:a}),(0,i.jsx)(_,{})]})}}},function(n){n.O(0,[2888,9774,179],function(){return n(n.s=33455)}),_N_E=n.O()}]);