(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[303],{5877:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rate-and-review/[id]",function(){return n(16115)}])},6490:function(e,i,n){"use strict";n(83454).env.NEXT_CLIENT_HOST_URL},16115:function(e,i,n){"use strict";n.r(i),n.d(i,{__N_SSP:function(){return V},default:function(){return F}});var t=n(85893),s=n(67294),r=n(46089),l=n(26793),a=n(66720),d=n(65582);n(77076);var c=n(7036),o=n(20916),x=n(39474),m=n(54527);let u=e=>{let{setType:i,type:n}=e,{t:s}=(0,l.$)();return(0,t.jsx)(o.Z,{orientation:"horizontal",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example",children:(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(m.Ks,{background:"items"===n,onClick:()=>i("items"),sx:{width:{xs:"80px",md:"100px"}},children:s("Items")}),(0,t.jsx)(m.Ks,{background:"delivery_man"===n,onClick:()=>i("delivery_man"),sx:{width:{xs:"80px",md:"100px"}},children:s("Delivery man")})]})})};u.propTypes={};var h=n(82580);n(63421);var j=n(86886),v=n(26447);n(82473);var g=n(83287),p=n(50491),Z=n(945),w=n(75576),_=n(67720),f=n(59605),y=n(25617),b=n(81982),P=n(88767);n(14315);var S=n(74931);n(63937);var I=n(75904),C=n(22400);let R=e=>{var i,n,s,r;let a,d,o,{data:x}=e,{t:m}=(0,l.$)(),{global:u}=(0,y.v9)(e=>e.globalSettings),R=null==u?void 0:null===(i=u.base_urls)||void 0===i?void 0:i.product_image_url;u&&(a=u.currency_symbol,d=u.currency_symbol_direction,o=u.digit_after_decimal_point);let{mutate:T,isLoading:X,error:E}=(0,P.useMutation)("submit-review",e=>I.Z.post("/api/v1/products/reviews/submit",e)),k=(0,h.TA)({initialValues:{rating:"",comment:""},onSubmit:async(e,i)=>{try{z(e)}catch(e){}}}),z=e=>{T({...e,delivery_man_id:null,food_id:null==x?void 0:x.food_id,order_id:null==x?void 0:x.order_id},{onSuccess:e=>{var i;S.ZP.success(null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.message)},onError:C.R})},N=localStorage.getItem("direction");return(0,t.jsx)(c.Xw,{children:(0,t.jsx)("form",{onSubmit:k.handleSubmit,children:(0,t.jsxs)(j.ZP,{container:!0,spacing:2,children:[(0,t.jsx)(j.ZP,{item:!0,xs:12,md:12,children:(0,t.jsxs)(c.Xw,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,t.jsxs)(v.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:1,gap:"rtl"===N?"1rem":"0rem",children:[(0,t.jsx)(f.Z,{src:"".concat(R,"/").concat(null==x?void 0:null===(n=x.food_details)||void 0===n?void 0:n.image),width:"100px",height:"90px"}),(0,t.jsxs)(v.Z,{children:[(0,t.jsx)(c.n2,{children:null==x?void 0:null===(s=x.food_details)||void 0===s?void 0:s.name}),(0,t.jsx)(c.n2,{children:(0,b.Bg)(null==x?void 0:null===(r=x.food_details)||void 0===r?void 0:r.price,d,a,o)})]})]}),(0,t.jsxs)(v.Z,{direction:"row",spacing:.5,alignItems:"center",children:[(0,t.jsx)(Z.mI,{sx:{fontSize:"18px"},children:m("Quantity")}),(0,t.jsx)(Z.mI,{sx:{fontSize:"18px"},children:":"}),(0,t.jsx)(c.i5,{color:"primary.main",sx:{fontSize:"18px"},children:null==x?void 0:x.quantity})]})]})}),(0,t.jsx)(j.ZP,{item:!0,xs:12,md:12,children:(0,t.jsx)(_.Z,{sx:{width:"100%"}})}),(0,t.jsx)(j.ZP,{item:!0,xs:12,md:12,align:"center",children:(0,t.jsxs)(v.Z,{alignItems:"center",children:[(0,t.jsx)(Z.mI,{sx:{fontSize:"18px"},children:m("Rate the food")}),(0,t.jsx)(w.Z,{handleChangeRatings:e=>{k.setFieldValue("rating",e)},ratingValue:k.values.rating})]})}),(0,t.jsx)(j.ZP,{item:!0,xs:12,md:12,align:"center",children:(0,t.jsxs)(v.Z,{alignItems:"center",spacing:1,children:[(0,t.jsx)(Z.mI,{sx:{fontSize:"18px"},children:m("Share your opinion")}),(0,t.jsx)(p.Z,{type:"text",label:m("Comment"),touched:k.touched.comment,errors:k.errors.comment,fieldProps:k.getFieldProps("comment"),multiline:!0,rows:2,value:k.values.comment})]})}),(0,t.jsx)(j.ZP,{item:!0,xs:12,md:12,mt:"1rem",children:(0,t.jsx)(g.Z,{fullWidth:!0,variant:"contained",type:"submit",loading:X,children:m("Submit")})})]})})})};R.propTypes={};var T=n(31003),X=n(11163),E=n(18979),k=()=>(0,t.jsx)(c.iD,{children:(0,t.jsx)(c.Xw,{children:(0,t.jsxs)(j.ZP,{container:!0,spacing:2,children:[(0,t.jsx)(j.ZP,{item:!0,xs:12,md:12,children:(0,t.jsxs)(c.Xw,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,t.jsxs)(v.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:1,children:[(0,t.jsx)(E.Z,{variant:"rectangle",width:"100px",height:"90px"}),(0,t.jsxs)(v.Z,{children:[(0,t.jsx)(c.n2,{children:(0,t.jsx)(E.Z,{variant:"text",width:"90px"})}),(0,t.jsx)(c.n2,{children:(0,t.jsx)(E.Z,{variant:"text",width:"90px"})})]})]}),(0,t.jsx)(v.Z,{direction:"row",spacing:.5,alignItems:"center",children:(0,t.jsx)(E.Z,{variant:"text",width:"130px"})})]})}),(0,t.jsx)(j.ZP,{item:!0,xs:12,md:12,children:(0,t.jsx)(_.Z,{sx:{width:"100%"}})}),(0,t.jsx)(j.ZP,{item:!0,xs:12,md:12,align:"center",children:(0,t.jsxs)(v.Z,{alignItems:"center",children:[(0,t.jsx)(E.Z,{variant:"text",width:"130px"}),(0,t.jsx)(E.Z,{variant:"text",width:"130px"})]})}),(0,t.jsx)(j.ZP,{item:!0,xs:12,md:12,align:"center",children:(0,t.jsxs)(v.Z,{alignItems:"center",spacing:1,children:[(0,t.jsx)(E.Z,{variant:"text",width:"130px"}),(0,t.jsx)(E.Z,{variant:"rectangle",height:"80px",width:"100%"})]})}),(0,t.jsx)(j.ZP,{item:!0,xs:12,md:12,mt:"1rem",children:(0,t.jsx)(E.Z,{variant:"rectangle",height:"35px",width:"100%"})})]})})});n(27023);let z=e=>{var i;let{data:n,orderId:s}=e,{t:r}=(0,l.$)(),{global:a}=(0,y.v9)(e=>e.globalSettings),d=null==a?void 0:null===(i=a.base_urls)||void 0===i?void 0:i.delivery_man_image_url,{mutate:o,isLoading:x,error:m}=(0,P.useMutation)("submit-review-deliveryman",e=>I.Z.post("/api/v1/delivery-man/reviews/submit",e)),u=(0,h.TA)({initialValues:{rating:"",comment:""},onSubmit:async(e,i)=>{try{R(e)}catch(e){}}}),b=e=>{u.setFieldValue("rating",e)},R=e=>{o({...e,delivery_man_id:null==n?void 0:n.id,order_id:s},{onSuccess:e=>{var i;S.ZP.success(null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.message)},onError:C.R})};return(0,t.jsx)(c.Xw,{children:(0,t.jsx)("form",{onSubmit:u.handleSubmit,children:(0,t.jsxs)(j.ZP,{container:!0,spacing:2,children:[(0,t.jsx)(j.ZP,{item:!0,xs:12,md:12,children:(0,t.jsx)(c.Xw,{direction:"row",justifyContent:"space-between",alignItems:"center",children:(0,t.jsxs)(v.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:1,children:[(0,t.jsx)(f.Z,{src:"".concat(d,"/").concat(null==n?void 0:n.image),width:"100px",height:"90px"}),(0,t.jsxs)(v.Z,{children:[(0,t.jsx)(c.n2,{children:null==n?void 0:n.f_name.concat(" ",null==n?void 0:n.l_name)}),(0,t.jsx)(w.Z,{readOnly:!0,handleChangeRatings:b,ratingValue:null==n?void 0:n.rating_count})]})]})})}),(0,t.jsx)(j.ZP,{item:!0,xs:12,md:12,children:(0,t.jsx)(_.Z,{sx:{width:"100%"}})}),(0,t.jsx)(j.ZP,{item:!0,xs:12,md:12,align:"center",children:(0,t.jsxs)(v.Z,{alignItems:"center",children:[(0,t.jsx)(Z.mI,{sx:{fontSize:"18px"},children:r("Rate the deliveryman")}),(0,t.jsx)(w.Z,{handleChangeRatings:b,ratingValue:u.values.rating})]})}),(0,t.jsx)(j.ZP,{item:!0,xs:12,md:12,align:"center",children:(0,t.jsxs)(v.Z,{alignItems:"center",spacing:1,children:[(0,t.jsx)(Z.mI,{sx:{fontSize:"18px"},children:r("Share your opinion")}),(0,t.jsx)(p.Z,{type:"text",label:r("Comment"),touched:u.touched.comment,errors:u.errors.comment,fieldProps:u.getFieldProps("comment"),multiline:!0,rows:2,value:u.values.comment})]})}),(0,t.jsx)(j.ZP,{item:!0,xs:12,md:12,mt:"1rem",children:(0,t.jsx)(g.Z,{fullWidth:!0,variant:"contained",type:"submit",loading:x,children:r("Submit")})})]})})})};z.propTypes={};var N=()=>{var e;let{deliveryManInfo:i}=(0,y.v9)(e=>e.searchFilterStore),[n,r]=(0,s.useState)("items"),{id:l}=(0,X.useRouter)().query,{isLoading:a,data:d,isError:o,error:x,refetch:m}=(0,P.useQuery)(["order-details",l],()=>T.R.orderDetails(l));return(0,s.useEffect)(()=>{l&&m()},[l]),(0,t.jsxs)(c.Xw,{alignItems:"center",justifyContent:"center",spacing:2,mt:"9rem",mb:"2rem",children:[i&&(0,t.jsx)(u,{setType:r,type:n}),(0,t.jsx)(c.Xw,{alignItems:"center",justifyContent:"center",spacing:3,children:"items"===n?(null==d?void 0:d.data)?null==d?void 0:null===(e=d.data)||void 0===e?void 0:e.details.map((e,i)=>(0,t.jsx)(c.iD,{children:(0,t.jsx)(R,{data:e})},i)):(0,t.jsx)(k,{}):(0,t.jsx)(c.iD,{children:(0,t.jsx)(z,{data:i,orderId:l})})})]})};n(55720),n(6490);var V=!0,F=e=>{let{configData:i}=e,{t:n}=(0,l.$)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Z,{title:"Rate and Review - ".concat(null==i?void 0:i.business_name)}),(0,t.jsx)(a.ZP,{}),(0,t.jsx)(d.Z,{maxWidth:"lg",sx:{minHeight:"80vh",mb:{xs:"72px",md:"0"}},children:(0,t.jsx)(N,{})})]})}}},function(e){e.O(0,[5142,2023,2466,7076,2888,9774,179],function(){return e(e.s=5877)}),_N_E=e.O()}]);