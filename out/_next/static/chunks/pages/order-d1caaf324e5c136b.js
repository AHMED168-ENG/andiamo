(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1941],{97501:function(e,t,n){var r,o,i,l,a,s,c;(e=n.nmd(e))&&e.exports,(o="object"==typeof n.g&&n.g).global===o||o.window,(i=function(e){this.message=e}).prototype=Error(),i.prototype.name="InvalidCharacterError",l=function(e){throw new i(e)},a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=/[\t\n\f\r ]/g,c={encode:function(e){e=String(e),/[^\0-\xFF]/.test(e)&&l("The string to be encoded contains characters outside of the Latin1 range.");for(var t,n,r,o=e.length%3,i="",s=-1,c=e.length-o;++s<c;)r=(t=e.charCodeAt(s)<<16)+(e.charCodeAt(++s)<<8)+e.charCodeAt(++s),i+=a.charAt(r>>18&63)+a.charAt(r>>12&63)+a.charAt(r>>6&63)+a.charAt(63&r);return 2==o?(r=(t=e.charCodeAt(s)<<8)+e.charCodeAt(++s),i+=a.charAt(r>>10)+a.charAt(r>>4&63)+a.charAt(r<<2&63)+"="):1==o&&(r=e.charCodeAt(s),i+=a.charAt(r>>2)+a.charAt(r<<4&63)+"=="),i},decode:function(e){var t,n,r=(e=String(e).replace(s,"")).length;r%4==0&&(r=(e=e.replace(/==?$/,"")).length),(r%4==1||/[^+a-zA-Z0-9/]/.test(e))&&l("Invalid character: the string to be decoded is not correctly encoded.");for(var o=0,i="",c=-1;++c<r;)n=a.indexOf(e.charAt(c)),t=o%4?64*t+n:n,o++%4&&(i+=String.fromCharCode(255&t>>(-2*o&6)));return i},version:"1.0.0"},void 0!==(r=(function(){return c}).call(t,n,t,e))&&(e.exports=r)},18625:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order",function(){return n(8079)}])},8079:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var r=n(85893),o=n(67294),i=n(65582),l=n(26447),a=n(11057),s=n(15861),c=n(11163),d=n.n(c),u=n(25617),h=n(46147),p=n(26793),x=n(41796),m=n(86886),f=n(7036),g=n(52443),v=n(60888),j=n(88767),y=n(31003),w=n(98976),Z=n(16531),A=n(7628);function _(e){var t,n,i,d,_,C,k,b,I,E;let{id:F}=e,{guestUserInfo:S}=(0,u.v9)(e=>e.guestUserInfo),T=(0,A.P)(),{data:W,refetch:O,isLoading:P,isFetching:X}=(0,j.useQuery)(["category-tracking",F],()=>y.R.orderTracking(F,null==S?void 0:S.contact_person_number,T));(0,o.useEffect)(()=>{O()},[]);let N=(0,c.useRouter)(),R=(0,u.I0)(),z=(0,g.u)();R((0,h.aE)()),R((0,w.Nr)()),R((0,w.zF)(!1));let{t:D}=(0,p.$)();return(0,r.jsx)(f.Xw,{height:"100%",alignItems:"center",justifyContent:"center",spacing:2,pt:"30px",children:(0,r.jsxs)(f.Xw,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,r.jsx)(v.Z,{sx:{height:"45px",width:"45px",color:z.palette.success.main}}),(0,r.jsx)(f.i5,{color:"primary",variant:"h3",children:D("Congratulations!")}),(0,r.jsx)(s.Z,{align:"center",sx:{fontSize:24},color:"text.secondary",gutterBottom:!0,children:D("You place the order successfully.")}),(0,r.jsx)(s.Z,{align:"center",sx:{mb:1.5},color:"text.secondary",children:D("Your order is placed Successfully. We start our delivery process and you will receive your food soon.")}),(0,r.jsxs)(s.Z,{align:"center",sx:{mb:1.5},children:[D("Your order is"),(0,r.jsx)("span",{style:{color:z.palette.primary.main,marginLeft:"3px"},children:F}),D(". You can use this ID to track your order later")]}),(null==W?void 0:null===(t=W.data)||void 0===t?void 0:t.offline_payment)&&(0,r.jsxs)(f.Xw,{textAlign:"center",maxWidth:"670px",children:[(0,r.jsxs)(f.Xw,{padding:"20px",backgroundColor:(0,x.Fq)(z.palette.primary.main,.1),alignItems:"center",gap:"10px",borderRadius:"10px",children:[(0,r.jsx)(s.Z,{fontWeight:500,children:D("Payment Information")}),P&&X?(0,r.jsx)(f.Xw,{padding:"40px",textAlign:"center",children:(0,r.jsx)(Z.Z,{})}):(0,r.jsx)(f.Xw,{flexDirection:{xs:"cloumn",sm:"row",md:"row"},alignItems:"center",children:(0,r.jsxs)(m.ZP,{container:!0,spacing:1,children:[null==W?void 0:null===(d=W.data)||void 0===d?void 0:null===(i=d.offline_payment)||void 0===i?void 0:null===(n=i.input)||void 0===n?void 0:n.map((e,t)=>(0,r.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(0,r.jsxs)(s.Z,{fontWeight:"400",sx:{textTransform:"capitalize",color:z.palette.neutral[400]},children:[null==e?void 0:e.user_input.replaceAll("_"," "),"\xa0\xa0:\xa0\xa0",(0,r.jsx)(s.Z,{component:"span",sx:{wordWrap:"break-word"},children:null==e?void 0:e.user_data.replaceAll("_"," ")})]})},t)),(0,r.jsx)(m.ZP,{item:!0,xs:12,md:12,children:(null==W?void 0:null===(k=W.data)||void 0===k?void 0:null===(C=k.offline_payment)||void 0===C?void 0:null===(_=C.data)||void 0===_?void 0:_.customer_note)&&(0,r.jsxs)(s.Z,{fontWeight:"400",sx:{color:z.palette.neutral[400]},children:["Note","\xa0\xa0:\xa0\xa0",(0,r.jsx)(s.Z,{component:"span",sx:{wordWrap:"break-word"},children:null==W?void 0:null===(E=W.data)||void 0===E?void 0:null===(I=E.offline_payment)||void 0===I?void 0:null===(b=I.data)||void 0===b?void 0:b.customer_note})]})})]})})]}),(0,r.jsx)(f.Xw,{children:(0,r.jsxs)(s.Z,{color:z.palette.text.secondary,textAlign:"center",children:[(0,r.jsx)(s.Z,{component:"span",color:z.palette.error.main,fontSize:"18px",children:" * "}),D("If you accidentally provided incorrect payment information, you can edit the details in the order details section while the order is still pending.")]})})]}),(0,r.jsxs)(l.Z,{pt:"2rem",spacing:1,children:[(0,r.jsx)(a.Z,{onClick:()=>N.push("/tracking",void 0,{shallow:!0}),variant:"contained",children:D("Track your order")}),(0,r.jsx)(s.Z,{onClick:()=>N.push("/home",void 0,{shallow:!0}),variant:"contained",sx:{textDecoration:"underLine",cursor:"pointer",textAlign:"center",color:e=>e.palette.primary.main},children:D("Continue shopping ")})]})]})})}var C=n(44267),k=n(62023),b=n(94080),I=n(13914),E=n(74931),F=n(22400);let S=e=>{let{id:t}=e,{t:n}=(0,p.$)(),o=(0,u.I0)(),{mutate:i,isLoading:c}=(0,j.useMutation)("order-payment-method-update",y.R.FailedPaymentMethodUpdate);return(0,r.jsx)(I.pi,{children:(0,r.jsxs)(l.Z,{width:"100%",alignItems:"center",justifyContent:"center",spacing:2,children:[(0,r.jsx)(s.Z,{children:n("Are you agree with this order fail?")}),(0,r.jsx)(a.Z,{loading:c,variant:"contained",fullWidth:!0,onClick:()=>{i({order_id:t,_method:"put"},{onSuccess:e=>{E.Am.success(e.data.message),o((0,h.aE)()),d().push("/home")},onError:F.R})},children:n("Switch to Cash On Delivery")}),(0,r.jsx)(a.Z,{variant:"contained",fullWidth:!0,onClick:()=>{o((0,h.aE)()),d().push("/home")},children:n("Continue with Order Fail")})]})})};S.propTypes={};let T=e=>{let{id:t}=e,[n,i]=(0,o.useState)(!1),{t:l}=(0,p.$)();return setTimeout(()=>{i(!0)},500),(0,r.jsxs)(o.Fragment,{children:[(0,r.jsxs)(C.Z,{children:[(0,r.jsx)(s.Z,{align:"center",sx:{fontSize:24},color:"text.secondary",gutterBottom:!0,children:l("Order Place Failed")}),(0,r.jsx)(s.Z,{align:"center",sx:{mb:1.5},color:"text.secondary",children:l("Order didn't place successfully.")})]}),(0,r.jsx)(k.Z,{sx:{alignItems:"center"},children:(0,r.jsx)(a.Z,{onClick:()=>router.push("/home"),variant:"contained",fullWidth:!0,children:l("Back to home")})}),(0,r.jsx)(b.Z,{openModal:n,setModalOpen:i,disableAutoFocus:!0,children:(0,r.jsx)(S,{id:t})})]})};T.propTypes={};var W=n(46089);n(96245);var O=n(97501),P=n.n(O),X=n(51126);let N=e=>{let t=(0,c.useRouter)(),{flag:n,amnt:a,token:s,orderId:d}=t.query,[u,h]=(0,o.useState)("");return(0,o.useEffect)(()=>{if(s)try{let e=P().decode(s);if("string"==typeof e)for(let t of e.split("&&")){let[e,n]=t.split("=");if("attribute_id"===e){h(n);return}}else console.error("Decoded token is not a string:",e)}catch(e){console.error("Error decoding token:",e)}else console.error("Token is missing.")},[s]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(W.Z,{title:"fail"===n||"cancel"===n?(0,X.t)("Order placement failed"):(0,X.t)("Order placed successfully.")}),(0,r.jsx)(i.Z,{maxWidth:"lg",sx:{mb:{xs:"72px",md:"0"}},children:(0,r.jsx)(r.Fragment,{children:t.isReady&&(0,r.jsx)(l.Z,{width:"100%",mt:{xs:"0",md:"9rem"},mb:"3rem",alignItems:"center",justifyContent:"center",children:(0,r.jsx)(f.iD,{children:n&&"fail"===n||"cancel"===n?(0,r.jsx)(T,{id:u}):(0,r.jsx)(_,{totalAmount:a,id:u||d})})})})})]})};N.propTypes={};var R=N}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=18625)}),_N_E=e.O()}]);