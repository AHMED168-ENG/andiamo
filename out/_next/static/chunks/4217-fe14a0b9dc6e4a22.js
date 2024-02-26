"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4217],{47910:function(e,t,n){var l=n(85893),i=n(67294),r=n(11163);n(25617);let a=e=>{let{children:t}=e,n=(0,r.useRouter)(),[a,s]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{n.isReady&&(localStorage.getItem("token")?s(!0):n.push("/"))},[n.isReady]),a)?(0,l.jsx)(l.Fragment,{children:t}):null};a.propTypes={},t.Z=a},2669:function(e,t,n){n.d(t,{Z:function(){return eX}});var l=n(85893),i=n(67294),r=n(7036),a=n(98396),s=n(62791),o=n(26447),d=n(15861),c=n(99226),u=n(78462),p=n(90948),h=n(90263),v=n(41796),m=n(69661),x=n(27023),g=n(81982),f=n(88767),j=n(48038),y=n(25617),_=n(61929),b=n(51126);n(36603);var Z=n(83985),S=n(30381),w=n.n(S);let k=(0,p.ZP)(h.Z)(e=>{let{theme:t}=e;return{"& .MuiBadge-badge":{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(t.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}});var C=e=>{var t,n,i,a,s,d;let{name:c,messageTime:u,receiver:p,userList:h,unRead:x,currentId:g,selectedId:b,last_message:S,email:C}=e,I=(0,_.Z)(),{global:T}=(0,y.v9)(e=>e.globalSettings),E=null==h?void 0:null===(t=h.receiver)||void 0===t?void 0:t.image,{isLoading:R,data:z,isError:L,error:D,refetch:M}=(0,f.useQuery)(["profile-info"],j.R.profileInfo),B=(null==z?void 0:null===(i=z.data)||void 0===i?void 0:null===(n=i.userinfo)||void 0===n?void 0:n.id)===h.last_message.sender_id,P=localStorage.getItem("direction"),F=!R&&!B&&x>0;return(0,l.jsxs)(r.Xw,{direction:"row",spacing:2,alignItems:"center",borderRadius:"10px",padding:"10px 15px 10px 10px",sx:{background:b===g?e=>(0,v.Fq)(e.palette.primary.main,.1):""},children:[(0,l.jsx)(k,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:(0,l.jsx)(m.Z,{src:"".concat("vendor"===h.receiver_type?null==T?void 0:null===(s=T.base_urls)||void 0===s?void 0:s.restaurant_image_url:"delivery_man"===h.receiver_type?null==T?void 0:null===(d=T.base_urls)||void 0===d?void 0:d.delivery_man_image_url:void(null==T||null===(a=T.base_urls)||void 0===a||a.business_logo_url),"/").concat(E),style:{width:"36px",height:"36px"}})}),(0,l.jsxs)(r.Xw,{spacing:.5,children:[(0,l.jsxs)(o.Z,{direction:"row",justifyContent:"space-between",sx:{paddingInlineEnd:"10px"},spacing:1,children:[(0,l.jsx)(Z.tp,{sx:{maxWidth:"110px",fontSize:"13px",fontWeight:"700"},children:p}),(0,l.jsx)(Z.tp,{variant:"h5",fontWeight:"500",color:I.palette.neutral[500],sx:{textAlign:"right"},children:w()(u).format("MMM Do YY").slice(0,7)})]}),(0,l.jsxs)(Z.tp,{sx:{maxWidth:"130px"},fontSize:F>0?"15px":"10px",fontWeight:F>0?"700":"400",color:F>0?I.palette.neutral[1e3]:I.palette.neutral[500],children:[(null==S?void 0:S.message)&&(null==S?void 0:S.message)," "]}),(0,l.jsx)(o.Z,{direction:"row",justifyContent:"space-between",marginRight:"rtl"===P?"1rem":"0rem"})]})]})},I=n(40077),T=n(18979);n(24292);var E=n(7078),R=n(26793),z=e=>{let{handleChannelOnClick:t}=e,n=(0,_.Z)(),{t:i}=(0,R.$)();return(0,l.jsxs)(o.Z,{direction:"row",justifyContent:"flex-start",alignItems:"center",backgroundColor:n.palette.primary.main,spacing:2,padding:"1rem",sx:{cursor:"pointer"},onClick:()=>t({receiver_type:"admin",sender_type:"customer"}),children:[(0,l.jsx)(E.Z,{}),(0,l.jsx)(d.Z,{children:i("Chat with admin")})]})},L=e=>{let{channelList:t,handleChannelOnClick:n,channelLoading:i,selectedId:a,useType:s}=e,{global:d}=(0,y.v9)(e=>e.globalSettings);if(i)return(0,l.jsx)(l.Fragment,{children:[1,2,3,4].map(()=>(0,l.jsx)(c.Z,{padding:".5rem",children:(0,l.jsxs)(o.Z,{direction:"row",spacing:3,children:[(0,l.jsx)(T.Z,{animation:"wave",variant:"circular",width:80,height:50}),(0,l.jsxs)(o.Z,{justifyContent:"space-between",direction:"column",width:"100%",children:[(0,l.jsx)(T.Z,{animation:"wave",height:15,width:"40%"}),(0,l.jsx)(T.Z,{animation:"wave",height:15,width:"80%"})]})]})}))});let p=e=>{var t,n,i,r;return"customer"===e.sender_type?(0,l.jsx)(C,{name:e.receiver_type.replaceAll("_"," "),messageTime:e.created_at,receiver:e.receiver?e.receiver.f_name:null==d?void 0:d.business_name,unRead:e.unread_message_count,userList:e,selectedId:a,currentId:e.id,last_message:null==e?void 0:e.last_message,email:null==e?void 0:null===(t=e.receiver)||void 0===t?void 0:t.email}):(0,l.jsx)(C,{name:e.sender_type.replaceAll("_"," "),messageTime:e.created_at,last_message:null==e?void 0:e.last_message,receiver:(null==e?void 0:null===(i=e.sender)||void 0===i?void 0:i.f_name.concat(" ",null==e?void 0:null===(n=e.sender)||void 0===n?void 0:n.l_name))||" ",unRead:e.unread_message_count,userList:e,selectedId:a,currentId:e.id,email:null==e?void 0:null===(r=e.sender)||void 0===r?void 0:r.email})};return(0,l.jsxs)(r.Xw,{children:[(null==t?void 0:t.length)>0&&(0,l.jsx)(I.Z,{style:{maxHeight:"60vh"},children:(0,l.jsx)(u.Z,{disablePadding:!0,children:null==t?void 0:t.map((e,t)=>(0,l.jsx)(r.DF,{disableGutters:!0,disablePadding:!0,cursor:"true",onClick:()=>n(e),children:p(e)},t))})}),0===t.length&&(0,l.jsx)(o.Z,{width:"100%",justifyContent:"center",alignItems:"center",children:(0,l.jsx)(x.ZT,{children:(0,b.t)("You have no channels.")})})]})},D=n(87109),M=n(93946),B=n(42761),P=n(85979),F=n(83287),O=n(50594);let W=e=>{let{searchValue:t,setSearchValue:n,handleSearch:i,isLoading:a,handleReset:s,searchSubmitHandler:d}=e,c=e=>{e.preventDefault(),i(e.target.value)};return(0,l.jsx)(o.Z,{padding:".4rem",children:(0,l.jsx)("form",{onSubmit:e=>d(e),children:(0,l.jsxs)(P.ol,{children:[(0,l.jsx)(P.el,{fullWidth:!0,label:(0,b.t)("Search..."),placeholder:(0,b.t)("Search..."),startAdornment:(0,l.jsx)(D.Z,{position:"start",sx:{paddingInlineStart:"10px",marginInlineEnd:"-10px"},children:(0,l.jsx)(B.Z,{fontSize:"small"})}),value:t,onChange:e=>c(e)}),""!==t&&(0,l.jsx)(l.Fragment,{children:a?(0,l.jsx)(r.B7,{right:-1,children:(0,l.jsx)(F.Z,{loading:!0,variant:"text",sx:{width:"10px"}})}):(0,l.jsx)(r.B7,{onClick:s,children:(0,l.jsx)(M.Z,{children:(0,l.jsx)(O.Z,{fontSize:"small"})})})})]})})})};W.propTypes={};var A=n(88085),U=n(20916),H=n(40044);let V=[{id:1,userType:"Seller",value:"vendor"},{id:2,userType:"Delivery Man",value:"delivery_man"},{id:3,userType:"admin",value:"admin"}];var N=e=>{let{setUserType:t,useType:n,setChannelId:i}=e;return(0,l.jsx)(A.Z,{width:"100%",sx:{paddingInlineEnd:"6px"},children:(0,l.jsx)(U.Z,{indicatorColor:"primary",value:n,onChange:(e,n)=>{t(n),i(null)},scrollButtons:!1,"aria-label":"scrollable prevent tabs example",sx:{"& .MuiButtonBase-root":{paddingInlineEnd:"10px",paddingInlineStart:"10px"},"& .MuiTabs-flexContainer":{gap:"5px"}},children:null==V?void 0:V.map(e=>(0,l.jsx)(H.Z,{value:null==e?void 0:e.value,label:(0,b.t)(e.userType)},null==e?void 0:e.id))})})},X=e=>{let{setUserType:t,handleToggleSidebar:n,selectedId:r,handleReset:s,searchSubmitHandler:c,channelLoading:u,isLoading:p,channelList:h,handleChannelOnClick:v,searchValue:m,setSearchValue:x,handleSearch:g,useType:f,setChannelId:j,channelData:y,isFetched:_}=e,[Z,S]=(0,i.useState)([]);return(0,a.Z)(e=>e.breakpoints.up("md")),(0,l.jsxs)(o.Z,{spacing:1,padding:".5rem",children:[(0,l.jsx)(d.Z,{sx:{paddingInline:"1rem",paddingBlockStart:".5rem"},fontSize:"18px",fontWeight:"700",children:(0,b.t)("Messages")}),(0,l.jsx)(W,{searchValue:m,setSearchValue:x,handleSearch:g,isLoading:p,handleReset:s,searchSubmitHandler:c}),(0,l.jsx)(N,{setUserType:t,useType:f,setChannelId:j}),_?0===h.length&&"admin"===f?(0,l.jsx)(z,{handleChannelOnClick:v}):void 0:(0,l.jsx)(T.Z,{variant:"rectangle",width:"100%",height:"50px"}),(0,l.jsx)(L,{useType:f,channelList:h,handleChannelOnClick:v,channelLoading:u,selectedId:r})]})},G=e=>{let{useType:t,setUserType:n,chatFrom:i,open:r,isLoading:o,selectedId:d,handleReset:c,handleToggleSidebar:u,setChannelId:p,channelLoading:h,channelList:v,handleChannelOnClick:m,searchSubmitHandler:x,setSearchValue:g,searchValue:f,handleSearch:j,channelData:y,isFetched:_}=e;return(0,a.Z)(e=>e.breakpoints.up("md"))?(0,l.jsx)(s.zr,{variant:"persistent",anchor:"left",open:"true",children:(0,l.jsx)(X,{handleToggleSidebar:u,channelList:v,handleChannelOnClick:m,setSearchValue:g,searchValue:f,handleSearch:j,isLoading:o,handleReset:c,searchSubmitHandler:x,channelLoading:h,selectedId:d,setUserType:n,useType:t,setChannelId:p,channelData:y,isFetched:_})}):(0,l.jsxs)(s.lt,{anchor:"left",variant:"temporary",open:"true"===i?!r:r,children:[" ",(0,l.jsx)(X,{handleToggleSidebar:u,channelList:v,handleChannelOnClick:m,setSearchValue:g,searchValue:f,handleSearch:j,isLoading:o,handleReset:c,searchSubmitHandler:x,selectedId:d,setUserType:n,useType:t,setChannelId:p,channelData:y,isFetched:_})]})},Q=n(66242);let Y=(0,p.ZP)(c.Z)(e=>{let{theme:t,authorType:n,userType:l,languageDirection:i}=e;return{display:"flex",flexDirection:n===l?"row-reverse":"row",maxWidth:500,marginLeft:n===l?"rtl"===i?0:"auto":0,marginBottom:"1rem",marginRight:n===l&&"rtl"===i?"auto":0}}),q=(0,p.ZP)(m.Z)(e=>{let{theme:t,authorType:n,userType:l}=e;return{height:48,marginInlineStart:n===l?"1rem":0,marginInlineEnd:n===l?0:"1rem",width:48,marginBlockStart:"10px"}}),K=(0,p.ZP)(c.Z)(e=>{let{theme:t}=e;return{flexGrow:1,maxWidth:500}}),$=(0,p.ZP)(Q.Z)(e=>{let{theme:t,authorType:n,userType:l}=e;return{backgroundColor:n===l?t.palette.primary.main:"dark"===t.palette.mode?t.palette.cardBackground1:t.palette.neutral[200],color:n===l?t.palette.neutral[100]:t.palette.neutral[1e3],paddingInlineEnd:"1rem",paddingInlineStart:"1rem",paddingBlockStart:"1.2rem",paddingBlockEnd:"1.2rem",borderRadius:n===l?"16px 16px 0px 16px":"16px 16px 16px 0px",[t.breakpoints.down("sm")]:{paddingInlineEnd:".8rem",paddingInlineStart:".8rem",paddingBlockStart:".8rem",paddingBlockEnd:".8rem"}}}),J=(0,p.ZP)(c.Z)(e=>{let{theme:t,authorType:n,userType:l}=e;return{display:"flex",justifyContent:n===l?"flex-end":"flex-start",marginTop:1,paddingTop:2}});var ee=n(27036);n(82345);var et=n(59605),en=n(18377);let el=e=>{var t,n,i,r,a,s,c,u,p,h,v,m,x,f;let j,b,Z;let S=(0,_.Z)(),{body:w,createdAt:k,messgageData:C,authorAvatar:I,conversationData:T,image:E,handleImageOnClick:R}=e,{global:z}=(0,y.v9)(e=>e.globalSettings),L=localStorage.getItem("direction"),D=null==z?void 0:null===(t=z.base_urls)||void 0===t?void 0:t.customer_image_url,M=C.sender_id,B=null==z?void 0:null===(n=z.base_urls)||void 0===n?void 0:n.chat_image_url;return(null==T?void 0:null===(i=T.conversation)||void 0===i?void 0:i.sender_type)==="customer"?(j=null==T?void 0:T.conversation.sender_id,b=null==T?void 0:null===(a=T.conversation)||void 0===a?void 0:null===(r=a.receiver)||void 0===r?void 0:r.image,Z=null==T?void 0:null===(c=T.conversation)||void 0===c?void 0:null===(s=c.sender)||void 0===s?void 0:s.image):j=null==T?void 0:null===(p=T.conversation)||void 0===p?void 0:null===(u=p.receiver)||void 0===u?void 0:u.id,(0,l.jsxs)(Y,{authorType:M,userType:j,languageDirection:L,children:[(0,l.jsx)(q,{src:"".concat(M===j?D:(null==T?void 0:null===(h=T.conversation)||void 0===h?void 0:h.receiver_type)==="vendor"?null==z?void 0:null===(x=z.base_urls)||void 0===x?void 0:x.restaurant_image_url:(null==T?void 0:null===(v=T.conversation)||void 0===v?void 0:v.receiver_type)==="delivery_man"?null==z?void 0:null===(f=z.base_urls)||void 0===f?void 0:f.delivery_man_image_url:void(null==z||null===(m=z.base_urls)||void 0===m||m.business_logo_url),"/").concat(M===j?Z:b),authorType:M,userType:j}),(0,l.jsxs)(K,{children:[(0,l.jsx)(o.Z,{direction:"row",spacing:3,justifyContent:M===j?"flex-end":"flex-start",children:null==E?void 0:E.map(e=>(0,l.jsx)(en.Z,{sx:{cursor:"pointer"},onClick:()=>R("".concat(B,"/").concat(e)),children:(0,l.jsx)(et.Z,{src:"".concat(B,"/").concat(e),width:"100px",height:"90px",objectFit:"contained"})}))}),w&&(0,l.jsx)($,{authorType:M,userType:j,children:(0,l.jsx)(d.Z,{color:M===j?S.palette.whiteContainer.main:S.palette.neutral[1e3],align:M===j?"right":"left",fontSize:"13px",children:w})}),(0,l.jsxs)(J,{children:[M===j?(0,l.jsx)(ee.Z,{fontSize:"14px",style:{color:0===C.is_seen?S.palette.primary.main:"green"}}):"",(0,l.jsx)(d.Z,{color:"textSecondary",noWrap:!0,variant:"caption",children:(0,g.gM)(k)})]})]})]})};el.propTypes={};var ei=n(94080),er=n(95185);let ea=e=>{let{conversationData:t,scrollBottom:n}=e,[r,a]=(0,i.useState)([]),[s,o]=(0,i.useState)(!1),[d,u]=(0,i.useState)(),[p,h]=(0,i.useState)(!1),[v,m]=(0,i.useState)(null);(0,i.useRef)(null),(0,i.useEffect)(()=>{let e=[];t.length>0&&(t.forEach(t=>{var n;u(t),null==t||null===(n=t.messages)||void 0===n||n.forEach(t=>e.push(t))}),a(e),o(!0))},[t]),(0,i.useEffect)(()=>{v&&h(!0)},[v]);let x=e=>{m(e)},g=e=>{h(e),m(null)};return(0,l.jsx)(c.Z,{sx:{p:2},children:(0,l.jsxs)(l.Fragment,{children:[null==r?void 0:r.map((e,t)=>(0,l.jsx)(el,{body:null==e?void 0:e.message,messgageData:e&&e,createdAt:null==e?void 0:e.updated_at,conversationData:d,image:JSON.parse(null==e?void 0:e.file),handleImageOnClick:x},t)).reverse(),(0,l.jsx)(ei.Z,{openModal:p,setModalOpen:g,children:(0,l.jsx)(er.Z,{modalImage:v,handleModalClose:g})}),n&&(0,l.jsx)(eS,{})]})})};ea.propTypes={};var es=n(50135),eo=n(21023),ed=n(77854),ec=n(63358),eu=n(50644),ep=n(11775),eh=n(63048),ev=n(74931),em=n(90629),ex=e=>{let{body:t,removeImage:n}=e;(0,_.Z)();let[r,a]=(0,i.useState)();return(0,i.useEffect)(()=>{a(t.file)},[t.file]),(0,l.jsx)(em.Z,{sx:{position:"absolute",bottom:78,padding:"5px",display:"flex",flexDirection:"row",gap:"20px",flexWrap:"wrap"},children:null==r?void 0:r.map(e=>(0,l.jsxs)(o.Z,{sx:{position:"relative",width:"auto"},direction:"row",children:[(0,l.jsx)(et.Z,{objectFit:"contain",src:URL.createObjectURL(e),height:"70px",width:"90px",borderRadius:".5rem",smWidth:"50px",smHeight:"60px"}),(0,l.jsx)(M.Z,{sx:{position:"absolute",right:-0,bottom:0,background:e=>e.palette.error.main,padding:"0px",borderRadius:"0px","&:hover":{backgroundColor:e=>e.palette.error.dark}},onClick:()=>n(e.name),children:(0,l.jsx)(O.Z,{sx:{color:e=>e.palette.neutral[100]},fontSize:"small"})})]}))})};let eg=(0,p.ZP)(es.Z)(e=>{let{theme:t}=e;return{"& label.Mui-focused":{color:e=>e.palette.neutral[300],background:e=>e.palette.neutral[100]},"& .MuiOutlinedInput-notchedOutline":{border:"none"},"& .MuiOutlinedInput-root":{border:"1px solid ".concat(t.palette.neutral[300]),fontSize:"14px",borderRadius:"24px",[t.breakpoints.down("sm")]:{fontSize:"10px"}}}});var ef=e=>{let{onSend:t}=e,[n,r]=(0,i.useState)(!1),[s,o]=(0,i.useState)(null),d=(0,a.Z)(e=>e.breakpoints.down("md")),[u,p]=(0,i.useState)({text:"",file:[]}),h=localStorage.getItem("direction"),v=(0,i.useRef)(null),m=()=>{u||ev.Am.error((0,b.t)("write something")),u.file.length>3?ev.Am.error((0,b.t)("Maximum 3 images can be send at a time.")):(null==t||t(u),p({text:"",file:[]}))},x=()=>{v.current.click()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex",flexShrink:0,p:1.5,position:"relative",boxShadow:"0px 0px 1px rgba(0, 0, 0, 0.25)",margin:"10px"},children:[(0,l.jsx)(c.Z,{sx:{position:"absolute",bottom:"80%"},children:n&&(0,l.jsx)(eh.ZP,{pickerStyle:{width:"100%"},onEmojiClick:(e,t)=>{p({...u,text:u.text+(null==e?void 0:e.emoji)}),r(!1)}})}),(0,l.jsxs)(A.Z,{direction:"row",sx:{paddingInlineEnd:".7rem"},children:[(0,l.jsx)(eo.Z,{title:(0,b.t)("Image"),children:(0,l.jsx)(M.Z,{onClick:x,children:(0,l.jsx)(eu.Z,{fontSize:"medium",color:"primary"})})}),(0,l.jsx)(eo.Z,{title:"Gif",children:(0,l.jsx)(M.Z,{onClick:x,children:(0,l.jsx)(ed.Z,{fontSize:"medium",color:"primary"})})})]}),(0,l.jsx)(eg,{fullWidth:!0,onChange:e=>{p({...u,text:e.target.value})},onKeyUp:e=>{"Enter"!==e.code||e.shiftKey||m()},placeholder:(0,b.t)("Start a new message"),value:u.text,size:"small",multiline:!0,InputProps:{endAdornment:(0,l.jsx)(D.Z,{position:"start",children:!d&&(0,l.jsx)(ec.Z,{color:"primary",sx:{cursor:"pointer"},onClick:()=>r(e=>!e)})})}}),(0,l.jsx)(c.Z,{sx:{alignItems:"center",display:"flex",m:-2,marginInlineStart:"rtl"!==h&&2,marginInlineEnd:"rtl"===h&&"1rem"},children:(0,l.jsx)(eo.Z,{title:"Send",children:(0,l.jsx)(M.Z,{disabled:""===u.text&&0===u.file.length,onClick:m,sx:{transform:"rtl"===h&&"rotate(180deg)"},children:(0,l.jsx)(ep.Z,{fontSize:"medium",color:"primary"})})})}),(0,l.jsx)("input",{hidden:!0,ref:v,type:"file",multiple:!0,onChange:e=>{var t;(null==u?void 0:null===(t=u.file)||void 0===t?void 0:t.length)<=4?p({...u,file:[...u.file,...e.target.files]}):ev.Am.error((0,b.t)("maximum image upload limit 5"))}}),u.file.length>0&&(0,l.jsx)(ex,{body:u,removeImage:e=>{let t=u.file.filter(t=>t.name!==e);p({text:u.text,file:t})}})]})})},ej=n(41120),ey=n(9945),e_=()=>(0,l.jsxs)(r.Xw,{height:"71vh",justifyContent:"space-between",children:[(0,l.jsx)(ey.Z,{}),(0,l.jsx)(ef,{})]});let eb=(0,ej.Z)(e=>({root:{"&::-webkit-scrollbar":{width:5},"&::-webkit-scrollbar-track":{boxShadow:"inset 0 0 6px rgba(0, 0, 0, 0.3)"},"&::-webkit-scrollbar-thumb":{backgroundColor:"darkgrey",outline:"1px solid slategrey",borderRadius:"10px"}}})),eZ=(0,p.ZP)(c.Z)(e=>{let{theme:t}=e;return{display:"flex",flexDirection:"column",flexGrow:1,minHeight:"60vh",height:"100%",justifyContent:"space-between"}}),eS=()=>{let e=(0,i.useRef)();return(0,i.useEffect)(()=>e.current.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})),(0,l.jsx)("div",{ref:e})};var ew=e=>{let{conversationData:t,handleChatMessageSend:n,messageIsLoading:i,handleScroll:r,scrollBottom:a,isSuccess:s}=e,o=eb();return(0,l.jsxs)(eZ,{children:[(0,l.jsxs)(c.Z,{sx:{overflowY:"scroll",height:"60vh",maxHeight:"60vh"},onScroll:r,className:o.root,children:[t&&(0,l.jsx)(ea,{conversationData:t,scrollBottom:a}),i&&(0,l.jsx)(e_,{})]}),(0,l.jsx)(ef,{onSend:n})]})},ek=n(81911);let eC=(0,p.ZP)(c.Z)(e=>{let{theme:t}=e;return{alignItems:"center",display:"flex",flexGrow:1,flexDirection:"column",justifyContent:"center",overflow:"hidden",height:"60vh"}}),eI=(0,p.ZP)(m.Z)(e=>{let{theme:t}=e;return{backgroundColor:t.palette.primary.main,color:t.palette.primary.contrastText,height:56,width:56}}),eT=e=>{let{t}=(0,R.$)();return(0,l.jsxs)(eC,{children:[(0,l.jsx)(eI,{children:(0,l.jsx)(ek.Z,{fontSize:"small"})}),(0,l.jsx)(d.Z,{color:"textSecondary",sx:{mt:2},variant:"subtitle1",children:t("Select And Start meaningful conversations!")})]})};eT.propTypes={};var eE=n(75904),eR=n(22400);let ez=async e=>{let{data:t}=await eE.Z.get("/api/v1/customer/message/list?type=".concat(e));return t},eL=(e,t)=>(0,f.useQuery)("get_channel_list",()=>ez(e),{enabled:!1,onSuccess:t,onError:eR.R}),eD=async(e,t)=>{let{channelId:n,apiFor:l,page_limit:i,offset:r}=e,{data:a}=await eE.Z.get("/api/v1/customer/message/details?".concat(l,"=").concat("admin"===n?0:n,"?&offset=").concat(t,"&limit=").concat(i));return a},eM=e=>(0,f.useInfiniteQuery)("get_conversation",t=>{let{pageParam:n=e.offset}=t;return eD(e,n)},{getNextPageParam:(e,t)=>{let n=t.length+1;return e.messages.length>0?n:void 0},enabled:!1,onError:eR.R}),eB=async e=>{let{id:t,text:n,receiver_type:l,receiverId:i,file:r}=e,a=new FormData;a.append(i?"receiver_id":"conversation_id","admin"===t?0:t),""===n?r.forEach(e=>{a.append("image[]",e)}):(a.append("message",n),r.forEach(e=>{a.append("image[]",e)})),a.append("receiver_type",l);let{data:s}=await eE.Z.post("/api/v1/customer/message/send",a,{headers:{"Content-Type":"multipart/form-data"}});return s},eP=()=>(0,f.useMutation)("store_message",eB);var eF=n(11163);let eO=async e=>{let{data:t}=await eE.Z.get("/api/v1/customer/message/search-list?name=".concat(e,"&limit=20& offset=1"));return t},eW=(e,t)=>(0,f.useQuery)("get_search_list",()=>eO(e),{enabled:!1,onSuccess:t});var eA=n(94669),eU=n(93619);let eH=e=>{var t,n,i,r,a,c;let{receiver:u,mdUp:p,handleToggleSidebar:h,ChatImageUrl:v,userImage:x,theme:g}=e,f=localStorage.getItem("direction");return(0,l.jsxs)(s.hE,{direction:"row",mdUp:p,children:[!p&&("rtl"===f?(0,l.jsx)(M.Z,{onClick:h,children:(0,l.jsx)(eU.Z,{fontSize:"small"})}):(0,l.jsx)(M.Z,{onClick:h,children:(0,l.jsx)(eA.Z,{fontSize:"small"})})),(0,l.jsxs)(o.Z,{direction:"row",spacing:1,justifyContent:"flex-start",alignItems:"center",children:[(0,l.jsx)(M.Z,{children:(0,l.jsx)(m.Z,{fontSize:"small",src:"".concat(v(),"/").concat(x),sx:{width:35,height:35}})}),(0,l.jsxs)(o.Z,{justifyContent:"flex-start",children:[(0,l.jsx)(d.Z,{align:"left",color:g.palette.neutral[1e3],fontSize:"16px",children:"customer"===u.sender_type?(0,b.t)((null==u?void 0:null===(n=u.receiver)||void 0===n?void 0:n.f_name.concat(" ",null==u?void 0:null===(t=u.receiver)||void 0===t?void 0:t.l_name))||" "):(0,b.t)((null==u?void 0:null===(r=u.sender)||void 0===r?void 0:r.f_name.concat(" ",null==u?void 0:null===(i=u.sender)||void 0===i?void 0:i.l_name))||" ")}),(0,l.jsx)(d.Z,{variant:"h6",color:g.palette.neutral[1e3],textTransform:"capitalize",align:"left",children:(null==u?void 0:u.sender_type)==="customer"?(0,b.t)(null==u?void 0:null===(a=u.receiver_type)||void 0===a?void 0:a.replaceAll("_"," ")):(0,b.t)(null==u?void 0:null===(c=u.sender_type)||void 0===c?void 0:c.replaceAll("_"," "))})]})]})]})};eH.propTypes={};var eV=n(82628),eN=n(46089),eX=e=>{var t;let{page:n}=e,s=(0,_.Z)(),[d,c]=(0,i.useState)(""),[u,p]=(0,i.useState)(10),[h,v]=(0,i.useState)(1),[m,x]=(0,i.useState)(!0),[g,f]=(0,i.useState)(null),[j,b]=(0,i.useState)([]),[Z,S]=(0,i.useState)([]),[w,k]=(0,i.useState)("conversation_id"),[C,I]=(0,i.useState)(),[T,E]=(0,i.useState)(),[R,z]=(0,i.useState)(),[L,D]=(0,i.useState)(""),[M,B]=(0,i.useState)(),[P,F]=(0,i.useState)(),O=(0,a.Z)(e=>e.breakpoints.up("md")),W=(0,a.Z)(e=>e.breakpoints.down("md")),A=(0,a.Z)(e=>e.breakpoints.down("sm")),{type:U,id:H,routeName:V,conversationId:N,chatFrom:X,restaurantName:Q,logo:Y}=(0,eF.useRouter)().query,{global:q}=(0,y.v9)(e=>e.globalSettings),[K,$]=(0,i.useState)(!0),J=()=>{x(e=>!e)};(0,i.useEffect)(()=>{U?c(U):c("vendor")},[]);let{refetch:ee,isRefetching:et,isLoading:en,data:el,isFetched:ei}=eL(d,e=>{b(e.conversations)}),{data:er,isSuccess:ea,hasNextPage:es,fetchNextPage:eo,isFetchingNextPage:ed,refetch:ec,isRefetching:eu,hasPreviousPage:ep,isLoading:eh}=eM({channelId:g,apiFor:w,page_limit:u,offset:h});(0,i.useEffect)(()=>{U&&I(U),N&&(f(N),$(!0),B((0!==j.length&&j.filter(e=>e.id==N))[0])),"admin"===U?z(N):z(null)},[N,j,U]),(0,i.useEffect)(()=>{H&&V&&U&&(B((0!==j.length&&j.filter(e=>{var t,n;return"vendor"===U?(null==e?void 0:null===(t=e.receiver)||void 0===t?void 0:t.vendor_id)==H:"delivery_man"===U?(null==e?void 0:null===(n=e.sender)||void 0===n?void 0:n.deliveryman_id)==H:void 0}))[0]),Q&&(B({...M,id:H,sender_type:"customer",receiver_type:"vendor",receiver:{f_name:Q,l_name:""}}),F(Y)),d||f(H),z(H),I(U),k(V))},[H,U,V,X,j,Q]),(0,i.useEffect)(()=>{g&&ec()},[g]),(0,i.useEffect)(()=>{S([er])},[er]);let ev=async e=>{var t,n;z(null),await ee(),"admin"===e.receiver_type?(k("admin_id"),f("admin"),$(!0),I(e.receiver_type),E(q.business_name),F(null==e?void 0:null===(t=e.receiver)||void 0===t?void 0:t.image)):(k("conversation_id"),f(e.id),$(!0),I(e.receiver_type),E(e.receiver.f_name),F(null==e?void 0:null===(n=e.receiver)||void 0===n?void 0:n.image)),B(e),W&&x(e=>!e)};(0,i.useEffect)(()=>{d&&ee()},[d]);let{mutate:em,isLoading:ex}=eP(),{isLoading:eg,isRefetching:ef,refetch:ej}=eW(L,e=>{e&&b(e.conversations)});return(0,l.jsxs)(eV.Z,{refetch:ec,pathName:"info",children:[(0,l.jsx)(eN.Z,{title:" My Inbox-".concat(null==q?void 0:q.business_name),description:"",keywords:""}),(0,l.jsx)(r.iD,{padding:A?"1rem":"30px 40px",sx:{minHeight:A?"450px":"558px"},nopadding:"true",children:(0,l.jsxs)(r.Xw,{direction:"row",children:[(0,l.jsx)(o.Z,{children:(0,l.jsx)(G,{onClose:()=>{x(!1)},handleToggleSidebar:J,open:m,handleChannelOnClick:ev,channelList:j,searchValue:L,setSearchValue:D,handleSearch:e=>{D(e)},isLoading:eg,handleReset:()=>{D(""),ee().then()},searchSubmitHandler:e=>{if(e.preventDefault(),L)try{ej().then()}catch(e){}},channelLoading:en,selectedId:null==M?void 0:M.id,chatFrom:X,setIsSidebarOpen:x,setUserType:c,useType:d,setChannelId:f,channelData:el,isFetched:ei})}),(0,l.jsxs)(r.Xw,{children:[M&&g&&(0,l.jsx)(eH,{receiver:M,mdUp:O,handleToggleSidebar:J,ChatImageUrl:()=>{var e,t,n;return(null==M?void 0:M.receiver_type)==="vendor"?null==q?void 0:null===(t=q.base_urls)||void 0===t?void 0:t.restaurant_image_url:(null==M?void 0:M.receiver_type)==="delivery_man"?null==q?void 0:null===(n=q.base_urls)||void 0===n?void 0:n.delivery_man_image_url:void(null==q||null===(e=q.base_urls)||void 0===e||e.business_logo_url)},userImage:P,theme:s}),g&&Z.length>0&&!ed&&(0,l.jsx)(ew,{conversationData:null==Z?void 0:null===(t=Z[0])||void 0===t?void 0:t.pages,handleChatMessageSend:e=>{em({receiver_type:C,id:g,receiverId:R,...e},{onSuccess:async e=>{await ec(),ee()},onError:eR.R})},channelList:j,handleScroll:e=>{0===e.currentTarget.scrollTop&&es&&(eo().then(),e.currentTarget.scrollTop=300,$(!1))},scrollBottom:K,messageIsLoading:eh}),ed&&(0,l.jsx)(e_,{}),!g&&(0,l.jsx)(eT,{})]})]})})]})}}}]);